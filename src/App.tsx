import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./component/Pages/HomePage";
import MovieDetailPage from "./component/Pages/MovieDetailPage";
import FavoritesPage from "./component/Pages/FavoritesPage";
import SearchBar from "./component/Movie/SearchBar";
import { fetchMovies } from "./component/Services/omdbApi";
import { Movie } from "./component/Type";

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [favorites, setFavorites] = useState<Movie[]>([]);

useEffect(() => {
  const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  setFavorites(storedFavorites);
}, []);

  useEffect(() => {
    const fetchInitialMovies = async () => {
      const initialMovies = await fetchMovies("batman"); 
      setMovies(initialMovies);
    };
    fetchInitialMovies();
  }, []);

  const handleSearch = async (query: string) => {
    const movieResults = await fetchMovies(query);
    setMovies(movieResults);
  };

  const addToFavorites = (movie: Movie) => {
    const updatedFavorites = [...favorites, movie];
    const uniqueFavorites = Array.from(
      new Map(updatedFavorites.map((m) => [m.imdbID, m])).values()
    );
    localStorage.setItem("favorites", JSON.stringify(uniqueFavorites));
    setFavorites(uniqueFavorites);
  };
  
  const removeFromFavorites = (imdbID: string) => {
    const updatedFavorites = favorites.filter((movie) => movie.imdbID !== imdbID);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setFavorites(updatedFavorites);
  };

  return (
    <Router>
      <div>
        <SearchBar onSearch={handleSearch} favoritesCount={favorites.length} />
        <Routes>
          <Route
            path="/"
            element={<HomePage movies={movies} addToFavorites={addToFavorites} removeFromFavorites={removeFromFavorites} />}
          />
          <Route path="/movie/:imdbID" element={<MovieDetailPage />} />
          <Route
  path="/favorites"
  element={
    <FavoritesPage
      favorites={favorites}
      removeFromFavorites={removeFromFavorites}
    />
  }
/>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
