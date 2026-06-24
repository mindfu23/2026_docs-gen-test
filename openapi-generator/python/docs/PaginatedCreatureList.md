# PaginatedCreatureList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** |  | 
**next** | **str** |  | [optional] 
**previous** | **str** |  | [optional] 
**results** | [**List[Creature]**](Creature.md) |  | 

## Example

```python
from open5e.models.paginated_creature_list import PaginatedCreatureList

# TODO update the JSON string below
json = "{}"
# create an instance of PaginatedCreatureList from a JSON string
paginated_creature_list_instance = PaginatedCreatureList.from_json(json)
# print the JSON string representation of the object
print(PaginatedCreatureList.to_json())

# convert the object into a dict
paginated_creature_list_dict = paginated_creature_list_instance.to_dict()
# create an instance of PaginatedCreatureList from a dict
paginated_creature_list_from_dict = PaginatedCreatureList.from_dict(paginated_creature_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


