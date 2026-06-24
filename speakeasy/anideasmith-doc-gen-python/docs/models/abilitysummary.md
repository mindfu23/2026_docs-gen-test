# AbilitySummary

A slimmer AbilitySerializer, designed to serialize Ability FKs on other
serializers. ie. The `saving_throws` field on CharacterClassSerializer. Not
intended to be used directly with in a ModelViewset.


## Fields

| Field              | Type               | Required           | Description        |
| ------------------ | ------------------ | ------------------ | ------------------ |
| `name`             | *str*              | :heavy_check_mark: | Name of the item.  |