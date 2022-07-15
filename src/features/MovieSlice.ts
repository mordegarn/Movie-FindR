import { createSlice } from "@reduxjs/toolkit";
import { fetchMovies } from "../api/api";

const initialState = {
    movies:[],
}

export const movieSlice = createSlice({
    initialState,
    name:"movies",
    reducers:{

    },
    extraReducers:{
        [fetchMovies.fulfilled]:(state:any,{ payload }:any) => {
            state.movies = payload
        }
    }
})



export const getMovies = (state:any) => state.movies.movies;
export default movieSlice.reducer