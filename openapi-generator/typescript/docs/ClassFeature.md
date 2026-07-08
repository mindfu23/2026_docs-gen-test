
# ClassFeature

Much of the logic included in the GameContentSerializer is intended to support manipulating data returned by the serializer via query parameters.

## Properties

Name | Type
------------ | -------------
`key` | string
`name` | string
`desc` | string
`featureType` | string
`featureItems` | [Array&lt;ClassFeaturePrefetch&gt;](ClassFeaturePrefetch.md)

## Example

```typescript
import type { ClassFeature } from 'open5e'

// TODO: Update the object below with actual values
const example = {
  "key": null,
  "name": null,
  "desc": null,
  "featureType": null,
  "featureItems": null,
} satisfies ClassFeature

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as ClassFeature
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


