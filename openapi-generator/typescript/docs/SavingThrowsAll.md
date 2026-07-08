
# SavingThrowsAll


## Properties

Name | Type
------------ | -------------
`strength` | number
`dexterity` | number
`constitution` | number
`intelligence` | number
`wisdom` | number
`charisma` | number

## Example

```typescript
import type { SavingThrowsAll } from 'open5e'

// TODO: Update the object below with actual values
const example = {
  "strength": null,
  "dexterity": null,
  "constitution": null,
  "intelligence": null,
  "wisdom": null,
  "charisma": null,
} satisfies SavingThrowsAll

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SavingThrowsAll
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


