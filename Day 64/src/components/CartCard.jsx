import React from 'react'

function CartCard({id, name, price, image, qty, incQty, decQty, deleteItem={deleteItem}}) {
  return (
    <div className='border p-3'>
        <img src={image} alt="" width={350} />
        <p>{name}</p>
        <p>{price}</p>
        <p>qty: {qty}</p>

        <button className='bg-blue-600 p-1 cursor-pointer text-white'
        onClick={() => incQty(id)}
        >inc.</button>
        <button className='bg-blue-600 p-1 cursor-pointer text-white ml-5'
        onClick={() => decQty(id)}
        >dec.</button>
        <button className='bg-blue-600 p-1 cursor-pointer text-white ml-5'
        onClick={() => deleteItem(id)}
        >delete</button>
    </div>
  )
}

export default CartCard