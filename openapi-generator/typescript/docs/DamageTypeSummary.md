
# DamageTypeSummary

A slimmer DamageTypeSerializer, designed to serialize DamageType FKs on other serializers. Not intended to be used directly with in a ModelViewset.

## Properties

Name | Type
------------ | -------------
`name` | string
`key` | string

## Example

```typescript
import type { DamageTypeSummary } from 'open5e'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "key": null,
} satisfies DamageTypeSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as DamageTypeSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


