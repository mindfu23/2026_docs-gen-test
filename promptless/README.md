# Promptless — Layer ③ Maintain (AI-drafted doc-update PRs)

**Job:** watch a codebase for changes and **draft doc-update PRs** in response, with citations,
for a human to review and merge. The "keep docs current" layer.

**Input:** code changes (PRs) + a Slack thread → **Output:** reviewable doc-update PRs.

## How it works — three components (grounded in Promptless docs)

| Component | What it is | Our connection |
|---|---|---|
| **Triggers** | what kicks off an update | **GitHub PRs** (auto) + **Slack** `@Promptless` / "Update Docs" action |
| **Context sources** | what it reads | the **codebase** + the **Slack thread** + existing docs |
| **Publishing** | where the draft lands | a **PR to the docs** — or deploy to a provider (Mintlify, GitBook, Readme, Zendesk…) |

## Our actual setup (connected 2026-06-18)
- **GitHub:** the **vLLM v2 fork** (`mindfu23/2026_docs-gen-test_v2`) — *not* the Open5e/v1 demo
  repo. Deliberate: Promptless needs **real code churn + an existing `docs/` tree to maintain**,
  which the fork has (6,500 commits, a Sphinx docs tree) and the static-spec v1 repo does not.
- **Slack:** workspace *Amber Xanadu*. The "App is not approved by Slack" banner is just the
  standard non-Marketplace notice — fine to Allow. By default Promptless **only reads Slack when
  explicitly triggered** (`@Promptless` or the "Update Docs" message action); passive listening is
  opt-in per channel.

## Two trigger paths we now have
1. **Code-driven (primary):** open a PR on the fork → Promptless analyzes the diff → opens a
   **doc-update PR with citations** to the changed files → review, and give follow-on instructions
   **via GitHub comments** on that PR.
2. **Conversation-driven:** in Slack, tag **`@Promptless`** on a thread or use **"Update Docs"**
   (or DM it pasted content / screenshots) → it drafts docs from the conversation.

## Publish-target decision (try all & compare)
- **Simple:** open PRs to the fork's own `docs/` tree.
- **Slick (recommended demo):** point Promptless at the **Mintlify or GitBook** instance from this
  project, so **Promptless (③) maintains the very docs Mintlify/GitBook (②) publish** — literally
  wiring the three layers together. Do both to compare.

## Demo recipe
1. Allow the Slack app.
2. On the vLLM fork: branch → one **small change with clear doc implications** (rename a CLI flag,
   change a default, add a parameter an existing doc page documents) → open a PR. *(A controlled
   PR is the cleanest trigger — don't rely on ambient churn on a 6,500-commit fork.)*
3. Watch Promptless open a doc-update PR; review it; try a follow-on instruction via GitHub comment.
4. Separately, demo the Slack path: `@Promptless` on a short thread → it drafts from the thread.
5. Capture both PRs.

## What to capture (for the showcase)
The drafted doc-update **PR (diff) + citations**; its URL → `liveUrl`; findings = draft quality,
citation accuracy, latency, how well it understood the change. If access/time runs out, describe
it conceptually with an example from Promptless's docs.

## For the write-up
Promptless occupies a layer the other four don't — ongoing maintenance, not generation or
publishing. **Key finding: the maintenance layer can't be demoed on a static spec — it needs a
living codebase** (hence the vLLM fork, not the Open5e repo). Note the overlap: Mintlify's GitHub
App and GitBook AI offer lighter "outdated docs" nudges, but Promptless is the dedicated, PR-first
version — the forward-looking "docs keep pace with daily code changes" answer.

Sources: docs.gopromptless.ai/docs/core-concepts · promptless.ai/docs/how-to-use-promptless/working-with-slack
