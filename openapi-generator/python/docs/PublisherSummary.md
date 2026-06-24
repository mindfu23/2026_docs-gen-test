# PublisherSummary

A slimmer PublisherSerializer, designed to serialize Publisher FKs on other serializers. Not intended to be used directly with in a ModelViewset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the item. | 
**key** | **str** | Unique key for the publishing organization. | 

## Example

```python
from open5e.models.publisher_summary import PublisherSummary

# TODO update the JSON string below
json = "{}"
# create an instance of PublisherSummary from a JSON string
publisher_summary_instance = PublisherSummary.from_json(json)
# print the JSON string representation of the object
print(PublisherSummary.to_json())

# convert the object into a dict
publisher_summary_dict = publisher_summary_instance.to_dict()
# create an instance of PublisherSummary from a dict
publisher_summary_from_dict = PublisherSummary.from_dict(publisher_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


