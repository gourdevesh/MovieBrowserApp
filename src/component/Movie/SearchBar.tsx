import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/SearchBar.css"; 

interface SearchBarProps {
  onSearch: (query: string) => void;
  favoritesCount: number;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, favoritesCount }) => {
  const [query, setQuery] = useState<string>("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  const goToFavorites = () => {
    navigate("/favorites");
  };

  return (
    <div className="container"   >
      <div className="searchWrapper">
        <input
          type="text"
          value={query}
          onChange={handleChange}
          placeholder="Search for a movie"
          className="input"
        />
        <button onClick={handleSearch} className="button">
          Search
        </button>
      </div>

      <div className="favoritesWrapper" onClick={goToFavorites}>
        <span className="favoriteIcon">favorite List❤️</span>
        <span className="favoritesCount">{favoritesCount}</span>
      </div>
    </div>
  );
};

export default SearchBar;
