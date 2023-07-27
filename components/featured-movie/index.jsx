import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaPlus } from "react-icons/fa";

const FeaturedMovie = ({ movie = {} }) => {
  const { poster_path, title, overview } = movie;
  return (
    <div className="flex flex-col lg:flex-row w-full shadow-xl items-center p-5 justify-around text-black mt-5">
      <div className="flex flex-col">
        <h1 className="text-center w-full md:text-start text-xl lg:text-4xl ml-5 uppercase font-extrabold">
          {title}
        </h1>
        <p className="text-xl text-center  max-w-lg">{overview}</p>
        <div className="flex justify-center items-center gap-3">
          <Link
            className="flex items-center justify-center bg-[#eee] px-3 py-3 text-[#222] rounded-full font-bold text-xl"
            href={`/movie/${movie.id}`}
          >
            Play
          </Link>
          <button className="flex items-center justify-center border-2 border-white border-solid rounded-full w-16 h-16">
            <FaPlus />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center lg:mr-10 rounded-lg">
        <Image
          width={250}
          height={250}
          unoptimized
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
        />
      </div>
    </div>
  );
};

export default FeaturedMovie;
