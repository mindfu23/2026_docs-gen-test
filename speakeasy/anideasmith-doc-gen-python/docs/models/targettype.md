# TargetType

Spell target type key.

* `creature` - Creature
* `object` - Object
* `point` - Point
* `area` - Area

## Example Usage

```python
from open5e.models import TargetType

# Open enum: unrecognized values are captured as UnrecognizedStr
value: TargetType = "creature"
```


## Values

This is an open enum. Unrecognized values will not fail type checks.

- `"creature"`
- `"object"`
- `"point"`
- `"area"`
- `""`
