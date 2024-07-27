import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterslice";
import multiplyReducer from "./slices/multiplySlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        multiply: multiplyReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
