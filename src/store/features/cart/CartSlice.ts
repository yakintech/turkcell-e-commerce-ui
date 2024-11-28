import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [] as CartState[]
}

const cartSlice = createSlice({
    name:"cart",
    initialState : initialState,
    reducers: {
        addToCart: (state, action) => {
            const cartItem = state.cart.find(x => x.id === action.payload.id)
            if(cartItem)
                cartItem.quantity++
            else
                state.cart.push({id: action.payload.id, name: action.payload.name, price: action.payload.price, quantity:1})
        },
        removeFromCart: (state, action) => {
            const index = state.cart.findIndex(x => x.id === action.payload)
            state.cart.splice(index, 1)
        },
        empty:(state,action) => {
            state.cart = []
        }
    }
})


export default cartSlice.reducer






export type CartState = {
    id: number,
    quantity: number,
    price: number,
    name: string
}