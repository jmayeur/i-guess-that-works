# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Site Overview

This is a Hugo static blog hosted on Azure Static Web Apps at `iguessthatworks.com`. The theme is `hugo-clarity`. Deployment is automatic on push to `main` via GitHub Actions (`.github/workflows/azure-static-web-apps-witty-bush-068f9d01e.yml`), which builds with Hugo Extended v0.161.0 and deploys the `public/` directory.

## Key Commands

```bash
hugo server          # local dev server with live reload
hugo --minify        # production build into public/
hugo new posts/MM-YYYY/post-name.md   # scaffold a new post (uses archetypes/post.md)
```

## Content Workflow

### Drafts → Published Posts

Drafts live in `__drafts/`. To publish, create a new file at `content/posts/YYYY-MM/post-name.md` — do **not** modify the source draft.

Front matter uses TOML (`+++` delimiters). Required fields:

```toml
+++
author = 'Jeff Mayeur'
title = ""
description = ""
keywords = ['tag1', 'tag2']
tags = ['tag1', 'tag2']
categories = ['technical']   # or 'learning', etc.
date = 2026-06-12T07:00:00-07:00
draft = false
+++
```

See `archetypes/post.md` for the full optional field set (featureImage, thumbnail, toc, etc.).

### Links

- External URLs: `[label](https://example.com)`
- Internal post links: relative markdown links, e.g. `[../other-post/](../other-post/)`
- Convert any fully-qualified `iguessthatworks.com` URLs to relative links

### Images

Images live under `static/images/<post-name>/`. Reference them as `/images/<post-name>/filename.jpg`. For a centered image with attribution:

```markdown
{{< figure src="/images/post-name/image.jpg" alt="description" caption="[Attribution text](attribution-url)" class="center" >}}
```

## Publish Skill

Full workflow is documented in `.github/skills/publish/SKILL.md`. Summary:

1. `hugo --minify` — confirm clean build
2. `git add` specific files, commit, `git push origin main`
3. Verify GitHub Actions run succeeds
4. `git tag -a <tag_name> -m "<message>"` then `git push origin <tag_name>`

Tag naming convention: `publish-YYYY-MM-DD-short-slug`

## Create-Post Skill

Full workflow in `.github/skills/create-post/SKILL.md`. The skill automates drafts → published post including front matter generation, link formatting, and image placement.
