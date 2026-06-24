# SkillBonusesAll


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**acrobatics** | **int** |  | 
**animal_handling** | **int** |  | 
**arcana** | **int** |  | 
**athletics** | **int** |  | 
**deception** | **int** |  | 
**history** | **int** |  | 
**insight** | **int** |  | 
**intimidation** | **int** |  | 
**investigation** | **int** |  | 
**medicine** | **int** |  | 
**nature** | **int** |  | 
**perception** | **int** |  | 
**performance** | **int** |  | 
**persuasion** | **int** |  | 
**religion** | **int** |  | 
**sleight_of_hand** | **int** |  | 
**stealth** | **int** |  | 
**survival** | **int** |  | 

## Example

```python
from open5e.models.skill_bonuses_all import SkillBonusesAll

# TODO update the JSON string below
json = "{}"
# create an instance of SkillBonusesAll from a JSON string
skill_bonuses_all_instance = SkillBonusesAll.from_json(json)
# print the JSON string representation of the object
print(SkillBonusesAll.to_json())

# convert the object into a dict
skill_bonuses_all_dict = skill_bonuses_all_instance.to_dict()
# create an instance of SkillBonusesAll from a dict
skill_bonuses_all_from_dict = SkillBonusesAll.from_dict(skill_bonuses_all_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


