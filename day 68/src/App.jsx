import { useState } from "react"
import useCounterStore from "./store/useCounterStore"
import useLocalStore from "./store/useLocalStore"


function App() {
  const [a, setA] = useState(0)
  const inc = useCounterStore((state) => state.inc)
  const count = useCounterStore((state) => state.count)
  const setCustom = useCounterStore((state) => state.setCustomValue)

  const newname = useLocalStore((state) => state.name)
  const change = useLocalStore((state) => state.change)
  // const dec = useCounterStore((state) => state.dec)

  // const {count, inc, dec} = useCounterStore()

  return (
    <>
      <p>{count}</p>
      <button onClick={inc}>increase value</button>
      {/* <button onClic k={dec}>decrease value</button> */}
      <input type="text" onChange={(e) => setA(e.target.value)} />
      <button onClick={() => setCustom(a)}>set custom</button>
      <p>{newname}</p>
      <button onClick={() => change("shivam")}>change</button>
    </>
  )
}

export default App
