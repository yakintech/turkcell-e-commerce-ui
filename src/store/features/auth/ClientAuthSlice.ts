import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseService } from "../../../api/baseService";


export const checkUserAuth = createAsyncThunk(
    "clientAuth/checkUserAuth",
    async () => {
        console.log("checkUserAuth")
        const response = await baseService.getAll("client/check")
        return response;
    }
)

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
    },
    extraReducers: (builder) => {
        builder.addCase(checkUserAuth.pending, (state) => {
            state.clientAuthLoading = true;
        });

        builder.addCase(checkUserAuth.fulfilled, (state, action) => {
            state.isClientAuthenticated = true
            state.clientEmail = action.payload.email;
            state.clientId = action.payload.id;
            state.clientAuthLoading = false;
        });
        builder.addCase(checkUserAuth.rejected, (state) => {
            state.isClientAuthenticated = false;
            state.clientAuthLoading = false;
        });
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