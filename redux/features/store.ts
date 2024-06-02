'use client'
import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from './api/apiSlice';
import authSlice from "./auth/authSlice";


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authSlice,
    },
    devTools: false,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

//call refresh Token on every page load 
const initializeApp = async () => {
    await store.dispatch(apiSlice.endpoints.refreshToken.initiate({}, { forceRefetch: true }));

    await store.dispatch(apiSlice.endpoints.loadUser.initiate({}, { forceRefetch: true }));

};

initializeApp();
//server side : make sure getting data from server (check on devTools when reloading )