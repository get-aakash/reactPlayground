import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { customer_choice, pizza_order } from './pizzaSlice'

const PizzaView = () => {
    const {pizzaBase} = useSelector(state=>(state.pizza))
    const dispatch = useDispatch()
    const [number, setNumber] = useState(1)
  return (
    <div>
      <h2>Number of Pizza Base -{pizzaBase}</h2>
      <input type="number" placeholder='enter the number of Pizza' value={number} onChange={(e)=>setNumber(e.target.value)}/>
      <button onClick={()=>dispatch(customer_choice(number))}>Customer Choice</button>
      <button onClick={()=>dispatch(pizza_order())}>Order Pizza</button>
    </div>
  )
}

export default PizzaView
