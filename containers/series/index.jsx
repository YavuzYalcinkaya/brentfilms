import FeaturedSerie from "@/components/serie/featured-serie";
import SeriesCategories from "@/components/serie/series-categories";
import SeriesSection from "@/components/serie/series-section";
import React from "react";

const SeriesContainer = ({
  topRatedSeries = [],
  popularSeries = [],
  categories = [],
  selectedCategory,
}) => {
  return (
    <div>
      <FeaturedSerie popularSeries={popularSeries} />
      <SeriesCategories categories={categories.slice(0, 6)} />
      {!!selectedCategory?.series.length && (
        <SeriesSection
          title={categories.find(({ id }) => id === +selectedCategory.id)?.name}
          series={selectedCategory.series.slice(0, 6)}
        />
      )}
      <SeriesSection
        title="Popular Series"
        series={popularSeries.slice(0, 15)}
      />
      <SeriesSection
        title="Top Rated Series"
        series={topRatedSeries.slice(0, 15)}
      />
    </div>
  );
};

export default SeriesContainer;
