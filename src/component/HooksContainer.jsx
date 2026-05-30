import { useDispatch, useSelector } from "react-redux"
import { orderPizza } from "./redux"


const HooksContainer = () => {
  const dispatch = useDispatch()
  const pizzaBase = useSelector(state=>state.pizzaBase)
  console.log(pizzaBase)
  return (
    <div className='container'>
        <h2 className='text'>Number of Pizza Base available -{pizzaBase}</h2>
        <button className='btn' onClick={()=>dispatch(orderPizza())} >Pizza</button>
    </div>
  )
}



export default HooksContainer
