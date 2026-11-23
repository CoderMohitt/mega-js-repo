import React from 'react'
import { Link } from 'react-router'

function Navbar({cartItems}) {
  return (
    <div className='p-3'>
      <Link to={"/cart"}>Cart</Link>
        <p>cart {cartItems || 0}</p>
    </div>
  )
}

export default Navbar