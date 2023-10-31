
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BrowseHeader from "./BrowseHeader";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Header from "./Header";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { Link } from "react-router-dom";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";
const Browse = () => {
    const showGptSearch = useSelector(store => store.gpt.showGptSearch);
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();


    return (

            <div>
                <div className="pl-4 absolute w-full flex flex-row z-10 bg-black bg-opacity-80">
                    <Link to="/"><Header/></Link>
                    <BrowseHeader/>
                    
                </div>
                {showGptSearch ? (
                    <GptSearch/>
                ) : (
                    <>
                        <MainContainer/>
                        <SecondaryContainer/>
                    </>
                )}
            </div>
            

        
    );

};


export default Browse;