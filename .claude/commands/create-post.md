Turn the draft at `$ARGUMENTS` into a published Hugo post. Do not modify the original draft.

## Steps

1. Read the draft file.

2. Determine the target path: `content/posts/MM-YYYY/slug.md` where MM-YYYY matches today's date and the slug is derived from the draft filename.

3. Create the post file with a TOML front matter block (`+++` delimiters). Required fields:

```toml
+++
author = 'Jeff Mayeur'
title = ""
description = ""
keywords = ['tag1', 'tag2']
tags = ['tag1', 'tag2']
categories = ['learning']   # or 'technical'
date = YYYY-MM-DDT07:00:00-07:00
draft = false
+++
```

4. Copy the draft body into the post without changing meaning or voice.

5. Fix up links:
   - Convert bare URLs to `[label](url)` markdown links
   - Convert any fully-qualified `iguessthatworks.com` URLs to relative links

6. If the draft references images, place them under `static/images/<slug>/` and reference as `/images/<slug>/filename`. Use the `figure` shortcode for centered images with attribution:
   ```
   {{</* figure src="/images/slug/file.jpg" alt="..." caption="..." class="center" */>}}
   ```

7. Confirm the file was created and report the path.

## Rules

- Do not edit the original draft.
- Do not invent content — copy the draft body faithfully.
- Propose title/description/keywords based on the draft content; ask if uncertain.
