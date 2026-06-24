# SkillBonuses


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
from open5e.models.skill_bonuses import SkillBonuses

# TODO update the JSON string below
json = "{}"
# create an instance of SkillBonuses from a JSON string
skill_bonuses_instance = SkillBonuses.from_json(json)
# print the JSON string representation of the object
print(SkillBonuses.to_json())

# convert the object into a dict
skill_bonuses_dict = skill_bonuses_instance.to_dict()
# create an instance of SkillBonuses from a dict
skill_bonuses_from_dict = SkillBonuses.from_dict(skill_bonuses_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


