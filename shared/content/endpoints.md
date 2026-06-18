# Endpoints

> The most directly spec-derived page — each section maps to a `path` in `shared/openapi.json`.
> Open5e v2 exposes **35 list resources**; the highlights are below. Every list endpoint shares
> the same pagination, filtering, ordering, and search conventions — see [Concepts](./concepts.md).

All endpoints are GET, under the base `https://api.open5e.com`. A list endpoint
(`/v2/<resource>/`) returns a paginated envelope; a detail endpoint (`/v2/<resource>/{key}/`)
returns one object by its `key` (slug).

## GET /v2/spells/

The spell list. The single richest resource.

**Key filters:** `name`, `name__icontains`, `level` (integer), `ritual` (boolean),
`school__key`, `classes__key` (e.g. `wizard`), `document__key`. **Common:** `search`,
`ordering`, `page`, `limit`.

```bash
# All 3rd-level wizard spells, ordered by name
curl "https://api.open5e.com/v2/spells/?level=3&classes__key=wizard&ordering=name"
```

Notable spell fields: `key`, `name`, `desc`, `level`, `school`, `classes`, `range`,
`range_text`, `casting_time`, `ritual`, `verbal`, `somatic`, `material`, `higher_level`,
`casting_options`.

## GET /v2/creatures/

Monsters and NPCs (statblocks).

**Key filters:** `name__icontains`, `cr` (challenge rating), `type__key`, `size__key`,
`document__key`. Sub-resources include `/v2/creaturetypes/`, `/v2/creaturesets/`.

```bash
curl "https://api.open5e.com/v2/creatures/?name__icontains=dragon&ordering=cr"
```

## GET /v2/classes/

Character classes, with nested class features.

```bash
curl "https://api.open5e.com/v2/classes/wizard/"
```

## GET /v2/magicitems/  ·  /v2/items/  ·  /v2/weapons/  ·  /v2/armor/

Equipment, split by kind. `/v2/items/` is general gear; `/v2/magicitems/` carries rarity and
attunement; `/v2/weapons/` and `/v2/armor/` carry combat stats. Related: `/v2/itemcategories/`,
`/v2/itemrarities/`, `/v2/itemsets/`, `/v2/weaponproperties/`.

```bash
curl "https://api.open5e.com/v2/magicitems/?rarity__key=rare"
```

## GET /v2/backgrounds/  ·  /v2/feats/  ·  /v2/species/

Character-build options (species = ancestries/races).

## GET /v2/conditions/  ·  /v2/damagetypes/  ·  /v2/languages/  ·  /v2/alignments/  ·  /v2/sizes/  ·  /v2/abilities/  ·  /v2/skills/

The reference vocabularies the other resources link to.

## GET /v2/rules/  ·  /v2/rulesets/

Prose rules content — the closest thing to "documentation" already inside the API.

## GET /v2/documents/  ·  /v2/licenses/  ·  /v2/publishers/  ·  /v2/gamesystems/

**Provenance and licensing.** Every content object links to a `document`, which links to a
`license` and `publisher`. This is how you attribute SRD vs. third-party content — see
[Concepts → Documents & licensing](./concepts.md).

## GET /v2/search/

A dedicated cross-resource search endpoint (distinct from per-list `search`).

**Key params:** `query` (required), `object_model` (filter to a content type), `strict`,
`fuzzy`, and **`vector`** — semantic search over name + description.

```bash
curl "https://api.open5e.com/v2/search/?query=fire%20damage&vector=true"
```

> **Demo + RAG relevance:** the built-in `vector=true` semantic search is a notable hook — the
> API *itself* ships retrieval, which is a clean talking point when you contrast it with the
> Docusaurus RAG chatbot you build on top (see `../MODEL_LAYER.md`).
