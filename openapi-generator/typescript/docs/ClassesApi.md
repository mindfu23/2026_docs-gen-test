# ClassesApi

All URIs are relative to *https://api.open5e.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**classesList**](ClassesApi.md#classeslist) | **GET** /v2/classes/ |  |
| [**classesRetrieve**](ClassesApi.md#classesretrieve) | **GET** /v2/classes/{key}/ |  |



## classesList

> PaginatedCharacterClassList classesList(keyIn, keyIexact, key, nameIexact, name, nameContains, documentKeyIn, documentKeyIexact, documentKey, documentGamesystemKeyIn, documentGamesystemKeyIexact, documentGamesystemKey, subclassOf, isSubclass, ordering, search, page, limit)



list: API endpoint for returning a list of classes. retrieve: API endpoint for returning a particular class.

### Example

```ts
import {
  Configuration,
  ClassesApi,
} from 'open5e';
import type { ClassesListRequest } from 'open5e';

async function example() {
  console.log("🚀 Testing open5e SDK...");
  const api = new ClassesApi();

  const body = {
    // Array<string> | Multiple values may be separated by commas. (optional)
    keyIn: ...,
    // string (optional)
    keyIexact: keyIexact_example,
    // string (optional)
    key: key_example,
    // string (optional)
    nameIexact: nameIexact_example,
    // string (optional)
    name: name_example,
    // string (optional)
    nameContains: nameContains_example,
    // Array<string> | Multiple values may be separated by commas. (optional)
    documentKeyIn: ...,
    // string (optional)
    documentKeyIexact: documentKeyIexact_example,
    // string (optional)
    documentKey: documentKey_example,
    // Array<string> | Multiple values may be separated by commas. (optional)
    documentGamesystemKeyIn: ...,
    // string (optional)
    documentGamesystemKeyIexact: documentGamesystemKeyIexact_example,
    // string (optional)
    documentGamesystemKey: documentGamesystemKey_example,
    // string | Unique key for the Item. (optional)
    subclassOf: subclassOf_example,
    // boolean (optional)
    isSubclass: true,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
    // string | A search term. (optional)
    search: search_example,
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    limit: 56,
  } satisfies ClassesListRequest;

  try {
    const data = await api.classesList(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **keyIn** | `Array<string>` | Multiple values may be separated by commas. | [Optional] |
| **keyIexact** | `string` |  | [Optional] [Defaults to `undefined`] |
| **key** | `string` |  | [Optional] [Defaults to `undefined`] |
| **nameIexact** | `string` |  | [Optional] [Defaults to `undefined`] |
| **name** | `string` |  | [Optional] [Defaults to `undefined`] |
| **nameContains** | `string` |  | [Optional] [Defaults to `undefined`] |
| **documentKeyIn** | `Array<string>` | Multiple values may be separated by commas. | [Optional] |
| **documentKeyIexact** | `string` |  | [Optional] [Defaults to `undefined`] |
| **documentKey** | `string` |  | [Optional] [Defaults to `undefined`] |
| **documentGamesystemKeyIn** | `Array<string>` | Multiple values may be separated by commas. | [Optional] |
| **documentGamesystemKeyIexact** | `string` |  | [Optional] [Defaults to `undefined`] |
| **documentGamesystemKey** | `string` |  | [Optional] [Defaults to `undefined`] |
| **subclassOf** | `string` | Unique key for the Item. | [Optional] [Defaults to `undefined`] |
| **isSubclass** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **ordering** | `string` | Which field to use when ordering the results. | [Optional] [Defaults to `undefined`] |
| **search** | `string` | A search term. | [Optional] [Defaults to `undefined`] |
| **page** | `number` | A page number within the paginated result set. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of results to return per page. | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedCharacterClassList**](PaginatedCharacterClassList.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


## classesRetrieve

> CharacterClass classesRetrieve(key)



list: API endpoint for returning a list of classes. retrieve: API endpoint for returning a particular class.

### Example

```ts
import {
  Configuration,
  ClassesApi,
} from 'open5e';
import type { ClassesRetrieveRequest } from 'open5e';

async function example() {
  console.log("🚀 Testing open5e SDK...");
  const api = new ClassesApi();

  const body = {
    // string
    key: key_example,
  } satisfies ClassesRetrieveRequest;

  try {
    const data = await api.classesRetrieve(body);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

// Run the test
example().catch(console.error);
```

### Parameters


| Name | Type | Description  | Notes |
|------------- | ------------- | ------------- | -------------|
| **key** | `string` |  | [Defaults to `undefined`] |

### Return type

[**CharacterClass**](CharacterClass.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: `application/json`


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
| **200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)

