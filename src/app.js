import React, { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import searchIcon from "./search.svg";
import MovieCard from "./moviecard";

const API_URL = "http://www.omdbapi.com?apikey=c032e2d7";
const App = () => {
  const t = "MovieLand";
 

  const [searchItem, setSearchItem] = useState("");
  const [movies, setMovies] = useState([]);

  const search = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
    setMovies(data.Search)
  };

  useEffect(() => {
    search("");
  }, []);
  return (
    <div className="app">
      <h1>{t}</h1>
      <div className="search">
        <input
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder ='Select for movies'
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => search(searchItem)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
         
          {movies.map((movie1) => (
            <MovieCard movie={movie1} />
          ))}
        </div>
      ) : (
        <div className="empty">Movie Is Not Found</div>
      )}
    </div>
  );
};

export default App;
