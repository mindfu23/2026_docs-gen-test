# CrossReferences


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**to** | [**List[CrossReferenceLink]**](CrossReferenceLink.md) |  | 

## Example

```python
from open5e.models.cross_references import CrossReferences

# TODO update the JSON string below
json = "{}"
# create an instance of CrossReferences from a JSON string
cross_references_instance = CrossReferences.from_json(json)
# print the JSON string representation of the object
print(CrossReferences.to_json())

# convert the object into a dict
cross_references_dict = cross_references_instance.to_dict()
# create an instance of CrossReferences from a dict
cross_references_from_dict = CrossReferences.from_dict(cross_references_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


