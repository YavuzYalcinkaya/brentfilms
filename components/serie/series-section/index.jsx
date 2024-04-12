import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";

const SeriesSection = ({ title, series }) => {
  return (
    <div className="mt-5 bg-gray-900 w-full">
      <div className="container mx-auto ">
        <h3 className="pt-4 font-semibold uppercase text-lg tracking-wider text-orange-500">
          {title}
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {series?.map((serie) => (
            <div className="mt-4" key={serie.id}>
              <Link href={`/serie/${serie.id}`}>
                <Image
                  className="hover:opacity-75 transition ease-in-out duration-150"
                  width={250}
                  height={200}
                  unoptimized
                  alt=""
                  src={`https://image.tmdb.org/t/p/original${serie.poster_path}`}
                />
              </Link>
              <div className="cursor-pointer">
                <h3 className="text-white text-start mt-2 hover:text-gray-300">
                  {serie.name}
                </h3>
                <div className="flex items-center text-[#9CA3AF]">
                  <AiFillStar className="text-orange-500" />
                  <span className="ml-2">{serie.vote_average.toFixed(1)} </span>
                  <span className="text-xs ml-1">|</span>
                  <span className="ml-2 text-sm">{serie.first_air_date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SeriesSection;
