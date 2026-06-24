# Creatures

## Overview

### Available Operations

* [list](#list) - list: API endpoint for returning a list of creatures.
retrieve: API endpoint for returning a particular creature.
* [get](#get) - list: API endpoint for returning a list of creatures.
retrieve: API endpoint for returning a particular creature.

## list

list: API endpoint for returning a list of creatures.
retrieve: API endpoint for returning a particular creature.

### Example Usage

<!-- UsageSnippet language="python" operationID="creatures_list" method="get" path="/v2/creatures/" -->
```python
from open5e import AnideasmithDocGen


with AnideasmithDocGen() as anideasmith_doc_gen:

    res = anideasmith_doc_gen.creatures.list()

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `key_in`                                                            | List[*str*]                                                         | :heavy_minus_sign:                                                  | Multiple values may be separated by commas.                         |
| `key_iexact`                                                        | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `key`                                                               | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `name_iexact`                                                       | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `name`                                                              | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `name_icontains`                                                    | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `document_key_in`                                                   | List[*str*]                                                         | :heavy_minus_sign:                                                  | Multiple values may be separated by commas.                         |
| `document_key_iexact`                                               | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `document_key`                                                      | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `document_gamesystem_key_in`                                        | List[*str*]                                                         | :heavy_minus_sign:                                                  | Multiple values may be separated by commas.                         |
| `document_gamesystem_key_iexact`                                    | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `document_gamesystem_key`                                           | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `size`                                                              | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | Unique key for the Item.                                            |
| `category`                                                          | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `category_iexact`                                                   | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `subcategory`                                                       | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `subcategory_iexact`                                                | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `type`                                                              | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | Unique key for the Item.                                            |
| `challenge_rating`                                                  | *Optional[float]*                                                   | :heavy_minus_sign:                                                  | N/A                                                                 |
| `challenge_rating_lt`                                               | *Optional[float]*                                                   | :heavy_minus_sign:                                                  | N/A                                                                 |
| `challenge_rating_lte`                                              | *Optional[float]*                                                   | :heavy_minus_sign:                                                  | N/A                                                                 |
| `challenge_rating_gt`                                               | *Optional[float]*                                                   | :heavy_minus_sign:                                                  | N/A                                                                 |
| `challenge_rating_gte`                                              | *Optional[float]*                                                   | :heavy_minus_sign:                                                  | N/A                                                                 |
| `armor_class`                                                       | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `armor_class_lt`                                                    | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `armor_class_lte`                                                   | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `armor_class_gt`                                                    | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `armor_class_gte`                                                   | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_strength`                                            | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_strength_lt`                                         | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_strength_lte`                                        | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_strength_gt`                                         | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_strength_gte`                                        | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_dexterity`                                           | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_dexterity_lt`                                        | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_dexterity_lte`                                       | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_dexterity_gt`                                        | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_dexterity_gte`                                       | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_constitution`                                        | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_constitution_lt`                                     | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_constitution_lte`                                    | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_constitution_gt`                                     | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_constitution_gte`                                    | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_intelligence`                                        | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_intelligence_lt`                                     | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_intelligence_lte`                                    | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_intelligence_gt`                                     | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_intelligence_gte`                                    | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_wisdom`                                              | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_wisdom_lt`                                           | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_wisdom_lte`                                          | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_wisdom_gt`                                           | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_wisdom_gte`                                          | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_charisma`                                            | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_charisma_lt`                                         | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_charisma_lte`                                        | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_charisma_gt`                                         | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ability_score_charisma_gte`                                        | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `saving_throw_strength_isnull`                                      | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `saving_throw_dexterity_isnull`                                     | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `saving_throw_constitution_isnull`                                  | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `saving_throw_intelligence_isnull`                                  | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `saving_throw_wisdom_isnull`                                        | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `saving_throw_charisma_isnull`                                      | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `skill_bonus_acrobatics_isnull`                                     | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `skill_bonus_animal_handling_isnull`                                | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `skill_bonus_arcana_isnull`                                         | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `skill_bonus_athletics_isnull`                                      | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `skill_bonus_deception_isnull`                                      | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `skill_bonus_history_isnull`                                        | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `skill_bonus_insight_isnull`                                        | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `skill_bonus_intimidation_isnull`                                   | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `skill_bonus_investigation_isnull`                                  | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `skill_bonus_medicine_isnull`                                       | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `skill_bonus_nature_isnull`                                         | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `skill_bonus_perception_isnull`                                     | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `skill_bonus_performance_isnull`                                    | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `skill_bonus_persuasion_isnull`                                     | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `skill_bonus_religion_isnull`                                       | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `skill_bonus_sleight_of_hand_isnull`                                | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `skill_bonus_stealth_isnull`                                        | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `skill_bonus_survival_isnull`                                       | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `passive_perception`                                                | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `passive_perception_lt`                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `passive_perception_lte`                                            | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `passive_perception_gt`                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `passive_perception_gte`                                            | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ordering`                                                          | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | Which field to use when ordering the results.                       |
| `search`                                                            | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | A search term.                                                      |
| `page`                                                              | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | A page number within the paginated result set.                      |
| `limit`                                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | Number of results to return per page.                               |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.PaginatedCreatureList](../../models/paginatedcreaturelist.md)**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.AnideasmithDocGenDefaultError | 4XX, 5XX                             | \*/\*                                |

## get

list: API endpoint for returning a list of creatures.
retrieve: API endpoint for returning a particular creature.

### Example Usage

<!-- UsageSnippet language="python" operationID="creatures_retrieve" method="get" path="/v2/creatures/{key}/" -->
```python
from open5e import AnideasmithDocGen


with AnideasmithDocGen() as anideasmith_doc_gen:

    res = anideasmith_doc_gen.creatures.get(key="<key>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `key`                                                               | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.Creature](../../models/creature.md)**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.AnideasmithDocGenDefaultError | 4XX, 5XX                             | \*/\*                                |