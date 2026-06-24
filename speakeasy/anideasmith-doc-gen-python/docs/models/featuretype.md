# FeatureType

The type that best represents this Class Feature

* `CORE_TRAITS_TABLE` - CORE_TRAITS_TABLE
* `CLASS_LEVEL_FEATURE` - CLASS_LEVEL_FEATURE
* `CLASS_FEATURE_OPTION_LIST` - CLASS_FEATURE_OPTION_LIST
* `CLASS_TABLE_DATA` - CLASS_TABLE_DATA
* `PROFICIENCIES` - PROFICIENCIES
* `PROFICIENCY_BONUS` - PROFICIENCY_BONUS
* `STARTING_EQUIPMENT` - STARTING_EQUIPMENT
* `SPELL_SLOTS` - SPELL_SLOTS

## Example Usage

```python
from open5e.models import FeatureType

# Open enum: unrecognized values are captured as UnrecognizedStr
value: FeatureType = "CORE_TRAITS_TABLE"
```


## Values

This is an open enum. Unrecognized values will not fail type checks.

- `"CORE_TRAITS_TABLE"`
- `"CLASS_LEVEL_FEATURE"`
- `"CLASS_FEATURE_OPTION_LIST"`
- `"CLASS_TABLE_DATA"`
- `"PROFICIENCIES"`
- `"PROFICIENCY_BONUS"`
- `"STARTING_EQUIPMENT"`
- `"SPELL_SLOTS"`
