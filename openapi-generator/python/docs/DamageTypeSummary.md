# DamageTypeSummary

A slimmer DamageTypeSerializer, designed to serialize DamageType FKs on other serializers. Not intended to be used directly with in a ModelViewset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the item. | 
**key** | **str** | Unique key for the Item. | 

## Example

```python
from open5e.models.damage_type_summary import DamageTypeSummary

# TODO update the JSON string below
json = "{}"
# create an instance of DamageTypeSummary from a JSON string
damage_type_summary_instance = DamageTypeSummary.from_json(json)
# print the JSON string representation of the object
print(DamageTypeSummary.to_json())

# convert the object into a dict
damage_type_summary_dict = damage_type_summary_instance.to_dict()
# create an instance of DamageTypeSummary from a dict
damage_type_summary_from_dict = DamageTypeSummary.from_dict(damage_type_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


