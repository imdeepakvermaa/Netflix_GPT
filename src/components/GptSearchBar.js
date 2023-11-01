import React from 'react';
import lang from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
  const langKey = useSelector(store => store.config.lang)
  return (
    <div className="h-[450px] w-full flex justify-center items-center">
      <form>
        <div>
          <input
            type="text"
            className="h-10 w-[350px]  rounded-l-lg text-center font-medium"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button className="w-[120px] h-10 mb-1 text-center text-white font-bold bg-red-600 rounded-r-lg">
            {lang[langKey].search}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
