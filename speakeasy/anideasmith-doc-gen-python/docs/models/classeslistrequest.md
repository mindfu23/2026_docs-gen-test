# ClassesListRequest


## Fields

| Field                                          | Type                                           | Required                                       | Description                                    |
| ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- | ---------------------------------------------- |
| `key_in`                                       | List[*str*]                                    | :heavy_minus_sign:                             | Multiple values may be separated by commas.    |
| `key_iexact`                                   | *Optional[str]*                                | :heavy_minus_sign:                             | N/A                                            |
| `key`                                          | *Optional[str]*                                | :heavy_minus_sign:                             | N/A                                            |
| `name_iexact`                                  | *Optional[str]*                                | :heavy_minus_sign:                             | N/A                                            |
| `name`                                         | *Optional[str]*                                | :heavy_minus_sign:                             | N/A                                            |
| `name_contains`                                | *Optional[str]*                                | :heavy_minus_sign:                             | N/A                                            |
| `document_key_in`                              | List[*str*]                                    | :heavy_minus_sign:                             | Multiple values may be separated by commas.    |
| `document_key_iexact`                          | *Optional[str]*                                | :heavy_minus_sign:                             | N/A                                            |
| `document_key`                                 | *Optional[str]*                                | :heavy_minus_sign:                             | N/A                                            |
| `document_gamesystem_key_in`                   | List[*str*]                                    | :heavy_minus_sign:                             | Multiple values may be separated by commas.    |
| `document_gamesystem_key_iexact`               | *Optional[str]*                                | :heavy_minus_sign:                             | N/A                                            |
| `document_gamesystem_key`                      | *Optional[str]*                                | :heavy_minus_sign:                             | N/A                                            |
| `subclass_of`                                  | *Optional[str]*                                | :heavy_minus_sign:                             | Unique key for the Item.                       |
| `is_subclass`                                  | *Optional[bool]*                               | :heavy_minus_sign:                             | N/A                                            |
| `ordering`                                     | *Optional[str]*                                | :heavy_minus_sign:                             | Which field to use when ordering the results.  |
| `search`                                       | *Optional[str]*                                | :heavy_minus_sign:                             | A search term.                                 |
| `page`                                         | *Optional[int]*                                | :heavy_minus_sign:                             | A page number within the paginated result set. |
| `limit`                                        | *Optional[int]*                                | :heavy_minus_sign:                             | Number of results to return per page.          |