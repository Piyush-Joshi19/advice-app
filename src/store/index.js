import { configureStore } from "@reduxjs/toolkit";
import adviceReducer from "./reducer"
export const store = configureStore({
    reducer:{
        advice:adviceReducer
    }
})