import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const MovieDetailComponent = ({ movie }) => {
  const navigate = useNavigate();
  return (
    <div className="movie-detail flex flex-col lg:flex-row bg-black text-white p-32">

      <div className="lg:w-1/3 w-full flex justify-center lg:justify-start">
        <img src={movie.Poster} alt={movie.Title} className="w-full h-auto rounded-lg shadow-lg" />
      </div>

      <div className="lg:w-2/3 w-full mt-6 lg:mt-0 lg:ml-8">
        <h1 className="text-6xl font-bold">{movie.Title}</h1>
        <div className="flex items-center space-x-4 mt-6 text-xl opacity-75">
          <span>{movie.Year}</span>
          <span>|</span>
          <span>{movie.Runtime}</span>
          <span>|</span>
          <span>{movie.Rated}</span>
        </div>

        <div className="flex items-center mt-4">
          <span className="text-xl font-bold mr-2">{movie.imdbRating}</span>
          <svg className="w-6 h-6 text-red-600" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.049 2.927C9.432 1.641 10.568 1.641 10.951 2.927L12.09 6.656a1 1 0 00.95.69h3.843c1.259 0 1.784 1.618.867 2.387l-3.1 2.679a1 1 0 00-.286 1.036l1.24 4.014c.396 1.28-.98 2.304-2.032 1.523L10 14.347l-3.572 2.038c-1.051.781-2.428-.243-2.032-1.523l1.24-4.014a1 1 0 00-.286-1.036l-3.1-2.679c-.917-.769-.392-2.387.867-2.387h3.843a1 1 0 00.95-.69L9.049 2.927z" />
          </svg>
        </div>

        <p className="mt-6 text-xl leading-relaxed opacity-90">{movie.Plot}</p>

        <div className="mt-6 space-y-2">
          <p><strong className='text-red-600'>Starring:</strong> {movie.Actors}</p>
          <p><strong className='text-red-600'>Directed by:</strong> {movie.Director}</p>
          <p><strong className='text-red-600'>Genre:</strong> {movie.Genre}</p>
        </div>

        <button
          onClick={() => navigate(-1)} 
          className="mt-8 px-6 py-2 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default MovieDetailComponent;
