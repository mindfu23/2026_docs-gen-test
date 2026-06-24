# AbilitySummary

A slimmer AbilitySerializer, designed to serialize Ability FKs on other serializers. ie. The `saving_throws` field on CharacterClassSerializer. Not intended to be used directly with in a ModelViewset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the item. | 

## Example

```python
from open5e.models.ability_summary import AbilitySummary

# TODO update the JSON string below
json = "{}"
# create an instance of AbilitySummary from a JSON string
ability_summary_instance = AbilitySummary.from_json(json)
# print the JSON string representation of the object
print(AbilitySummary.to_json())

# convert the object into a dict
ability_summary_dict = ability_summary_instance.to_dict()
# create an instance of AbilitySummary from a dict
ability_summary_from_dict = AbilitySummary.from_dict(ability_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


