# Mintlify — Layer ② Publish site (SaaS, dev-docs-native)

**Job:** render the spec as an interactive API reference, plus guides authored in MDX. Hosted
SaaS with a strong "Try It" playground and AI search.

**Input:** the spec + Mintlify-flavored MDX  →  **Output:** hosted, searchable reference + guides.

## Config prepped ✅
This folder is a ready Mintlify docs root:
- [`docs.json`](docs.json) — theme + a **Guides** tab (overview/endpoints/concepts) and an **API
  Reference** tab pointed at `api-reference/openapi.json`.
- [`api-reference/openapi.json`](api-reference/openapi.json) — a copy of `shared/openapi-subset.json`
  (Mintlify's GitHub-App deploy needs the spec inside the docs root; regenerate via the Phase 0.5
  script to swap variants — *try all & compare*).
- [`overview.mdx`](overview.mdx) · [`endpoints.mdx`](endpoints.mdx) · [`concepts.mdx`](concepts.mdx)
  — Mintlify-flavored (`<Info>`, `<CodeGroup>`, `<Card>`, `<Warning>`) vs Docusaurus admonitions:
  the format-portability finding, live.
- `favicon.svg` — the sample d20.

## Fast path (once logged in)
1. Sign up at **mintlify.com** with GitHub SSO; install the **Mintlify GitHub App** on the repo so
   pushes auto-deploy. Point it at this **`mintlify/`** subfolder as the docs root.
2. Live in minutes — `docs.json` already wires the spec + guides. (CORS is `*`, so the "Try It"
   playground can make **live** calls against `api.open5e.com` — see Phase 0.5.)
3. Local preview (optional): `npm i -g mintlify && mintlify dev` from this folder → localhost:3000.

## What to capture
The published site with the interactive **"Try It"** playground + AI search. Drop the URL +
screenshot into the showcase tab. Same spec as Stainless, completely different artifact.

## For the write-up
The polished dev-docs default. Compare against GitBook (WYSIWYG/git-sync) and Docusaurus
(self-host). Note Mintlify's GitHub App can flag outdated docs on PRs — a lighter built-in cousin
of Promptless (Layer ③) — and that it has added its own SDK generation (overlaps Stainless).

*Verify against the current `docs.json` schema — Mintlify's config evolves.*
