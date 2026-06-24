# open5e.SpellsApi

All URIs are relative to *https://api.open5e.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**spells_list**](SpellsApi.md#spells_list) | **GET** /v2/spells/ | 
[**spells_retrieve**](SpellsApi.md#spells_retrieve) | **GET** /v2/spells/{key}/ | 


# **spells_list**
> PaginatedSpellList spells_list(key__in=key__in, key__iexact=key__iexact, key=key, name__iexact=name__iexact, name=name, name__contains=name__contains, name__icontains=name__icontains, document__key__in=document__key__in, document__key__iexact=document__key__iexact, document__key=document__key, document__gamesystem__key__in=document__gamesystem__key__in, document__gamesystem__key__iexact=document__gamesystem__key__iexact, document__gamesystem__key=document__gamesystem__key, classes__key__in=classes__key__in, classes__key__iexact=classes__key__iexact, classes__key=classes__key, classes__name__in=classes__name__in, level=level, level__range=level__range, level__gt=level__gt, level__gte=level__gte, level__lt=level__lt, level__lte=level__lte, range=range, range__range=range__range, range__gt=range__gt, range__gte=range__gte, range__lt=range__lt, range__lte=range__lte, school__key=school__key, school__name__in=school__name__in, school__name__iexact=school__name__iexact, school__name=school__name, duration__in=duration__in, duration__iexact=duration__iexact, duration=duration, concentration=concentration, verbal=verbal, somatic=somatic, material=material, material_consumed=material_consumed, casting_time__in=casting_time__in, casting_time__iexact=casting_time__iexact, casting_time=casting_time, ordering=ordering, search=search, page=page, limit=limit)

list: API endpoint for returning a list of spells.
retrieve: API endpoint for returning a particular spell.

### Example


```python
import open5e
from open5e.models.paginated_spell_list import PaginatedSpellList
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
    api_instance = open5e.SpellsApi(api_client)
    key__in = ['key__in_example'] # List[str] | Multiple values may be separated by commas. (optional)
    key__iexact = 'key__iexact_example' # str |  (optional)
    key = 'key_example' # str |  (optional)
    name__iexact = 'name__iexact_example' # str |  (optional)
    name = 'name_example' # str |  (optional)
    name__contains = 'name__contains_example' # str |  (optional)
    name__icontains = 'name__icontains_example' # str |  (optional)
    document__key__in = ['document__key__in_example'] # List[str] | Multiple values may be separated by commas. (optional)
    document__key__iexact = 'document__key__iexact_example' # str |  (optional)
    document__key = 'document__key_example' # str |  (optional)
    document__gamesystem__key__in = ['document__gamesystem__key__in_example'] # List[str] | Multiple values may be separated by commas. (optional)
    document__gamesystem__key__iexact = 'document__gamesystem__key__iexact_example' # str |  (optional)
    document__gamesystem__key = 'document__gamesystem__key_example' # str |  (optional)
    classes__key__in = ['classes__key__in_example'] # List[str] | Multiple values may be separated by commas. (optional)
    classes__key__iexact = 'classes__key__iexact_example' # str |  (optional)
    classes__key = 'classes__key_example' # str |  (optional)
    classes__name__in = ['classes__name__in_example'] # List[str] | Multiple values may be separated by commas. (optional)
    level = 56 # int |  (optional)
    level__range = [56] # List[int] | Multiple values may be separated by commas. (optional)
    level__gt = 56 # int |  (optional)
    level__gte = 56 # int |  (optional)
    level__lt = 56 # int |  (optional)
    level__lte = 56 # int |  (optional)
    range = 56 # int |  (optional)
    range__range = [56] # List[int] | Multiple values may be separated by commas. (optional)
    range__gt = 56 # int |  (optional)
    range__gte = 56 # int |  (optional)
    range__lt = 56 # int |  (optional)
    range__lte = 56 # int |  (optional)
    school__key = 'school__key_example' # str |  (optional)
    school__name__in = ['school__name__in_example'] # List[str] | Multiple values may be separated by commas. (optional)
    school__name__iexact = 'school__name__iexact_example' # str |  (optional)
    school__name = 'school__name_example' # str |  (optional)
    duration__in = ['duration__in_example'] # List[str] | Multiple values may be separated by commas. (optional)
    duration__iexact = 'duration__iexact_example' # str |  (optional)
    duration = 'duration_example' # str | Description of the duration of the effect such as \"instantaneous\" or \"1 minute\"  * `instantaneous` - instantaneous * `instantaneous or special` - instantaneous or special * `1 turn` - 1 turn * `1 round` - 1 round * `concentration + 1 round` - concentration + 1 round * `2 rounds` - 2 rounds * `3 rounds` - 3 rounds * `4 rounds` - 4 rounds * `1d4+2 rounds` - 1d4+2 rounds * `5 rounds` - 5 rounds * `6 rounds` - 6 rounds * `10 rounds` - 10 rounds * `up to 1 minute` - up to 1 minute * `1 minute` - 1 minute * `1 minute, or until expended` - 1 minute, or until expended * `1 minute, until expended` - 1 minute, until expended * `1 minute` - 1 minute * `5 minutes` - 5 minutes * `10 minutes` - 10 minutes * `1 minute or 1 hour` - 1 minute or 1 hour * `up to 1 hour` - up to 1 hour * `1 hour` - 1 hour * `1 hour or until triggered` - 1 hour or until triggered * `2 hours` - 2 hours * `3 hours` - 3 hours * `1d10 hours` - 1d10 hours * `6 hours` - 6 hours * `2-12 hours` - 2-12 hours * `up to 8 hours` - up to 8 hours * `8 hours` - 8 hours * `1 hour/caster level` - 1 hour/caster level * `10 hours` - 10 hours * `12 hours` - 12 hours * `24 hours or until the target attempts a third death saving throw` - 24 hours or until the target attempts a third death saving throw * `24 hours` - 24 hours * `1 day` - 1 day * `3 days` - 3 days * `5 days` - 5 days * `7 days` - 7 days * `10 days` - 10 days * `13 days` - 13 days * `30 days` - 30 days * `1 year` - 1 year * `special` - special * `until dispelled or destroyed` - until dispelled or destroyed * `until destroyed` - until destroyed * `until dispelled` - until dispelled * `until cured or dispelled` - until cured or dispelled * `until dispelled or triggered` - until dispelled or triggered * `permanent until discharged` - permanent until discharged * `permanent; one generation` - permanent; one generation * `permanent` - permanent (optional)
    concentration = True # bool |  (optional)
    verbal = True # bool |  (optional)
    somatic = True # bool |  (optional)
    material = True # bool |  (optional)
    material_consumed = True # bool |  (optional)
    casting_time__in = ['casting_time__in_example'] # List[str] | Multiple values may be separated by commas. (optional)
    casting_time__iexact = 'casting_time__iexact_example' # str |  (optional)
    casting_time = 'casting_time_example' # str | Casting time key, such as 'action'  * `reaction` - Reaction * `bonus-action` - 1 Bonus Action * `action` - 1 Action * `turn` - 1 Turn * `round` - 1 Round * `1minute` - 1 Minute * `5minutes` - 5 Minutes * `10minutes` - 10 Minutes * `1hour` - 1 Hour * `4hours` - 4 Hours * `7hours` - 7 Hours * `8hours` - 8 Hours * `9hours` - 9 Hours * `12hours` - 12 Hours * `24hours` - 24 Hours * `1week` - 1 Week (optional)
    ordering = 'ordering_example' # str | Which field to use when ordering the results. (optional)
    search = 'search_example' # str | A search term. (optional)
    page = 56 # int | A page number within the paginated result set. (optional)
    limit = 56 # int | Number of results to return per page. (optional)

    try:
        api_response = api_instance.spells_list(key__in=key__in, key__iexact=key__iexact, key=key, name__iexact=name__iexact, name=name, name__contains=name__contains, name__icontains=name__icontains, document__key__in=document__key__in, document__key__iexact=document__key__iexact, document__key=document__key, document__gamesystem__key__in=document__gamesystem__key__in, document__gamesystem__key__iexact=document__gamesystem__key__iexact, document__gamesystem__key=document__gamesystem__key, classes__key__in=classes__key__in, classes__key__iexact=classes__key__iexact, classes__key=classes__key, classes__name__in=classes__name__in, level=level, level__range=level__range, level__gt=level__gt, level__gte=level__gte, level__lt=level__lt, level__lte=level__lte, range=range, range__range=range__range, range__gt=range__gt, range__gte=range__gte, range__lt=range__lt, range__lte=range__lte, school__key=school__key, school__name__in=school__name__in, school__name__iexact=school__name__iexact, school__name=school__name, duration__in=duration__in, duration__iexact=duration__iexact, duration=duration, concentration=concentration, verbal=verbal, somatic=somatic, material=material, material_consumed=material_consumed, casting_time__in=casting_time__in, casting_time__iexact=casting_time__iexact, casting_time=casting_time, ordering=ordering, search=search, page=page, limit=limit)
        print("The response of SpellsApi->spells_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpellsApi->spells_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key__in** | [**List[str]**](str.md)| Multiple values may be separated by commas. | [optional] 
 **key__iexact** | **str**|  | [optional] 
 **key** | **str**|  | [optional] 
 **name__iexact** | **str**|  | [optional] 
 **name** | **str**|  | [optional] 
 **name__contains** | **str**|  | [optional] 
 **name__icontains** | **str**|  | [optional] 
 **document__key__in** | [**List[str]**](str.md)| Multiple values may be separated by commas. | [optional] 
 **document__key__iexact** | **str**|  | [optional] 
 **document__key** | **str**|  | [optional] 
 **document__gamesystem__key__in** | [**List[str]**](str.md)| Multiple values may be separated by commas. | [optional] 
 **document__gamesystem__key__iexact** | **str**|  | [optional] 
 **document__gamesystem__key** | **str**|  | [optional] 
 **classes__key__in** | [**List[str]**](str.md)| Multiple values may be separated by commas. | [optional] 
 **classes__key__iexact** | **str**|  | [optional] 
 **classes__key** | **str**|  | [optional] 
 **classes__name__in** | [**List[str]**](str.md)| Multiple values may be separated by commas. | [optional] 
 **level** | **int**|  | [optional] 
 **level__range** | [**List[int]**](int.md)| Multiple values may be separated by commas. | [optional] 
 **level__gt** | **int**|  | [optional] 
 **level__gte** | **int**|  | [optional] 
 **level__lt** | **int**|  | [optional] 
 **level__lte** | **int**|  | [optional] 
 **range** | **int**|  | [optional] 
 **range__range** | [**List[int]**](int.md)| Multiple values may be separated by commas. | [optional] 
 **range__gt** | **int**|  | [optional] 
 **range__gte** | **int**|  | [optional] 
 **range__lt** | **int**|  | [optional] 
 **range__lte** | **int**|  | [optional] 
 **school__key** | **str**|  | [optional] 
 **school__name__in** | [**List[str]**](str.md)| Multiple values may be separated by commas. | [optional] 
 **school__name__iexact** | **str**|  | [optional] 
 **school__name** | **str**|  | [optional] 
 **duration__in** | [**List[str]**](str.md)| Multiple values may be separated by commas. | [optional] 
 **duration__iexact** | **str**|  | [optional] 
 **duration** | **str**| Description of the duration of the effect such as \&quot;instantaneous\&quot; or \&quot;1 minute\&quot;  * &#x60;instantaneous&#x60; - instantaneous * &#x60;instantaneous or special&#x60; - instantaneous or special * &#x60;1 turn&#x60; - 1 turn * &#x60;1 round&#x60; - 1 round * &#x60;concentration + 1 round&#x60; - concentration + 1 round * &#x60;2 rounds&#x60; - 2 rounds * &#x60;3 rounds&#x60; - 3 rounds * &#x60;4 rounds&#x60; - 4 rounds * &#x60;1d4+2 rounds&#x60; - 1d4+2 rounds * &#x60;5 rounds&#x60; - 5 rounds * &#x60;6 rounds&#x60; - 6 rounds * &#x60;10 rounds&#x60; - 10 rounds * &#x60;up to 1 minute&#x60; - up to 1 minute * &#x60;1 minute&#x60; - 1 minute * &#x60;1 minute, or until expended&#x60; - 1 minute, or until expended * &#x60;1 minute, until expended&#x60; - 1 minute, until expended * &#x60;1 minute&#x60; - 1 minute * &#x60;5 minutes&#x60; - 5 minutes * &#x60;10 minutes&#x60; - 10 minutes * &#x60;1 minute or 1 hour&#x60; - 1 minute or 1 hour * &#x60;up to 1 hour&#x60; - up to 1 hour * &#x60;1 hour&#x60; - 1 hour * &#x60;1 hour or until triggered&#x60; - 1 hour or until triggered * &#x60;2 hours&#x60; - 2 hours * &#x60;3 hours&#x60; - 3 hours * &#x60;1d10 hours&#x60; - 1d10 hours * &#x60;6 hours&#x60; - 6 hours * &#x60;2-12 hours&#x60; - 2-12 hours * &#x60;up to 8 hours&#x60; - up to 8 hours * &#x60;8 hours&#x60; - 8 hours * &#x60;1 hour/caster level&#x60; - 1 hour/caster level * &#x60;10 hours&#x60; - 10 hours * &#x60;12 hours&#x60; - 12 hours * &#x60;24 hours or until the target attempts a third death saving throw&#x60; - 24 hours or until the target attempts a third death saving throw * &#x60;24 hours&#x60; - 24 hours * &#x60;1 day&#x60; - 1 day * &#x60;3 days&#x60; - 3 days * &#x60;5 days&#x60; - 5 days * &#x60;7 days&#x60; - 7 days * &#x60;10 days&#x60; - 10 days * &#x60;13 days&#x60; - 13 days * &#x60;30 days&#x60; - 30 days * &#x60;1 year&#x60; - 1 year * &#x60;special&#x60; - special * &#x60;until dispelled or destroyed&#x60; - until dispelled or destroyed * &#x60;until destroyed&#x60; - until destroyed * &#x60;until dispelled&#x60; - until dispelled * &#x60;until cured or dispelled&#x60; - until cured or dispelled * &#x60;until dispelled or triggered&#x60; - until dispelled or triggered * &#x60;permanent until discharged&#x60; - permanent until discharged * &#x60;permanent; one generation&#x60; - permanent; one generation * &#x60;permanent&#x60; - permanent | [optional] 
 **concentration** | **bool**|  | [optional] 
 **verbal** | **bool**|  | [optional] 
 **somatic** | **bool**|  | [optional] 
 **material** | **bool**|  | [optional] 
 **material_consumed** | **bool**|  | [optional] 
 **casting_time__in** | [**List[str]**](str.md)| Multiple values may be separated by commas. | [optional] 
 **casting_time__iexact** | **str**|  | [optional] 
 **casting_time** | **str**| Casting time key, such as &#39;action&#39;  * &#x60;reaction&#x60; - Reaction * &#x60;bonus-action&#x60; - 1 Bonus Action * &#x60;action&#x60; - 1 Action * &#x60;turn&#x60; - 1 Turn * &#x60;round&#x60; - 1 Round * &#x60;1minute&#x60; - 1 Minute * &#x60;5minutes&#x60; - 5 Minutes * &#x60;10minutes&#x60; - 10 Minutes * &#x60;1hour&#x60; - 1 Hour * &#x60;4hours&#x60; - 4 Hours * &#x60;7hours&#x60; - 7 Hours * &#x60;8hours&#x60; - 8 Hours * &#x60;9hours&#x60; - 9 Hours * &#x60;12hours&#x60; - 12 Hours * &#x60;24hours&#x60; - 24 Hours * &#x60;1week&#x60; - 1 Week | [optional] 
 **ordering** | **str**| Which field to use when ordering the results. | [optional] 
 **search** | **str**| A search term. | [optional] 
 **page** | **int**| A page number within the paginated result set. | [optional] 
 **limit** | **int**| Number of results to return per page. | [optional] 

### Return type

[**PaginatedSpellList**](PaginatedSpellList.md)

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

# **spells_retrieve**
> Spell spells_retrieve(key)

list: API endpoint for returning a list of spells.
retrieve: API endpoint for returning a particular spell.

### Example


```python
import open5e
from open5e.models.spell import Spell
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
    api_instance = open5e.SpellsApi(api_client)
    key = 'key_example' # str | 

    try:
        api_response = api_instance.spells_retrieve(key)
        print("The response of SpellsApi->spells_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SpellsApi->spells_retrieve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 

### Return type

[**Spell**](Spell.md)

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

