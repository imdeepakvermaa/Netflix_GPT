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
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div className="">
      <div className="pl-4 absolute w-full flex flex-row z-10 bg-black bg-opacity-80">
        <Link to="/">
          <Header />
        </Link>
        <BrowseHeader />
      </div>
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
          <div className="flex justify-center items-center w-full h-[265px] bg-black bg-opacity-100 ">
            <div className="">
              <h1 className=" text-gray-500 pb-8 pt-8">
                Questions? Call 000-800-919-1694{" "}
              </h1>
              <div className="text-gray-500 flex flex-row gap-[120px] text-sm ">
                <h4>FAQ</h4>
                <h4>Help Center</h4>
                <h4>Terms of use</h4>
                <h4>Privacy</h4>
              </div>
              <div className="text-gray-500 flex flex-row gap-[120px] text-sm mt-6 ">
                <h4>Corporate Information</h4>
                <h4>Cookies Preferences</h4>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Browse;
