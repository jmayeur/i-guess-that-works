Publish current changes to the site. Use `$ARGUMENTS` as the commit message if provided, otherwise derive one from `git status`.

## Steps

1. Preflight

```bash
git status --short
git branch --show-current
hugo --minify
```

Expected: branch is `main`, hugo build succeeds with no errors.

2. Stage and commit — add only intentional files by name, not `git add -A`:

```bash
git add <files>
git commit -m "<commit_message>\n\nCo-Authored-By: Claude Haiku 4.5 <noreply@anthropic.com>"
```

3. Push to origin:

```bash
git push origin main
```

4. Create and push an annotated tag. Tag naming convention: `publish-YYYY-MM-DD-short-slug`

```bash
git tag -a <tag_name> -m "<short description>"
git push origin <tag_name>
```

5. Confirm with `git log --oneline -n 1` and report the tag name.

## Rules

- Do not verify GitHub Actions status unless explicitly asked.
- Do not use destructive git commands.
- Do not tag until push succeeds.
- If push fails, fix forward with a new commit — do not amend.
