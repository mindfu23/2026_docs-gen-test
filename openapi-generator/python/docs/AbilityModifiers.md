# AbilityModifiers


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
from open5e.models.ability_modifiers import AbilityModifiers

# TODO update the JSON string below
json = "{}"
# create an instance of AbilityModifiers from a JSON string
ability_modifiers_instance = AbilityModifiers.from_json(json)
# print the JSON string representation of the object
print(AbilityModifiers.to_json())

# convert the object into a dict
ability_modifiers_dict = ability_modifiers_instance.to_dict()
# create an instance of AbilityModifiers from a dict
ability_modifiers_from_dict = AbilityModifiers.from_dict(ability_modifiers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


