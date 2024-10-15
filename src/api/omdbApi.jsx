import axios from 'axios';

const API_KEY = 'dcc773e9';
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

export const searchMovies = async (query) => {
  const response = await axios.get(`${BASE_URL}&s=${query}`);
  return response.data;
};

export const getMovieDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}&i=${id}`);
  return response.data;
};


