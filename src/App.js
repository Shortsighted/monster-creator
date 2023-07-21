import { useEffect, useState } from "react";
import "./App.css"
import MonsterEditor from "./MonsterEditor";

function App() {
  const [monsterDetails, setMonsterDetails] = useState({})

  const defineModifier = (abilityScore) => Math.floor((abilityScore - 10)/2)

  const defineHitDie = (size) => {
    switch(size){
      case "tiny":
        return "d4"
      case "small":
        return "d6"
      case "medium":
        return "d8"
      case "large":
        return "d10"
      case "huge":
        return "d12"      
      case "gargantuan":
        return "d20"      
    }
  }

  const defineAverageHitPoints = (hitPoints, hitDie, constitutionModifier) => {
    const averageHitPointsPerDie = Number(hitDie.slice(1))/2 + 0.5
    const numberOfHitDice = Math.floor(hitPoints/(averageHitPointsPerDie + constitutionModifier))

    return `${Math.ceil(numberOfHitDice * (averageHitPointsPerDie + constitutionModifier))}(${numberOfHitDice}${hitDie}+${numberOfHitDice * constitutionModifier})`
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    setMonsterDetails({
      name: event.target.name.value,
      size: event.target.size.value,
      type: event.target.type.value,
      alignment: event.target.alignment.value,

      strength: Number(event.target.strength.value),
      strengthModifier: defineModifier(event.target.strength.value),
      dexterity: Number(event.target.dexterity.value),
      dexterityModifier: defineModifier(event.target.dexterity.value),
      constitution: Number(event.target.constitution.value),
      constitutionModifier: defineModifier(event.target.constitution.value),
      intelligence: Number(event.target.intelligence.value),
      intelligenceModifier: defineModifier(event.target.intelligence.value),
      wisdom: Number(event.target.wisdom.value),
      wisdomModifier: defineModifier(event.target.wisdom.value),
      charisma: Number(event.target.charisma.value),
      charismaModifier: defineModifier(event.target.charisma.value),

      expectedChallengeRating: Number(event.target.expectedChallengeRating.value),
      armorClass: Number(event.target.armorClass.value),
      
      hitPoints: Number(event.target.hitPoints.value),
      hitDie: defineHitDie(event.target.size.value),
      averageHitPoints: defineAverageHitPoints(Number(event.target.hitPoints.value),
                                              defineHitDie(event.target.size.value),
                                              defineModifier(event.target.constitution.value))
    })

    console.log(monsterDetails)
  }

  return (
    <MonsterEditor details={monsterDetails}
                  handleSubmit={handleSubmit} />
  )
}

export default App;
