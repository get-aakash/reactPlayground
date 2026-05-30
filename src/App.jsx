
import { Provider } from 'react-redux'
import PizzaBox from './component/PizzaBox'
import store from './component/redux/store'
import HooksContainer from './component/HooksContainer'
import BurgerBox from './component/BurgerBox'
import CustomerChoice from './component/redux/CustomerChoice'

const App = () => {

  return (
    <Provider store={store}>
     
      {/* <PizzaBox />
      <BurgerBox /> */}
      <CustomerChoice />
    </Provider>



  )
}

export default App
