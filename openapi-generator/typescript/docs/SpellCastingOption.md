
# SpellCastingOption


## Properties

Name | Type
------------ | -------------
`type` | string
`damageRoll` | string
`targetCount` | number
`duration` | string
`range` | string
`concentration` | boolean
`shapeSize` | number
`desc` | string

## Example

```typescript
import type { SpellCastingOption } from 'open5e'

// TODO: Update the object below with actual values
const example = {
  "type": null,
  "damageRoll": null,
  "targetCount": null,
  "duration": null,
  "range": null,
  "concentration": null,
  "shapeSize": null,
  "desc": null,
} satisfies SpellCastingOption

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SpellCastingOption
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


