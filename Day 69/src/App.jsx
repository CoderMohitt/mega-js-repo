import { useState } from "react"
import useTodoStore from "./store/useTodoStore"
import Post from "./component/Post"


function App() {
  const handleAdd = useTodoStore((state) => state.addTodo)
  const todos = useTodoStore((state) => state.todos)
  const handleGet = useTodoStore((state) => state.getTodo)

  const [title, setTitle] = useState("")

  // console.log(todos)

  return (
    <>
      <input type="text" placeholder="todo here..." 
      onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={() => handleAdd(title)}>add todo</button>
      <button onClick={handleGet}>get todo</button>

      <Post />
    </>
  )
}

export default App
