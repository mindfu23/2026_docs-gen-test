# CharacterClassSummary

A slimmer CharacterClassSerializer, designed to serialize Class FKs on other serializers. ie. The `subclass_of` field on the CharacterClassSerializer serializer. Not intended to be used directly in a ModelViewset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the item. | 
**key** | **str** | Unique key for the Item. | 

## Example

```python
from open5e.models.character_class_summary import CharacterClassSummary

# TODO update the JSON string below
json = "{}"
# create an instance of CharacterClassSummary from a JSON string
character_class_summary_instance = CharacterClassSummary.from_json(json)
# print the JSON string representation of the object
print(CharacterClassSummary.to_json())

# convert the object into a dict
character_class_summary_dict = character_class_summary_instance.to_dict()
# create an instance of CharacterClassSummary from a dict
character_class_summary_from_dict = CharacterClassSummary.from_dict(character_class_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


