# open5e.CreaturesApi

All URIs are relative to *https://api.open5e.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**creatures_list**](CreaturesApi.md#creatures_list) | **GET** /v2/creatures/ | 
[**creatures_retrieve**](CreaturesApi.md#creatures_retrieve) | **GET** /v2/creatures/{key}/ | 


# **creatures_list**
> PaginatedCreatureList creatures_list(key__in=key__in, key__iexact=key__iexact, key=key, name__iexact=name__iexact, name=name, name__icontains=name__icontains, document__key__in=document__key__in, document__key__iexact=document__key__iexact, document__key=document__key, document__gamesystem__key__in=document__gamesystem__key__in, document__gamesystem__key__iexact=document__gamesystem__key__iexact, document__gamesystem__key=document__gamesystem__key, size=size, category=category, category__iexact=category__iexact, subcategory=subcategory, subcategory__iexact=subcategory__iexact, type=type, challenge_rating=challenge_rating, challenge_rating__lt=challenge_rating__lt, challenge_rating__lte=challenge_rating__lte, challenge_rating__gt=challenge_rating__gt, challenge_rating__gte=challenge_rating__gte, armor_class=armor_class, armor_class__lt=armor_class__lt, armor_class__lte=armor_class__lte, armor_class__gt=armor_class__gt, armor_class__gte=armor_class__gte, ability_score_strength=ability_score_strength, ability_score_strength__lt=ability_score_strength__lt, ability_score_strength__lte=ability_score_strength__lte, ability_score_strength__gt=ability_score_strength__gt, ability_score_strength__gte=ability_score_strength__gte, ability_score_dexterity=ability_score_dexterity, ability_score_dexterity__lt=ability_score_dexterity__lt, ability_score_dexterity__lte=ability_score_dexterity__lte, ability_score_dexterity__gt=ability_score_dexterity__gt, ability_score_dexterity__gte=ability_score_dexterity__gte, ability_score_constitution=ability_score_constitution, ability_score_constitution__lt=ability_score_constitution__lt, ability_score_constitution__lte=ability_score_constitution__lte, ability_score_constitution__gt=ability_score_constitution__gt, ability_score_constitution__gte=ability_score_constitution__gte, ability_score_intelligence=ability_score_intelligence, ability_score_intelligence__lt=ability_score_intelligence__lt, ability_score_intelligence__lte=ability_score_intelligence__lte, ability_score_intelligence__gt=ability_score_intelligence__gt, ability_score_intelligence__gte=ability_score_intelligence__gte, ability_score_wisdom=ability_score_wisdom, ability_score_wisdom__lt=ability_score_wisdom__lt, ability_score_wisdom__lte=ability_score_wisdom__lte, ability_score_wisdom__gt=ability_score_wisdom__gt, ability_score_wisdom__gte=ability_score_wisdom__gte, ability_score_charisma=ability_score_charisma, ability_score_charisma__lt=ability_score_charisma__lt, ability_score_charisma__lte=ability_score_charisma__lte, ability_score_charisma__gt=ability_score_charisma__gt, ability_score_charisma__gte=ability_score_charisma__gte, saving_throw_strength__isnull=saving_throw_strength__isnull, saving_throw_dexterity__isnull=saving_throw_dexterity__isnull, saving_throw_constitution__isnull=saving_throw_constitution__isnull, saving_throw_intelligence__isnull=saving_throw_intelligence__isnull, saving_throw_wisdom__isnull=saving_throw_wisdom__isnull, saving_throw_charisma__isnull=saving_throw_charisma__isnull, skill_bonus_acrobatics__isnull=skill_bonus_acrobatics__isnull, skill_bonus_animal_handling__isnull=skill_bonus_animal_handling__isnull, skill_bonus_arcana__isnull=skill_bonus_arcana__isnull, skill_bonus_athletics__isnull=skill_bonus_athletics__isnull, skill_bonus_deception__isnull=skill_bonus_deception__isnull, skill_bonus_history__isnull=skill_bonus_history__isnull, skill_bonus_insight__isnull=skill_bonus_insight__isnull, skill_bonus_intimidation__isnull=skill_bonus_intimidation__isnull, skill_bonus_investigation__isnull=skill_bonus_investigation__isnull, skill_bonus_medicine__isnull=skill_bonus_medicine__isnull, skill_bonus_nature__isnull=skill_bonus_nature__isnull, skill_bonus_perception__isnull=skill_bonus_perception__isnull, skill_bonus_performance__isnull=skill_bonus_performance__isnull, skill_bonus_persuasion__isnull=skill_bonus_persuasion__isnull, skill_bonus_religion__isnull=skill_bonus_religion__isnull, skill_bonus_sleight_of_hand__isnull=skill_bonus_sleight_of_hand__isnull, skill_bonus_stealth__isnull=skill_bonus_stealth__isnull, skill_bonus_survival__isnull=skill_bonus_survival__isnull, passive_perception=passive_perception, passive_perception__lt=passive_perception__lt, passive_perception__lte=passive_perception__lte, passive_perception__gt=passive_perception__gt, passive_perception__gte=passive_perception__gte, ordering=ordering, search=search, page=page, limit=limit)

list: API endpoint for returning a list of creatures.
retrieve: API endpoint for returning a particular creature.

### Example


```python
import open5e
from open5e.models.paginated_creature_list import PaginatedCreatureList
from open5e.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.open5e.com
# See configuration.py for a list of all supported configuration parameters.
configuration = open5e.Configuration(
    host = "https://api.open5e.com"
)


# Enter a context with an instance of the API client
with open5e.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = open5e.CreaturesApi(api_client)
    key__in = ['key__in_example'] # List[str] | Multiple values may be separated by commas. (optional)
    key__iexact = 'key__iexact_example' # str |  (optional)
    key = 'key_example' # str |  (optional)
    name__iexact = 'name__iexact_example' # str |  (optional)
    name = 'name_example' # str |  (optional)
    name__icontains = 'name__icontains_example' # str |  (optional)
    document__key__in = ['document__key__in_example'] # List[str] | Multiple values may be separated by commas. (optional)
    document__key__iexact = 'document__key__iexact_example' # str |  (optional)
    document__key = 'document__key_example' # str |  (optional)
    document__gamesystem__key__in = ['document__gamesystem__key__in_example'] # List[str] | Multiple values may be separated by commas. (optional)
    document__gamesystem__key__iexact = 'document__gamesystem__key__iexact_example' # str |  (optional)
    document__gamesystem__key = 'document__gamesystem__key_example' # str |  (optional)
    size = 'size_example' # str | Unique key for the Item. (optional)
    category = 'category_example' # str |  (optional)
    category__iexact = 'category__iexact_example' # str |  (optional)
    subcategory = 'subcategory_example' # str |  (optional)
    subcategory__iexact = 'subcategory__iexact_example' # str |  (optional)
    type = 'type_example' # str | Unique key for the Item. (optional)
    challenge_rating = 3.4 # float |  (optional)
    challenge_rating__lt = 3.4 # float |  (optional)
    challenge_rating__lte = 3.4 # float |  (optional)
    challenge_rating__gt = 3.4 # float |  (optional)
    challenge_rating__gte = 3.4 # float |  (optional)
    armor_class = 56 # int |  (optional)
    armor_class__lt = 56 # int |  (optional)
    armor_class__lte = 56 # int |  (optional)
    armor_class__gt = 56 # int |  (optional)
    armor_class__gte = 56 # int |  (optional)
    ability_score_strength = 56 # int |  (optional)
    ability_score_strength__lt = 56 # int |  (optional)
    ability_score_strength__lte = 56 # int |  (optional)
    ability_score_strength__gt = 56 # int |  (optional)
    ability_score_strength__gte = 56 # int |  (optional)
    ability_score_dexterity = 56 # int |  (optional)
    ability_score_dexterity__lt = 56 # int |  (optional)
    ability_score_dexterity__lte = 56 # int |  (optional)
    ability_score_dexterity__gt = 56 # int |  (optional)
    ability_score_dexterity__gte = 56 # int |  (optional)
    ability_score_constitution = 56 # int |  (optional)
    ability_score_constitution__lt = 56 # int |  (optional)
    ability_score_constitution__lte = 56 # int |  (optional)
    ability_score_constitution__gt = 56 # int |  (optional)
    ability_score_constitution__gte = 56 # int |  (optional)
    ability_score_intelligence = 56 # int |  (optional)
    ability_score_intelligence__lt = 56 # int |  (optional)
    ability_score_intelligence__lte = 56 # int |  (optional)
    ability_score_intelligence__gt = 56 # int |  (optional)
    ability_score_intelligence__gte = 56 # int |  (optional)
    ability_score_wisdom = 56 # int |  (optional)
    ability_score_wisdom__lt = 56 # int |  (optional)
    ability_score_wisdom__lte = 56 # int |  (optional)
    ability_score_wisdom__gt = 56 # int |  (optional)
    ability_score_wisdom__gte = 56 # int |  (optional)
    ability_score_charisma = 56 # int |  (optional)
    ability_score_charisma__lt = 56 # int |  (optional)
    ability_score_charisma__lte = 56 # int |  (optional)
    ability_score_charisma__gt = 56 # int |  (optional)
    ability_score_charisma__gte = 56 # int |  (optional)
    saving_throw_strength__isnull = True # bool |  (optional)
    saving_throw_dexterity__isnull = True # bool |  (optional)
    saving_throw_constitution__isnull = True # bool |  (optional)
    saving_throw_intelligence__isnull = True # bool |  (optional)
    saving_throw_wisdom__isnull = True # bool |  (optional)
    saving_throw_charisma__isnull = True # bool |  (optional)
    skill_bonus_acrobatics__isnull = True # bool |  (optional)
    skill_bonus_animal_handling__isnull = True # bool |  (optional)
    skill_bonus_arcana__isnull = True # bool |  (optional)
    skill_bonus_athletics__isnull = True # bool |  (optional)
    skill_bonus_deception__isnull = True # bool |  (optional)
    skill_bonus_history__isnull = True # bool |  (optional)
    skill_bonus_insight__isnull = True # bool |  (optional)
    skill_bonus_intimidation__isnull = True # bool |  (optional)
    skill_bonus_investigation__isnull = True # bool |  (optional)
    skill_bonus_medicine__isnull = True # bool |  (optional)
    skill_bonus_nature__isnull = True # bool |  (optional)
    skill_bonus_perception__isnull = True # bool |  (optional)
    skill_bonus_performance__isnull = True # bool |  (optional)
    skill_bonus_persuasion__isnull = True # bool |  (optional)
    skill_bonus_religion__isnull = True # bool |  (optional)
    skill_bonus_sleight_of_hand__isnull = True # bool |  (optional)
    skill_bonus_stealth__isnull = True # bool |  (optional)
    skill_bonus_survival__isnull = True # bool |  (optional)
    passive_perception = 56 # int |  (optional)
    passive_perception__lt = 56 # int |  (optional)
    passive_perception__lte = 56 # int |  (optional)
    passive_perception__gt = 56 # int |  (optional)
    passive_perception__gte = 56 # int |  (optional)
    ordering = 'ordering_example' # str | Which field to use when ordering the results. (optional)
    search = 'search_example' # str | A search term. (optional)
    page = 56 # int | A page number within the paginated result set. (optional)
    limit = 56 # int | Number of results to return per page. (optional)

    try:
        api_response = api_instance.creatures_list(key__in=key__in, key__iexact=key__iexact, key=key, name__iexact=name__iexact, name=name, name__icontains=name__icontains, document__key__in=document__key__in, document__key__iexact=document__key__iexact, document__key=document__key, document__gamesystem__key__in=document__gamesystem__key__in, document__gamesystem__key__iexact=document__gamesystem__key__iexact, document__gamesystem__key=document__gamesystem__key, size=size, category=category, category__iexact=category__iexact, subcategory=subcategory, subcategory__iexact=subcategory__iexact, type=type, challenge_rating=challenge_rating, challenge_rating__lt=challenge_rating__lt, challenge_rating__lte=challenge_rating__lte, challenge_rating__gt=challenge_rating__gt, challenge_rating__gte=challenge_rating__gte, armor_class=armor_class, armor_class__lt=armor_class__lt, armor_class__lte=armor_class__lte, armor_class__gt=armor_class__gt, armor_class__gte=armor_class__gte, ability_score_strength=ability_score_strength, ability_score_strength__lt=ability_score_strength__lt, ability_score_strength__lte=ability_score_strength__lte, ability_score_strength__gt=ability_score_strength__gt, ability_score_strength__gte=ability_score_strength__gte, ability_score_dexterity=ability_score_dexterity, ability_score_dexterity__lt=ability_score_dexterity__lt, ability_score_dexterity__lte=ability_score_dexterity__lte, ability_score_dexterity__gt=ability_score_dexterity__gt, ability_score_dexterity__gte=ability_score_dexterity__gte, ability_score_constitution=ability_score_constitution, ability_score_constitution__lt=ability_score_constitution__lt, ability_score_constitution__lte=ability_score_constitution__lte, ability_score_constitution__gt=ability_score_constitution__gt, ability_score_constitution__gte=ability_score_constitution__gte, ability_score_intelligence=ability_score_intelligence, ability_score_intelligence__lt=ability_score_intelligence__lt, ability_score_intelligence__lte=ability_score_intelligence__lte, ability_score_intelligence__gt=ability_score_intelligence__gt, ability_score_intelligence__gte=ability_score_intelligence__gte, ability_score_wisdom=ability_score_wisdom, ability_score_wisdom__lt=ability_score_wisdom__lt, ability_score_wisdom__lte=ability_score_wisdom__lte, ability_score_wisdom__gt=ability_score_wisdom__gt, ability_score_wisdom__gte=ability_score_wisdom__gte, ability_score_charisma=ability_score_charisma, ability_score_charisma__lt=ability_score_charisma__lt, ability_score_charisma__lte=ability_score_charisma__lte, ability_score_charisma__gt=ability_score_charisma__gt, ability_score_charisma__gte=ability_score_charisma__gte, saving_throw_strength__isnull=saving_throw_strength__isnull, saving_throw_dexterity__isnull=saving_throw_dexterity__isnull, saving_throw_constitution__isnull=saving_throw_constitution__isnull, saving_throw_intelligence__isnull=saving_throw_intelligence__isnull, saving_throw_wisdom__isnull=saving_throw_wisdom__isnull, saving_throw_charisma__isnull=saving_throw_charisma__isnull, skill_bonus_acrobatics__isnull=skill_bonus_acrobatics__isnull, skill_bonus_animal_handling__isnull=skill_bonus_animal_handling__isnull, skill_bonus_arcana__isnull=skill_bonus_arcana__isnull, skill_bonus_athletics__isnull=skill_bonus_athletics__isnull, skill_bonus_deception__isnull=skill_bonus_deception__isnull, skill_bonus_history__isnull=skill_bonus_history__isnull, skill_bonus_insight__isnull=skill_bonus_insight__isnull, skill_bonus_intimidation__isnull=skill_bonus_intimidation__isnull, skill_bonus_investigation__isnull=skill_bonus_investigation__isnull, skill_bonus_medicine__isnull=skill_bonus_medicine__isnull, skill_bonus_nature__isnull=skill_bonus_nature__isnull, skill_bonus_perception__isnull=skill_bonus_perception__isnull, skill_bonus_performance__isnull=skill_bonus_performance__isnull, skill_bonus_persuasion__isnull=skill_bonus_persuasion__isnull, skill_bonus_religion__isnull=skill_bonus_religion__isnull, skill_bonus_sleight_of_hand__isnull=skill_bonus_sleight_of_hand__isnull, skill_bonus_stealth__isnull=skill_bonus_stealth__isnull, skill_bonus_survival__isnull=skill_bonus_survival__isnull, passive_perception=passive_perception, passive_perception__lt=passive_perception__lt, passive_perception__lte=passive_perception__lte, passive_perception__gt=passive_perception__gt, passive_perception__gte=passive_perception__gte, ordering=ordering, search=search, page=page, limit=limit)
        print("The response of CreaturesApi->creatures_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CreaturesApi->creatures_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key__in** | [**List[str]**](str.md)| Multiple values may be separated by commas. | [optional] 
 **key__iexact** | **str**|  | [optional] 
 **key** | **str**|  | [optional] 
 **name__iexact** | **str**|  | [optional] 
 **name** | **str**|  | [optional] 
 **name__icontains** | **str**|  | [optional] 
 **document__key__in** | [**List[str]**](str.md)| Multiple values may be separated by commas. | [optional] 
 **document__key__iexact** | **str**|  | [optional] 
 **document__key** | **str**|  | [optional] 
 **document__gamesystem__key__in** | [**List[str]**](str.md)| Multiple values may be separated by commas. | [optional] 
 **document__gamesystem__key__iexact** | **str**|  | [optional] 
 **document__gamesystem__key** | **str**|  | [optional] 
 **size** | **str**| Unique key for the Item. | [optional] 
 **category** | **str**|  | [optional] 
 **category__iexact** | **str**|  | [optional] 
 **subcategory** | **str**|  | [optional] 
 **subcategory__iexact** | **str**|  | [optional] 
 **type** | **str**| Unique key for the Item. | [optional] 
 **challenge_rating** | **float**|  | [optional] 
 **challenge_rating__lt** | **float**|  | [optional] 
 **challenge_rating__lte** | **float**|  | [optional] 
 **challenge_rating__gt** | **float**|  | [optional] 
 **challenge_rating__gte** | **float**|  | [optional] 
 **armor_class** | **int**|  | [optional] 
 **armor_class__lt** | **int**|  | [optional] 
 **armor_class__lte** | **int**|  | [optional] 
 **armor_class__gt** | **int**|  | [optional] 
 **armor_class__gte** | **int**|  | [optional] 
 **ability_score_strength** | **int**|  | [optional] 
 **ability_score_strength__lt** | **int**|  | [optional] 
 **ability_score_strength__lte** | **int**|  | [optional] 
 **ability_score_strength__gt** | **int**|  | [optional] 
 **ability_score_strength__gte** | **int**|  | [optional] 
 **ability_score_dexterity** | **int**|  | [optional] 
 **ability_score_dexterity__lt** | **int**|  | [optional] 
 **ability_score_dexterity__lte** | **int**|  | [optional] 
 **ability_score_dexterity__gt** | **int**|  | [optional] 
 **ability_score_dexterity__gte** | **int**|  | [optional] 
 **ability_score_constitution** | **int**|  | [optional] 
 **ability_score_constitution__lt** | **int**|  | [optional] 
 **ability_score_constitution__lte** | **int**|  | [optional] 
 **ability_score_constitution__gt** | **int**|  | [optional] 
 **ability_score_constitution__gte** | **int**|  | [optional] 
 **ability_score_intelligence** | **int**|  | [optional] 
 **ability_score_intelligence__lt** | **int**|  | [optional] 
 **ability_score_intelligence__lte** | **int**|  | [optional] 
 **ability_score_intelligence__gt** | **int**|  | [optional] 
 **ability_score_intelligence__gte** | **int**|  | [optional] 
 **ability_score_wisdom** | **int**|  | [optional] 
 **ability_score_wisdom__lt** | **int**|  | [optional] 
 **ability_score_wisdom__lte** | **int**|  | [optional] 
 **ability_score_wisdom__gt** | **int**|  | [optional] 
 **ability_score_wisdom__gte** | **int**|  | [optional] 
 **ability_score_charisma** | **int**|  | [optional] 
 **ability_score_charisma__lt** | **int**|  | [optional] 
 **ability_score_charisma__lte** | **int**|  | [optional] 
 **ability_score_charisma__gt** | **int**|  | [optional] 
 **ability_score_charisma__gte** | **int**|  | [optional] 
 **saving_throw_strength__isnull** | **bool**|  | [optional] 
 **saving_throw_dexterity__isnull** | **bool**|  | [optional] 
 **saving_throw_constitution__isnull** | **bool**|  | [optional] 
 **saving_throw_intelligence__isnull** | **bool**|  | [optional] 
 **saving_throw_wisdom__isnull** | **bool**|  | [optional] 
 **saving_throw_charisma__isnull** | **bool**|  | [optional] 
 **skill_bonus_acrobatics__isnull** | **bool**|  | [optional] 
 **skill_bonus_animal_handling__isnull** | **bool**|  | [optional] 
 **skill_bonus_arcana__isnull** | **bool**|  | [optional] 
 **skill_bonus_athletics__isnull** | **bool**|  | [optional] 
 **skill_bonus_deception__isnull** | **bool**|  | [optional] 
 **skill_bonus_history__isnull** | **bool**|  | [optional] 
 **skill_bonus_insight__isnull** | **bool**|  | [optional] 
 **skill_bonus_intimidation__isnull** | **bool**|  | [optional] 
 **skill_bonus_investigation__isnull** | **bool**|  | [optional] 
 **skill_bonus_medicine__isnull** | **bool**|  | [optional] 
 **skill_bonus_nature__isnull** | **bool**|  | [optional] 
 **skill_bonus_perception__isnull** | **bool**|  | [optional] 
 **skill_bonus_performance__isnull** | **bool**|  | [optional] 
 **skill_bonus_persuasion__isnull** | **bool**|  | [optional] 
 **skill_bonus_religion__isnull** | **bool**|  | [optional] 
 **skill_bonus_sleight_of_hand__isnull** | **bool**|  | [optional] 
 **skill_bonus_stealth__isnull** | **bool**|  | [optional] 
 **skill_bonus_survival__isnull** | **bool**|  | [optional] 
 **passive_perception** | **int**|  | [optional] 
 **passive_perception__lt** | **int**|  | [optional] 
 **passive_perception__lte** | **int**|  | [optional] 
 **passive_perception__gt** | **int**|  | [optional] 
 **passive_perception__gte** | **int**|  | [optional] 
 **ordering** | **str**| Which field to use when ordering the results. | [optional] 
 **search** | **str**| A search term. | [optional] 
 **page** | **int**| A page number within the paginated result set. | [optional] 
 **limit** | **int**| Number of results to return per page. | [optional] 

### Return type

[**PaginatedCreatureList**](PaginatedCreatureList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **creatures_retrieve**
> Creature creatures_retrieve(key)

list: API endpoint for returning a list of creatures.
retrieve: API endpoint for returning a particular creature.

### Example


```python
import open5e
from open5e.models.creature import Creature
from open5e.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.open5e.com
# See configuration.py for a list of all supported configuration parameters.
configuration = open5e.Configuration(
    host = "https://api.open5e.com"
)


# Enter a context with an instance of the API client
with open5e.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = open5e.CreaturesApi(api_client)
    key = 'key_example' # str | 

    try:
        api_response = api_instance.creatures_retrieve(key)
        print("The response of CreaturesApi->creatures_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CreaturesApi->creatures_retrieve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 

### Return type

[**Creature**](Creature.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

