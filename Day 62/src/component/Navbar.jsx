import { NavLink } from "react-router";

export default function Navbar() {
    const linkClass = ({isActive}) => {
        return isActive ? "font-bold" : "font-normal"
    }

    return <>
        <nav className="border border-black">
            <NavLink to={"/"}  className={linkClass}>Home</NavLink>
            <NavLink to={"/about"} className={linkClass}>About</NavLink>
        </nav>
    </>
}