# ClassFeaturePrefetch

Much of the logic included in the GameContentSerializer is intended to
support manipulating data returned by the serializer via query parameters.


## Fields

| Field                                                                      | Type                                                                       | Required                                                                   | Description                                                                |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| `level`                                                                    | *int*                                                                      | :heavy_check_mark:                                                         | N/A                                                                        |
| `detail`                                                                   | *OptionalNullable[str]*                                                    | :heavy_minus_sign:                                                         | N/A                                                                        |
| `column_value`                                                             | *OptionalNullable[str]*                                                    | :heavy_minus_sign:                                                         | The value that should be displayed in the table column (where applicable). |