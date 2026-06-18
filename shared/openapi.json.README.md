# `shared/openapi.json` — the single shared input (not yet generated)

This file does not exist yet. It is the **one artifact** every spec-consuming tool in this
demo ingests (Stainless, Mintlify, GitBook, and the Docusaurus OpenAPI plugin).

## How to produce it (~30 min, free)

Run a throwaway vLLM server just long enough to capture its auto-generated spec. The model
choice is irrelevant — the API *surface* is the point, so use the smallest model that loads.

**Kaggle (free, recommended):** new notebook → Accelerator = **GPU T4 ×2** (not P100 —
vLLM needs compute capability ≥ 7.0; P100 is 6.0), Internet = On.

```python
!pip install -q vllm
import subprocess, time, requests, json

server = subprocess.Popen(
    ["vllm", "serve", "Qwen/Qwen2.5-0.5B-Instruct",
     "--host", "127.0.0.1", "--port", "8000", "--dtype", "float16"],
    stdout=open("vllm.log", "w"), stderr=subprocess.STDOUT)

for _ in range(120):
    try:
        if requests.get("http://127.0.0.1:8000/v1/models", timeout=2).ok:
            print("server up"); break
    except Exception: pass
    time.sleep(5)

spec = requests.get("http://127.0.0.1:8000/openapi.json").json()
json.dump(spec, open("/kaggle/working/openapi.json", "w"), indent=2)
print("saved", len(spec.get("paths", {})), "endpoints")
```

Download `openapi.json` from Kaggle's output panel and drop it in this folder as
`shared/openapi.json`. You do **not** need a publicly reachable server — the static spec
file is the deliverable.

## After you have it

Reconcile the three seed pages in `shared/content/` against the real spec — the
`info.version`, `servers[0].url`, and served model name are the fields most likely to differ
from the standard-spec assumptions used to seed them. Then point each tool at the file
(see each tool folder's README).
