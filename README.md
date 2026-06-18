# 2026_docs-gen-test

A hands-on comparison of five documentation / SDK tools — **Stainless, Mintlify, GitBook,
Docusaurus, and Promptless** — run against one shared open-source API (vLLM), to show how the
platforms differ in purpose, strengths, requirements, and overlaps.

The point isn't to produce one docs site; it's the **write-up** ([COMPARISON.md](COMPARISON.md))
articulating how the tools sit at three different layers: generate the client, publish the
site, maintain the docs.

## Start here
- **[PLAN.md](PLAN.md)** — the method, the 3-layer taxonomy, and the phased execution checklist.
- **[COMPARISON.md](COMPARISON.md)** — the deliverable (matrix + findings), filled in as you test.

## Layout
| Path | Role |
|---|---|
| [shared/content/](shared/content/) | The 3 canonical seed pages (Overview, Endpoints, Concepts) |
| `shared/openapi.json` | The single shared input — generate via Kaggle ([how](shared/openapi.json.README.md)) |
| [stainless/](stainless/) · [mintlify/](mintlify/) · [docusaurus/](docusaurus/) · [gitbook/](gitbook/) · [promptless/](promptless/) | One folder per tool, each with a README of role + steps |

## Status
Scaffold + seed pages + plan done (Jun 18). Next: generate the real `openapi.json`, then fan
out to the five tools. See `PLAN.md` for the checklist.
