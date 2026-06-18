# Concepts

> Synthesized from the spec's schemas and shared query parameters into prose. More interpretive
> than [Endpoints](./endpoints.md), but every term is anchored to the Open5e v2 API.

## Keys (slugs) identify everything

Every object has a stable string **`key`** (e.g. `srd_fireball`, `wizard`, `red-dragon`).
Detail endpoints address objects by key: `/v2/spells/srd_fireball/`. Relationships between
objects are expressed by key too (a spell's `classes` reference class keys), which makes the
data graph easy to traverse without numeric IDs.

## Pagination

List endpoints return a **page-number paginated envelope**:

```json
{ "count": 320, "next": "https://api.open5e.com/v2/spells/?page=2", "previous": null, "results": [ ... ] }
```

Control it with **`page`** and **`limit`** (results per page). Follow `next` until it's `null`
to walk the full set.

## Filtering (Django-style lookups)

Open5e is built on Django REST Framework, so filters use **field + lookup** query params:

| Pattern | Example | Meaning |
|---|---|---|
| exact | `?level=3` | field equals value |
| `__icontains` | `?name__icontains=fire` | case-insensitive substring |
| `__iexact` | `?name__iexact=fireball` | case-insensitive exact |
| `__in` | `?key__in=a,b,c` | any of (comma-separated) |
| related `__key` | `?classes__key=wizard` | filter by a linked object's key |

Filters combine (AND) across params: `?level=3&classes__key=wizard&ritual=false`.

## Ordering

**`?ordering=<field>`** sorts ascending; prefix `-` for descending: `?ordering=-level`.

## Search — including semantic (vector) search

Two layers:

- **Per-list `search`** — `?search=<term>` does a text search within that resource.
- **Cross-resource `/v2/search/`** — `?query=<term>` across content types, with `object_model`
  to scope, plus `strict`, `fuzzy`, and **`vector=true`** for embedding-based semantic search
  over name + description.

> The API ships its own retrieval (`vector=true`). When you build the Docusaurus RAG chatbot
> (see `../MODEL_LAYER.md`), you can either lean on Open5e's vector search or index the content
> yourself — a useful contrast to document.

## Documents, licensing & provenance

Content is organized into **`documents`** (source books/SRDs), each tied to a **`license`**,
**`publisher`**, and **`gamesystem`**. A spell from the SRD and a spell from a third-party OGL
book are distinguished by their `document`. Filter to SRD-only content with
`?document__key=<srd-key>`, and read `/v2/licenses/` to produce correct attribution. This is
why the SRD attribution in [`../../NOTICE.md`](../../NOTICE.md) is required: the API mixes
sources, and you must preserve each.

## v1 vs v2

The spec's `info.version` reads *"development (v1)"* but the documented surface is **v2**
(`/v2/...`), the current, more-structured API. Prefer v2 for new work; an older v1 surface
exists for backward compatibility.

## Object relationships (the mental model)

```
document ──< spell        document ──< creature ──< actions
   │            └─ classes     │            └─ type, size
 license                    (cr, hp, ...)
 publisher
```

Resources are interlinked by key; reference vocabularies (`/v2/conditions/`, `/v2/damagetypes/`,
`/v2/sizes/`, …) are the shared lookups the richer objects point at.
