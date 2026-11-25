import { useContext, useState } from "react";
import { useUser } from "./context/UserContext";

function App() {

  return <Layout/>
}

function Layout() {
  return <Sidebar />;     // Layout doesn't use user, just forwards it
}

function Sidebar() {
  return <Profile />;     // Sidebar doesn't use it either
}

function Profile() {
  const {user, setUser} = useUser()

  return <>
    <p>{user}</p>
    <button onClick={() => setUser("shivam")}>change name</button>
  </>         // only this one actually needs it
}

export default App