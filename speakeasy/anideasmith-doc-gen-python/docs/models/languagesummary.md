# LanguageSummary

This serializer is used for FKs to the Language model from other
serializers. ie. for the languages spoken by creatures on the
CreatureSerializer.


## Fields

| Field                                           | Type                                            | Required                                        | Description                                     |
| ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- | ----------------------------------------------- |
| `name`                                          | *str*                                           | :heavy_check_mark:                              | Name of the item.                               |
| `key`                                           | *str*                                           | :heavy_check_mark:                              | Unique key for the Item.                        |
| `desc`                                          | *Optional[str]*                                 | :heavy_minus_sign:                              | Description of the game content item. Markdown. |