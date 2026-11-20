import { Link } from "react-router";

export default function Home() {
    return <>
        <Link to={"/about"}>About</Link>
        <h1>i am home</h1>
    </>
}