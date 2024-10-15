import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ movie }) => {
  return (
    <div className="card border border-red-600 p-4 m-4 shadow-lg flex flex-col h-full rounded-sm transition transform hover:scale-105 hover:shadow-2xl">
      <img
        src={movie.Poster}
        alt={movie.Title}
        className="w-full h-64 object-cover rounded-sm"
      />

      <div className="flex flex-col justify-between flex-grow mt-4">
        <div className="mb-2">
          <h3 className="text-lg font-bold truncate">{movie.Title}</h3>
          <p>Year: {movie.Year}</p>
        </div>

        <Link
          to={`/movies/${movie.imdbID}`}
          className="text-white bg-red-600 border border-red-600 px-4 py-2 rounded-sm text-center text-md transition-colors duration-300 hover:bg-red-700"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default Card;
