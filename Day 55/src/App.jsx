import { useEffect, useState } from "react"
import User from "./User"

function Demo() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let val = localStorage.getItem("count") || 0
    setCount(val)
  }, [])

  useEffect(() => {
    localStorage.setItem("count", count)
  }, [count])

  return <div>
    <h1>hii</h1>
    <button onClick={() => setCount(count + 1)}>count {count}</button>
  </div>
}


function App() {
  const [count, setCount] = useState(0)
  const [c, setC] = useState(0)

  useEffect(() => {
    document.title = `count is ${count}`
  }, [count, c])

  // useEffect(() => {}, [])

  return (
    <>
    <User />
    {/* <Demo /> */}
      {/* <button onClick={() => setCount(count + 1)}>count {count}</button>
      <button onClick={() => setC(c + 1)}>c {c}</button>
      <h1>hii</h1> */}
    </>
  )
}

export default App
