import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './productsSlice'

function ProductView() {
    const dispatch = useDispatch()
    const products = useSelector(state=>state.product)
    

    useEffect(()=>{
        dispatch(fetchProducts())

    },[])
  return (
    <div>
      <h2>List of Product Titles</h2>
      {products.loading && <h2>Loading...</h2>}
      {!products.loading && products.error && <h2>Error {products.error}</h2>}
      {products.products}
    </div>
  )
}

export default ProductView
