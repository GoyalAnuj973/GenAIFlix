import { configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice"
import movieSlice from "./movieSlice"
import tvSlice from "./tvSlice"

export const store = configureStore({
    reducer:{
        user : userSlice ,
        movies : movieSlice,
        tv : tvSlice,
    }
})