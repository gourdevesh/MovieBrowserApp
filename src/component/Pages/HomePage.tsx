import React from "react";
import MovieCard from "../Movie/MovieCard";
import { Movie } from "../Type";
import "../Style/SearchBar.css";

interface HomePageProps {
  movies: Movie[];
  addToFavorites: (movie: Movie) => void;
  removeFromFavorites: (imdbID: any) => void;
}

const HomePage: React.FC<HomePageProps> = ({ movies, addToFavorites, removeFromFavorites }) => {
  return (
    <div>
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        <div className="grid">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              addToFavorites={addToFavorites}
              removeFromFavorites={removeFromFavorites}
            />
          ))}
        </div>
      )}

    </div>
  );
};

export default HomePage;
