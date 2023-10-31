import React from 'react';

const GptSearchBar = () => {
  return (
    <div className="h-[450px] w-full flex justify-center items-center">
      <form>
        <div>
          <input
            type="text"
            className="h-10 w-[350px] rounded-l-lg text-center font-medium"
            placeholder="What's On Your Mind Today?"
          />
          <button className="w-[120px] h-10 text-center text-white font-bold bg-red-600 rounded-r-lg">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default GptSearchBar;
