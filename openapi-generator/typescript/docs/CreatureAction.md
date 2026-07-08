
# CreatureAction

Much of the logic included in the GameContentSerializer is intended to support manipulating data returned by the serializer via query parameters.

## Properties

Name | Type
------------ | -------------
`name` | string
`desc` | string
`attacks` | [Array&lt;CreatureActionAttack&gt;](CreatureActionAttack.md)
`actionType` | string
`orderInStatblock` | number
`legendaryActionCost` | number
`limitedToForm` | string
`usageLimits` | { [key: string]: any; }

## Example

```typescript
import type { CreatureAction } from 'open5e'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "desc": null,
  "attacks": null,
  "actionType": null,
  "orderInStatblock": null,
  "legendaryActionCost": null,
  "limitedToForm": null,
  "usageLimits": null,
} satisfies CreatureAction

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatureAction
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


