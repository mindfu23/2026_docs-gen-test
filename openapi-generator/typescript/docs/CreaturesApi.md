# CreaturesApi

All URIs are relative to *https://api.open5e.com*

| Method | HTTP request | Description |
|------------- | ------------- | -------------|
| [**creaturesList**](CreaturesApi.md#creatureslist) | **GET** /v2/creatures/ |  |
| [**creaturesRetrieve**](CreaturesApi.md#creaturesretrieve) | **GET** /v2/creatures/{key}/ |  |



## creaturesList

> PaginatedCreatureList creaturesList(keyIn, keyIexact, key, nameIexact, name, nameIcontains, documentKeyIn, documentKeyIexact, documentKey, documentGamesystemKeyIn, documentGamesystemKeyIexact, documentGamesystemKey, size, category, categoryIexact, subcategory, subcategoryIexact, type, challengeRating, challengeRatingLt, challengeRatingLte, challengeRatingGt, challengeRatingGte, armorClass, armorClassLt, armorClassLte, armorClassGt, armorClassGte, abilityScoreStrength, abilityScoreStrengthLt, abilityScoreStrengthLte, abilityScoreStrengthGt, abilityScoreStrengthGte, abilityScoreDexterity, abilityScoreDexterityLt, abilityScoreDexterityLte, abilityScoreDexterityGt, abilityScoreDexterityGte, abilityScoreConstitution, abilityScoreConstitutionLt, abilityScoreConstitutionLte, abilityScoreConstitutionGt, abilityScoreConstitutionGte, abilityScoreIntelligence, abilityScoreIntelligenceLt, abilityScoreIntelligenceLte, abilityScoreIntelligenceGt, abilityScoreIntelligenceGte, abilityScoreWisdom, abilityScoreWisdomLt, abilityScoreWisdomLte, abilityScoreWisdomGt, abilityScoreWisdomGte, abilityScoreCharisma, abilityScoreCharismaLt, abilityScoreCharismaLte, abilityScoreCharismaGt, abilityScoreCharismaGte, savingThrowStrengthIsnull, savingThrowDexterityIsnull, savingThrowConstitutionIsnull, savingThrowIntelligenceIsnull, savingThrowWisdomIsnull, savingThrowCharismaIsnull, skillBonusAcrobaticsIsnull, skillBonusAnimalHandlingIsnull, skillBonusArcanaIsnull, skillBonusAthleticsIsnull, skillBonusDeceptionIsnull, skillBonusHistoryIsnull, skillBonusInsightIsnull, skillBonusIntimidationIsnull, skillBonusInvestigationIsnull, skillBonusMedicineIsnull, skillBonusNatureIsnull, skillBonusPerceptionIsnull, skillBonusPerformanceIsnull, skillBonusPersuasionIsnull, skillBonusReligionIsnull, skillBonusSleightOfHandIsnull, skillBonusStealthIsnull, skillBonusSurvivalIsnull, passivePerception, passivePerceptionLt, passivePerceptionLte, passivePerceptionGt, passivePerceptionGte, ordering, search, page, limit)



list: API endpoint for returning a list of creatures. retrieve: API endpoint for returning a particular creature.

### Example

```ts
import {
  Configuration,
  CreaturesApi,
} from 'open5e';
import type { CreaturesListRequest } from 'open5e';

async function example() {
  console.log("🚀 Testing open5e SDK...");
  const api = new CreaturesApi();

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
    // string | Unique key for the Item. (optional)
    size: size_example,
    // string (optional)
    category: category_example,
    // string (optional)
    categoryIexact: categoryIexact_example,
    // string (optional)
    subcategory: subcategory_example,
    // string (optional)
    subcategoryIexact: subcategoryIexact_example,
    // string | Unique key for the Item. (optional)
    type: type_example,
    // number (optional)
    challengeRating: 3.4,
    // number (optional)
    challengeRatingLt: 3.4,
    // number (optional)
    challengeRatingLte: 3.4,
    // number (optional)
    challengeRatingGt: 3.4,
    // number (optional)
    challengeRatingGte: 3.4,
    // number (optional)
    armorClass: 56,
    // number (optional)
    armorClassLt: 56,
    // number (optional)
    armorClassLte: 56,
    // number (optional)
    armorClassGt: 56,
    // number (optional)
    armorClassGte: 56,
    // number (optional)
    abilityScoreStrength: 56,
    // number (optional)
    abilityScoreStrengthLt: 56,
    // number (optional)
    abilityScoreStrengthLte: 56,
    // number (optional)
    abilityScoreStrengthGt: 56,
    // number (optional)
    abilityScoreStrengthGte: 56,
    // number (optional)
    abilityScoreDexterity: 56,
    // number (optional)
    abilityScoreDexterityLt: 56,
    // number (optional)
    abilityScoreDexterityLte: 56,
    // number (optional)
    abilityScoreDexterityGt: 56,
    // number (optional)
    abilityScoreDexterityGte: 56,
    // number (optional)
    abilityScoreConstitution: 56,
    // number (optional)
    abilityScoreConstitutionLt: 56,
    // number (optional)
    abilityScoreConstitutionLte: 56,
    // number (optional)
    abilityScoreConstitutionGt: 56,
    // number (optional)
    abilityScoreConstitutionGte: 56,
    // number (optional)
    abilityScoreIntelligence: 56,
    // number (optional)
    abilityScoreIntelligenceLt: 56,
    // number (optional)
    abilityScoreIntelligenceLte: 56,
    // number (optional)
    abilityScoreIntelligenceGt: 56,
    // number (optional)
    abilityScoreIntelligenceGte: 56,
    // number (optional)
    abilityScoreWisdom: 56,
    // number (optional)
    abilityScoreWisdomLt: 56,
    // number (optional)
    abilityScoreWisdomLte: 56,
    // number (optional)
    abilityScoreWisdomGt: 56,
    // number (optional)
    abilityScoreWisdomGte: 56,
    // number (optional)
    abilityScoreCharisma: 56,
    // number (optional)
    abilityScoreCharismaLt: 56,
    // number (optional)
    abilityScoreCharismaLte: 56,
    // number (optional)
    abilityScoreCharismaGt: 56,
    // number (optional)
    abilityScoreCharismaGte: 56,
    // boolean (optional)
    savingThrowStrengthIsnull: true,
    // boolean (optional)
    savingThrowDexterityIsnull: true,
    // boolean (optional)
    savingThrowConstitutionIsnull: true,
    // boolean (optional)
    savingThrowIntelligenceIsnull: true,
    // boolean (optional)
    savingThrowWisdomIsnull: true,
    // boolean (optional)
    savingThrowCharismaIsnull: true,
    // boolean (optional)
    skillBonusAcrobaticsIsnull: true,
    // boolean (optional)
    skillBonusAnimalHandlingIsnull: true,
    // boolean (optional)
    skillBonusArcanaIsnull: true,
    // boolean (optional)
    skillBonusAthleticsIsnull: true,
    // boolean (optional)
    skillBonusDeceptionIsnull: true,
    // boolean (optional)
    skillBonusHistoryIsnull: true,
    // boolean (optional)
    skillBonusInsightIsnull: true,
    // boolean (optional)
    skillBonusIntimidationIsnull: true,
    // boolean (optional)
    skillBonusInvestigationIsnull: true,
    // boolean (optional)
    skillBonusMedicineIsnull: true,
    // boolean (optional)
    skillBonusNatureIsnull: true,
    // boolean (optional)
    skillBonusPerceptionIsnull: true,
    // boolean (optional)
    skillBonusPerformanceIsnull: true,
    // boolean (optional)
    skillBonusPersuasionIsnull: true,
    // boolean (optional)
    skillBonusReligionIsnull: true,
    // boolean (optional)
    skillBonusSleightOfHandIsnull: true,
    // boolean (optional)
    skillBonusStealthIsnull: true,
    // boolean (optional)
    skillBonusSurvivalIsnull: true,
    // number (optional)
    passivePerception: 56,
    // number (optional)
    passivePerceptionLt: 56,
    // number (optional)
    passivePerceptionLte: 56,
    // number (optional)
    passivePerceptionGt: 56,
    // number (optional)
    passivePerceptionGte: 56,
    // string | Which field to use when ordering the results. (optional)
    ordering: ordering_example,
    // string | A search term. (optional)
    search: search_example,
    // number | A page number within the paginated result set. (optional)
    page: 56,
    // number | Number of results to return per page. (optional)
    limit: 56,
  } satisfies CreaturesListRequest;

  try {
    const data = await api.creaturesList(body);
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
| **nameIcontains** | `string` |  | [Optional] [Defaults to `undefined`] |
| **documentKeyIn** | `Array<string>` | Multiple values may be separated by commas. | [Optional] |
| **documentKeyIexact** | `string` |  | [Optional] [Defaults to `undefined`] |
| **documentKey** | `string` |  | [Optional] [Defaults to `undefined`] |
| **documentGamesystemKeyIn** | `Array<string>` | Multiple values may be separated by commas. | [Optional] |
| **documentGamesystemKeyIexact** | `string` |  | [Optional] [Defaults to `undefined`] |
| **documentGamesystemKey** | `string` |  | [Optional] [Defaults to `undefined`] |
| **size** | `string` | Unique key for the Item. | [Optional] [Defaults to `undefined`] |
| **category** | `string` |  | [Optional] [Defaults to `undefined`] |
| **categoryIexact** | `string` |  | [Optional] [Defaults to `undefined`] |
| **subcategory** | `string` |  | [Optional] [Defaults to `undefined`] |
| **subcategoryIexact** | `string` |  | [Optional] [Defaults to `undefined`] |
| **type** | `string` | Unique key for the Item. | [Optional] [Defaults to `undefined`] |
| **challengeRating** | `number` |  | [Optional] [Defaults to `undefined`] |
| **challengeRatingLt** | `number` |  | [Optional] [Defaults to `undefined`] |
| **challengeRatingLte** | `number` |  | [Optional] [Defaults to `undefined`] |
| **challengeRatingGt** | `number` |  | [Optional] [Defaults to `undefined`] |
| **challengeRatingGte** | `number` |  | [Optional] [Defaults to `undefined`] |
| **armorClass** | `number` |  | [Optional] [Defaults to `undefined`] |
| **armorClassLt** | `number` |  | [Optional] [Defaults to `undefined`] |
| **armorClassLte** | `number` |  | [Optional] [Defaults to `undefined`] |
| **armorClassGt** | `number` |  | [Optional] [Defaults to `undefined`] |
| **armorClassGte** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreStrength** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreStrengthLt** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreStrengthLte** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreStrengthGt** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreStrengthGte** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreDexterity** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreDexterityLt** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreDexterityLte** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreDexterityGt** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreDexterityGte** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreConstitution** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreConstitutionLt** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreConstitutionLte** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreConstitutionGt** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreConstitutionGte** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreIntelligence** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreIntelligenceLt** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreIntelligenceLte** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreIntelligenceGt** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreIntelligenceGte** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreWisdom** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreWisdomLt** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreWisdomLte** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreWisdomGt** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreWisdomGte** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreCharisma** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreCharismaLt** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreCharismaLte** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreCharismaGt** | `number` |  | [Optional] [Defaults to `undefined`] |
| **abilityScoreCharismaGte** | `number` |  | [Optional] [Defaults to `undefined`] |
| **savingThrowStrengthIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **savingThrowDexterityIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **savingThrowConstitutionIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **savingThrowIntelligenceIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **savingThrowWisdomIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **savingThrowCharismaIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **skillBonusAcrobaticsIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **skillBonusAnimalHandlingIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **skillBonusArcanaIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **skillBonusAthleticsIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **skillBonusDeceptionIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **skillBonusHistoryIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **skillBonusInsightIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **skillBonusIntimidationIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **skillBonusInvestigationIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **skillBonusMedicineIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **skillBonusNatureIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **skillBonusPerceptionIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **skillBonusPerformanceIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **skillBonusPersuasionIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **skillBonusReligionIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **skillBonusSleightOfHandIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **skillBonusStealthIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **skillBonusSurvivalIsnull** | `boolean` |  | [Optional] [Defaults to `undefined`] |
| **passivePerception** | `number` |  | [Optional] [Defaults to `undefined`] |
| **passivePerceptionLt** | `number` |  | [Optional] [Defaults to `undefined`] |
| **passivePerceptionLte** | `number` |  | [Optional] [Defaults to `undefined`] |
| **passivePerceptionGt** | `number` |  | [Optional] [Defaults to `undefined`] |
| **passivePerceptionGte** | `number` |  | [Optional] [Defaults to `undefined`] |
| **ordering** | `string` | Which field to use when ordering the results. | [Optional] [Defaults to `undefined`] |
| **search** | `string` | A search term. | [Optional] [Defaults to `undefined`] |
| **page** | `number` | A page number within the paginated result set. | [Optional] [Defaults to `undefined`] |
| **limit** | `number` | Number of results to return per page. | [Optional] [Defaults to `undefined`] |

### Return type

[**PaginatedCreatureList**](PaginatedCreatureList.md)

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


## creaturesRetrieve

> Creature creaturesRetrieve(key)



list: API endpoint for returning a list of creatures. retrieve: API endpoint for returning a particular creature.

### Example

```ts
import {
  Configuration,
  CreaturesApi,
} from 'open5e';
import type { CreaturesRetrieveRequest } from 'open5e';

async function example() {
  console.log("🚀 Testing open5e SDK...");
  const api = new CreaturesApi();

  const body = {
    // string
    key: key_example,
  } satisfies CreaturesRetrieveRequest;

  try {
    const data = await api.creaturesRetrieve(body);
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

[**Creature**](Creature.md)

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

