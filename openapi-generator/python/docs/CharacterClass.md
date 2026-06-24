# CharacterClass

Much of the logic included in the GameContentSerializer is intended to support manipulating data returned by the serializer via query parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Unique key for the Item. | [readonly] 
**features** | [**List[ClassFeature]**](ClassFeature.md) |  | [readonly] 
**hit_points** | [**HitPoints**](HitPoints.md) |  | [readonly] 
**document** | [**DocumentSummary**](DocumentSummary.md) |  | 
**saving_throws** | [**List[AbilitySummary]**](AbilitySummary.md) |  | 
**subclass_of** | [**CharacterClassSummary**](CharacterClassSummary.md) |  | 
**name** | **str** | Name of the item. | 
**desc** | **str** | Description of the game content item. Markdown. | [optional] 
**hit_dice** | **str** | Dice notation hit dice option.  * &#x60;D3&#x60; - d3 * &#x60;D4&#x60; - d4 * &#x60;D6&#x60; - d6 * &#x60;D8&#x60; - d8 * &#x60;D10&#x60; - d10 * &#x60;D12&#x60; - d12 * &#x60;D20&#x60; - d20 * &#x60;d3&#x60; - d3 * &#x60;d4&#x60; - d4 * &#x60;d6&#x60; - d6 * &#x60;d8&#x60; - d8 * &#x60;d10&#x60; - d10 * &#x60;d12&#x60; - d12 * &#x60;d20&#x60; - d20 | [optional] 
**caster_type** | **str** | Type of caster. Options are full, half, none.  * &#x60;FULL&#x60; - Full * &#x60;HALF&#x60; - Half * &#x60;PACT&#x60; - Pact * &#x60;NONE&#x60; - None | [optional] 
**primary_abilities** | **List[str]** | Primary abilities for thie class | 
**crossreferences** | [**CrossReferences**](CrossReferences.md) |  | [readonly] 

## Example

```python
from open5e.models.character_class import CharacterClass

# TODO update the JSON string below
json = "{}"
# create an instance of CharacterClass from a JSON string
character_class_instance = CharacterClass.from_json(json)
# print the JSON string representation of the object
print(CharacterClass.to_json())

# convert the object into a dict
character_class_dict = character_class_instance.to_dict()
# create an instance of CharacterClass from a dict
character_class_from_dict = CharacterClass.from_dict(character_class_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


