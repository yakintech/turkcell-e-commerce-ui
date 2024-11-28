import { createSlice } from "@reduxjs/toolkit";


const initalState: ClientAuthState = {
    isClientAuthenticated: false,
    clientEmail: "",
    clientId: "",
    clientAuthLoading: true,
};

export const clientAuthSlice = createSlice({
    name: "clientAuth",
    initialState: initalState,
    reducers: {
        setClientAuth: (state, action) => {
            state.isClientAuthenticated = action.payload.isClientAuthenticated;
            state.clientEmail = action.payload.clientEmail;
            state.clientId = action.payload.clientId;
            state.clientAuthLoading = false;
        }
    }
})


export default clientAuthSlice.reducer;

export const { setClientAuth } = clientAuthSlice.actions;





export type ClientAuthState = {
    isClientAuthenticated: boolean;
    clientEmail: string;
    clientId: string;
    clientAuthLoading: boolean;
};