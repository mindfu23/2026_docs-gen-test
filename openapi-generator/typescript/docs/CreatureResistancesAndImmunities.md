
# CreatureResistancesAndImmunities

This serializer formats a Creature\'s damage modifier as a single obj

## Properties

Name | Type
------------ | -------------
`damageImmunitiesDisplay` | string
`damageImmunities` | [Array&lt;DamageTypeSummary&gt;](DamageTypeSummary.md)
`damageResistancesDisplay` | string
`damageResistances` | [Array&lt;DamageTypeSummary&gt;](DamageTypeSummary.md)
`damageVulnerabilitiesDisplay` | string
`damageVulnerabilities` | [Array&lt;DamageTypeSummary&gt;](DamageTypeSummary.md)
`conditionImmunitiesDisplay` | string
`conditionImmunities` | [Array&lt;ConditionSummary&gt;](ConditionSummary.md)

## Example

```typescript
import type { CreatureResistancesAndImmunities } from 'open5e'

// TODO: Update the object below with actual values
const example = {
  "damageImmunitiesDisplay": null,
  "damageImmunities": null,
  "damageResistancesDisplay": null,
  "damageResistances": null,
  "damageVulnerabilitiesDisplay": null,
  "damageVulnerabilities": null,
  "conditionImmunitiesDisplay": null,
  "conditionImmunities": null,
} satisfies CreatureResistancesAndImmunities

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as CreatureResistancesAndImmunities
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


