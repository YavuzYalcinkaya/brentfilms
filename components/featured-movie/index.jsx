import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

const FeaturedMovie = ({ movie = {} }) => {
  const { poster_path, title, overview } = movie;
  return (
    <div className="flex flex-col gap-6 mt-14 mb-14">
      <h1 className="text-2xl uppercase font-extrabold max-w-sm">{title}</h1>
      <p className="text-xl max-w-md">{overview}</p>
      <div className="flex gap-3">
        <Link
          className="flex items-center justify-center bg-white text-black rounded-3xl w-80 h-20 font-bold text-xl"
          href={`/movie/${movie.id}`}
        >
          Play
        </Link>
        <button className="flex items-center justify-center  bg-slate-950 rounded-full w-20 h-15">
          <FaPlus />
        </button>
      </div>
      <div className="h-auto -z-20 max-h-full object-cover">
        <div className="absolute -z-10 "></div>
        <Image
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          fill
        />
      </div>
    </div>
  );
};

export default FeaturedMovie;
