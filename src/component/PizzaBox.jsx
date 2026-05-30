import React from 'react'
import { orderPizza } from './redux'
import { connect, useDispatch, useSelector } from 'react-redux'

const PizzaBox = () => {
    const pizzaRolls = useSelector(state=>state.pizza.pizzaBase)
    const dispatch = useDispatch()
  return (
    <div className='container'>
        <h2 className='text'>Number of Pizza Base available -{pizzaRolls}</h2>
        <button className='btn' onClick={()=>dispatch(orderPizza())}>Pizza</button>
    </div>
  )
}

const mapStateToProps = (state)=>{
    return{
        pizzaBase:state.pizzaBase
    }

}

const mapDispatchToProps = (dispatch)=>{
    return{
            orderPizza:()=>dispatch(orderPizza())
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (PizzaBox)
