# SavingThrows


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
from open5e.models.saving_throws import SavingThrows

# TODO update the JSON string below
json = "{}"
# create an instance of SavingThrows from a JSON string
saving_throws_instance = SavingThrows.from_json(json)
# print the JSON string representation of the object
print(SavingThrows.to_json())

# convert the object into a dict
saving_throws_dict = saving_throws_instance.to_dict()
# create an instance of SavingThrows from a dict
saving_throws_from_dict = SavingThrows.from_dict(saving_throws_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


