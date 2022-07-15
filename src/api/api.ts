import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



const API_KEY = process.env.REACT_APP_API_KEY




export const fetchMovies:any = createAsyncThunk("movies",async(name)=>{
    const { data } = await axios.get(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${name}`);
    return data.Search
})