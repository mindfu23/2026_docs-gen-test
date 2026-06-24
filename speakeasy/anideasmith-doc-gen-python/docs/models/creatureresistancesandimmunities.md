# CreatureResistancesAndImmunities

This serializer formats a Creature's damage modifier as a single obj


## Fields

| Field                                                            | Type                                                             | Required                                                         | Description                                                      |
| ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------- |
| `damage_immunities_display`                                      | *str*                                                            | :heavy_check_mark:                                               | N/A                                                              |
| `damage_immunities`                                              | List[[models.DamageTypeSummary](../models/damagetypesummary.md)] | :heavy_check_mark:                                               | N/A                                                              |
| `damage_resistances_display`                                     | *str*                                                            | :heavy_check_mark:                                               | N/A                                                              |
| `damage_resistances`                                             | List[[models.DamageTypeSummary](../models/damagetypesummary.md)] | :heavy_check_mark:                                               | N/A                                                              |
| `damage_vulnerabilities_display`                                 | *str*                                                            | :heavy_check_mark:                                               | N/A                                                              |
| `damage_vulnerabilities`                                         | List[[models.DamageTypeSummary](../models/damagetypesummary.md)] | :heavy_check_mark:                                               | N/A                                                              |
| `condition_immunities_display`                                   | *str*                                                            | :heavy_check_mark:                                               | N/A                                                              |
| `condition_immunities`                                           | List[[models.ConditionSummary](../models/conditionsummary.md)]   | :heavy_check_mark:                                               | N/A                                                              |