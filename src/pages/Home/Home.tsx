import React, { useEffect, useState } from 'react';
import Cardd from '../../components/Card/Card';
import "./Home.scss";
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies } from '../../api/api';
import { getMovies } from '../../features/MovieSlice';

const Home = () => {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(fetchMovies(name))
    },[dispatch])   

     const movies = useSelector(getMovies)
     console.log(movies);
     

    const handleChange = (e:any) => {
        const {value} = e.target;
        // setName(value)
        dispatch(fetchMovies(value))

    }

    const [name,setName] = useState("Batman")

    return (
        <div className="home_wrapper">
            <div className="main">
                   <div className="main_top">
                   <input onChange={handleChange} placeholder='SEARCH THE MOVIE'  type="text" className="search" />
                   </div>
                   <div className="main_cards">
                      {movies?.map((item:any)=>{
                        return  <Cardd title={item.Title} key={item.imdbID} poster={item.Poster}/>
                      })}
                        
                   </div>
                    
            </div>

        </div>
    );
};

export default Home;