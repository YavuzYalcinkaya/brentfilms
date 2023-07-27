import React from "react";
import Link from "next/link";
import Image from "next/image";

const MoviesSection = ({ title, movies }) => {
  return (
    <div className="mt-9">
      <h3 className="mb-3 uppercase text-2xl font-extrabold tracking-[-1px]">
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-6">
        {movies?.map((movie) => (
          <div
            className="relative h-60 w-full lg:h-72 overflow-hidden border border-solid rounded-lg shadow-lg transition-transform duration-300 ease-in delay-0"
            key={movie.id}
          >
            <Link href={`/movie/${movie.id}`}>
              <Image
                className=""
                fill
                unoptimized
                alt={movie.title}
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoviesSection;
