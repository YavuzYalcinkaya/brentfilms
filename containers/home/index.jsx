import React from "react";
import MovieSlider from "@/components/movie/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movie/movies-section";

const HomeContainer = ({
  topRatedMovies = [],
  popularMovies = [],
  categories = [],
  selectedCategory,
}) => {
  return (
    <div>
      <MovieSlider popularMovies={popularMovies} />
      <Categories categories={categories.slice(0, 6)} />
      {!!selectedCategory.movies.length && (
        <MoviesSection
          title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
          movies={selectedCategory.movies.slice(0, 15)}
        />
      )}
      <MoviesSection
        title="Popular Filmsss"
        movies={popularMovies.slice(0, 15)}
      />
      <MoviesSection
        title="Top Rated Films"
        movies={topRatedMovies.slice(0, 15)}
      />
    </div>
  );
};

export default HomeContainer;
