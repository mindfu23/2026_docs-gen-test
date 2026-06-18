# GitBook — Layer ② Publish site (SaaS, WYSIWYG + git-sync)

**Job:** publish a hosted docs/knowledge-base site with an API reference imported from
`shared/openapi.json`. Distinctive trait: a **WYSIWYG editor with bidirectional Git Sync** —
non-engineers can edit in the UI while changes round-trip to Markdown in the repo.

**Input:** `../shared/openapi.json` + adapted Markdown from `../shared/content/`
→ **Output:** hosted docs/KB + API reference.

## Steps
1. Create a GitBook account → new **space** (free tier for personal/OSS — *verify current terms*).
2. Set up **Git Sync** against this repo so a `gitbook/` content folder round-trips as Markdown.
3. Import the OpenAPI spec (GitBook generates API pages / OpenAPI blocks from it).
4. Add the 3 seed pages as Markdown (GitBook converts them to its block model — note any
   fidelity loss vs the Mintlify/Docusaurus renderings).
5. Publish.

## What to capture
The hosted site **and** a screenshot of the WYSIWYG editor + Git Sync settings — that combo
is GitBook's differentiator. Note how its block model handles the same Markdown the other two
tools rendered.

## For the write-up
The mixed-audience option: best when non-technical contributors (PMs, support, marketing)
co-author alongside engineers. More content-platform than dev-docs-framework. Compare its
git model (bidirectional sync) against Mintlify (git-as-source) and Docusaurus (git-is-the-repo).
