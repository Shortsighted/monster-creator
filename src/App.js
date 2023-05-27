import { useEffect, useState } from "react";
import "./App.css"
import MonsterEditor from "./MonsterEditor";

function App() {
  const [monsterDetails, setMonsterDetails] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault()

    setMonsterDetails({
      name: event.target.name.value,
      size: event.target.size.value,
      type: event.target.type.value,
      alignment: event.target.alignment.value
    })

    console.log(monsterDetails)
  }

  return (
    <MonsterEditor details={monsterDetails}
                  handleSubmit={handleSubmit} />
  )
}

export default App;
