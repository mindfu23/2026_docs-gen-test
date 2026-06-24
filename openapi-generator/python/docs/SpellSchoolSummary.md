# SpellSchoolSummary

A slimmer SpellSchoolSerializer, designed to serialize Spell School FKs on other serializers. ie. The `school` field on the SpellSerializer. Not intended to be used directly in a ModelViewset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the item. | 
**key** | **str** | Unique key for the Item. | 

## Example

```python
from open5e.models.spell_school_summary import SpellSchoolSummary

# TODO update the JSON string below
json = "{}"
# create an instance of SpellSchoolSummary from a JSON string
spell_school_summary_instance = SpellSchoolSummary.from_json(json)
# print the JSON string representation of the object
print(SpellSchoolSummary.to_json())

# convert the object into a dict
spell_school_summary_dict = spell_school_summary_instance.to_dict()
# create an instance of SpellSchoolSummary from a dict
spell_school_summary_from_dict = SpellSchoolSummary.from_dict(spell_school_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


