# AbilityScores


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**strength** | **int** |  | 
**dexterity** | **int** |  | 
**constitution** | **int** |  | 
**intelligence** | **int** |  | 
**wisdom** | **int** |  | 
**charisma** | **int** |  | 

## Example

```python
from open5e.models.ability_scores import AbilityScores

# TODO update the JSON string below
json = "{}"
# create an instance of AbilityScores from a JSON string
ability_scores_instance = AbilityScores.from_json(json)
# print the JSON string representation of the object
print(AbilityScores.to_json())

# convert the object into a dict
ability_scores_dict = ability_scores_instance.to_dict()
# create an instance of AbilityScores from a dict
ability_scores_from_dict = AbilityScores.from_dict(ability_scores_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


