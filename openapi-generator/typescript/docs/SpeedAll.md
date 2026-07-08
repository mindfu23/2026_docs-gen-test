
# SpeedAll


## Properties

Name | Type
------------ | -------------
`unit` | string
`walk` | number
`crawl` | number
`hover` | boolean
`fly` | number
`burrow` | number
`climb` | number
`swim` | number

## Example

```typescript
import type { SpeedAll } from 'open5e'

// TODO: Update the object below with actual values
const example = {
  "unit": null,
  "walk": null,
  "crawl": null,
  "hover": null,
  "fly": null,
  "burrow": null,
  "climb": null,
  "swim": null,
} satisfies SpeedAll

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SpeedAll
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


