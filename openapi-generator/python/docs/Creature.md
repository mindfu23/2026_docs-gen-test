# Creature

The serializer for the Creature object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Unique key for the Item. | [readonly] 
**name** | **str** | Name of the item. | 
**document** | [**DocumentSummary**](DocumentSummary.md) |  | 
**type** | [**CreatureTypeSummary**](CreatureTypeSummary.md) |  | 
**size** | [**SizeSummary**](SizeSummary.md) |  | 
**challenge_rating** | **float** | Challenge Rating field as a decimal number. | 
**proficiency_bonus** | **int** | The Creauture&#39;s Proficiency Bonus | [optional] 
**speed** | [**Speed**](Speed.md) |  | [readonly] 
**speed_all** | [**SpeedAll**](SpeedAll.md) |  | [readonly] 
**category** | **str** | What category this creature belongs to. | 
**subcategory** | **str** | What subcategory this creature belongs to. | [optional] 
**alignment** | **str** | The creature&#39;s allowed alignments. | 
**languages** | [**CreatureLanguage**](CreatureLanguage.md) |  | 
**armor_class** | **int** | Integer representing the armor class of the object. | [optional] 
**armor_detail** | **str** | Represents parathetical text that follows an objects AC | [optional] 
**hit_points** | **int** | Integer representing the hit points of the object. | [optional] 
**hit_dice** | **str** | Dice string representing a way to calculate hit points. | [optional] 
**experience_points** | **int** |  | [readonly] 
**ability_scores** | [**AbilityScores**](AbilityScores.md) |  | [readonly] 
**modifiers** | [**AbilityModifiers**](AbilityModifiers.md) |  | [readonly] 
**initiative_bonus** | **int** |  | [readonly] 
**saving_throws** | [**SavingThrows**](SavingThrows.md) |  | [readonly] 
**saving_throws_all** | [**SavingThrowsAll**](SavingThrowsAll.md) |  | [readonly] 
**skill_bonuses** | [**SkillBonuses**](SkillBonuses.md) |  | [readonly] 
**skill_bonuses_all** | [**SkillBonusesAll**](SkillBonusesAll.md) |  | [readonly] 
**passive_perception** | **int** | Integer representing the passive perception ability. | [optional] 
**resistances_and_immunities** | [**CreatureResistancesAndImmunities**](CreatureResistancesAndImmunities.md) |  | 
**normal_sight_range** | **int** | Used to measure distance. | [optional] 
**darkvision_range** | **int** | Used to measure distance. | [optional] 
**blindsight_range** | **int** | Used to measure distance. | [optional] 
**tremorsense_range** | **int** | Used to measure distance. | [optional] 
**truesight_range** | **int** | Used to measure distance. | [optional] 
**actions** | [**List[CreatureAction]**](CreatureAction.md) |  | 
**traits** | [**List[CreatureTrait]**](CreatureTrait.md) |  | [readonly] 
**creaturesets** | **List[str]** |  | 
**environments** | [**List[EnvironmentSummary]**](EnvironmentSummary.md) |  | 
**illustration** | [**ImageSummary**](ImageSummary.md) |  | 
**crossreferences** | [**CrossReferences**](CrossReferences.md) |  | [readonly] 

## Example

```python
from open5e.models.creature import Creature

# TODO update the JSON string below
json = "{}"
# create an instance of Creature from a JSON string
creature_instance = Creature.from_json(json)
# print the JSON string representation of the object
print(Creature.to_json())

# convert the object into a dict
creature_dict = creature_instance.to_dict()
# create an instance of Creature from a dict
creature_from_dict = Creature.from_dict(creature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


