import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { burger_order } from './burgerSlice'

function BurgerView() {
    const {burgerBuns} = useSelector(state=>state.burger)
    const dispatch = useDispatch()
  return (
    <div>
        <h2>Number of burger Buns-{burgerBuns}</h2>
        <button onClick={()=>dispatch(burger_order())}>Order Burger</button>
      
    </div>
  )
}

export default BurgerView
