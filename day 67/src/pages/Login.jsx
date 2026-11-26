import React, { useState } from 'react'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router'

function Login() {
    const {login} = useAuth()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")

    const navigate = useNavigate()

    function handleSubmit() {
        login(username, email)
        navigate("/")
    }

  return (
    <div className='flex flex-col gap-4 w-50'>
        <input type="text" placeholder='enter your usrename' className='border'
        onChange={(e) => setUsername(e.target.value)}
        />
        <input type="email" placeholder='enter your email' className='border'
        onChange={(e) => setEmail(e.target.value)}
        />
        <button className='bg-blue-500 p-1'
        onClick={handleSubmit}
        >create account</button>
    </div>
  )
}

export default Login