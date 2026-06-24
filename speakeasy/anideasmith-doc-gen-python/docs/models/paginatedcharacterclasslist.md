# PaginatedCharacterClassList


## Fields

| Field                                                      | Type                                                       | Required                                                   | Description                                                | Example                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- | ---------------------------------------------------------- |
| `count`                                                    | *int*                                                      | :heavy_check_mark:                                         | N/A                                                        | 123                                                        |
| `next`                                                     | *OptionalNullable[str]*                                    | :heavy_minus_sign:                                         | N/A                                                        | http://api.example.org/accounts/?page=4                    |
| `previous`                                                 | *OptionalNullable[str]*                                    | :heavy_minus_sign:                                         | N/A                                                        | http://api.example.org/accounts/?page=2                    |
| `results`                                                  | List[[models.CharacterClass](../models/characterclass.md)] | :heavy_check_mark:                                         | N/A                                                        |                                                            |