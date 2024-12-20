import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: [] as CartState[],
    total: 0
}

const cartSlice = createSlice({
    name: "cart",
    initialState: initialState,
    reducers: {
        addToCart: (state, action) => {
            const cartItem = state.cart.find((x: any) => x._id === action.payload._id)
            if (cartItem)
                cartItem.quantity++
            else
                state.cart.push({ _id: action.payload._id, name: action.payload.name, unitPrice: action.payload.unitPrice, quantity: 1 })

            state.total = state.cart.reduce((a: any, c: any) => a + c.unitPrice * c.quantity, 0)
            localStorage.setItem("cart", JSON.stringify(state))
        },
        removeFromCart: (state, action) => {
            const index = state.cart.findIndex((x: any) => x._id === action.payload)
            state.cart.splice(index, 1)
            state.total = state.cart.reduce((a: any, c: any) => a + c.unitPrice * c.quantity, 0)
            localStorage.setItem("cart", JSON.stringify(state))
        },
        empty: (state, action) => {
            state.cart = []
            state.total = 0
            localStorage.setItem("cart", JSON.stringify(state))
        },
        increase: (state, action) => {
            let cartItem = state.cart.find((x: any) => x._id === action.payload)
            if (cartItem)
                cartItem.quantity++

            state.total = state.cart.reduce((a: any, c: any) => a + c.unitPrice * c.quantity, 0)
            localStorage.setItem("cart", JSON.stringify(state))
        },
        decrease: (state, action) => {
            let cartItem = state.cart.find((x: any) => x._id === action.payload)
            if (cartItem?.quantity == 1)
                state.cart = state.cart.filter((x: any) => x._id !== action.payload)
            else
                if (cartItem)
                    cartItem.quantity--

            state.total = state.cart.reduce((a: any, c: any) => a + c.unitPrice * c.quantity, 0)
            localStorage.setItem("cart", JSON.stringify(state))

        },
        loadCart: (state, action) => {
            const cart = localStorage.getItem("cart")
            if (cart){
                let cartFromStorage = JSON.parse(cart)
                state.cart = cartFromStorage.cart
                state.total = cartFromStorage.total
            }
            else{
                state.cart = []
                state.total = 0
            }
        }
    }
})


export default cartSlice.reducer






export type CartState = {
    _id: string,
    quantity: number,
    unitPrice: number,
    name: string
}