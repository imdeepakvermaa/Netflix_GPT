import { useEffect } from "react";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useDispatch } from "react-redux";
import { API_Options } from "../utils/constants";



const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    
    const getNowPlayingMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1" , API_Options );
        const json = await data.json();
        dispatch(addNowPlayingMovies(json.results));
    };


    useEffect(() => {
        getNowPlayingMovies();

    },[]);
}


export default useNowPlayingMovies;