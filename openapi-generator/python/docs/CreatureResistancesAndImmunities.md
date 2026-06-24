# CreatureResistancesAndImmunities

This serializer formats a Creature's damage modifier as a single obj

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**damage_immunities_display** | **str** |  | 
**damage_immunities** | [**List[DamageTypeSummary]**](DamageTypeSummary.md) |  | 
**damage_resistances_display** | **str** |  | 
**damage_resistances** | [**List[DamageTypeSummary]**](DamageTypeSummary.md) |  | 
**damage_vulnerabilities_display** | **str** |  | 
**damage_vulnerabilities** | [**List[DamageTypeSummary]**](DamageTypeSummary.md) |  | 
**condition_immunities_display** | **str** |  | 
**condition_immunities** | [**List[ConditionSummary]**](ConditionSummary.md) |  | 

## Example

```python
from open5e.models.creature_resistances_and_immunities import CreatureResistancesAndImmunities

# TODO update the JSON string below
json = "{}"
# create an instance of CreatureResistancesAndImmunities from a JSON string
creature_resistances_and_immunities_instance = CreatureResistancesAndImmunities.from_json(json)
# print the JSON string representation of the object
print(CreatureResistancesAndImmunities.to_json())

# convert the object into a dict
creature_resistances_and_immunities_dict = creature_resistances_and_immunities_instance.to_dict()
# create an instance of CreatureResistancesAndImmunities from a dict
creature_resistances_and_immunities_from_dict = CreatureResistancesAndImmunities.from_dict(creature_resistances_and_immunities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


