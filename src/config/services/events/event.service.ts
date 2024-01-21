import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {setValue, URL} from "../../../helpers";
/**
 *
 * @param {import("axios").AxiosResponse} res
 * @returns
 */

// login to compte
const Generale = createAsyncThunk(
    'event/info',
    async (datas:any, thunkAPI) => {
        try {
            const reponse = await axios.post(`${URL}/events/event/internal/save/generale`, datas)
            const { data } = await reponse;
            if (data != null) {
                setValue('info', data);
                setValue("isInfo",true);
            }
            return data;
        } catch (error: any) {
            const { rejectWithValue } = thunkAPI;
            return rejectWithValue((error));
        }
    },
);
// accessibilite
const Accessibilite= createAsyncThunk(
    'event/access',
    async (datas:any, thunkAPI) => {
        try {
            const reponse = await axios.post(`${URL}/events/event/internal/save/accessibility`, datas)
            const { data } = await reponse;
            if (data != null) {
                setValue('access', data);
                setValue("isAcc",true);
            }
            return data;
        } catch (error: any) {
            const { rejectWithValue } = thunkAPI;
            return rejectWithValue((error));
        }
    },
);

// Billeterie
const Billeterie = createAsyncThunk(
    'event/billeterie',
    async (datas:any, thunkAPI) => {
        try {
            const reponse = await axios.post(`${URL}/events/event/internal/save/price`, datas)
            const { data } = await reponse;
            if (data != null) {
                setValue('billet', data.detail);
                setValue("isBillet",true);
            }
            return data;
        } catch (error: any) {
            const { rejectWithValue } = thunkAPI;
            return rejectWithValue((error));
        }
    },
);

// Sociale
const Sociale = createAsyncThunk(
    'event/sociale',
    async (datas:any, thunkAPI) => {
        try {
            const reponse = await axios.post(`${URL}/events/event/internal/save/webpage`, datas)
            const { data } = await reponse;
            if (data != null) {
                setValue('sociae', data.detail);
                setValue("isSocial",true);
            }
            return data;
        } catch (error: any) {
            const { rejectWithValue } = thunkAPI;
            return rejectWithValue((error));
        }
    },
);

//Update event
const UpdateEvent = createAsyncThunk(
    'event/update',
    async (datas:any, thunkAPI) => {
        try {
            const reponse = await axios.post(`${URL}/events/event/update/${datas?.id}`, datas)
            const { data } = await reponse;
            return data;
        } catch (error: any) {
            const { rejectWithValue } = thunkAPI;
            return rejectWithValue((error));
        }
    },
);

const DeleteEvent = createAsyncThunk(
    'event/delete',
    async (id:number, thunkAPI) => {
        try {
            const reponse = await axios.post(`${URL}/events/event/delete/${id}`)
            const { data } = await reponse;
            return data;
        } catch (error: any) {
            const { rejectWithValue } = thunkAPI;
            return rejectWithValue((error));
        }
    },
);
export const eventService = {
    Generale,Accessibilite,Billeterie,Sociale,UpdateEvent,DeleteEvent
};

