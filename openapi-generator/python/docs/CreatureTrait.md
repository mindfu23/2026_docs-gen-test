# CreatureTrait

Serializer for the Creature Trait object

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the item. | 
**desc** | **str** | Description of the game content item. Markdown. | [optional] 

## Example

```python
from open5e.models.creature_trait import CreatureTrait

# TODO update the JSON string below
json = "{}"
# create an instance of CreatureTrait from a JSON string
creature_trait_instance = CreatureTrait.from_json(json)
# print the JSON string representation of the object
print(CreatureTrait.to_json())

# convert the object into a dict
creature_trait_dict = creature_trait_instance.to_dict()
# create an instance of CreatureTrait from a dict
creature_trait_from_dict = CreatureTrait.from_dict(creature_trait_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


