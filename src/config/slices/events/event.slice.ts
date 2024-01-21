/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import {createSlice} from "@reduxjs/toolkit";
import { getValue } from "../../../helpers";
import { userService} from "../../services/users/user.service.ts";
import {eventService} from "../../services/events/event.service.ts";

const generale = getValue("info");
const billet = getValue("billet");
const access = getValue("access");
const social= getValue("social");
const tok=getValue("token")
const {Generale,Accessibilite,Billeterie,UpdateEvent,DeleteEvent,Sociale} = eventService
const initialState = {
    messageEvent: "",
    statusEvent: {
        isLoading: false,
        isSuccess: false,
        isError: false,
    },
    infosGenerale:generale || [],
    accesEvent:access || [],
    billetEvent:billet ||[],
    socialEvent:social || [],
    token:tok||''

} as any;

const eventSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // General
        builder.addCase(Generale.pending, (state,_) => {
            state.statusEvent.isLoading = true;
            state.statusEvent.isSuccess = false;
            state.statusEvent.isError = false;
            state.messageEvent = "Veillez Patienter..."
        }).addCase(Generale.fulfilled, (state, action) => {
            state.statusEvent.isLoading = false;
            state.statusEvent.isSuccess = true;
            state.statusEvent.isError = false;
            state.infosGenerale?.push(action.payload);
        }).addCase(Generale.rejected, (state,action) => {
            state.statusEvent.isLoading = false;
            state.statusEvent.isSuccess = false;
            state.statusEvent.isError = true;
            state.statusEvent.messageEvent = "Une erreur est survenue !!";
        })
        //Accessibilite
        builder.addCase(Accessibilite.pending, (state,_) => {
            state.statusEvent.isLoading = true;
            state.statusEvent.isSuccess = false;
            state.statusEvent.isError = false;
            state.messageEvent = "Veillez Patienter..."
        }).addCase(Accessibilite.fulfilled, (state, action) => {
            state.statusEvent.isLoading = false;
            state.statusEvent.isSuccess = true;
            state.statusEvent.isError = false;
            state.accesEvent?.push(action.payload);
        }).addCase(Accessibilite.rejected, (state,action) => {
            state.statusEvent.isLoading = false;
            state.statusEvent.isSuccess = false;
            state.statusEvent.isError = true;
            state.statusEvent.messageEvent = "Une erreur est survenue !!";
        })

        // Billeterie
        builder.addCase(Billeterie.pending, (state,_) => {
            state.statusEvent.isLoading = true;
            state.statusEvent.isSuccess = false;
            state.statusEvent.isError = false;
            state.messageEvent = "Veillez Patienter..."
        }).addCase(Billeterie.fulfilled, (state, action) => {
            state.statusEvent.isLoading = false;
            state.statusEvent.isSuccess = true;
            state.statusEvent.isError = false;
            state.billetEvent?.push(action.payload);
        }).addCase(Billeterie.rejected, (state,action) => {
            state.statusEvent.isLoading = false;
            state.statusEvent.isSuccess = false;
            state.statusEvent.isError = true;
            state.statusEvent.messageEvent = "Une erreur est survenue !!";
        })

    //     Social webPage
        builder.addCase(Sociale.pending, (state,_) => {
            state.statusEvent.isLoading = true;
            state.statusEvent.isSuccess = false;
            state.statusEvent.isError = false;
            state.messageEvent = "Veillez Patienter..."
        }).addCase(Sociale.fulfilled, (state, action) => {
            state.statusEvent.isLoading = false;
            state.statusEvent.isSuccess = true;
            state.statusEvent.isError = false;
            state.socialEvent?.push(action.payload);
        }).addCase(Sociale.rejected, (state,action) => {
            state.statusEvent.isLoading = false;
            state.statusEvent.isSuccess = false;
            state.statusEvent.isError = true;
            state.statusEvent.messageEvent = "Une erreur est survenue !!";
        })

        //update Event
        builder.addCase(UpdateEvent.pending, (state,_) => {
            state.statusEvent.isLoading = true;
            state.statusEvent.isSuccess = false;
            state.statusEvent.isError = false;
            state.messageEvent = "Veillez Patienter..."
        }).addCase(UpdateEvent.fulfilled, (state, action) => {
            state.statusEvent.isLoading = false;
            state.statusEvent.isSuccess = true;
            state.statusEvent.isError = false;
            const filtres = state.infosGenerale.filter((item: any) => item.id !== action.payload?.id);
            state.infosGenerale = [...filtres!, action.payload];
        }).addCase(UpdateEvent.rejected, (state,action) => {
            state.statusEvent.isLoading = false;
            state.statusEvent.isSuccess = false;
            state.statusEvent.isError = true;
            state.statusEvent.messageEvent = "Une erreur est survenue !!";
        })

    }});


export default eventSlice.reducer;
