# ClassFeature

Much of the logic included in the GameContentSerializer is intended to support manipulating data returned by the serializer via query parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Unique key for the Item. | [readonly] 
**name** | **str** | Name of the item. | 
**desc** | **str** | Description of the game content item. Markdown. | [optional] 
**feature_type** | **str** | The type that best represents this Class Feature  * &#x60;CORE_TRAITS_TABLE&#x60; - CORE_TRAITS_TABLE * &#x60;CLASS_LEVEL_FEATURE&#x60; - CLASS_LEVEL_FEATURE * &#x60;CLASS_FEATURE_OPTION_LIST&#x60; - CLASS_FEATURE_OPTION_LIST * &#x60;CLASS_TABLE_DATA&#x60; - CLASS_TABLE_DATA * &#x60;PROFICIENCIES&#x60; - PROFICIENCIES * &#x60;PROFICIENCY_BONUS&#x60; - PROFICIENCY_BONUS * &#x60;STARTING_EQUIPMENT&#x60; - STARTING_EQUIPMENT * &#x60;SPELL_SLOTS&#x60; - SPELL_SLOTS | [optional] 
**feature_items** | [**List[ClassFeaturePrefetch]**](ClassFeaturePrefetch.md) |  | [readonly] 

## Example

```python
from open5e.models.class_feature import ClassFeature

# TODO update the JSON string below
json = "{}"
# create an instance of ClassFeature from a JSON string
class_feature_instance = ClassFeature.from_json(json)
# print the JSON string representation of the object
print(ClassFeature.to_json())

# convert the object into a dict
class_feature_dict = class_feature_instance.to_dict()
# create an instance of ClassFeature from a dict
class_feature_from_dict = ClassFeature.from_dict(class_feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


