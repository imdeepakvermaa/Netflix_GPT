import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BgImageURL } from "../utils/constants";


const GptSearch = () => {
  return (
    <div className="">
      <div
        className="h-[1100px] bg-gradient-to-r from-gray-700 to-gray-500 relative"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url(${BgImageURL})`,
        }}
      >
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </div>
  );
};

export default GptSearch;
