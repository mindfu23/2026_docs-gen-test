# CreatureTypeSummary

A slimmer CreatureTypeSerializer, designed to serialize CreatureType FKs on other serializers . Not intended to be used directly with in a ModelViewset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the item. | 
**key** | **str** | Unique key for the Item. | 

## Example

```python
from open5e.models.creature_type_summary import CreatureTypeSummary

# TODO update the JSON string below
json = "{}"
# create an instance of CreatureTypeSummary from a JSON string
creature_type_summary_instance = CreatureTypeSummary.from_json(json)
# print the JSON string representation of the object
print(CreatureTypeSummary.to_json())

# convert the object into a dict
creature_type_summary_dict = creature_type_summary_instance.to_dict()
# create an instance of CreatureTypeSummary from a dict
creature_type_summary_from_dict = CreatureTypeSummary.from_dict(creature_type_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


