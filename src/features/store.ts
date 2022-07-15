import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/MovieSlice"

const store = configureStore({
    reducer:{
        movies:movieReducer
    }
})

export default store;