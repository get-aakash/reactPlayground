const redux = require('redux')
const createStore = redux.createStore
const combineReducer = redux.combineReducers
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const applyMiddleware = redux.applyMiddleware
const ORDER_PIZZA = "ORDER_PIZZA"
const ORDER_BURGER = "ORDER_BURGER"
// const action = {
//     type: ORDER_PIZZA,
//     shop_name: "Pizza Shop"
// }


function orderBurger() {
    return {
        type: ORDER_BURGER
    }
}
function orderPizza() {
    return {
        type: ORDER_PIZZA,
        shop_name: "Pizza Shop"
    }
}

//Reducer
const initialStateForPizza = {
    pizzaBase: 100,

    toppings: ['capsicum', 'cheese']
}

const initialStateForBurger = {
    burgerBuns: 200,

}

const reducerPizza = (state = initialStateForPizza, action) => {
    switch (action.type) {
        case ORDER_PIZZA:
            return {
                ...state, pizzaBase: state.pizzaBase - 1
            }



        default:
            return state
    }
}

const reducerBurger = (state = initialStateForBurger, action) => {
    switch (action.type) {
        case orderBurger:
            return {
                ...state, burgerBuns: state.burgerBuns - 1
            }



        default:
            return state
    }
}

//store
const rootReducer = combineReducer({
    pizza:reducerPizza,
    burger:reducerBurger
})
const store = createStore(rootReducer, applyMiddleware(logger) )
console.log("Initial State", store.getState())
store.subscribe(() => {})

store.dispatch(orderPizza())
store.dispatch(orderBurger())

