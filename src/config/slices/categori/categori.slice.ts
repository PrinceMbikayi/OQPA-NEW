/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import {createSlice} from "@reduxjs/toolkit";
import { getValue } from "../../../helpers";
import { addresseService } from "../../services/addresse/addresse.service";
import {initialData} from "../../../constants";
import {categorieService} from "../../services/categories/categoris.service.ts";



const datas = getValue("categori");
const datasType = getValue("type");
const datasPopulation = getValue("population");
const {getCategorie,getType,getPopulation} = categorieService
const initialState = {
    messageA: "",
    statusCategori: {
        isLoading: false,
        isSuccess: false,
        isError: false,
    },
    data_categori:!datas.length ? datas:[],
    data_type:!datasType.length ? datasType:[],
    data_population:!datasPopulation.length ? datasPopulation:[]

} as any;

const categoriSlice = createSlice({
    name: "categori",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // New addresse
        builder.addCase(getCategorie.pending, (state,_) => {
            state.statusCategori.isLoading = true;
            state.statusCategori.isSuccess = false;
            state.statusCategori.isError = false;
            state.messageA = "Veillez Patienter..."
        }).addCase(getCategorie.fulfilled, (state, action) => {
            state.statusCategori.isLoading = false;
            state.statusCategori.isSuccess = true;
            state.statusCategori.isError = false;
            state.data_categori=action.payload;
        }).addCase(getCategorie.rejected, (state,_) => {
            state.statusCategori.isLoading = false;
            state.statusCategori.isSuccess = false;
            state.statusCategori.isError = true;
            state.statusCategori.messageA = "Une erreur est survenue !!";
        })

    //     get All type of events
        builder.addCase(getType.pending, (state,_) => {
            state.statusCategori.isLoading = true;
            state.statusCategori.isSuccess = false;
            state.statusCategori.isError = false;
            state.messageA = "Veillez Patienter..."
        }).addCase(getType.fulfilled, (state, action) => {
            state.statusCategori.isLoading = false;
            state.statusCategori.isSuccess = true;
            state.statusCategori.isError = false;
            state.data_type=action.payload;
        }).addCase(getType.rejected, (state,_) => {
            state.statusCategori.isLoading = false;
            state.statusCategori.isSuccess = false;
            state.statusCategori.isError = true;
            state.statusCategori.messageA = "Une erreur est survenue !!";
        })

        // get all population of event
        builder.addCase(getPopulation.pending, (state,_) => {
            state.statusCategori.isLoading = true;
            state.statusCategori.isSuccess = false;
            state.statusCategori.isError = false;
            state.messageA = "Veillez Patienter..."
        }).addCase(getPopulation.fulfilled, (state, action) => {
            state.statusCategori.isLoading = false;
            state.statusCategori.isSuccess = true;
            state.statusCategori.isError = false;
            state.data_population=action.payload;
        }).addCase(getPopulation.rejected, (state,_) => {
            state.statusCategori.isLoading = false;
            state.statusCategori.isSuccess = false;
            state.statusCategori.isError = true;
            state.statusCategori.messageA = "Une erreur est survenue !!";
        })
    }});


export default categoriSlice.reducer;
