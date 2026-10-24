function Welcome() {
  return <>
          <p>this is p</p>
          <span className="common">hiii</span>
          <img src="" alt="" />
          <input type="text" />
  </>
} // this is component

function Greet() {
  return <h3>hii i am h3</h3>
}

function myname(fname, lname) {
  return fname + " " + lname
}

function Demo({children}) {
    return <div>{children}</div>
}

function App() {
  let age = 80
  let url = "google.com"
  let isLoggedIn = true
  // let bgcolor = {backgroundColor: "red", }
  // let bgcolor = "red"
  let name = "Mohittt"
  let user = {
    name: "ram",
    age: 42
  }

  return <div>
    {/* <h1 style={{backgroundColor: "red", fontSize: "45px"}}>hi there {name.toUpperCase()} </h1> */}

    {/* <h2>my age is {age + 1}</h2> */}

    {/* <img src={url} alt="" />
    <a href={"https://" + url}>click me</a>


    <p>{myname("mohit", "joshi")}</p>
    <span>{isLoggedIn ? "welcome" : "please login first"}</span>

    <p>{user.name}</p>
    <p>{user.age}</p>

    <p>{user.name}</p>
    <p>{null}</p> */}

    <Demo>
      <h1>hii</h1>
    </Demo>
  </div>
}

export default App
