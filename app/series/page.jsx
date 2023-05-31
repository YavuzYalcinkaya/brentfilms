import SeriesContainer from "@/containers/series";
import React from "react";

const SeriesPage = ({
  topRatedSeries,
  popularSeries,
  categories,
  selectedCategory,
}) => {
  return (
    <div>
      <SeriesContainer
        topRatedSeries={topRatedSeries}
        popularSeries={popularSeries}
        categories={genres}
        selectedCategory={{
          id: params.category?.[0] ?? "",
          series: selectedCategorySeries ?? [],
        }}
      />
    </div>
  );
};

export default SeriesPage;
