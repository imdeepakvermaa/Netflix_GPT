import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold py-3  text-white">{title}</h1>
      <div className="flex  overflow-y-hidden ">
        <div className="flex gap-7">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
