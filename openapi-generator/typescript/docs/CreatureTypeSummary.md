
# CreatureTypeSummary

A slimmer CreatureTypeSerializer, designed to serialize CreatureType FKs on other serializers . Not intended to be used directly with in a ModelViewset.

## Properties

Name | Type
------------ | -------------
`name` | string
`key` | string

## Example

```typescript
import type { CreatureTypeSummary } from 'open5e'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "key": null,
} satisfies CreatureTypeSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatureTypeSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


