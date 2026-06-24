# CharacterClassSummary

A slimmer CharacterClassSerializer, designed to serialize Class FKs on
other serializers. ie. The `subclass_of` field on the
CharacterClassSerializer serializer. Not intended to be used directly in a
ModelViewset.


## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `name`                   | *str*                    | :heavy_check_mark:       | Name of the item.        |
| `key`                    | *str*                    | :heavy_check_mark:       | Unique key for the Item. |