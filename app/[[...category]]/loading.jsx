import React from "react";
import FeatureMovieLoading from "@/components/movie/featured-movie";
import CategoriesLoading from "@/components/categories";
import MoviesSectionLoading from "@/components/movie/movies-section";

const Loading = () => {
  return (
    <>
      <FeatureMovieLoading />
      <CategoriesLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
      <MoviesSectionLoading />
    </>
  );
};

export default Loading;
