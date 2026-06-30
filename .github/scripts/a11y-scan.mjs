#!/usr/bin/env node
/**
 * a11y-scan.mjs — CLI WCAG 2.1 AA accessibility scan for Hugo posts.
 *
 * Usage:
 *   node .github/scripts/a11y-scan.mjs /posts/06-2026/my-post/   # scan specific page(s)
 *   node .github/scripts/a11y-scan.mjs                            # auto: scan staged posts
 *
 * Exit 0 = all checks passed.
 * Exit 1 = violations found or scan error.
 *
 * Install deps once: cd .github/scripts && npm install
 */

import puppeteer from 'puppeteer';
import { execSync, spawn } from 'child_process';
import { createConnection } from 'net';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = resolve(__dirname, '../..');
const AXE_PATH = join(__dirname, 'node_modules', 'axe-core', 'axe.min.js');
const PORT = 1313;
const BASE_URL = `http://localhost:${PORT}`;

function isPortOpen(port) {
  return new Promise(res => {
    const sock = createConnection({ port, host: '127.0.0.1' });
    sock.setTimeout(500);
    sock.on('connect', () => { sock.destroy(); res(true); });
    sock.on('error', () => { sock.destroy(); res(false); });
    sock.on('timeout', () => { sock.destroy(); res(false); });
  });
}

async function waitForServer(port, timeout = 20000) {
  const deadline = Date.now() + timeout;
  while (Date.now() < deadline) {
    if (await isPortOpen(port)) return true;
    await new Promise(r => setTimeout(r, 500));
  }
  return false;
}

function getStagedPosts() {
  try {
    const out = execSync('git diff --cached --name-only', { encoding: 'utf8', cwd: PROJECT_ROOT });
    return out.split('\n')
      .filter(f => f.startsWith('content/posts/') && f.endsWith('.md'))
      .map(f => '/' + f.slice('content/'.length).replace(/\.md$/, '/'));
  } catch {
    return [];
  }
}

async function scanPage(browser, urlPath) {
  const url = `${BASE_URL}${urlPath}`;
  const page = await browser.newPage();
  try {
    const resp = await page.goto(url, { waitUntil: 'networkidle2', timeout: 20000 });
    if (!resp || !resp.ok()) {
      throw new Error(`HTTP ${resp ? resp.status() : 'no response'} for ${url}`);
    }
    const axeContent = readFileSync(AXE_PATH, 'utf8');
    await page.addScriptTag({ content: axeContent });
    const violations = await page.evaluate(() =>
      window.axe.run(document, {
        runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa']
      }).then(r => r.violations)
    );
    return violations;
  } finally {
    await page.close();
  }
}

async function main() {
  const args = process.argv.slice(2);
  let paths;

  if (args.length > 0) {
    paths = args;
  } else {
    paths = getStagedPosts();
    if (paths.length === 0) {
      console.log('a11y: no staged post files — skipping.');
      process.exit(0);
    }
    console.log(`a11y: scanning ${paths.length} staged post(s):`);
    paths.forEach(p => console.log(`  ${p}`));
  }

  let hugoProcess = null;
  const alreadyRunning = await isPortOpen(PORT);

  if (!alreadyRunning) {
    process.stdout.write('a11y: starting Hugo dev server... ');
    hugoProcess = spawn('hugo', ['server', '--port', String(PORT), '--disableFastRender'], {
      cwd: PROJECT_ROOT,
      stdio: ['ignore', 'ignore', 'ignore'],
    });
    hugoProcess.on('error', err => {
      process.stderr.write(`\na11y: failed to start Hugo: ${err.message}\n`);
      process.exit(1);
    });
    const ready = await waitForServer(PORT, 20000);
    if (!ready) {
      process.stderr.write('\na11y: Hugo did not become ready within 20s.\n');
      hugoProcess.kill();
      process.exit(1);
    }
    process.stdout.write('ready.\n');
  }

  let totalViolations = 0;
  let browser;

  try {
    browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    for (const urlPath of paths) {
      process.stdout.write(`a11y: ${urlPath} ... `);
      try {
        const violations = await scanPage(browser, urlPath);
        if (violations.length === 0) {
          process.stdout.write('pass\n');
        } else {
          process.stdout.write(`FAIL (${violations.length} violation(s))\n`);
          for (const v of violations) {
            process.stderr.write(`  [${v.impact.toUpperCase()}] ${v.id}: ${v.description}\n`);
            v.nodes.slice(0, 2).forEach(n => {
              const html = n.html.replace(/\s+/g, ' ').substring(0, 150).trim();
              const fix = n.failureSummary.split('\n')[0];
              process.stderr.write(`    Element: ${html}\n`);
              process.stderr.write(`    Fix: ${fix}\n`);
            });
          }
          totalViolations += violations.length;
        }
      } catch (err) {
        process.stdout.write('ERROR\n');
        process.stderr.write(`  ${err.message}\n`);
        totalViolations++;
      }
    }
  } finally {
    if (browser) await browser.close();
    if (hugoProcess) hugoProcess.kill('SIGTERM');
  }

  if (totalViolations > 0) {
    process.stderr.write(`\na11y: ${totalViolations} violation(s) found — fix before proceeding.\n`);
    process.exit(1);
  }

  process.stdout.write('\na11y: all checks passed.\n');
  process.exit(0);
}

main().catch(err => {
  process.stderr.write(`a11y: fatal: ${err.message}\n`);
  process.exit(1);
});
