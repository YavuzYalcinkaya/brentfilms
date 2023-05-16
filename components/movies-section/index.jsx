import React from "react";
import Link from "next/link";
import Image from "next/image";

const MoviesSection = ({ title, movies }) => {
  return (
    <div className="mt-9">
      <h3 className="mb-3 uppercase text-xl tracking-[-1px]">{title}</h3>
      <div className="grid grid-cols-3 gap-6">
        {movies?.map((movie) => (
          <div
            className=" text-white overflow-hidden rounded-sm w-60 h-60 relative shadow-md transition duration-150 ease-in-out"
            key={movie.id}
          >
            <Link href={`/movie/${movie.id}`}>
              <Image
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
