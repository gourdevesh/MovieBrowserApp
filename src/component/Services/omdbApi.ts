import axios from "axios";

const API_KEY = "e5547e47";

export const fetchMovies = async (query: string) => {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`);
    return response.data.Search || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};

export const fetchMovieDetails = async (imdbID: string) => {
  try {
    const response = await axios.get(`https://www.omdbapi.com/?i=${imdbID}&apikey=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching movie details:", error);
    return null;
  }
};
