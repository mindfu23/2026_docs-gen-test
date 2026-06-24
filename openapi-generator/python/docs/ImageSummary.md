# ImageSummary

Much of the logic included in the GameContentSerializer is intended to support manipulating data returned by the serializer via query parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the item. | 
**key** | **str** | Unique key for the Item. | 
**file_url** | **str** | Returns a relative path to the related file. | [readonly] 
**alt_text** | **str** | A short textual description of the image. Important for accessibility | 
**attribution** | **str** | Attribution information for this image. Who drew it and where we can find more of thier work? | 

## Example

```python
from open5e.models.image_summary import ImageSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ImageSummary from a JSON string
image_summary_instance = ImageSummary.from_json(json)
# print the JSON string representation of the object
print(ImageSummary.to_json())

# convert the object into a dict
image_summary_dict = image_summary_instance.to_dict()
# create an instance of ImageSummary from a dict
image_summary_from_dict = ImageSummary.from_dict(image_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


