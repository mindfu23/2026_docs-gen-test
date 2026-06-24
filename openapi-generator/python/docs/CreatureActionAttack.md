# CreatureActionAttack

Much of the logic included in the GameContentSerializer is intended to support manipulating data returned by the serializer via query parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the item. | 
**attack_type** | **str** | Whether this is a Weapon or Spell attack.  * &#x60;SPELL&#x60; - Spell * &#x60;WEAPON&#x60; - Weapon | 
**to_hit_mod** | **int** | Attack roll modifier. | 
**reach** | **int** | Used to measure distance. | [optional] 
**range** | **int** | Used to measure distance. | [optional] 
**long_range** | **int** | Used to measure distance. | [optional] 
**target_creature_only** | **bool** | If an attack can target creatures only and not objects. | 
**damage_die_count** | **int** | The number of dice to roll for damage. | [optional] 
**damage_die_type** | **str** | What kind of die to roll for damage.  * &#x60;D3&#x60; - d3 * &#x60;D4&#x60; - d4 * &#x60;D6&#x60; - d6 * &#x60;D8&#x60; - d8 * &#x60;D10&#x60; - d10 * &#x60;D12&#x60; - d12 * &#x60;D20&#x60; - d20 * &#x60;d3&#x60; - d3 * &#x60;d4&#x60; - d4 * &#x60;d6&#x60; - d6 * &#x60;d8&#x60; - d8 * &#x60;d10&#x60; - d10 * &#x60;d12&#x60; - d12 * &#x60;d20&#x60; - d20 | [optional] 
**damage_bonus** | **int** | Damage roll modifier. | [optional] 
**damage_type** | [**DamageTypeSummary**](DamageTypeSummary.md) |  | 
**extra_damage_die_count** | **int** | The number of dice to roll for damage. | [optional] 
**extra_damage_die_type** | **str** | What kind of die to roll for damage.  * &#x60;D3&#x60; - d3 * &#x60;D4&#x60; - d4 * &#x60;D6&#x60; - d6 * &#x60;D8&#x60; - d8 * &#x60;D10&#x60; - d10 * &#x60;D12&#x60; - d12 * &#x60;D20&#x60; - d20 * &#x60;d3&#x60; - d3 * &#x60;d4&#x60; - d4 * &#x60;d6&#x60; - d6 * &#x60;d8&#x60; - d8 * &#x60;d10&#x60; - d10 * &#x60;d12&#x60; - d12 * &#x60;d20&#x60; - d20 | [optional] 
**extra_damage_bonus** | **int** | Damage roll modifier. | [optional] 
**extra_damage_type** | [**DamageTypeSummary**](DamageTypeSummary.md) |  | 
**distance_unit** | **str** |  | [readonly] 

## Example

```python
from open5e.models.creature_action_attack import CreatureActionAttack

# TODO update the JSON string below
json = "{}"
# create an instance of CreatureActionAttack from a JSON string
creature_action_attack_instance = CreatureActionAttack.from_json(json)
# print the JSON string representation of the object
print(CreatureActionAttack.to_json())

# convert the object into a dict
creature_action_attack_dict = creature_action_attack_instance.to_dict()
# create an instance of CreatureActionAttack from a dict
creature_action_attack_from_dict = CreatureActionAttack.from_dict(creature_action_attack_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


