import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  console.log(movies.recommendedMovies);
  return (
    movies && (
      <div className="bg-black">
        <div className="  relative">
        <div className=" -mt-52 ">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        </div>
        <div >
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Upcoming"} movies={movies.upcomingMovies} />

        </div>

      </div>
      </div>
    )
  );
};

export default SecondaryContainer;
