import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies && (
      <div className="  relative z-20 bg-black">
        <div className=" -mt-52 ">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        </div>
        <div>
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        </div>

      </div>
    )
  );
};

export default SecondaryContainer;
