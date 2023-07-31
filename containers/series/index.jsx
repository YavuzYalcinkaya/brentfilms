import FeaturedSerie from "@/components/featured-serie";
import SeriesCategories from "@/components/series-categories";
import SeriesSection from "@/components/series-section";
import React from "react";

const SeriesContainer = ({
  topRatedSeries = [],
  popularSeries = [],
  categories = [],
  selectedCategory,
}) => {
  return (
    <div>
      <FeaturedSerie
        serie={popularSeries[Math.floor(Math.random() * popularSeries.length)]}
      />
      <SeriesCategories categories={categories.slice(1, 6)} />
      {!!selectedCategory?.series.length && (
        <SeriesSection
          title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
          series={selectedCategory.series.slice(1, 6)}
        />
      )}
      <SeriesSection
        title="Popular Series"
        series={popularSeries.slice(0, 15)}
      />
      <SeriesSection
        title="Top Rated Series"
        series={topRatedSeries.slice(0, 10)}
      />
    </div>
  );
};

export default SeriesContainer;
