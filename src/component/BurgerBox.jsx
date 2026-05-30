import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderBurger } from "./redux"

const BurgerBox = () => {
    const burgerBuns= useSelector(state=>state.burger.burgerBuns)
    const dispatch = useDispatch()
  return (
    <div className='conatainer'>
        <h2 className='text'>Number of Burger Buns -{burgerBuns}</h2>
        <button className='btn' onClick={()=>dispatch(orderBurger())}>Burger</button>
      
    </div>
  )
}

export default BurgerBox
