# showcase/ — the comparison hub (the project's public artifact)

A neutral **React 19 + Vite + Tailwind** shell that presents the five tools as tabs plus a
**Summary** tab (the deliverable). It does **not** co-host the five live outputs — they're
heterogeneous and mostly externally hosted — so each tab is a curated *presentation*:
*what the tool is · a representative artifact · a link to the real thing · findings.*

## Run / build
```bash
npm install
npm run dev      # local preview
npm run build    # → dist/  (deployed via GitHub → Netlify; see netlify.toml)
```

## The capture contract (how to fill it in)

Every tab is driven by one entry in [`src/tools.ts`](src/tools.ts). After you run a tool in
Phase 1, edit its entry — **no component code changes needed**:

| Field | Fill with |
|---|---|
| `liveUrl` | the deployed output URL (or generated-repo URL for Stainless / PR URL for Promptless) |
| `screenshot` | a path under `public/` to a screenshot of the output |
| `artifact.kind` | how the output shows: `page` · `code` · `diff` · `link` (already set sensibly) |
| `setupNotes` | time taken, friction, gotchas |
| `findings` | what it produced + where it shines / falls short (also feeds the write-up) |
| `status` | flip `"pending"` → `"done"` (turns the tab dot green and the Summary row to ✓) |

## Why outputs aren't all "pages"
- **Docusaurus** — native page (the one output you host).
- **Mintlify / GitBook** — externally hosted; **link out + screenshot** (don't iframe — their
  CSP/`X-Frame-Options` usually blocks embedding).
- **Stainless** — an SDK package; show a **code snippet** + link to the generated repo.
- **Promptless** — a **PR diff**; screenshot/embed it + link.

## Relationship to the rest of the repo
- Static facts mirror `../PLAN.md` (layer / input / output / hosting).
- The full matrix + prose write-up live in `../COMPARISON.md`; this Summary tab is the at-a-glance
  version. Keep them in sync (or wire the Summary to import COMPARISON.md later).
