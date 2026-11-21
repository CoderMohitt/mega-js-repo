import React from 'react'
import { Link } from 'react-router'

function Products() {
    const item = 100
  return (
    <div>Products

        <Link to={`/products/${item}`}>go to product {item}</Link>
    </div>
  )
}

export default Products