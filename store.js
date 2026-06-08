const configureStore = require("@reduxjs/toolkit").configureStore
const pizzaReducer = require("./src/pizza/pizzaSlice")
const store = configureStore({
    reducer:{
        pizza: pizzaReducer
    }
})