import { Navigate } from "react-router"

export default function Dashboard() {
    const isloggedin = false

    if(isloggedin === false) return <Navigate to={"/login"} />

    return <>
        <h1>i am dashboard</h1>
    </>
}