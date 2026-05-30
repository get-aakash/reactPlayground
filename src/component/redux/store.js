import { createStore, applyMiddleware, compose } from "redux";
import pizzaReducer from "./pizza/PizzaReducer";
import rootReducer from "./rootReducer";
import logger from "redux-logger";
import { composeWithDevTools } from "@redux-devtools/extension";

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))
export default store