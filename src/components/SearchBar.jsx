import React from 'react';
import searchIcon from '../images/search.png';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="p-4 w-full  ">
      <div className="relative w-3/4 ">
       
        <input
          type="text"
          placeholder="Search for movies..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="border border-red-600 p-2 w-full text-red-600 font-semibold rounded-sm" 
        />

        <img
          src={searchIcon}
          alt="Search Icon"
          className="absolute right-2 top-1/2 transform -translate-y-1/2  h-7  "
        />
      </div>
    </div>
  );
};

export default SearchBar;
