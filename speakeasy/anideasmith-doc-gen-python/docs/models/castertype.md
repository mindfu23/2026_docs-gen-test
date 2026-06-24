# CasterType

Type of caster. Options are full, half, none.

* `FULL` - Full
* `HALF` - Half
* `PACT` - Pact
* `NONE` - None

## Example Usage

```python
from open5e.models import CasterType

# Open enum: unrecognized values are captured as UnrecognizedStr
value: CasterType = "FULL"
```


## Values

This is an open enum. Unrecognized values will not fail type checks.

- `"FULL"`
- `"HALF"`
- `"PACT"`
- `"NONE"`
- `""`
