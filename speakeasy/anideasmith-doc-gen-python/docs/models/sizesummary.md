# SizeSummary

A slimmer SizeSerializer, designed to serialize Size FKs on other
serializers. ie. The `size` field on the CreatureSerializer. Not intended
to be used directly in a ModelViewset.


## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `name`                   | *str*                    | :heavy_check_mark:       | Name of the item.        |
| `key`                    | *str*                    | :heavy_check_mark:       | Unique key for the Item. |