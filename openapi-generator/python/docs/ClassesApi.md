# open5e.ClassesApi

All URIs are relative to *https://api.open5e.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**classes_list**](ClassesApi.md#classes_list) | **GET** /v2/classes/ | 
[**classes_retrieve**](ClassesApi.md#classes_retrieve) | **GET** /v2/classes/{key}/ | 


# **classes_list**
> PaginatedCharacterClassList classes_list(key__in=key__in, key__iexact=key__iexact, key=key, name__iexact=name__iexact, name=name, name__contains=name__contains, document__key__in=document__key__in, document__key__iexact=document__key__iexact, document__key=document__key, document__gamesystem__key__in=document__gamesystem__key__in, document__gamesystem__key__iexact=document__gamesystem__key__iexact, document__gamesystem__key=document__gamesystem__key, subclass_of=subclass_of, is_subclass=is_subclass, ordering=ordering, search=search, page=page, limit=limit)

list: API endpoint for returning a list of classes.
retrieve: API endpoint for returning a particular class.

### Example


```python
import open5e
from open5e.models.paginated_character_class_list import PaginatedCharacterClassList
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
    api_instance = open5e.ClassesApi(api_client)
    key__in = ['key__in_example'] # List[str] | Multiple values may be separated by commas. (optional)
    key__iexact = 'key__iexact_example' # str |  (optional)
    key = 'key_example' # str |  (optional)
    name__iexact = 'name__iexact_example' # str |  (optional)
    name = 'name_example' # str |  (optional)
    name__contains = 'name__contains_example' # str |  (optional)
    document__key__in = ['document__key__in_example'] # List[str] | Multiple values may be separated by commas. (optional)
    document__key__iexact = 'document__key__iexact_example' # str |  (optional)
    document__key = 'document__key_example' # str |  (optional)
    document__gamesystem__key__in = ['document__gamesystem__key__in_example'] # List[str] | Multiple values may be separated by commas. (optional)
    document__gamesystem__key__iexact = 'document__gamesystem__key__iexact_example' # str |  (optional)
    document__gamesystem__key = 'document__gamesystem__key_example' # str |  (optional)
    subclass_of = 'subclass_of_example' # str | Unique key for the Item. (optional)
    is_subclass = True # bool |  (optional)
    ordering = 'ordering_example' # str | Which field to use when ordering the results. (optional)
    search = 'search_example' # str | A search term. (optional)
    page = 56 # int | A page number within the paginated result set. (optional)
    limit = 56 # int | Number of results to return per page. (optional)

    try:
        api_response = api_instance.classes_list(key__in=key__in, key__iexact=key__iexact, key=key, name__iexact=name__iexact, name=name, name__contains=name__contains, document__key__in=document__key__in, document__key__iexact=document__key__iexact, document__key=document__key, document__gamesystem__key__in=document__gamesystem__key__in, document__gamesystem__key__iexact=document__gamesystem__key__iexact, document__gamesystem__key=document__gamesystem__key, subclass_of=subclass_of, is_subclass=is_subclass, ordering=ordering, search=search, page=page, limit=limit)
        print("The response of ClassesApi->classes_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassesApi->classes_list: %s\n" % e)
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
 **document__key__in** | [**List[str]**](str.md)| Multiple values may be separated by commas. | [optional] 
 **document__key__iexact** | **str**|  | [optional] 
 **document__key** | **str**|  | [optional] 
 **document__gamesystem__key__in** | [**List[str]**](str.md)| Multiple values may be separated by commas. | [optional] 
 **document__gamesystem__key__iexact** | **str**|  | [optional] 
 **document__gamesystem__key** | **str**|  | [optional] 
 **subclass_of** | **str**| Unique key for the Item. | [optional] 
 **is_subclass** | **bool**|  | [optional] 
 **ordering** | **str**| Which field to use when ordering the results. | [optional] 
 **search** | **str**| A search term. | [optional] 
 **page** | **int**| A page number within the paginated result set. | [optional] 
 **limit** | **int**| Number of results to return per page. | [optional] 

### Return type

[**PaginatedCharacterClassList**](PaginatedCharacterClassList.md)

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

# **classes_retrieve**
> CharacterClass classes_retrieve(key)

list: API endpoint for returning a list of classes.
retrieve: API endpoint for returning a particular class.

### Example


```python
import open5e
from open5e.models.character_class import CharacterClass
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
    api_instance = open5e.ClassesApi(api_client)
    key = 'key_example' # str | 

    try:
        api_response = api_instance.classes_retrieve(key)
        print("The response of ClassesApi->classes_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ClassesApi->classes_retrieve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **key** | **str**|  | 

### Return type

[**CharacterClass**](CharacterClass.md)

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

