# SpellsApi

All URIs are relative to *https://api.open5e.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**spellsList**](SpellsApi.md#spellslist) | **GET** /v2/spells/ |  |
| [**spellsRetrieve**](SpellsApi.md#spellsretrieve) | **GET** /v2/spells/{key}/ |  |



## spellsList

> PaginatedSpellList spellsList(keyIn, keyIexact, key, nameIexact, name, nameContains, nameIcontains, documentKeyIn, documentKeyIexact, documentKey, documentGamesystemKeyIn, documentGamesystemKeyIexact, documentGamesystemKey, classesKeyIn, classesKeyIexact, classesKey, classesNameIn, level, levelRange, levelGt, levelGte, levelLt, levelLte, range, rangeRange, rangeGt, rangeGte, rangeLt, rangeLte, schoolKey, schoolNameIn, schoolNameIexact, schoolName, durationIn, durationIexact, duration, concentration, verbal, somatic, material, materialConsumed, castingTimeIn, castingTimeIexact, castingTime, ordering, search, page, limit)



list: API endpoint for returning a list of spells. retrieve: API endpoint for returning a particular spell.

### Example

```ts
import {
  Configuration,
  SpellsApi,
} from 'open5e';
import type { SpellsListRequest } from 'open5e';

async function example() {
  console.log("🚀 Testing open5e SDK...");
  const api = new SpellsApi();

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
    // string (optional)
    nameIcontains: nameIcontains_example,
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
    // Array<string> | Multiple values may be separated by commas. (optional)
    classesKeyIn: ...,
    // string (optional)
    classesKeyIexact: classesKeyIexact_example,
    // string (optional)
    classesKey: classesKey_example,
    // Array<string> | Multiple values may be separated by commas. (optional)
    classesNameIn: ...,
    // number (optional)
    level: 56,
    // Array<number> | Multiple values may be separated by commas. (optional)
    levelRange: ...,
    // number (optional)
    levelGt: 56,
    // number (optional)
    levelGte: 56,
    // number (optional)
    levelLt: 56,
    // number (optional)
    levelLte: 56,
    // number (optional)
    range: 56,
    // Array<number> | Multiple values may be separated by commas. (optional)
    rangeRange: ...,
    // number (optional)
    rangeGt: 56,
    // number (optional)
    rangeGte: 56,
    // number (optional)
    rangeLt: 56,
    // number (optional)
    rangeLte: 56,
    // string (optional)
    schoolKey: schoolKey_example,
    // Array<string> | Multiple values may be separated by commas. (optional)
    schoolNameIn: ...,
    // string (optional)
    schoolNameIexact: schoolNameIexact_example,
    // string (optional)
    schoolName: schoolName_example,
    // Array<string> | Multiple values may be separated by commas. (optional)
    durationIn: ...,
    // string (optional)
    durationIexact: durationIexact_example,
    // '1 day' | '1 hour' | '1 hour or until triggered' | '1 hour/caster level' | '1 minute' | '1 minute' | '1 minute or 1 hour' | '1 minute, or until expended' | '1 minute, until expended' | '1 round' | '1 turn' | '1 year' | '10 days' | '10 hours' | '10 minutes' | '10 rounds' | '12 hours' | '13 days' | '1d10 hours' | '1d4+2 rounds' | '2 hours' | '2 rounds' | '2-12 hours' | '24 hours' | '24 hours or until the target attempts a third death saving throw' | '3 days' | '3 hours' | '3 rounds' | '30 days' | '4 rounds' | '5 days' | '5 minutes' | '5 rounds' | '6 hours' | '6 rounds' | '7 days' | '8 hours' | 'concentration + 1 round' | 'instantaneous' | 'instantaneous or special' | 'permanent' | 'permanent until discharged' | 'permanent; one generation' | 'special' | 'until cured or dispelled' | 'until destroyed' | 'until dispelled' | 'until dispelled or destroyed' | 'until dispelled or triggered' | 'up to 1 hour' | 'up to 1 minute' | 'up to 8 hours' | Description of the duration of the effect such as \"instantaneous\" or \"1 minute\"  * `instantaneous` - instantaneous * `instantaneous or special` - instantaneous or special * `1 turn` - 1 turn * `1 round` - 1 round * `concentration + 1 round` - concentration + 1 round * `2 rounds` - 2 rounds * `3 rounds` - 3 rounds * `4 rounds` - 4 rounds * `1d4+2 rounds` - 1d4+2 rounds * `5 rounds` - 5 rounds * `6 rounds` - 6 rounds * `10 rounds` - 10 rounds * `up to 1 minute` - up to 1 minute * `1 minute` - 1 minute * `1 minute, or until expended` - 1 minute, or until expended * `1 minute, until expended` - 1 minute, until expended * `1 minute` - 1 minute * `5 minutes` - 5 minutes * `10 minutes` - 10 minutes * `1 minute or 1 hour` - 1 minute or 1 hour * `up to 1 hour` - up to 1 hour * `1 hour` - 1 hour * `1 hour or until triggered` - 1 hour or until triggered * `2 hours` - 2 hours * `3 hours` - 3 hours * `1d10 hours` - 1d10 hours * `6 hours` - 6 hours * `2-12 hours` - 2-12 hours * `up to 8 hours` - up to 8 hours * `8 hours` - 8 hours * `1 hour/caster level` - 1 hour/caster level * `10 hours` - 10 hours * `12 hours` - 12 hours * `24 hours or until the target attempts a third death saving throw` - 24 hours or until the target attempts a third death saving throw * `24 hours` - 24 hours * `1 day` - 1 day * `3 days` - 3 days * `5 days` - 5 days * `7 days` - 7 days * `10 days` - 10 days * `13 days` - 13 days * `30 days` - 30 days * `1 year` - 1 year * `special` - special * `until dispelled or destroyed` - until dispelled or destroyed * `until destroyed` - until destroyed * `until dispelled` - until dispelled * `until cured or dispelled` - until cured or dispelled * `until dispelled or triggered` - until dispelled or triggered * `permanent until discharged` - permanent until discharged * `permanent; one generation` - permanent; one generation * `permanent` - permanent (optional)
    duration: duration_example,
    // boolean (optional)
    concentration: true,
    // boolean (optional)
    verbal: true,
    // boolean (optional)
    somatic: true,
    // boolean (optional)
    material: true,
    // boolean (optional)
    materialConsumed: true,
    // Array<string> | Multiple values may be separated by commas. (optional)
    castingTimeIn: ...,
    // string (optional)
    castingTimeIexact: castingTimeIexact_example,
    // '10minutes' | '12hours' | '1hour' | '1minute' | '1week' | '24hours' | '4hours' | '5minutes' | '7hours' | '8hours' | '9hours' | 'action' | 'bonus-action' | 'reaction' | 'round' | 'turn' | Casting time key, such as \'action\'  * `reaction` - Reaction * `bonus-action` - 1 Bonus Action * `action` - 1 Action * `turn` - 1 Turn * `round` - 1 Round * `1minute` - 1 Minute * `5minutes` - 5 Minutes * `10minutes` - 10 Minutes * `1hour` - 1 Hour * `4hours` - 4 Hours * `7hours` - 7 Hours * `8hours` - 8 Hours * `9hours` - 9 Hours * `12hours` - 12 Hours * `24hours` - 24 Hours * `1week` - 1 Week (optional)
    castingTime: castingTime_example,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
    // string | A search term. (optional)
    search: search_example,
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    limit: 56,
  } satisfies SpellsListRequest;

  try {
    const data = await api.spellsList(body);
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
| **nameIcontains** | `string` |  | [Optional] [Defaults to `undefined`] |
| **documentKeyIn** | `Array<string>` | Multiple values may be separated by commas. | [Optional] |
| **documentKeyIexact** | `string` |  | [Optional] [Defaults to `undefined`] |
| **documentKey** | `string` |  | [Optional] [Defaults to `undefined`] |
| **documentGamesystemKeyIn** | `Array<string>` | Multiple values may be separated by commas. | [Optional] |
| **documentGamesystemKeyIexact** | `string` |  | [Optional] [Defaults to `undefined`] |
| **documentGamesystemKey** | `string` |  | [Optional] [Defaults to `undefined`] |
| **classesKeyIn** | `Array<string>` | Multiple values may be separated by commas. | [Optional] |
| **classesKeyIexact** | `string` |  | [Optional] [Defaults to `undefined`] |
| **classesKey** | `string` |  | [Optional] [Defaults to `undefined`] |
| **classesNameIn** | `Array<string>` | Multiple values may be separated by commas. | [Optional] |
| **level** | `number` |  | [Optional] [Defaults to `undefined`] |
| **levelRange** | `Array<number>` | Multiple values may be separated by commas. | [Optional] |
| **levelGt** | `number` |  | [Optional] [Defaults to `undefined`] |
| **levelGte** | `number` |  | [Optional] [Defaults to `undefined`] |
| **levelLt** | `number` |  | [Optional] [Defaults to `undefined`] |
| **levelLte** | `number` |  | [Optional] [Defaults to `undefined`] |
| **range** | `number` |  | [Optional] [Defaults to `undefined`] |
| **rangeRange** | `Array<number>` | Multiple values may be separated by commas. | [Optional] |
| **rangeGt** | `number` |  | [Optional] [Defaults to `undefined`] |
| **rangeGte** | `number` |  | [Optional] [Defaults to `undefined`] |
| **rangeLt** | `number` |  | [Optional] [Defaults to `undefined`] |
| **rangeLte** | `number` |  | [Optional] [Defaults to `undefined`] |
| **schoolKey** | `string` |  | [Optional] [Defaults to `undefined`] |
| **schoolNameIn** | `Array<string>` | Multiple values may be separated by commas. | [Optional] |
| **schoolNameIexact** | `string` |  | [Optional] [Defaults to `undefined`] |
| **schoolName** | `string` |  | [Optional] [Defaults to `undefined`] |
| **durationIn** | `Array<string>` | Multiple values may be separated by commas. | [Optional] |
| **durationIexact** | `string` |  | [Optional] [Defaults to `undefined`] |
| **duration** | `1 day`, `1 hour`, `1 hour or until triggered`, `1 hour/caster level`, `1 minute`, `1 minute`, `1 minute or 1 hour`, `1 minute, or until expended`, `1 minute, until expended`, `1 round`, `1 turn`, `1 year`, `10 days`, `10 hours`, `10 minutes`, `10 rounds`, `12 hours`, `13 days`, `1d10 hours`, `1d4+2 rounds`, `2 hours`, `2 rounds`, `2-12 hours`, `24 hours`, `24 hours or until the target attempts a third death saving throw`, `3 days`, `3 hours`, `3 rounds`, `30 days`, `4 rounds`, `5 days`, `5 minutes`, `5 rounds`, `6 hours`, `6 rounds`, `7 days`, `8 hours`, `concentration + 1 round`, `instantaneous`, `instantaneous or special`, `permanent`, `permanent until discharged`, `permanent; one generation`, `special`, `until cured or dispelled`, `until destroyed`, `until dispelled`, `until dispelled or destroyed`, `until dispelled or triggered`, `up to 1 hour`, `up to 1 minute`, `up to 8 hours` | Description of the duration of the effect such as \&quot;instantaneous\&quot; or \&quot;1 minute\&quot;  * &#x60;instantaneous&#x60; - instantaneous * &#x60;instantaneous or special&#x60; - instantaneous or special * &#x60;1 turn&#x60; - 1 turn * &#x60;1 round&#x60; - 1 round * &#x60;concentration + 1 round&#x60; - concentration + 1 round * &#x60;2 rounds&#x60; - 2 rounds * &#x60;3 rounds&#x60; - 3 rounds * &#x60;4 rounds&#x60; - 4 rounds * &#x60;1d4+2 rounds&#x60; - 1d4+2 rounds * &#x60;5 rounds&#x60; - 5 rounds * &#x60;6 rounds&#x60; - 6 rounds * &#x60;10 rounds&#x60; - 10 rounds * &#x60;up to 1 minute&#x60; - up to 1 minute * &#x60;1 minute&#x60; - 1 minute * &#x60;1 minute, or until expended&#x60; - 1 minute, or until expended * &#x60;1 minute, until expended&#x60; - 1 minute, until expended * &#x60;1 minute&#x60; - 1 minute * &#x60;5 minutes&#x60; - 5 minutes * &#x60;10 minutes&#x60; - 10 minutes * &#x60;1 minute or 1 hour&#x60; - 1 minute or 1 hour * &#x60;up to 1 hour&#x60; - up to 1 hour * &#x60;1 hour&#x60; - 1 hour * &#x60;1 hour or until triggered&#x60; - 1 hour or until triggered * &#x60;2 hours&#x60; - 2 hours * &#x60;3 hours&#x60; - 3 hours * &#x60;1d10 hours&#x60; - 1d10 hours * &#x60;6 hours&#x60; - 6 hours * &#x60;2-12 hours&#x60; - 2-12 hours * &#x60;up to 8 hours&#x60; - up to 8 hours * &#x60;8 hours&#x60; - 8 hours * &#x60;1 hour/caster level&#x60; - 1 hour/caster level * &#x60;10 hours&#x60; - 10 hours * &#x60;12 hours&#x60; - 12 hours * &#x60;24 hours or until the target attempts a third death saving throw&#x60; - 24 hours or until the target attempts a third death saving throw * &#x60;24 hours&#x60; - 24 hours * &#x60;1 day&#x60; - 1 day * &#x60;3 days&#x60; - 3 days * &#x60;5 days&#x60; - 5 days * &#x60;7 days&#x60; - 7 days * &#x60;10 days&#x60; - 10 days * &#x60;13 days&#x60; - 13 days * &#x60;30 days&#x60; - 30 days * &#x60;1 year&#x60; - 1 year * &#x60;special&#x60; - special * &#x60;until dispelled or destroyed&#x60; - until dispelled or destroyed * &#x60;until destroyed&#x60; - until destroyed * &#x60;until dispelled&#x60; - until dispelled * &#x60;until cured or dispelled&#x60; - until cured or dispelled * &#x60;until dispelled or triggered&#x60; - until dispelled or triggered * &#x60;permanent until discharged&#x60; - permanent until discharged * &#x60;permanent; one generation&#x60; - permanent; one generation * &#x60;permanent&#x60; - permanent | [Optional] [Defaults to `undefined`] [Enum: 1 day, 1 hour, 1 hour or until triggered, 1 hour/caster level, 1 minute, 1 minute, 1 minute or 1 hour, 1 minute, or until expended, 1 minute, until expended, 1 round, 1 turn, 1 year, 10 days, 10 hours, 10 minutes, 10 rounds, 12 hours, 13 days, 1d10 hours, 1d4+2 rounds, 2 hours, 2 rounds, 2-12 hours, 24 hours, 24 hours or until the target attempts a third death saving throw, 3 days, 3 hours, 3 rounds, 30 days, 4 rounds, 5 days, 5 minutes, 5 rounds, 6 hours, 6 rounds, 7 days, 8 hours, concentration + 1 round, instantaneous, instantaneous or special, permanent, permanent until discharged, permanent; one generation, special, until cured or dispelled, until destroyed, until dispelled, until dispelled or destroyed, until dispelled or triggered, up to 1 hour, up to 1 minute, up to 8 hours] |
| **concentration** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **verbal** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **somatic** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **material** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **materialConsumed** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **castingTimeIn** | `Array<string>` | Multiple values may be separated by commas. | [Optional] |
| **castingTimeIexact** | `string` |  | [Optional] [Defaults to `undefined`] |
| **castingTime** | `10minutes`, `12hours`, `1hour`, `1minute`, `1week`, `24hours`, `4hours`, `5minutes`, `7hours`, `8hours`, `9hours`, `action`, `bonus-action`, `reaction`, `round`, `turn` | Casting time key, such as \&#39;action\&#39;  * &#x60;reaction&#x60; - Reaction * &#x60;bonus-action&#x60; - 1 Bonus Action * &#x60;action&#x60; - 1 Action * &#x60;turn&#x60; - 1 Turn * &#x60;round&#x60; - 1 Round * &#x60;1minute&#x60; - 1 Minute * &#x60;5minutes&#x60; - 5 Minutes * &#x60;10minutes&#x60; - 10 Minutes * &#x60;1hour&#x60; - 1 Hour * &#x60;4hours&#x60; - 4 Hours * &#x60;7hours&#x60; - 7 Hours * &#x60;8hours&#x60; - 8 Hours * &#x60;9hours&#x60; - 9 Hours * &#x60;12hours&#x60; - 12 Hours * &#x60;24hours&#x60; - 24 Hours * &#x60;1week&#x60; - 1 Week | [Optional] [Defaults to `undefined`] [Enum: 10minutes, 12hours, 1hour, 1minute, 1week, 24hours, 4hours, 5minutes, 7hours, 8hours, 9hours, action, bonus-action, reaction, round, turn] |
| **ordering** | `string` | Which field to use when ordering the results. | [Optional] [Defaults to `undefined`] |
| **search** | `string` | A search term. | [Optional] [Defaults to `undefined`] |
| **page** | `number` | A page number within the paginated result set. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of results to return per page. | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedSpellList**](PaginatedSpellList.md)

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


## spellsRetrieve

> Spell spellsRetrieve(key)



list: API endpoint for returning a list of spells. retrieve: API endpoint for returning a particular spell.

### Example

```ts
import {
  Configuration,
  SpellsApi,
} from 'open5e';
import type { SpellsRetrieveRequest } from 'open5e';

async function example() {
  console.log("🚀 Testing open5e SDK...");
  const api = new SpellsApi();

  const body = {
    // string
    key: key_example,
  } satisfies SpellsRetrieveRequest;

  try {
    const data = await api.spellsRetrieve(body);
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

[**Spell**](Spell.md)

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

