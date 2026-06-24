# SpellSchoolSummary

A slimmer SpellSchoolSerializer, designed to serialize Spell School FKs on
other serializers. ie. The `school` field on the SpellSerializer. Not
intended to be used directly in a ModelViewset.


## Fields

| Field                    | Type                     | Required                 | Description              |
| ------------------------ | ------------------------ | ------------------------ | ------------------------ |
| `name`                   | *str*                    | :heavy_check_mark:       | Name of the item.        |
| `key`                    | *str*                    | :heavy_check_mark:       | Unique key for the Item. |