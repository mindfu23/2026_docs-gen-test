# One spec, five tools — what each layer actually produces

> **THE DELIVERABLE.** Fill this in as you complete each tool in Phase 1. The write-up — not
> any single docs site — is the point. See `PLAN.md` for the full method.

**Setup:** one shared `openapi.json` from an open-source vLLM server, run through five
documentation/SDK tools to see what each produces and where they overlap.

## TL;DR thesis

They are **not competitors — they are three layers of the docs toolchain:**

1. **Generate the client** — Stainless turns the spec into typed SDKs.
2. **Publish the docs** — Mintlify, GitBook, and Docusaurus each render the spec + guides
   into a site, three different ways.
3. **Maintain the docs** — Promptless drafts update PRs as the code changes.

## Comparison matrix  *(fill as you test)*

| Dimension | Stainless | Mintlify | GitBook | Docusaurus | Promptless |
|---|---|---|---|---|---|
| Layer | ① generate client | ② publish | ② publish | ② publish | ③ maintain |
| Primary input | OpenAPI spec | spec + MDX | spec + Markdown | MDX + spec (plugin) | repo changes |
| Primary output | typed SDKs | hosted reference | hosted docs/KB | self-hosted static site | doc-update PRs |
| Hosting | CI tool | SaaS | SaaS | self-host | PR bot |
| Content format | n/a | MDX (components) | GitBook blocks | MDX (admonitions) | n/a |
| OpenAPI ingestion | _TBD_ | _TBD_ | _TBD_ | _TBD_ | n/a |
| Git model | PR to repo | git-as-source | bidirectional sync | git-is-the-repo | reacts to commits |
| AI features | _TBD_ | AI search | GitBook AI | _community_ | core (drafting) |
| Pricing / OSS-free | _TBD_ | _TBD_ | _TBD_ | free / OSS | _TBD_ |
| Setup time (actual) | _TBD_ | _TBD_ | _TBD_ | _TBD_ | _TBD_ |
| Lock-in / portability | _TBD_ | _TBD_ | _TBD_ | none | _TBD_ |
| Primary audience | SDK consumers | developers | mixed technical/non-tech | engineering teams | doc maintainers |
| Authoring ops (CRUD) | n/a — config + regen | files + nav (web editor) | WYSIWYG drag-and-drop | files + sidebar config | n/a — drafts edits via PR |

## Findings  *(write as you go)*

- **Stainless —** _what the generated SDK/docstrings looked like; screenshot link._
- **Mintlify —** _live URL; how the "Try It" playground rendered the spec._
- **GitBook —** _live URL; WYSIWYG + git-sync fidelity vs the raw Markdown._
- **Docusaurus —** _deployed URL; effort to wire the OpenAPI plugin + deploy._
- **Promptless —** runs on the **vLLM v2 fork** (real code churn + a real `docs/` tree), triggered
  by a GitHub PR or a Slack `@mention`; output is a drafted doc-update PR with citations. _Capture
  the PR + assess draft/citation quality._ **Finding: the maintenance layer can't be demoed on a
  static spec — it needs a living codebase**, so it deliberately uses a different substrate than
  the other four (which document the Open5e API).

## Test setup notes
- **Three spec variants** drive the comparison: `openapi.json` (full, 69 paths), `openapi-subset.json`
  (6), `openapi-auth.json` (7, +fake auth POST). Compare full-vs-subset (scale/noise) and
  read-only-vs-auth (request-body/security rendering).
- **Live "Try It" works:** `api.open5e.com` sends `access-control-allow-origin: *`, so interactive
  consoles can make real in-browser GETs.

## Cross-cutting observations

- **Same spec, different artifacts:** _Stainless code vs three reference sites._
- **Publishing trio tradeoffs:** _polish (Mintlify) vs mixed-author (GitBook) vs control (Docusaurus)._
- **Content portability:** _how much the seed Markdown had to change per tool._
- **Maintenance overlap:** _Promptless vs Mintlify's PR check vs GitBook AI._
- **What a spec can't model well:** _SSE streaming surface (see `shared/content/concepts.md`)._

## The hook

> "I ran one open-source inference API through Stainless, Mintlify, GitBook, Docusaurus, and
> Promptless to see what each layer of the docs toolchain actually produces."
