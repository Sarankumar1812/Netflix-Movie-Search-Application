import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from '../api/omdbApi';  
import MovieDetailComponent from '../components/MovieDetailComponent';

const MovieDetail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      const result = await getMovieDetails(id);
      setMovie(result);
    };
    fetchMovieDetails();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <MovieDetailComponent movie={movie} />
    </div>
  );
};

export default MovieDetail;
