
# Spell

Much of the logic included in the GameContentSerializer is intended to support manipulating data returned by the serializer via query parameters.

## Properties

Name | Type
------------ | -------------
`key` | string
`document` | [DocumentSummary](DocumentSummary.md)
`castingOptions` | [Array&lt;SpellCastingOption&gt;](SpellCastingOption.md)
`school` | [SpellSchoolSummary](SpellSchoolSummary.md)
`classes` | [Array&lt;CharacterClassSummary&gt;](CharacterClassSummary.md)
`rangeUnit` | string
`shapeSizeUnit` | string
`name` | string
`desc` | string
`level` | number
`higherLevel` | string
`targetType` | string
`rangeText` | string
`range` | number
`ritual` | boolean
`castingTime` | string
`reactionCondition` | string
`verbal` | boolean
`somatic` | boolean
`material` | boolean
`materialSpecified` | string
`materialCost` | string
`materialConsumed` | boolean
`targetCount` | number
`savingThrowAbility` | string
`attackRoll` | boolean
`damageRoll` | string
`damageTypes` | any
`duration` | string
`shapeType` | string
`shapeSize` | number
`concentration` | boolean
`crossreferences` | [CrossReferences](CrossReferences.md)

## Example

```typescript
import type { Spell } from 'open5e'

// TODO: Update the object below with actual values
const example = {
  "key": null,
  "document": null,
  "castingOptions": null,
  "school": null,
  "classes": null,
  "rangeUnit": null,
  "shapeSizeUnit": null,
  "name": null,
  "desc": null,
  "level": null,
  "higherLevel": null,
  "targetType": null,
  "rangeText": null,
  "range": null,
  "ritual": null,
  "castingTime": null,
  "reactionCondition": null,
  "verbal": null,
  "somatic": null,
  "material": null,
  "materialSpecified": null,
  "materialCost": null,
  "materialConsumed": null,
  "targetCount": null,
  "savingThrowAbility": null,
  "attackRoll": null,
  "damageRoll": null,
  "damageTypes": null,
  "duration": null,
  "shapeType": null,
  "shapeSize": null,
  "concentration": null,
  "crossreferences": null,
} satisfies Spell

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Spell
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


