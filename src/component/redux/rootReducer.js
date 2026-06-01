import { combineReducers } from "redux";
import burgerReducer from "./burger/BurgerReducer";
import pizzaReducer from "./pizza/PizzaReducer";
import productReducer from "./product/ProductReducer";

const rootReducer = combineReducers({
    pizza:pizzaReducer,
    burger:burgerReducer,
    product: productReducer
})

export default rootReducer