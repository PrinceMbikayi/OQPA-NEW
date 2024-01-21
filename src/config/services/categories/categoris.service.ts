import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {setValue, URL} from "../../../helpers";
/**
 *
 * @param {import("axios").AxiosResponse} res
 * @returns
 */

// login to compte
const getCategorie= createAsyncThunk(
    'categorie/all',
    async (datas:any, thunkAPI) => {
        try {
            const reponse = await axios.get(`${URL}categories/getAll/${datas}`)
            const { data } = await reponse;
            if (data != null) {
                setValue('categori', data);
            }
            return data;
        } catch (error: any) {
            const { rejectWithValue } = thunkAPI;
            return rejectWithValue((error));
        }
    },
);

const getType= createAsyncThunk(
    'type/all',
    async (datas:any, thunkAPI) => {
        try {
            const reponse = await axios.get(`${URL}event_types/getAll/${datas}`)
            const { data } = await reponse;
            if (data != null) {
                setValue('type', data);
            }
            return data;
        } catch (error: any) {
            const { rejectWithValue } = thunkAPI;
            return rejectWithValue((error));
        }
    },
);
const getPopulation= createAsyncThunk(
    'population/all',
    async (datas:any, thunkAPI) => {
        try {
            const reponse = await axios.get(`${URL}target_populations/getAll/${datas}`)
            const { data } = await reponse;
            if (data != null) {
                setValue('population', data);
            }
            return data;
        } catch (error: any) {
            const { rejectWithValue } = thunkAPI;
            return rejectWithValue((error));
        }
    },
);

export const categorieService = {
    getCategorie,
    getType,
    getPopulation
};