# SpellCastingOption


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | * &#x60;default&#x60; - Default * &#x60;ritual&#x60; - Ritual * &#x60;player_level_1&#x60; - Player Level 1 * &#x60;player_level_2&#x60; - Player Level 2 * &#x60;player_level_3&#x60; - Player Level 3 * &#x60;player_level_4&#x60; - Player Level 4 * &#x60;player_level_5&#x60; - Player Level 5 * &#x60;player_level_6&#x60; - Player Level 6 * &#x60;player_level_7&#x60; - Player Level 7 * &#x60;player_level_8&#x60; - Player Level 8 * &#x60;player_level_9&#x60; - Player Level 9 * &#x60;player_level_10&#x60; - Player Level 10 * &#x60;player_level_11&#x60; - Player Level 11 * &#x60;player_level_12&#x60; - Player Level 12 * &#x60;player_level_13&#x60; - Player Level 13 * &#x60;player_level_14&#x60; - Player Level 14 * &#x60;player_level_15&#x60; - Player Level 15 * &#x60;player_level_16&#x60; - Player Level 16 * &#x60;player_level_17&#x60; - Player Level 17 * &#x60;player_level_18&#x60; - Player Level 18 * &#x60;player_level_19&#x60; - Player Level 19 * &#x60;player_level_20&#x60; - Player Level 20 * &#x60;slot_level_1&#x60; - Spell Slot Level 1 * &#x60;slot_level_2&#x60; - Spell SlotLevel 2 * &#x60;slot_level_3&#x60; - Spell Slot Level 3 * &#x60;slot_level_4&#x60; - Spell Slot Level 4 * &#x60;slot_level_5&#x60; - Spell Slot Level 5 * &#x60;slot_level_6&#x60; - Spell Slot Level 6 * &#x60;slot_level_7&#x60; - Spell Slot Level 7 * &#x60;slot_level_8&#x60; - Spell Slot Level 8 * &#x60;slot_level_9&#x60; - Spell Slot Level 9 | 
**damage_roll** | **str** | The damage roll for the field in dice notation. Empty string if no roll. | [optional] 
**target_count** | **int** | Integer representing the count of targets. | [optional] 
**duration** | **str** | Description of the duration of the effect such as \&quot;instantaneous\&quot; or \&quot;Up to 1 minute\&quot; | [optional] 
**range** | **str** | Description of the range of the spell. | [optional] 
**concentration** | **bool** | Whether the effect requires concentration to be maintained. | [optional] 
**shape_size** | **int** | Used to measure distance. | [optional] 
**desc** | **str** | Description of complex casting option effects that cannot be captured in other fields. | [optional] 

## Example

```python
from open5e.models.spell_casting_option import SpellCastingOption

# TODO update the JSON string below
json = "{}"
# create an instance of SpellCastingOption from a JSON string
spell_casting_option_instance = SpellCastingOption.from_json(json)
# print the JSON string representation of the object
print(SpellCastingOption.to_json())

# convert the object into a dict
spell_casting_option_dict = spell_casting_option_instance.to_dict()
# create an instance of SpellCastingOption from a dict
spell_casting_option_from_dict = SpellCastingOption.from_dict(spell_casting_option_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


