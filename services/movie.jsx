const API_KEY = "57e45f87ac23025222fa078358a66f00";

async function fetchData(path, { query = "" } = {}) {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3${path}?api_key=${API_KEY}&${query}`
    );
    return res.json();
  } catch (error) {
    throw new Error(error);
  }
}

export async function fetchGenres() {
  try {
    const res = await fetchData("/genre/movie/list");
    return res.genres;
  } catch (error) {
    throw new Error("Error happened while fetching genres", error);
  }
}

export async function fetchSerieGenres() {
  try {
    const res = await fetchData("/genre/tv/list");
    return res.genres;
  } catch (error) {
    throw new Error("Error happened while fetching genres", error);
  }
}

export async function fetchPopularMovies() {
  try {
    const res = await fetchData("/movie/popular");
    return res.results;
  } catch (error) {
    throw new Error("Error happened while fetching popular movies", error);
  }
}

export async function fetchPopularSeries() {
  try {
    const res = await fetchData("/tv/popular");
    return res.results;
  } catch (error) {
    throw new Error("Error happened while fetching popular movies", error);
  }
}

export async function fetchTopRatedMovies() {
  try {
    const res = await fetchData("/movie/top_rated");
    return res.results;
  } catch (error) {
    throw new Error("Error happened while fetching top rated movies", error);
  }
}

export async function fetchTopRatedSeries() {
  try {
    const res = await fetchData("/tv/top_rated");
    return res.results;
  } catch (error) {
    throw new Error("Error happened while fetching top rated movies", error);
  }
}

export async function fetchSingleMovie(movieId) {
  try {
    const res = await fetchData(`/movie/${movieId}`);
    return res;
  } catch (error) {
    throw new Error("Error happened while fetching top rated movies", error);
  }
}

export async function fetchSingleSerie(seriesId) {
  try {
    const res = await fetchData(`/tv/${seriesId}`);
    return res;
  } catch (error) {
    throw new Error("Error happened while fetching top rated movies", error);
  }
}

export async function fetchMoviesByGenre(genreId) {
  try {
    const res = await fetchData(`/discover/movie`, {
      query: `with_genres=${genreId}`,
    });
    return res.results;
  } catch (error) {
    throw new Error("Error happened while fetching top rated movies", error);
  }
}

export async function fetchSeriesByGenre(genreId) {
  try {
    const res = await fetchData(`/discover/tv`, {
      query: `with_genres=${genreId}`,
    });
    return res.results;
  } catch (error) {
    throw new Error("Error happened while fetching top rated movies", error);
  }
}
