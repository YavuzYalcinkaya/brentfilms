"use client";

import React, { useState, useEffect } from "react";

const API_KEY = "1dd6c1c992b11ad58676277c4f2bab9e";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
        console.log(data.results);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>Top Rated Movies</h1>
      <ul>
        {movies?.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
