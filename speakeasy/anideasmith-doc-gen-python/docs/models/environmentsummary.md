# EnvironmentSummary

A slimmer EnvironmentSerializer, designed to serialize Enviroment FKs on
other serializers. ie. The `environments` field on the CreatureSerializer.
Not intended to be used directly in a ModelViewset.


## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `name`                   | *str*                    | :heavy_check_mark:       | Name of the item.        |
| `key`                    | *str*                    | :heavy_check_mark:       | Unique key for the Item. |