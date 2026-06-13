const configureStore = require("@reduxjs/toolkit").configureStore
const pizzaReducer = require("./src/pizza/pizzaSlice")
const burgerReducer = require('./src/burger/burgerSlice')
const productReducer = require('./src/products/productSlice')
const reduxLogger = require('redux-logger')
const logger = reduxLogger.createLogger()
const store = configureStore({
    reducer:{
        pizza: pizzaReducer,
        burger: burgerReducer,
        products: productReducer
    },
   // middleware: (getDefaultMiddleware)=> getDefaultMiddleware().concat(logger)
})

module.exports = store