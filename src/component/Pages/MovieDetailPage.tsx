import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "../Services/omdbApi";
import "../Style/SearchBar.css";
const MovieDetailPage: React.FC = () => {
  const { imdbID } = useParams<{ imdbID: any }>();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(imdbID);
      setMovie(data);
    };

    getMovieDetails();
  }, [imdbID]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-detail-container">
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p><b>Genre: </b> {movie.Genre}</p>
      <p><b>Director:   </b> {movie.Director}</p>
      <p className="movie-detail-text"><b>Plot:</b> {movie.Plot}</p>
      <p><b> Ratings:    </b> {movie.imdbRating}</p>
    </div>
  );

};

export default MovieDetailPage;
