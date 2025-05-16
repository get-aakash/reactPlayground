import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../features/counterSlice'

const MyRedux = () => {
    const counter = useSelector(state=>state.counter.value)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Counter: {counter}</h1>
        <button onClick={()=> dispatch(increment())}>+</button>
        <button onClick={()=> dispatch(decrement())}>-</button>
      
      
    </div>
  )
}

export default MyRedux
