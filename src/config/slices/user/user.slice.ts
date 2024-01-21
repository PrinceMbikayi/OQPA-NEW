/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import {createSlice} from "@reduxjs/toolkit";
import { getValue } from "../../../helpers";
import { userService} from "../../services/users/user.service.ts";

const datas = getValue("user");
const tok=getValue("token")
const {Login, New_Compte} = userService
const initialState = {
    messageUser: "",
    statusUser: {
        isLoading: false,
        isSuccess: false,
        isError: false,
    },
    user:datas || [],
    token:tok||''

} as any;

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Login
        builder.addCase(Login.pending, (state,_) => {
            state.statusUser.isLoading = true;
            state.statusUser.isSuccess = false;
            state.statusUser.isError = false;
            state.messageUser = "Veillez Patienter..."
        }).addCase(Login.fulfilled, (state, action) => {
            state.statusUser.isLoading = false;
            state.statusUser.isSuccess = true;
            state.statusUser.isError = false;
            state.user=action.payload?.user;
            state.token=action.payload?.token;
        }).addCase(Login.rejected, (state,action) => {
            state.statusUser.isLoading = false;
            state.statusUser.isSuccess = false;
            state.statusUser.isError = true;
            state.statusUser.messageA = "Une erreur est survenue !!";
        })
        //New Account
        builder.addCase(New_Compte.pending, (state,action) => {
            state.statusUser.isLoading = true;
            state.statusUser.isSuccess = false;
            state.statusUser.isError = false;
            state.messageUser = "Veillez Patienter..."
        }).addCase(New_Compte.fulfilled, (state, action) => {
            state.statusUser.isLoading = false;
            state.statusUser.isSuccess = true;
            state.statusUser.isError = false;
            // state.user=action.payload;
        }).addCase(New_Compte.rejected, (state,action) => {
            state.statusUser.isLoading = false;
            state.statusUser.isSuccess = false;
            state.statusUser.isError = true;
            state.statusUser.messageA = "Une erreur est survenue !!";
        })
    }});


export default userSlice.reducer;
