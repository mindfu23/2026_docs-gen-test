# ClassFeaturePrefetch

Much of the logic included in the GameContentSerializer is intended to support manipulating data returned by the serializer via query parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**level** | **int** |  | 
**detail** | **str** |  | [optional] 
**column_value** | **str** | The value that should be displayed in the table column (where applicable). | [optional] 

## Example

```python
from open5e.models.class_feature_prefetch import ClassFeaturePrefetch

# TODO update the JSON string below
json = "{}"
# create an instance of ClassFeaturePrefetch from a JSON string
class_feature_prefetch_instance = ClassFeaturePrefetch.from_json(json)
# print the JSON string representation of the object
print(ClassFeaturePrefetch.to_json())

# convert the object into a dict
class_feature_prefetch_dict = class_feature_prefetch_instance.to_dict()
# create an instance of ClassFeaturePrefetch from a dict
class_feature_prefetch_from_dict = ClassFeaturePrefetch.from_dict(class_feature_prefetch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


