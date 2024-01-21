/* eslint-disable @typescript-eslint/no-explicit-any */
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { URL, setValue} from "../../../helpers";
/**
 *
 * @param {import("axios").AxiosResponse} res
 * @returns
 */

const Search= createAsyncThunk(
    'search/location',
    async (datas:any, thunkAPI) => {
        const {rejectWithValue} = thunkAPI
        try {

            const reponse = await axios.post(
            `${URL}events/event/search/by/text/fr`,
            {
                "text":datas.word,
                "limit":100
            },
            {
                headers:{
                    'accept': 'application/json ',
                    'Content-Type': 'application/json'
                }

            });
            const data = reponse.data;
            setValue('addresse',data);

        return data;
      } catch (error: any) {
        const message =
          (error.response && error.response.data && error.response.data.message) ||
          error.message.toString() ||
          error.toString();
        return rejectWithValue(message);
      }
    },
  );

 


  export const addresseService={Search};
