
import { Provider } from 'react-redux'
import PizzaBox from './component/PizzaBox'
import store from './component/redux/store'


const App = () => {

  return (
    <Provider store={store}>
      <PizzaBox />

    </Provider>



  )
}

export default App
