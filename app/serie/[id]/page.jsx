import React from "react";
import SeriesContainer from "@/containers/movie";
import { notFound } from "next/navigation";
import { fetchSingleSerie } from "@/services/movie";

const SeriePage = async ({ params, searchParams }) => {
  const SerieDetail = await fetchSingleSerie(params.id);

  if (SerieDetail.success === false) {
    notFound();
  }

  if (searchParams.error === "true") {
    throw new Error("Something went wrong!");
  }

  return <SeriesContainer serie={SerieDetail} />;
};

export default SeriePage;
