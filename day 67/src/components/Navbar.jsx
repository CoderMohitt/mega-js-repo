import React from 'react'
import { Link } from 'react-router'
import { useAuth } from '../context/AuthContext'

function Navbar() {
    const {user, logout} = useAuth()

  return (
    <div className='flex justify-center gap-10'>
        <p className='font-bold'>{user.username && `welcome ${user.username}`}</p>
        <Link to={"/"}>Home</Link>
        <Link>Profile</Link>
        {(!user.username && !user.email) ? <Link to={"/login"}>Login</Link> : <button onClick={logout}>Logout</button> }
    </div>
  )
}

export default Navbar   