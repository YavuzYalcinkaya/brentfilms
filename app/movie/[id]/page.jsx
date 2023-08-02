import React from "react";
import { notFound } from "next/navigation";
import { fetchSingleMovie } from "@/services/movie";
import { MdOutlineLanguage } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { GoCalendar } from "react-icons/go";
import Image from "next/image";

const MoviePage = async ({ params, searchParams }) => {
  const movieDetail = await fetchSingleMovie(params.id);
  // console.log("Movie Detail:", movieDetail);

  if (movieDetail.success === false) {
    notFound();
  }

  if (searchParams.error === "true") {
    throw new Error("Something went wrong!");
  }

  return (
    <div className="container mx-auto px-4 py-4 min-h-screen">
      <div className="flex flex-col lg:flex-row justify-center items-center w-full">
        <div className="m-10">
          <Image
            alt={movieDetail.title}
            unoptimized
            width={700}
            height={100}
            src={`https://image.tmdb.org/t/p/original${movieDetail.poster_path}`}
          />
        </div>
        <div className="ml-10 flex flex-col gap-10">
          <h1 className="text-white text-4xl font-semibold">
            {movieDetail.title}
          </h1>
          <div className="flex items-center justify-start">
            <AiFillStar size={25} className="text-orange-500" />
            <span className="ml-2 text-white">{movieDetail.vote_average} </span>
          </div>
          <div className="flex items-center justify-start">
            <GoCalendar className="text-orange-500" size={25} />
            <span className="ml-2 text-sm text-white">
              {movieDetail.release_date}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <MdOutlineLanguage className="text-orange-500" size={25} />
            <span className="uppercase text-white">
              {movieDetail.original_language}
            </span>
          </div>
          <p className="text-white">{movieDetail.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
