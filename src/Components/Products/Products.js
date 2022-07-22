import React from 'react'
import Product from './Product'

function Products(props) {
  return (
    <>
        <Product products={props.products}/>
    </>
  )
}

export default Products