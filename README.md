# 2026_docs-gen-test

A hands-on comparison of five documentation / SDK tools — **Stainless, Mintlify, GitBook,
Docusaurus, and Promptless** — run against one shared open API (the **Open5e D&D 5e API**),
to show how the platforms differ in purpose, strengths, requirements, and overlaps.

The point isn't to produce one docs site; it's the **write-up** ([COMPARISON.md](COMPARISON.md))
articulating how the tools sit at three different layers: generate the client, publish the
site, maintain the docs.

## Start here
- **[PLAN.md](PLAN.md)** — the method, the 3-layer taxonomy, and the phased execution checklist.
- **[NEXT_STEPS.md](NEXT_STEPS.md)** — per-tool next steps: finish-capture + next-phase usage.
- **[COMPARISON.md](COMPARISON.md)** — the deliverable (matrix + findings), filled in as you test.

## Layout
| Path | Role |
|---|---|
| `shared/openapi.json` | The single shared input — **Open5e** OpenAPI 3.0.3, 69 paths ([source](shared/openapi.SOURCE.md)) |
| [shared/content/](shared/content/) | The 3 seed pages (Overview/Endpoints/Concepts) — format templates, ⚠️ rework to D&D |
| [NOTICE.md](NOTICE.md) | Required CC-BY-4.0 attribution for the SRD content |
| [stainless/](stainless/) · [mintlify/](mintlify/) · [docusaurus/](docusaurus/) · [gitbook/](gitbook/) · [promptless/](promptless/) | One folder per tool, each with a README of role + steps |

## Status
**6 of 7 tools captured.** Layer ① (OpenAPI Generator · Speakeasy · Stainless) and layer ②
(Docusaurus · Mintlify · GitBook) are done; **Promptless** is connected with only its trigger +
capture remaining. The **showcase hub** and **Docusaurus** are deployed to Netlify; the write-up in
[COMPARISON.md](COMPARISON.md) is drafted (Promptless section pending). Per-tool next steps live in
[NEXT_STEPS.md](NEXT_STEPS.md).
