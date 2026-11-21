import React from 'react'
import { useParams } from 'react-router'

function ProductDetail() {
    const {id} = useParams()

  return (
    <div>ProductDetail for item {id}</div>
  )
}

export default ProductDetail