import React from 'react';
import { lang } from '../utils/langConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const langId=useSelector(store=>store.language.lang)
  return (
    <div className="flex justify-center items-center ">
      <div className="relative w-full max-w-2xl mt-60">
        <input
          type="text"
          placeholder={lang[langId].placeholder}
          className="w-full py-4 pl-6 pr-24 bg-gray-800 text-white rounded-l-lg focus:outline-none focus:ring-2 focus:ring-red-600 placeholder-gray-400 text-lg"
        />
        <button className="absolute right-0 top-0 bottom-0 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 px-8 rounded-r-lg">
          {lang[langId].search}
        </button>
      </div>
    </div>
  );
};

export default GptSearchBar;
