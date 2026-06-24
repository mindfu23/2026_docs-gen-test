# HitPoints


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hit_dice** | **int** |  | 
**hit_dice_name** | **str** |  | [readonly] 
**hit_points_at_1st_level** | **int** |  | 
**hit_points_at_higher_levels** | **int** |  | 

## Example

```python
from open5e.models.hit_points import HitPoints

# TODO update the JSON string below
json = "{}"
# create an instance of HitPoints from a JSON string
hit_points_instance = HitPoints.from_json(json)
# print the JSON string representation of the object
print(HitPoints.to_json())

# convert the object into a dict
hit_points_dict = hit_points_instance.to_dict()
# create an instance of HitPoints from a dict
hit_points_from_dict = HitPoints.from_dict(hit_points_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


