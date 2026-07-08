
# LanguageSummary

This serializer is used for FKs to the Language model from other serializers. ie. for the languages spoken by creatures on the CreatureSerializer.

## Properties

Name | Type
------------ | -------------
`name` | string
`key` | string
`desc` | string

## Example

```typescript
import type { LanguageSummary } from 'open5e'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "key": null,
  "desc": null,
} satisfies LanguageSummary

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as LanguageSummary
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


