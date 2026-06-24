# AttackType

Whether this is a Weapon or Spell attack.

* `SPELL` - Spell
* `WEAPON` - Weapon

## Example Usage

```python
from open5e.models import AttackType

# Open enum: unrecognized values are captured as UnrecognizedStr
value: AttackType = "SPELL"
```


## Values

This is an open enum. Unrecognized values will not fail type checks.

- `"SPELL"`
- `"WEAPON"`
