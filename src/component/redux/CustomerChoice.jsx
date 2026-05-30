import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { orderBurger } from './burger/BurgerAction'

const CustomerChoice = () => {
    const[num,setNum] = useState(1)
    const burgerBuns= useSelector(state=>state.burger.burgerBuns)
    const dispatch = useDispatch()
  return (
    <div className='conatainer'>
        <h2 className='text'>Number of Burger Buns -{burgerBuns}</h2>
        <input type="text" className='input-field' placeholder='Enter your number' value={num} onChange={e=>setNum(e.target.value)} />
        <button className='btn' onClick={()=>dispatch(orderBurger(num))}>Burger</button>
      
    </div>
  )
}

export default CustomerChoice
