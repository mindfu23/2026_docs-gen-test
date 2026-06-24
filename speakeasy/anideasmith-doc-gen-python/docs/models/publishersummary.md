# PublisherSummary

A slimmer PublisherSerializer, designed to serialize Publisher FKs on other
serializers. Not intended to be used directly with in a ModelViewset.


## Fields

| Field                                       | Type                                        | Required                                    | Description                                 |
| ------------------------------------------- | ------------------------------------------- | ------------------------------------------- | ------------------------------------------- |
| `name`                                      | *str*                                       | :heavy_check_mark:                          | Name of the item.                           |
| `key`                                       | *str*                                       | :heavy_check_mark:                          | Unique key for the publishing organization. |