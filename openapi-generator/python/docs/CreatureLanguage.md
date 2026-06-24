# CreatureLanguage

Much of the logic included in the GameContentSerializer is intended to support manipulating data returned by the serializer via query parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**as_string** | **str** |  | 
**data** | [**List[LanguageSummary]**](LanguageSummary.md) |  | 

## Example

```python
from open5e.models.creature_language import CreatureLanguage

# TODO update the JSON string below
json = "{}"
# create an instance of CreatureLanguage from a JSON string
creature_language_instance = CreatureLanguage.from_json(json)
# print the JSON string representation of the object
print(CreatureLanguage.to_json())

# convert the object into a dict
creature_language_dict = creature_language_instance.to_dict()
# create an instance of CreatureLanguage from a dict
creature_language_from_dict = CreatureLanguage.from_dict(creature_language_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


