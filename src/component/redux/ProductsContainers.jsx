import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from './product/ProductAction'

const ProductsContainers = () => {
   const productData =  useSelector(state=>state.product)
   const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchProducts())
    },[])
    console.log(productData)
  return (
    <div>
      {productData.loading && <p>Loading....</p>}
      {productData.error && <p>{productData.error}</p>}
      {productData.products && <p>{productData.products.map(title=><p>{title.title}</p>)}</p>}
    </div>
  )
}
// const mapStateToProps = (state)=>{
//     return{
//         productData: state.product
//     }
// }

// const mapDispatchToProps = (dispatch)=>{
//     return {
//         fetchProducts: ()=>dispatch(fetchProducts())
//     }
// }

export default  (ProductsContainers)
