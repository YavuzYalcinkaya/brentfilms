import SeriesContainer from "@/containers/series";
import React from "react";
import {
  fetchPopularSeries,
  fetchTopRatedSeries,
  fetchSerieGenres,
  fetchSeriesByGenre,
} from "@/services/movie";

export default async function SeriesPage({ params }) {
  const pagePromises = [
    fetchPopularSeries(),
    fetchTopRatedSeries(),
    fetchSerieGenres(),
  ];

  if (!!params?.category?.length) {
    pagePromises.push(fetchSeriesByGenre(params.category[0]));
  }

  const [popularSeries, topRatedSeries, genres, selectedCategorySeries] =
    await Promise.all(pagePromises);
  return (
    <div>
      <SeriesContainer
        topRatedSeries={topRatedSeries}
        popularSeries={popularSeries}
        categories={genres}
        selectedCategory={{
          id: params?.category?.[0] ?? "",
          series: selectedCategorySeries ?? [],
        }}
      />
    </div>
  );
}
