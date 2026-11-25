import React from 'react'
import { Link } from 'react-router'
import { useCart } from '../context/CartContext'

function Navbar() {
  const {totalItems} = useCart()

  return (
    <div className='p-3'>
      <Link to={"/cart"}>Cart</Link>
        <p>cart {totalItems().total || 0}</p>
    </div>
  )
}

export default Navbar