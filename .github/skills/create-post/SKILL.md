---
name: create-post-from-draft-skill
description: Skill to create a published Hugo post from a draft and capture the process for future use.
author: Jeff Mayeur
---

# Create Post from Draft Skill

Use this workflow when you want to turn a draft into a published Hugo post without modifying the draft source content.

## Goal

Move or copy draft content into `content/posts/YYYY-MM/post-name.md` with a proper front matter header, preserve the original draft if desired, and ensure internal references are resilient.

## Assumptions

- Repo uses Hugo with `content/posts/` organized by month folders.
- Drafts are stored in `__drafts/`.
- Published posts use TOML front matter for metadata.
- Internal links should use relative Markdown links when pointing to other posts.

## Steps

1. Review the draft content.

2. Select a target path under `content/posts/YYYY-MM/`.

3. Create the new post file with a front matter block. Minimum fields:

   - `author`
   - `title`
   - `description`
   - `keywords`
   - `tags`
   - `categories`
   - `date`
   - `draft = false`

4. Copy the draft body content into the new file without changing the meaning.

5. Replace plain URLs with Markdown link syntax:

   - External URL: `[label](https://example.com)`
   - Internal post URL: `[/path/to/post](../relative/path)`

6. Convert any fully qualified site URL to a relative link if it references another post in the same site.

7. Save the new file and confirm it renders as expected.

8. Optionally keep the original draft intact and use it as the source of truth for future edits.

## Example

If the draft is `__drafts/documentarian.md` and the post belongs in May 2026, create:

- `content/posts/05-2026/documentarian.md`

Use relative linking for internal references such as `../aiq-scale/?query=spurge`.

## Safety Rules

- Do not edit the original draft unless explicitly requested.
- Maintain the draft content as-is, except for link formatting.
- Verify the post metadata is correct before publishing.
