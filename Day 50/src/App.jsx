import { useState } from "react";


function App() {
  const [count, setCount] = useState(0) //[count, setcount]
  const [isOn, setIsOn] = useState(false)
  const [name, setName] = useState("")

  function toggle() {
    // isOn = false
    setIsOn(!isOn) // false // true
  }

  function inc() {
    setCount((prev) => prev + 1) // returned 1

    setCount((prev) => prev + 1) // 2
    // setCount(count + 1) // 3
    console.log(count)
  }
  return (
    <>
      <button onClick={inc}>increase</button>
      <h1>Count: {count}</h1>

      {/* <button onClick={toggle}>{isOn ? "Hide" : "Show"}</button>

      {isOn &&
      <div>these are  details</div>
    } */}

    {/* <input type="text"
    onChange={(e) => setName(e.target.value)} //m, mo, moh
    />
    <p>{name}</p> */}
    </>

  )
}

export default App
