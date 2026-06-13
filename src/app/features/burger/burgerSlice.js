import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    burgerBuns: 200
}
const burgerSlice = createSlice({
    name: 'burger',
    initialState,
    reducers:{
        burger_order: (state)=>{
            state.burgerBuns--
        }
    }
})

export default burgerSlice.reducer
export const {burger_order} = burgerSlice.actions