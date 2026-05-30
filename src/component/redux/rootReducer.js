import { combineReducers } from "redux";
import burgerReducer from "./burger/BurgerReducer";
import pizzaReducer from "./pizza/PizzaReducer";

const rootReducer = combineReducers({
    pizza:pizzaReducer,
    burger:burgerReducer
})

export default rootReducer