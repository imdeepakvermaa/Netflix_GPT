import { useEffect } from "react";
import {  addPopularMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";



const usePopularMovies = () => {
    const dispatch = useDispatch();
    
    const getPopularMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1" , API_Options );
        const json = await data.json();
        dispatch(addPopularMovies(json.results));
    };


    useEffect(() => {
        getPopularMovies();

    },[]);
}


export default usePopularMovies;