# CreatureAction

Much of the logic included in the GameContentSerializer is intended to support manipulating data returned by the serializer via query parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the item. | 
**desc** | **str** | Description of the game content item. Markdown. | [optional] 
**attacks** | [**List[CreatureActionAttack]**](CreatureActionAttack.md) |  | [readonly] 
**action_type** | **str** | The type of action used.  * &#x60;ACTION&#x60; - Action * &#x60;REACTION&#x60; - Reaction * &#x60;BONUS_ACTION&#x60; - Bonus Action * &#x60;LEGENDARY_ACTION&#x60; - Legendary Action * &#x60;LAIR_ACTION&#x60; - Lair Action | [optional] 
**order_in_statblock** | **int** | The position in the list of features that a feature appears in its source statblock | [optional] 
**legendary_action_cost** | **int** | null if not legendary, else, the number of legendary actions this costs. | [optional] 
**limited_to_form** | **str** | Description of form-based conditions for this action. | [optional] 
**usage_limits** | **Dict[str, object]** |  | [readonly] 

## Example

```python
from open5e.models.creature_action import CreatureAction

# TODO update the JSON string below
json = "{}"
# create an instance of CreatureAction from a JSON string
creature_action_instance = CreatureAction.from_json(json)
# print the JSON string representation of the object
print(CreatureAction.to_json())

# convert the object into a dict
creature_action_dict = creature_action_instance.to_dict()
# create an instance of CreatureAction from a dict
creature_action_from_dict = CreatureAction.from_dict(creature_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


