# ActionType

The type of action used.

* `ACTION` - Action
* `REACTION` - Reaction
* `BONUS_ACTION` - Bonus Action
* `LEGENDARY_ACTION` - Legendary Action
* `LAIR_ACTION` - Lair Action

## Example Usage

```python
from open5e.models import ActionType

# Open enum: unrecognized values are captured as UnrecognizedStr
value: ActionType = "ACTION"
```


## Values

This is an open enum. Unrecognized values will not fail type checks.

- `"ACTION"`
- `"REACTION"`
- `"BONUS_ACTION"`
- `"LEGENDARY_ACTION"`
- `"LAIR_ACTION"`
- `""`
