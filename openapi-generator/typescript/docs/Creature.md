
# Creature

The serializer for the Creature object.

## Properties

Name | Type
------------ | -------------
`key` | string
`name` | string
`document` | [DocumentSummary](DocumentSummary.md)
`type` | [CreatureTypeSummary](CreatureTypeSummary.md)
`size` | [SizeSummary](SizeSummary.md)
`challengeRating` | number
`proficiencyBonus` | number
`speed` | [Speed](Speed.md)
`speedAll` | [SpeedAll](SpeedAll.md)
`category` | string
`subcategory` | string
`alignment` | string
`languages` | [CreatureLanguage](CreatureLanguage.md)
`armorClass` | number
`armorDetail` | string
`hitPoints` | number
`hitDice` | string
`experiencePoints` | number
`abilityScores` | [AbilityScores](AbilityScores.md)
`modifiers` | [AbilityModifiers](AbilityModifiers.md)
`initiativeBonus` | number
`savingThrows` | [SavingThrows](SavingThrows.md)
`savingThrowsAll` | [SavingThrowsAll](SavingThrowsAll.md)
`skillBonuses` | [SkillBonuses](SkillBonuses.md)
`skillBonusesAll` | [SkillBonusesAll](SkillBonusesAll.md)
`passivePerception` | number
`resistancesAndImmunities` | [CreatureResistancesAndImmunities](CreatureResistancesAndImmunities.md)
`normalSightRange` | number
`darkvisionRange` | number
`blindsightRange` | number
`tremorsenseRange` | number
`truesightRange` | number
`actions` | [Array&lt;CreatureAction&gt;](CreatureAction.md)
`traits` | [Array&lt;CreatureTrait&gt;](CreatureTrait.md)
`creaturesets` | Array&lt;string&gt;
`environments` | [Array&lt;EnvironmentSummary&gt;](EnvironmentSummary.md)
`illustration` | [ImageSummary](ImageSummary.md)
`crossreferences` | [CrossReferences](CrossReferences.md)

## Example

```typescript
import type { Creature } from 'open5e'

// TODO: Update the object below with actual values
const example = {
  "key": null,
  "name": null,
  "document": null,
  "type": null,
  "size": null,
  "challengeRating": null,
  "proficiencyBonus": null,
  "speed": null,
  "speedAll": null,
  "category": null,
  "subcategory": null,
  "alignment": null,
  "languages": null,
  "armorClass": null,
  "armorDetail": null,
  "hitPoints": null,
  "hitDice": null,
  "experiencePoints": null,
  "abilityScores": null,
  "modifiers": null,
  "initiativeBonus": null,
  "savingThrows": null,
  "savingThrowsAll": null,
  "skillBonuses": null,
  "skillBonusesAll": null,
  "passivePerception": null,
  "resistancesAndImmunities": null,
  "normalSightRange": null,
  "darkvisionRange": null,
  "blindsightRange": null,
  "tremorsenseRange": null,
  "truesightRange": null,
  "actions": null,
  "traits": null,
  "creaturesets": null,
  "environments": null,
  "illustration": null,
  "crossreferences": null,
} satisfies Creature

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as Creature
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


