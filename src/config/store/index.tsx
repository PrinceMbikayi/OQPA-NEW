import {configureStore} from "@reduxjs/toolkit";
import addresseReducer from '../slices/addresse/address.slice'
import userSliceReducer from "../slices/user/user.slice.ts";
import categoriSliceReducer from "../slices/categori/categori.slice.ts";
import eventSliceReducer from '../slices/events/event.slice.ts';
export function makeStore() {
    return configureStore({
        reducer: {
            //put here yours slices
            addresse:addresseReducer,
            users:userSliceReducer,
            categoris:categoriSliceReducer,
            events:eventSliceReducer,

        },
    })
}

export const store = makeStore()
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
