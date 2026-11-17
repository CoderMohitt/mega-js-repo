import { memo, useCallback, useMemo, useState } from 'react'


function App() {
  const [count, setCount] = useState(0)
  console.log("this is app")

  const handleSomething = useCallback(function () {
    return 1
  }, [count])

  const result = useMemo(() => { // 1
    return handleSomething()
  }, [])

  const res = handleSomething() // 1

  return (
    <>
      <button onClick={() => setCount(count + 1)}>count {count}</button>
      {/* <Child fn={handleSomething} /> */}
      <Demo fn={handleSomething} />
    </>
  )
}


const Child = memo(function ({fn}) { // function, function
  console.log("i am re rendered")
  return <>
    <h1>hey there {name}</h1>
  </>
})

function Demo({fn}) {
  console.log("i m demo")
  return <>
    <h1>i am demo</h1>
  </>
}

export default App
