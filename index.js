const { burgerActions } = require('./src/burger/burgerSlice')
const { fetchProducts } = require('./src/products/productSlice')
const store = require('./store')
const pizzaActions = require('./src/pizza/pizzaSlice').pizzaActions
console.log("initial State", store.getState())
const unsubscribe = store.subscribe(()=>{
    console.log('update state', store.getState())
})

store.dispatch(pizzaActions.pizza_order())
store.dispatch(pizzaActions.pizza_order())




store.dispatch(fetchProducts()).then(()=>{
    console.log("Final state", store.getState())
})
store.dispatch(burgerActions.order_burger())
unsubscribe()