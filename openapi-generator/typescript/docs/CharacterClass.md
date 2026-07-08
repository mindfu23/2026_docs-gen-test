
# CharacterClass

Much of the logic included in the GameContentSerializer is intended to support manipulating data returned by the serializer via query parameters.

## Properties

Name | Type
------------ | -------------
`key` | string
`features` | [Array&lt;ClassFeature&gt;](ClassFeature.md)
`hitPoints` | [HitPoints](HitPoints.md)
`document` | [DocumentSummary](DocumentSummary.md)
`savingThrows` | [Array&lt;AbilitySummary&gt;](AbilitySummary.md)
`subclassOf` | [CharacterClassSummary](CharacterClassSummary.md)
`name` | string
`desc` | string
`hitDice` | string
`casterType` | string
`primaryAbilities` | Array&lt;string&gt;
`crossreferences` | [CrossReferences](CrossReferences.md)

## Example

```typescript
import type { CharacterClass } from 'open5e'

// TODO: Update the object below with actual values
const example = {
  "key": null,
  "features": null,
  "hitPoints": null,
  "document": null,
  "savingThrows": null,
  "subclassOf": null,
  "name": null,
  "desc": null,
  "hitDice": null,
  "casterType": null,
  "primaryAbilities": null,
  "crossreferences": null,
} satisfies CharacterClass

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CharacterClass
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


