import React from "react";
import { Movie } from "../Type";
import { useNavigate } from "react-router-dom";
import styles from "../Style/MovieCard.module.css";

interface MovieCardProps {
  movie: Movie;
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (imdbID: string) => void;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, addToFavorites, removeFromFavorites }) => {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
  const isFavorite = favorites.some((fav: Movie) => fav.imdbID === movie.imdbID);
  const navigate = useNavigate();

  const handleFavoriteClick = () => {
    isFavorite ? removeFromFavorites(movie.imdbID) : addToFavorites(movie);
  };

  const handleMoreInfoClick = () => {
    navigate(`/movie/${movie.imdbID}`);
  };

  return (
    <div className={styles.card}>
      <img src={movie.Poster} alt={movie.Title} className={styles.image} />
      <h3>{movie.Title}</h3>
      <p>{movie.Year}</p>
      <button
        onClick={handleFavoriteClick}
        className={`${styles.favoriteButton} ${isFavorite ? styles.favorite : styles.notFavorite}`}
      >
        {isFavorite ? "❤️ Remove from Favorites" : "🤍 Add to Favorites"}
      </button>
      <button className={styles.moreInfoBtn} onClick={handleMoreInfoClick}>
        More Info
      </button>
    </div>
  );
};

export default MovieCard;
