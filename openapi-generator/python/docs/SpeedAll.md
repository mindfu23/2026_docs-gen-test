# SpeedAll


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**unit** | **str** |  | [readonly] 
**walk** | **int** |  | 
**crawl** | **int** |  | 
**hover** | **bool** |  | 
**fly** | **int** |  | 
**burrow** | **int** |  | 
**climb** | **int** |  | 
**swim** | **int** |  | 

## Example

```python
from open5e.models.speed_all import SpeedAll

# TODO update the JSON string below
json = "{}"
# create an instance of SpeedAll from a JSON string
speed_all_instance = SpeedAll.from_json(json)
# print the JSON string representation of the object
print(SpeedAll.to_json())

# convert the object into a dict
speed_all_dict = speed_all_instance.to_dict()
# create an instance of SpeedAll from a dict
speed_all_from_dict = SpeedAll.from_dict(speed_all_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


