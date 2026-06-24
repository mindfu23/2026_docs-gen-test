---
sidebar_position: 2
title: Endpoints
---

# Endpoints

Open5e v2 exposes 35 list resources; the highlights are below. All are GET, under
`https://api.open5e.com`. A list endpoint (`/v2/<resource>/`) returns a paginated envelope; a
detail endpoint (`/v2/<resource>/{key}/`) returns one object by its `key` (slug).

:::tip[Full reference]
This page is the hand-written tour. The complete, spec-generated reference (every parameter and
schema) lives under **[API Reference](/api)** once you run `npm run gen-api-docs`.
:::

## GET /v2/spells/

The spell list — the richest resource.

**Key filters:** `name`, `name__icontains`, `level`, `ritual`, `school__key`,
`classes__key` (e.g. `wizard`). **Common:** `search`, `ordering`, `page`, `limit`.

```bash
curl "https://api.open5e.com/v2/spells/?level=3&classes__key=wizard&ordering=name"
```

## GET /v2/creatures/

Monsters and NPCs. **Filters:** `name__icontains`, `cr`, `type__key`, `size__key`.

```bash
curl "https://api.open5e.com/v2/creatures/?name__icontains=dragon&ordering=cr"
```

## GET /v2/classes/

Character classes with nested features.

```bash
curl "https://api.open5e.com/v2/classes/wizard/"
```

## GET /v2/search/

Cross-resource search. **Params:** `query` (required), `object_model`, `strict`, `fuzzy`, and
**`vector=true`** for semantic search.

```bash
curl "https://api.open5e.com/v2/search/?query=fire%20damage&vector=true"
```

:::note[Demo + RAG hook]
The built-in `vector=true` semantic search is a clean talking point against the Docusaurus RAG
chatbot built on top — the API itself ships retrieval. See `shared/MODEL_LAYER.md`.
:::
