import { useState } from "react";

function Demo() {
  const [name, setName] = useState("user");
  const [isTick, setIsTick] = useState(false);
  const [city, setCity] = useState("")

  return (
    <>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h1>hello, {name}</h1>

      <span>i agree</span>
      <input type="checkbox" onChange={(e) => setIsTick(e.target.checked)} />
      <h1>{isTick ? "user has agreed" : "user has not agreed"}</h1>

      <select onChange={(e) => setCity(e.target.value)}>
        <option value="delhi">Delhi</option>
        <option value="dehradun">Dehradun</option>
      </select>

      <h1>{city}</h1>
    </>
  );
}


function Form() {
  const [user, setUser] = useState({name: "", email: ""})

  function handleChange(e) {
    console.log(e.target.name)
    setUser({...user, [e.target.name]: e.target.value}) // ["email"]: mohit
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log("submitted")
  }

  return <>
    <form action="" onSubmit={handleSubmit}>
      <input type="text" name="name"  placeholder="name" onChange={handleChange}/>
      <input type="text" name="email"  placeholder="email" onChange={handleChange}/>
      <input type="submit" />
    </form>

    <p>name is {user.name}, email is {user.email}</p> 
  </>
}

function Search() {
  const [keyword, setKeyword] = useState("")

  function search(e) {
    if(e.key === "Enter") {
      setKeyword(e.target.value)
    } else if(e.key === "Escape") {
      setKeyword("")
    }
  }

  return <>
    <input type="text" placeholder="search for a keyword" onKeyDown={search} />

    <p>searched for {keyword}</p>
  </>
}


function App() {
  function handleClick(e, id) {
    console.log(e.target);
    console.log(id);
  }

  function fn(e) {
    console.log(e);
  }

  return (
    <>
    <Search />
      {/* <Form /> */}
      {/* <Demo /> */}

      {/* <button onClick={fn}>click</button> */}
      {/* <button onClick={(e) => console.log(e.target)}>click</button> */}

      {/* <input onChange={fn} />     */}
      {/* <input onFocus={fn} onBlur={fn} />     */}
      {/* <input onBlur={fn} />     */}

      {/* <form action="" onSubmit={fn}>
      <input type="text" />
      <input type="submit" />
     </form> */}
    </>
  );
}

export default App;
