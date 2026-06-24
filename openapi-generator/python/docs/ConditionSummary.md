# ConditionSummary

A slimmer ConditionSerializer, designed to serialize Condition FKs on other serializers. ie. The `condition_immunities` field on the Creature serializer. Not intended to be used directly with in a ModelViewset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the item. | 
**key** | **str** | Unique key for the Item. | 

## Example

```python
from open5e.models.condition_summary import ConditionSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ConditionSummary from a JSON string
condition_summary_instance = ConditionSummary.from_json(json)
# print the JSON string representation of the object
print(ConditionSummary.to_json())

# convert the object into a dict
condition_summary_dict = condition_summary_instance.to_dict()
# create an instance of ConditionSummary from a dict
condition_summary_from_dict = ConditionSummary.from_dict(condition_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


