# CrossReferenceLink

One link in crossreferences.to; defines API shape and serialization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**anchor** | **str** |  | 
**url** | **str** |  | 

## Example

```python
from open5e.models.cross_reference_link import CrossReferenceLink

# TODO update the JSON string below
json = "{}"
# create an instance of CrossReferenceLink from a JSON string
cross_reference_link_instance = CrossReferenceLink.from_json(json)
# print the JSON string representation of the object
print(CrossReferenceLink.to_json())

# convert the object into a dict
cross_reference_link_dict = cross_reference_link_instance.to_dict()
# create an instance of CrossReferenceLink from a dict
cross_reference_link_from_dict = CrossReferenceLink.from_dict(cross_reference_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


