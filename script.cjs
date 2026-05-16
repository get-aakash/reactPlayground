const redux = require('redux')
const createStore = redux.createStore

const ORDER_PIZZA = "ORDER_PIZZA"
// const action = {
//     type: ORDER_PIZZA,
//     shop_name: "Pizza Shop"
// }

function orderPizza() {
    return {
        type: ORDER_PIZZA,
        shop_name: "Pizza Shop"
    }
}

//Reducer
const initialState = {
    pizzaBase: 100,
    toppings: ['capsicum', 'cheese']
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ORDER_PIZZA:
            return {
                ...state,pizzaBase: state.pizzaBase - 1
            }

        default:
            return state
    }
}

//store

const store = createStore(reducer)
console.log("Initial State",store.getState())
store.subscribe(()=>console.log("updated State",store.getState()))

store.dispatch(orderPizza())

