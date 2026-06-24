# Spell

Much of the logic included in the GameContentSerializer is intended to support manipulating data returned by the serializer via query parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Unique key for the Item. | [readonly] 
**document** | [**DocumentSummary**](DocumentSummary.md) |  | 
**casting_options** | [**List[SpellCastingOption]**](SpellCastingOption.md) |  | 
**school** | [**SpellSchoolSummary**](SpellSchoolSummary.md) |  | 
**classes** | [**List[CharacterClassSummary]**](CharacterClassSummary.md) |  | 
**range_unit** | **str** |  | [readonly] 
**shape_size_unit** | **str** |  | [readonly] 
**name** | **str** | Name of the item. | 
**desc** | **str** | Description of the game content item. Markdown. | [optional] 
**level** | **int** | Integer representing the default slot level required by the spell. | 
**higher_level** | **str** | Description of casting the spell at a different level. | [optional] 
**target_type** | **str** | Spell target type key.  * &#x60;creature&#x60; - Creature * &#x60;object&#x60; - Object * &#x60;point&#x60; - Point * &#x60;area&#x60; - Area | [optional] 
**range_text** | **str** | Spell target range. | 
**range** | **int** | Used to measure distance. | [optional] 
**ritual** | **bool** | Whether or not the spell can be cast as a ritual. | [optional] 
**casting_time** | **str** | Casting time key, such as &#39;action&#39;  * &#x60;reaction&#x60; - Reaction * &#x60;bonus-action&#x60; - 1 Bonus Action * &#x60;action&#x60; - 1 Action * &#x60;turn&#x60; - 1 Turn * &#x60;round&#x60; - 1 Round * &#x60;1minute&#x60; - 1 Minute * &#x60;5minutes&#x60; - 5 Minutes * &#x60;10minutes&#x60; - 10 Minutes * &#x60;1hour&#x60; - 1 Hour * &#x60;4hours&#x60; - 4 Hours * &#x60;7hours&#x60; - 7 Hours * &#x60;8hours&#x60; - 8 Hours * &#x60;9hours&#x60; - 9 Hours * &#x60;12hours&#x60; - 12 Hours * &#x60;24hours&#x60; - 24 Hours * &#x60;1week&#x60; - 1 Week | 
**reaction_condition** | **str** | The conditions describing when a reaction spell can be cast | [optional] 
**verbal** | **bool** | Whether or not casting the spell requires a verbal component. | [optional] 
**somatic** | **bool** | Whether or not casting the spell requires a verbal component. | [optional] 
**material** | **bool** | Whether or not casting the spell requires a verbal component. | [optional] 
**material_specified** | **str** | Description of the material specified for the spell. | [optional] 
**material_cost** | **decimal.Decimal** | Number representing the cost of the materials of the spell. | [optional] 
**material_consumed** | **bool** | Whether or the material component is consumed during the casting. | [optional] 
**target_count** | **int** | Integer representing the count of targets. | [optional] 
**saving_throw_ability** | **str** | Given the spell requires a saving throw, which ability is targeted. Empty string if no saving throw. | [optional] 
**attack_roll** | **bool** | Whether or not the spell effect requires an attack roll. | [optional] 
**damage_roll** | **str** | The damage roll for the field in dice notation. Empty string if no roll. | [optional] 
**damage_types** | **object** | The types of damage done by the spell in a list. | [optional] 
**duration** | **str** | Description of the duration of the effect such as \&quot;instantaneous\&quot; or \&quot;1 minute\&quot;  * &#x60;instantaneous&#x60; - instantaneous * &#x60;instantaneous or special&#x60; - instantaneous or special * &#x60;1 turn&#x60; - 1 turn * &#x60;1 round&#x60; - 1 round * &#x60;concentration + 1 round&#x60; - concentration + 1 round * &#x60;2 rounds&#x60; - 2 rounds * &#x60;3 rounds&#x60; - 3 rounds * &#x60;4 rounds&#x60; - 4 rounds * &#x60;1d4+2 rounds&#x60; - 1d4+2 rounds * &#x60;5 rounds&#x60; - 5 rounds * &#x60;6 rounds&#x60; - 6 rounds * &#x60;10 rounds&#x60; - 10 rounds * &#x60;up to 1 minute&#x60; - up to 1 minute * &#x60;1 minute&#x60; - 1 minute * &#x60;1 minute, or until expended&#x60; - 1 minute, or until expended * &#x60;1 minute, until expended&#x60; - 1 minute, until expended * &#x60;5 minutes&#x60; - 5 minutes * &#x60;10 minutes&#x60; - 10 minutes * &#x60;1 minute or 1 hour&#x60; - 1 minute or 1 hour * &#x60;up to 1 hour&#x60; - up to 1 hour * &#x60;1 hour&#x60; - 1 hour * &#x60;1 hour or until triggered&#x60; - 1 hour or until triggered * &#x60;2 hours&#x60; - 2 hours * &#x60;3 hours&#x60; - 3 hours * &#x60;1d10 hours&#x60; - 1d10 hours * &#x60;6 hours&#x60; - 6 hours * &#x60;2-12 hours&#x60; - 2-12 hours * &#x60;up to 8 hours&#x60; - up to 8 hours * &#x60;8 hours&#x60; - 8 hours * &#x60;1 hour/caster level&#x60; - 1 hour/caster level * &#x60;10 hours&#x60; - 10 hours * &#x60;12 hours&#x60; - 12 hours * &#x60;24 hours or until the target attempts a third death saving throw&#x60; - 24 hours or until the target attempts a third death saving throw * &#x60;24 hours&#x60; - 24 hours * &#x60;1 day&#x60; - 1 day * &#x60;3 days&#x60; - 3 days * &#x60;5 days&#x60; - 5 days * &#x60;7 days&#x60; - 7 days * &#x60;10 days&#x60; - 10 days * &#x60;13 days&#x60; - 13 days * &#x60;30 days&#x60; - 30 days * &#x60;1 year&#x60; - 1 year * &#x60;special&#x60; - special * &#x60;until dispelled or destroyed&#x60; - until dispelled or destroyed * &#x60;until destroyed&#x60; - until destroyed * &#x60;until dispelled&#x60; - until dispelled * &#x60;until cured or dispelled&#x60; - until cured or dispelled * &#x60;until dispelled or triggered&#x60; - until dispelled or triggered * &#x60;permanent until discharged&#x60; - permanent until discharged * &#x60;permanent; one generation&#x60; - permanent; one generation * &#x60;permanent&#x60; - permanent | 
**shape_type** | **str** | The shape of the area of effect.  * &#x60;cone&#x60; - Cone * &#x60;cube&#x60; - Cube * &#x60;cylinder&#x60; - Cylinder * &#x60;line&#x60; - Line * &#x60;sphere&#x60; - sphere | [optional] 
**shape_size** | **int** | Used to measure distance. | [optional] 
**concentration** | **bool** | Whether the effect requires concentration to be maintained. | [optional] 
**crossreferences** | [**CrossReferences**](CrossReferences.md) |  | [readonly] 

## Example

```python
from open5e.models.spell import Spell

# TODO update the JSON string below
json = "{}"
# create an instance of Spell from a JSON string
spell_instance = Spell.from_json(json)
# print the JSON string representation of the object
print(Spell.to_json())

# convert the object into a dict
spell_dict = spell_instance.to_dict()
# create an instance of Spell from a dict
spell_from_dict = Spell.from_dict(spell_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


