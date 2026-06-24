# PaginatedCharacterClassList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[CharacterClass]**](CharacterClass.md) |  | 

## Example

```python
from open5e.models.paginated_character_class_list import PaginatedCharacterClassList

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedCharacterClassList from a JSON string
paginated_character_class_list_instance = PaginatedCharacterClassList.from_json(json)
# print the JSON string representation of the object
print(PaginatedCharacterClassList.to_json())

# convert the object into a dict
paginated_character_class_list_dict = paginated_character_class_list_instance.to_dict()
# create an instance of PaginatedCharacterClassList from a dict
paginated_character_class_list_from_dict = PaginatedCharacterClassList.from_dict(paginated_character_class_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


