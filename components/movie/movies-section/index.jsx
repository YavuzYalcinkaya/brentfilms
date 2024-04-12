import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const MoviesSection = ({ title, movies }) => {
  return (
    <div className="mt-5 bg-gray-900 w-full">
      <div className="container mx-auto ">
        <h3 className="pt-4 font-semibold uppercase text-lg tracking-wider text-orange-500">
          {title}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {movies?.map((movie) => (
            <div className="mt-4" key={movie.id}>
              <Link href={`/movie/${movie.id}`}>
                <Image
                  className="hover:opacity-75 transition ease-in-out duration-150"
                  width={250}
                  height={200}
                  unoptimized
                  alt={movie.title}
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                />
              </Link>
              <div className="cursor-pointer">
                <h3 className="text-white text-start mt-2 hover:text-gray-300">
                  {movie.title}
                </h3>
                <div className="flex items-center text-[#9CA3AF]">
                  <AiFillStar className="text-orange-500" />
                  <span className="ml-2">{movie.vote_average.toFixed(1)} </span>
                  <span className="text-xs ml-1">|</span>
                  <span className="ml-2 text-sm">{movie.release_date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesSection;
