# Classes

## Overview

### Available Operations

* [list](#list) - list: API endpoint for returning a list of classes.
retrieve: API endpoint for returning a particular class.
* [get](#get) - list: API endpoint for returning a list of classes.
retrieve: API endpoint for returning a particular class.

## list

list: API endpoint for returning a list of classes.
retrieve: API endpoint for returning a particular class.

### Example Usage

<!-- UsageSnippet language="python" operationID="classes_list" method="get" path="/v2/classes/" -->
```python
from open5e import AnideasmithDocGen


with AnideasmithDocGen() as anideasmith_doc_gen:

    res = anideasmith_doc_gen.classes.list()

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
| `name_contains`                                                     | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `document_key_in`                                                   | List[*str*]                                                         | :heavy_minus_sign:                                                  | Multiple values may be separated by commas.                         |
| `document_key_iexact`                                               | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `document_key`                                                      | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `document_gamesystem_key_in`                                        | List[*str*]                                                         | :heavy_minus_sign:                                                  | Multiple values may be separated by commas.                         |
| `document_gamesystem_key_iexact`                                    | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `document_gamesystem_key`                                           | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | N/A                                                                 |
| `subclass_of`                                                       | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | Unique key for the Item.                                            |
| `is_subclass`                                                       | *Optional[bool]*                                                    | :heavy_minus_sign:                                                  | N/A                                                                 |
| `ordering`                                                          | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | Which field to use when ordering the results.                       |
| `search`                                                            | *Optional[str]*                                                     | :heavy_minus_sign:                                                  | A search term.                                                      |
| `page`                                                              | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | A page number within the paginated result set.                      |
| `limit`                                                             | *Optional[int]*                                                     | :heavy_minus_sign:                                                  | Number of results to return per page.                               |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.PaginatedCharacterClassList](../../models/paginatedcharacterclasslist.md)**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.AnideasmithDocGenDefaultError | 4XX, 5XX                             | \*/\*                                |

## get

list: API endpoint for returning a list of classes.
retrieve: API endpoint for returning a particular class.

### Example Usage

<!-- UsageSnippet language="python" operationID="classes_retrieve" method="get" path="/v2/classes/{key}/" -->
```python
from open5e import AnideasmithDocGen


with AnideasmithDocGen() as anideasmith_doc_gen:

    res = anideasmith_doc_gen.classes.get(key="<key>")

    # Handle response
    print(res)

```

### Parameters

| Parameter                                                           | Type                                                                | Required                                                            | Description                                                         |
| ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- | ------------------------------------------------------------------- |
| `key`                                                               | *str*                                                               | :heavy_check_mark:                                                  | N/A                                                                 |
| `retries`                                                           | [Optional[utils.RetryConfig]](../../models/utils/retryconfig.md)    | :heavy_minus_sign:                                                  | Configuration to override the default retry behavior of the client. |

### Response

**[models.CharacterClass](../../models/characterclass.md)**

### Errors

| Error Type                           | Status Code                          | Content Type                         |
| ------------------------------------ | ------------------------------------ | ------------------------------------ |
| errors.AnideasmithDocGenDefaultError | 4XX, 5XX                             | \*/\*                                |