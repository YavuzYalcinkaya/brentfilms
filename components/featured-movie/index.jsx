import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";
import "./style.css";

const FeaturedMovie = ({ movie = {} }) => {
  const { poster_path, title, overview } = movie;
  return (
    <div className="flex flex-col gap-6 mt-14 mb-14">
      <h1 className="text-4xl uppercase font-extrabold max-w-sm">{title}</h1>
      <p className="text-xl max-w-md">{overview}</p>
      <div className="flex gap-3">
        <Link
          className="flex items-center justify-center bg-[#eee] text-[#222] rounded-full w-[300px] font-bold text-xl"
          href={`/movie/${movie.id}`}
        >
          Play
        </Link>
        <button className="flex items-center justify-center border-2 border-white border-solid rounded-full w-16 h-16">
          <FaPlus />
        </button>
      </div>
      <div className="moviePoster">
        <div className="moviePosterOverlay"></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          fill
          className="absolute bg-transparent inset-0 w-full h-full"
        />
      </div>
    </div>
  );
};

export default FeaturedMovie;
