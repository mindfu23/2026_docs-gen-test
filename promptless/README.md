# Promptless — Layer ③ Maintain (AI-drafted doc-update PRs)

**Job:** watch a repo for changes (PRs, commits, issues) and **draft doc-update PRs** in
response, with citations, for a human to review and merge. The "keep docs current" layer.

**Input:** changes to this repo + existing docs  →  **Output:** reviewable doc-update PRs.

## Steps  (⚠ stretch goal — check access FIRST, it's the likely blocker)
1. Confirm access: Promptless is commercial (free for eligible open-source; otherwise request
   a trial/demo). Do this before investing setup time.
2. Connect it to this GitHub repo.
3. Trigger a change it can react to: edit `shared/openapi.json` (add an endpoint or a param
   description), or edit a page in `shared/content/`, then push a commit / open a PR.
4. Promptless detects the change and opens a PR drafting the doc update.
5. Review / tweak it — that human-in-the-loop step is the thing to highlight.

## What to capture
The drafted doc-update PR (the diff + its citations). If access/time runs out, describe it
conceptually with an example from Promptless's own docs.

## For the write-up
Promptless occupies a layer the other four don't — ongoing maintenance, not generation or
publishing. Note the overlap: Mintlify's GitHub App and GitBook AI offer lighter "outdated
docs" nudges, but Promptless is the dedicated, PR-first version of that idea. This is the
forward-looking "docs keep pace with daily code changes" answer a fast-moving team cares about.
