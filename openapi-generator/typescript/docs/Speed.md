
# Speed


## Properties

Name | Type
------------ | -------------
`walk` | string
`fly` | string
`swim` | string
`climb` | string
`burrow` | string
`hover` | boolean

## Example

```typescript
import type { Speed } from 'open5e'

// TODO: Update the object below with actual values
const example = {
  "walk": null,
  "fly": null,
  "swim": null,
  "climb": null,
  "burrow": null,
  "hover": null,
} satisfies Speed

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Speed
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


