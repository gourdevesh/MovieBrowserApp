import React from "react";
import { Movie } from "../Type";
import "../Style/FavoritesPage.css";

interface FavoritesPageProps {
  favorites: Movie[];
  removeFromFavorites: (imdbID: string) => void;
}

const FavoritesPage: React.FC<FavoritesPageProps> = ({ favorites, removeFromFavorites }) => {
  return (
    <div className="container">
      {favorites.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        <div className="grid">
          {favorites.map((movie) => (
            <div key={movie.imdbID} className="card">
              <img src={movie.Poster} alt={movie.Title} className="image" />
              <h3>{movie.Title}</h3>
              <p>{movie.Year}</p>

              <button
                onClick={() => removeFromFavorites(movie.imdbID)}
                className="button-remove"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
