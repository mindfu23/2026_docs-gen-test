# DocumentSummary

A slimmer DocumentSerializer, designed to serialize Documents FKs on other serializers. Not intended to be used directly with in a ModelViewset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the item. | 
**key** | **str** | Unique key for the Document. | 
**type** | **str** | Whether this Document is a published data source, or general resources  * &#x60;SOURCE&#x60; - Source * &#x60;MISC&#x60; - Miscellaneous | [optional] 
**display_name** | **str** |  | [readonly] 
**publisher** | [**PublisherSummary**](PublisherSummary.md) |  | 
**gamesystem** | [**GameSystemSummary**](GameSystemSummary.md) |  | 
**permalink** | **str** | Link to the document. | 

## Example

```python
from open5e.models.document_summary import DocumentSummary

# TODO update the JSON string below
json = "{}"
# create an instance of DocumentSummary from a JSON string
document_summary_instance = DocumentSummary.from_json(json)
# print the JSON string representation of the object
print(DocumentSummary.to_json())

# convert the object into a dict
document_summary_dict = document_summary_instance.to_dict()
# create an instance of DocumentSummary from a dict
document_summary_from_dict = DocumentSummary.from_dict(document_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


