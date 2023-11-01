import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_Options } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {

  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);

  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_Options
    );

    const json = await data.json();
    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies , comma seperated like the example result given ahead. Example Results: Gadar , Sholey , Don , Golmal , Koi Mil Gaya";

    // Make an API call to openAPI
    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });
    if (!gptResults.choices) {
    }
    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames: gptMovies, movieResults: tmdbResults }));
  };

  return (
    <div className="w-full flex justify-center items-center">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="mt-40 mb-10">
          <input
            type="text"
            className="h-10 w-[350px]  rounded-l-lg text-center font-medium"
            placeholder={lang[langKey].gptSearchPlaceholder}
            ref={searchText}
          />
          <button
            className="w-[120px] h-10 mb-1 text-center text-white font-bold bg-red-600 rounded-r-lg"
            onClick={handleGptSearchClick}
          >
            {lang[langKey].search}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
