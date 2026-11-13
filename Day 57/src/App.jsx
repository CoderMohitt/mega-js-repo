import { useEffect, useState } from "react"
import {items, info} from "./content.js"
import New from "./New.jsx"

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(10)

  // useEffect(() => {
  //   console.log("hi there")
  // })
// console.log(details)


  return (
    <>
      {/* <h1>hi</h1>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setCount1(count1 + 1)}>{count1}</button> */}
{/* 
      <p>{items}</p>
      <p>{info.name}</p> */}

      <New />
    </>
  )
}

export default App
