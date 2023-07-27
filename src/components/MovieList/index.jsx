import React, { useState, useEffect } from "react";
import { getMovies } from "../../utils/utilities";
import "./style.css";
import ImageContainer from "../../atoms/Image-container";
import SearchBar from "./searchbar";
import { Link } from "react-router-dom";



const BASE_URL = process.env.REACT_APP_BASE_URL;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;


const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    (async () => {
      const movies = await getMovies();
      setMovies(movies.results);
      setLoading(false);
    })();
  }, []);
  const handleSearchFunction = async (searchValue) => {
    setSearchPerformed(true);
    if (!searchValue.trim()) {
      const movies = await getMovies();
      setMovies(movies.results);
    } else {
      try {
        const response = await fetch(
          `${BASE_URL}/3/search/movie?query=${searchValue}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`,
            },
          }
        );
        const result = await response.json();
        console.log("result", result);
        setMovies(result.results);
      } catch (error) {
        console.error("Error fetching movies:", error.message);
      }
    }
  };
  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      <SearchBar onSearch={handleSearchFunction} />
      <div className="image-container">
        {searchPerformed && movies.length === 0 ? (
          <p>No search results found </p>
        ) : movies.length === 0 ? (
          <p>No movies to show </p>
        ) : (
          movies.map((item) => (
            <Link  key={item.id}to={`/MovieDetails/${item.id}`}>
           <ImageContainer  props={item} />
            </Link>
        )
        ))}
      </div>
    </div>
  );
};
export default MovieList;
