import FeaturedSerie from "@/components/featured-serie";
import SeriesSection from "@/components/series-section";
import React from "react";

const SeriesContainer = ({ topRatedSeries = [], popularSeries = [] }) => {
  return (
    <div>
      <FeaturedSerie
        serie={popularSeries[Math.floor(Math.random() * popularSeries.length)]}
      />
      <SeriesSection
        title="Your favorites"
        series={topRatedSeries.slice(1, 7)}
      />
    </div>
  );
};

export default SeriesContainer;
