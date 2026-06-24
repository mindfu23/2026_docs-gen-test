# GameSystemSummary

A slimmer GameSystemSerializer, designed to serialize GameSystem FKs on other serializers. Not intended to be used directly with in a ModelViewset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the item. | 
**key** | **str** | Unique key for the gamesystem the document was published for. | 

## Example

```python
from open5e.models.game_system_summary import GameSystemSummary

# TODO update the JSON string below
json = "{}"
# create an instance of GameSystemSummary from a JSON string
game_system_summary_instance = GameSystemSummary.from_json(json)
# print the JSON string representation of the object
print(GameSystemSummary.to_json())

# convert the object into a dict
game_system_summary_dict = game_system_summary_instance.to_dict()
# create an instance of GameSystemSummary from a dict
game_system_summary_from_dict = GameSystemSummary.from_dict(game_system_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


