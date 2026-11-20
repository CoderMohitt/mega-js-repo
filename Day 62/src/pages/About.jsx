import { Link, NavLink } from "react-router";

export default function About() {
  return (
    <>
      <Link to={"/"}>Home</Link>
      <NavLink
        to={"/"}
        className={({ isActive }) =>
          isActive ? "font-bold" : "text-gray-700"
        }
      >
        home
      </NavLink>
      <h1>i am about</h1>
    </>
  );
}
