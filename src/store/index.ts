import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/CartSlice';
import clientAuthReducer from './features/auth/ClientAuthSlice';



export const store = configureStore({
    reducer: {
      cartSlice: cartReducer,
      clientAuthSlice: clientAuthReducer,
    }
  })

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch