import { useState } from 'react'
import Demo from "./Demo"



function Count({count}) {
  return <h1>count count: {count}</h1>
}


function Count1({count}) {
  return <h1>count count: {count}</h1>
}





function App() {
  const [user, setUser] = useState({name: "ram", age: 34})
  const [items, setItems] = useState(["apple", "banana"]);
  const [skill, setSkill] = useState(["html", "css", "js"])
  const [newSkill, setNewSkill] = useState("")

  function update() {
    // setUser({...user, age: 23})
    // setItems([...items, "mango"])
    // setItems(items.filter(x => x !== "apple"))

    setSkill([...skill, newSkill])
  }


  const [count, setCount] = useState(10)

  return (
    <>
    <Demo />
    {/* <h1>app count : {count}</h1>
    <Count count={count} />
    <Count1 count={count} /> */}
      {/* <h2>{user.name}</h2>
      <h2>{user.age}</h2> */}

      {/* <p>{items}</p> */}

      {/* <h3>{skill.join(", ")}</h3>
      <input type="text" onChange={(e) => setNewSkill(e.target.value)} />
      <button onClick={update}>click</button> */}
    </>
  )
}

export default App
