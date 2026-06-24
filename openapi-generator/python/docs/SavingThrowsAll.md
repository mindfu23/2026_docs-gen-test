# SavingThrowsAll


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
from open5e.models.saving_throws_all import SavingThrowsAll

# TODO update the JSON string below
json = "{}"
# create an instance of SavingThrowsAll from a JSON string
saving_throws_all_instance = SavingThrowsAll.from_json(json)
# print the JSON string representation of the object
print(SavingThrowsAll.to_json())

# convert the object into a dict
saving_throws_all_dict = saving_throws_all_instance.to_dict()
# create an instance of SavingThrowsAll from a dict
saving_throws_all_from_dict = SavingThrowsAll.from_dict(saving_throws_all_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


