# PaginatedSpellList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[Spell]**](Spell.md) |  | 

## Example

```python
from open5e.models.paginated_spell_list import PaginatedSpellList

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedSpellList from a JSON string
paginated_spell_list_instance = PaginatedSpellList.from_json(json)
# print the JSON string representation of the object
print(PaginatedSpellList.to_json())

# convert the object into a dict
paginated_spell_list_dict = paginated_spell_list_instance.to_dict()
# create an instance of PaginatedSpellList from a dict
paginated_spell_list_from_dict = PaginatedSpellList.from_dict(paginated_spell_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


