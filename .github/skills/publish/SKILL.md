---
name: publish-post-skill
description: Skill to drive the publish process for a new post, including git commit, push, and tagging.
author: Jeff Mayeur
---

# Publish Skill

Use this workflow when you want to finish a content change and ship it safely.

## Goal

Push current changes to `main`, confirm site publish, then create and push a git tag.

## Assumptions

- Repo: `jmayeur/i-guess-that-works`
- Branch: `main`
- Deploy is handled by GitHub Actions on push to `main`
- Workflow file: `.github/workflows/azure-static-web-apps-witty-bush-068f9d01e.yml`

## Inputs

- `commit_message`: short summary of what changed
- `tag_name`: release tag to create (example: `publish-2026-05-01-day-4-whats-next`)
- `tag_message`: short annotated tag message

## Steps

1. Preflight checks

```bash
git status --short
git branch --show-current
hugo --minify
```

Expected:
- Working tree shows only intended files.
- Current branch is `main`.
- Hugo build succeeds.

2. Stage and commit

```bash
git add -A
git commit -m "<commit_message>"
```

If there is nothing to commit, continue.

3. Push to origin

```bash
git push origin main
```

4. Verify publish pipeline

- Open GitHub Actions for this repo.
- Confirm latest run of `Azure Static Web Apps CI/CD` succeeds for `main`.
- Optional manual check: open the site and confirm the new post renders correctly.

5. Create annotated tag

```bash
git tag -a <tag_name> -m "<tag_message>"
```

6. Push tag

```bash
git push origin <tag_name>
```

7. Post-publish confirmation

- `git log --oneline -n 1` shows the expected commit.
- `git tag --list | rg <tag_name>` shows the new tag.
- Site content and image updates are visible.

## Safety Rules

- Do not run destructive git commands.
- Do not tag until push and publish checks pass.
- If publish fails, fix forward with a new commit and push.

## Example Invocation Prompt

"Run the Publish Skill using commit message '<commit_message>', tag '<tag_name>', and tag message '<tag_message>'. Show each command before running it and summarize results after each phase."