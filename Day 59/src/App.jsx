import { useEffect, useRef, useState } from "react"
import useToggle from "./useToggle"
import useCounter from "./useCounter"
import useFetch from "./useFetch"

function App() {

  const [on, toggle] = useToggle()
  const [on1, toggle1] = useToggle()

  const data = useFetch()

  console.log(data)



  return (
    <>
      {on && <h1>hidden content</h1> }
      <button onClick={toggle}>toggle</button>

      <Counter />
    </>
  )
}  



function Counter() {
  const {count, inc, dec} = useCounter()
  const data = useFetch()

  console.log(data)


  return <>
    <h3>{count}</h3>
    <button onClick={inc}>Increase value</button>
    <button onClick={dec}>Decrease value</button>
  </>
}



















function Demo() {

    async function fetchUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const data = await res.json()

    console.log(data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return <>
  
  </>
}

export default App
