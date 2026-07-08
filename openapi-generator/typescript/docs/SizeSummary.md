
# SizeSummary

A slimmer SizeSerializer, designed to serialize Size FKs on other serializers. ie. The `size` field on the CreatureSerializer. Not intended to be used directly in a ModelViewset.

## Properties

Name | Type
------------ | -------------
`name` | string
`key` | string

## Example

```typescript
import type { SizeSummary } from 'open5e'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "key": null,
} satisfies SizeSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as SizeSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


