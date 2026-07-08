
# DocumentSummary

A slimmer DocumentSerializer, designed to serialize Documents FKs on other serializers. Not intended to be used directly with in a ModelViewset.

## Properties

Name | Type
------------ | -------------
`name` | string
`key` | string
`type` | string
`displayName` | string
`publisher` | [PublisherSummary](PublisherSummary.md)
`gamesystem` | [GameSystemSummary](GameSystemSummary.md)
`permalink` | string

## Example

```typescript
import type { DocumentSummary } from 'open5e'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "key": null,
  "type": null,
  "displayName": null,
  "publisher": null,
  "gamesystem": null,
  "permalink": null,
} satisfies DocumentSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DocumentSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


