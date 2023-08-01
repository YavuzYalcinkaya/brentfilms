"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const FeaturedMovie = ({ popularMovies = [] }) => {
  let slidesPerView = 3;
  if (window.innerWidth < 768) {
    slidesPerView = 1;
  } else if (window.innerWidth < 1024) {
    slidesPerView = 2;
  }
  return (
    <div>
      <div className=" w-full flex justify-center items-center lg:h-[400px]  text-white lg:mt-2">
        <Swiper
          className="mySwiper"
          navigation={true}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={slidesPerView}
          loop={true}
          autoplay={{ delay: 5000 }}
        >
          {popularMovies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <div className="rounded-xl w-full relative flex justify-center">
                <Link href={`/movie/${movie.id}`}>
                  <Image
                    className="opacity-75"
                    width={500}
                    height={200}
                    unoptimized
                    src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                    alt={movie.title}
                  />
                  <div className="flex flex-col justify-end w-full h-full transition-opacity absolute bottom-0 p-3">
                    <h1 className="font-extrabold">{movie.title}</h1>

                    <h4 className="ml-2 text-sm">{movie.release_date}</h4>
                  </div>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedMovie;
