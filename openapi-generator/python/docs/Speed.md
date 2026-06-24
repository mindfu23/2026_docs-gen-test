# Speed


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**walk** | **str** |  | [readonly] 
**fly** | **str** |  | [readonly] 
**swim** | **str** |  | [readonly] 
**climb** | **str** |  | [readonly] 
**burrow** | **str** |  | [readonly] 
**hover** | **bool** |  | 

## Example

```python
from open5e.models.speed import Speed

# TODO update the JSON string below
json = "{}"
# create an instance of Speed from a JSON string
speed_instance = Speed.from_json(json)
# print the JSON string representation of the object
print(Speed.to_json())

# convert the object into a dict
speed_dict = speed_instance.to_dict()
# create an instance of Speed from a dict
speed_from_dict = Speed.from_dict(speed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


