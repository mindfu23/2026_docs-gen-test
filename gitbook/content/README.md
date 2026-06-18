# Overview / Getting Started

<img src=".gitbook/assets/sample-d20.svg" alt="d20" data-size="line">

{% hint style="info" %}
This is the GitBook adaptation of the canonical `shared/content/overview.md`. Note the callout
dialect — GitBook `{% hint %}` blocks — vs Mintlify's `<Info>` components and Docusaurus's `:::`
admonitions. Same content, three markup flavors: the cross-tool format-portability finding, live.
{% endhint %}

## What this is

**Open5e** is an open REST API for 5th-edition d20 game content — the SRD plus other OGL/CC
material: spells, creatures, classes, magic items, and more. It is **completely open: no API key,
no auth.** The current surface is **v2**; responses are JSON, paginated, and filterable.

## Base URL

```
https://api.open5e.com
```

## Your first request

```bash
curl "https://api.open5e.com/v2/spells/?name=Fireball"
```

```python
import requests
r = requests.get("https://api.open5e.com/v2/spells/", params={"name": "Fireball"})
spell = r.json()["results"][0]
print(spell["name"], "— level", spell["level"])
```

## Where to go next

* [Endpoints](endpoints.md) — the resource surface.
* [Concepts](concepts.md) — keys, pagination, filtering, search.
* [API Reference](api-reference/README.md) — the OpenAPI surface.

{% hint style="warning" %}
Content derives from the D&D 5e SRD under **CC-BY-4.0** — see `NOTICE.md`. Preserve attribution.
{% endhint %}
