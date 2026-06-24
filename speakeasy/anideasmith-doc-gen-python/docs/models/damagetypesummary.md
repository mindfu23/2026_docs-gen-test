# DamageTypeSummary

A slimmer DamageTypeSerializer, designed to serialize DamageType FKs on
other serializers. Not intended to be used directly with in a ModelViewset.


## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `name`                   | *str*                    | :heavy_check_mark:       | Name of the item.        |
| `key`                    | *str*                    | :heavy_check_mark:       | Unique key for the Item. |