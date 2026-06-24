# EnvironmentSummary

A slimmer EnvironmentSerializer, designed to serialize Enviroment FKs on other serializers. ie. The `environments` field on the CreatureSerializer. Not intended to be used directly in a ModelViewset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the item. | 
**key** | **str** | Unique key for the Item. | 

## Example

```python
from open5e.models.environment_summary import EnvironmentSummary

# TODO update the JSON string below
json = "{}"
# create an instance of EnvironmentSummary from a JSON string
environment_summary_instance = EnvironmentSummary.from_json(json)
# print the JSON string representation of the object
print(EnvironmentSummary.to_json())

# convert the object into a dict
environment_summary_dict = environment_summary_instance.to_dict()
# create an instance of EnvironmentSummary from a dict
environment_summary_from_dict = EnvironmentSummary.from_dict(environment_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


