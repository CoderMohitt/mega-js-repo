import React from 'react'
import ProductCard from '../components/ProductCard'

function Cart({cart}) {
  return (
    <div className='flex flex-wrap gap-5'>
        {cart.map((p) => (
            <ProductCard name={p.name} price={p.price} image={p.image} isCart={true} />
        ))}
    </div> 
  )
}

export default Cart