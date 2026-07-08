
# CreatureActionAttack

Much of the logic included in the GameContentSerializer is intended to support manipulating data returned by the serializer via query parameters.

## Properties

Name | Type
------------ | -------------
`name` | string
`attackType` | string
`toHitMod` | number
`reach` | number
`range` | number
`longRange` | number
`targetCreatureOnly` | boolean
`damageDieCount` | number
`damageDieType` | string
`damageBonus` | number
`damageType` | [DamageTypeSummary](DamageTypeSummary.md)
`extraDamageDieCount` | number
`extraDamageDieType` | string
`extraDamageBonus` | number
`extraDamageType` | [DamageTypeSummary](DamageTypeSummary.md)
`distanceUnit` | string

## Example

```typescript
import type { CreatureActionAttack } from 'open5e'

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "attackType": null,
  "toHitMod": null,
  "reach": null,
  "range": null,
  "longRange": null,
  "targetCreatureOnly": null,
  "damageDieCount": null,
  "damageDieType": null,
  "damageBonus": null,
  "damageType": null,
  "extraDamageDieCount": null,
  "extraDamageDieType": null,
  "extraDamageBonus": null,
  "extraDamageType": null,
  "distanceUnit": null,
} satisfies CreatureActionAttack

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatureActionAttack
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


