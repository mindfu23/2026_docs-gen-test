
# HitPoints


## Properties

Name | Type
------------ | -------------
`hitDice` | number
`hitDiceName` | string
`hitPointsAt1stLevel` | number
`hitPointsAtHigherLevels` | number

## Example

```typescript
import type { HitPoints } from 'open5e'

// TODO: Update the object below with actual values
const example = {
  "hitDice": null,
  "hitDiceName": null,
  "hitPointsAt1stLevel": null,
  "hitPointsAtHigherLevels": null,
} satisfies HitPoints

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as HitPoints
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


