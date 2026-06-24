<!-- Start SDK Example Usage [usage] -->
```python
# Synchronous Example
from open5e import AnideasmithDocGen


with AnideasmithDocGen() as anideasmith_doc_gen:

    res = anideasmith_doc_gen.spells.list()

    # Handle response
    print(res)
```

</br>

The same SDK client can also be used to make asynchronous requests by importing asyncio.

```python
# Asynchronous Example
import asyncio
from open5e import AnideasmithDocGen

async def main():

    async with AnideasmithDocGen() as anideasmith_doc_gen:

        res = await anideasmith_doc_gen.spells.list_async()

        # Handle response
        print(res)

asyncio.run(main())
```
<!-- End SDK Example Usage [usage] -->