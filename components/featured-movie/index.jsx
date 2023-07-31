import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineLanguage } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { GoCalendar } from "react-icons/go";

const FeaturedMovie = ({ movie = {} }) => {
  const {
    id,
    poster_path,
    title,
    overview,
    original_language,
    vote_average,
    release_date,
  } = movie;

  return (
    <Link href={`/movie/${id}`}>
      <div className="flex flex-col lg:flex-row justify-center w-full shadow-xl items-center p-5  text-white bg-gray-900 mt-5">
        <div className="flex flex-col">
          <h1 className="text-center w-full text-lg lg:text-4xl ml-5 uppercase font-extrabold">
            {title}
          </h1>
          <p className="text-center mt-5  max-w-2xl">{overview}</p>

          <div className="flex flex-row lg:flex-col justify-center items-start gap-4 text-white mt-8">
            <div className="flex items-center justify-start">
              <AiFillStar size={25} className="text-orange-500" />
              <span className="ml-2">{vote_average} </span>
            </div>

            <div className="flex items-center justify-start">
              <GoCalendar className="text-orange-500" size={25} />
              <span className="ml-2 text-sm">{release_date}</span>
            </div>
            <div className="flex items-center gap-4">
              <MdOutlineLanguage className="text-orange-500" size={25} />
              <span className="uppercase">{original_language}</span>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center lg:ml-10 lg:mr-10 mt-5 rounded-lg">
          <Image
            className="rounded-xl"
            width={300}
            height={300}
            unoptimized
            src={`https://image.tmdb.org/t/p/original${poster_path}`}
            alt={title}
          />
        </div>
      </div>
    </Link>
  );
};

export default FeaturedMovie;
