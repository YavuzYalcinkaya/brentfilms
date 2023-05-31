import React from "react";
import Link from "next/link";
import Image from "next/image";

const SeriesSection = ({ title, series }) => {
  return (
    <div className="mt-9">
      <h3 className="mb-3 uppercase text-2xl font-extrabold tracking-[-1px]">
        {title}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6  gap-6">
        {series?.map((serie) => (
          <div
            className="relative h-60 w-full lg:h-72 overflow-hidden border border-solid rounded-lg shadow-lg transition-transform duration-300 ease-in delay-0"
            key={serie.id}
          >
            <Link href={`/serie/${serie.id}`}>
              <Image
                className="absolute  bg-transparent inset-0"
                fill
                unoptimized
                alt={serie.title}
                src={`https://image.tmdb.org/t/p/original${serie.poster_path}`}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeriesSection;
