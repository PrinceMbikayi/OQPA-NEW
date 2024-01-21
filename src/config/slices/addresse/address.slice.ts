/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import {createSlice} from "@reduxjs/toolkit";
import { getValue } from "../../../helpers";
import { addresseService } from "../../services/addresse/addresse.service";
import {initialData} from "../../../constants";



const datas = getValue("addresse");
const {Search} = addresseService
const initialState = {
    messageA: "",
    statusPosition: {
        isLoading: false,
        isSuccess: false,
        isError: false,
    },
    data_position:!datas.length ? initialData : datas,
   
} as any;

const addresseSlice = createSlice({
    name: "addresse",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // New addresse
        builder.addCase(Search.pending, (state,_) => {
            state.statusPosition.isLoading = true;
            state.statusPosition.isSuccess = false;
            state.statusPosition.isError = false;
            state.messageA = "Veillez Patienter..."
        }).addCase(Search.fulfilled, (state, action) => {
            state.statusPosition.isLoading = false;
            state.statusPosition.isSuccess = true;
            state.statusPosition.isError = false;
            state.data_position=action.payload;
        }).addCase(Search.rejected, (state,_) => {
            state.statusPosition.isLoading = false;
            state.statusPosition.isSuccess = false;
            state.statusPosition.isError = true;
            state.statusPosition.messageA = "Une erreur est survenue !!";
        })
}});


export default addresseSlice.reducer;
