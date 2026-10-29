function Dashboard({user}) {
  // user -> false
  // !user -> true
  if(!user) {
    return <p>user not passed</p>
  }

  return <>
    <p>{user.name}</p>
  </>
}


function Status({status}) {
  // loading, error, success
  // let content;

  // if(status === "loading") content = "loading..."
  // else if(status === "error") content = "error..."
  // else content = "data loaded"

  const msg = {
    loading : <h2>loading...</h2>,
    error: <h2>error...</h2>,
    success: <h2>data loaded</h2>
  }

  let a = false

  // msg[loading] -> 

  return <h1 className={`${a ? "bg-red-600" : "bg-blue-600"} font-bold`}>{msg[status]}</h1>
}


function Render({users}) {
  return <>
    {users.map(item => (
      <div key={item.id}>
        <p>{item.name}</p>
        <p>{item.age}</p>
      </div>
    )
  )}
  </>
}


function App() {
  let isLoggedIn = false
  let count = 10 // false, null, undefined
  let user = undefined


  let users = [
    {id: 1, name: "ram", age: 23},
    {id: 2, name: "rohit", age: 43},
    {id: 3, name: "ravi", age: 21},
    {id: 4, name: "raman", age: 23},
  ]

  return (
    <>
    <Render users={users} />
    {/* <Status status={"success"} /> */}
    {/* <Dashboard user={user} /> */}
      {/* {isLoggedIn ? <h2>welcome</h2> : <h2>please log in</h2> }

      {isLoggedIn && <h1>you are logged in</h1> } */}

      {/* {count && <span>{count} new </span>}


      {count > 0 && <span>{count} new</span>} */}
    </>
  )
}

export default App
