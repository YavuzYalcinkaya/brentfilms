import React from "react";
import FeaturedMovie from "@/components/featured-movie";
import Categories from "@/components/categories";
import MoviesSection from "@/components/movies-section";

const HomeContainer = ({
  topRatedMovies = [],
  popularMovies = [],
  categories = [],
  selectedCategory,
}) => {
  return (
    <div>
      <FeaturedMovie popularMovies={popularMovies} />
      <Categories categories={categories.slice(0, 6)} />
      {!!selectedCategory.movies.length && (
        <MoviesSection
          title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
          movies={selectedCategory.movies.slice(0, 15)}
        />
      )}
      <MoviesSection
        title="Popular Films"
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
