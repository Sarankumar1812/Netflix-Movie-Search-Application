import React, { useState, useEffect } from 'react';
import { searchMovies } from '../api/omdbApi';  
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom'; 

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await searchMovies(searchQuery || 'popular');  
      setMovies(result.Search || []);
    };
    fetchMovies();
  }, [searchQuery]);

  return (
    <div >
      <div className="flex justify-center items-center space-x-4 p-4 px-20">
     
        <Link
          to="/"
          className="bg-red-600 text-white px-4 py-2 rounded-sm hover:bg-red-700 transition"
        >
          Home
        </Link>
        <Link
          to="/movies"
          className="bg-white text-red-600 px-4 py-2 border border-red-600 rounded-sm hover:bg-red-700 transition"
        >
          Movies
        </Link>

        <SearchBar value={searchQuery} onChange={setSearchQuery} />

      </div>

      <div className="movie-grid grid grid-cols-4 gap-y-6 p-4 mb-6">
        {movies.map((movie) => (
          <Card key={movie.imdbID} movie={movie} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default MovieList;
