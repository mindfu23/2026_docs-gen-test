# ConditionSummary

A slimmer ConditionSerializer, designed to serialize Condition FKs on
other serializers. ie. The `condition_immunities` field on the Creature
serializer. Not intended to be used directly with in a ModelViewset.


## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `name`                   | *str*                    | :heavy_check_mark:       | Name of the item.        |
| `key`                    | *str*                    | :heavy_check_mark:       | Unique key for the Item. |