'use client'
import { configureStore } from "@reduxjs/toolkit";
import miscSlice from "./slices/miscSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { TypedUseSelectorHook, useSelector } from "react-redux";


export const store = configureStore({

    reducer : {
        [miscSlice.name] : miscSlice.reducer
    }

});

type RootState = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);

export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;