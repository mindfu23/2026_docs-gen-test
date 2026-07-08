
# ImageSummary

Much of the logic included in the GameContentSerializer is intended to support manipulating data returned by the serializer via query parameters.

## Properties

Name | Type
------------ | -------------
`name` | string
`key` | string
`fileUrl` | string
`altText` | string
`attribution` | string

## Example

```typescript
import type { ImageSummary } from 'open5e'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "key": null,
  "fileUrl": null,
  "altText": null,
  "attribution": null,
} satisfies ImageSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ImageSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


