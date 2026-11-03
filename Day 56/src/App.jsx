import { useEffect, useState } from "react"





function Demo() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let id = setInterval(() => {
      setCount(prev => prev + 1)
      console.log(count)
    }, 1000)

    return () => {
      clearInterval(id)
    }
  }, [])

  return <>{count}</>
}





function App() {
  const [count, setCount] = useState(0)
  const [c, setC] = useState(0)

  const [isVisible, setIsVisible] = useState(false)

  // useEffect(() => {
  //   console.log("hi there")
  // }, [count, c])

  return (
    <>
    <button onClick={() => setIsVisible(!isVisible)}>toggle</button>
    <h1>this is something to be visible there</h1>
    {isVisible && <Demo />}
      {/* <button onClick={() => setCount(count + 1)}>main {count}</button>
      <button onClick={() => setC(c + 1)}>secondary {c}</button> */}
    </>
  )
}

export default App
