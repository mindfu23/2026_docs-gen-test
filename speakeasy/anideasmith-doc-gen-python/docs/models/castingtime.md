# CastingTime

Casting time key, such as 'action'

* `reaction` - Reaction
* `bonus-action` - 1 Bonus Action
* `action` - 1 Action
* `turn` - 1 Turn
* `round` - 1 Round
* `1minute` - 1 Minute
* `5minutes` - 5 Minutes
* `10minutes` - 10 Minutes
* `1hour` - 1 Hour
* `4hours` - 4 Hours
* `7hours` - 7 Hours
* `8hours` - 8 Hours
* `9hours` - 9 Hours
* `12hours` - 12 Hours
* `24hours` - 24 Hours
* `1week` - 1 Week

## Example Usage

```python
from open5e.models import CastingTime

# Open enum: unrecognized values are captured as UnrecognizedStr
value: CastingTime = "reaction"
```


## Values

This is an open enum. Unrecognized values will not fail type checks.

- `"reaction"`
- `"bonus-action"`
- `"action"`
- `"turn"`
- `"round"`
- `"1minute"`
- `"5minutes"`
- `"10minutes"`
- `"1hour"`
- `"4hours"`
- `"7hours"`
- `"8hours"`
- `"9hours"`
- `"12hours"`
- `"24hours"`
- `"1week"`
