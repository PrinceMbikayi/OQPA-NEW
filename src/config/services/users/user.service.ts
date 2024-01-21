import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {setValue, URL} from "../../../helpers";
/**
 *
 * @param {import("axios").AxiosResponse} res
 * @returns
 */

// login to compte
const Login = createAsyncThunk(
    'user/login',
    async (datas:any, thunkAPI) => {
        try {
            const reponse = await axios.post(`${URL}users/user/login`, datas)
            const { data } = await reponse;
            if (data != null) {
                setValue('user', data.user);
                setValue("token",data.token);
            }
            return data;
        } catch (error: any) {
            const { rejectWithValue } = thunkAPI;
            return rejectWithValue((error));
        }
    },
);

const New_Compte = createAsyncThunk(
    'user/new_compte',
    async (datas:any, thunkAPI) => {
        try {
            const reponse = await axios.post(`${URL}users/user/create`, datas);
            const { data } = reponse;
            if (reponse.status == 200) {
                setValue("user",data)
            }
            return data;
        } catch (error: any) {
            const { rejectWithValue } = thunkAPI;
            return rejectWithValue((error));
        }
    },
);



export const userService = {
    Login,
    New_Compte
};

