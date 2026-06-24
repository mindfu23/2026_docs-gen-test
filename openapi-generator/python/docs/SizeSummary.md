# SizeSummary

A slimmer SizeSerializer, designed to serialize Size FKs on other serializers. ie. The `size` field on the CreatureSerializer. Not intended to be used directly in a ModelViewset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the item. | 
**key** | **str** | Unique key for the Item. | 

## Example

```python
from open5e.models.size_summary import SizeSummary

# TODO update the JSON string below
json = "{}"
# create an instance of SizeSummary from a JSON string
size_summary_instance = SizeSummary.from_json(json)
# print the JSON string representation of the object
print(SizeSummary.to_json())

# convert the object into a dict
size_summary_dict = size_summary_instance.to_dict()
# create an instance of SizeSummary from a dict
size_summary_from_dict = SizeSummary.from_dict(size_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


