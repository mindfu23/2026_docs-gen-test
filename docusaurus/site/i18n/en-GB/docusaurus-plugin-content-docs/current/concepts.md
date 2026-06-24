---
sidebar_position: 3
title: Concepts
---

# Concepts

:::note[🇬🇧 British-voice edition (en-GB) — hand-seeded placeholder for the British-voice LoRA.]
:::

The Open5e v2 data model.

## Keys (slugs) identify everything

Every object has a stable string **`key`** (e.g. `srd_fireball`, `wizard`). Detail endpoints
address objects by key: `/v2/spells/srd_fireball/`. Relationships are expressed by key too.

## Pagination

List endpoints return a page-number envelope (`count`, `next`, `previous`, `results`). Control it
with **`page`** and **`limit`**; follow `next` until `null`.

## Filtering (Django-style lookups)

Built on Django REST Framework, so filters are field + lookup query params:

| Pattern | Example | Meaning |
|---|---|---|
| exact | `?level=3` | equals |
| `__icontains` | `?name__icontains=fire` | case-insensitive substring |
| `__in` | `?key__in=a,b,c` | any of |
| related `__key` | `?classes__key=wizard` | by a linked object's key |

## Search — including semantic (vector) search

`?search=` within a resource; `/v2/search/?query=` across resources, with **`vector=true`** for
embedding-based semantic search.

## Documents, licensing & provenance

Content is organised into **`documents`** (source books/SRDs), each tied to a `license`,
`publisher`, and `gamesystem`. Filter SRD-only content with `?document__key=<srd-key>`, and read
`/v2/licenses/` for attribution.

:::warning[Licensing]
The API catalogues several sources (SRD plus third-party OGL/CC). Preserve per-item attribution —
see `NOTICE.md`.
:::
