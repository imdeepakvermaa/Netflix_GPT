
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import BrowseHeader from "./BrowseHeader";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import Header from "./Header";

const Browse = () => {

    useNowPlayingMovies();


    return (
        <div className="">
            <div className="pl-4 absolute w-full flex flex-row z-10 bg-black bg-opacity-80">
                <Header />
                <BrowseHeader/>
            </div>
            
            <MainContainer/>        
            <SecondaryContainer/> 
        </div>
        
    );

};


export default Browse;