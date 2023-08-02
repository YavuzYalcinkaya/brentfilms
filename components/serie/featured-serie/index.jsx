"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const FeaturedSerie = ({ popularSeries = [] }) => {
  return (
    <div>
      <div className=" w-full flex justify-center items-center lg:h-[400px]  text-white lg:mt-2">
        <Swiper
          className="mySwiper"
          navigation={true}
          modules={[Navigation]}
          spaceBetween={10}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            300: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {popularSeries.map((serie) => (
            <SwiperSlide key={serie.id}>
              <div className="rounded-xl w-full relative flex justify-center">
                <Link href={`/serie/${serie.id}`}>
                  <Image
                    className="opacity-75"
                    width={500}
                    height={200}
                    unoptimized
                    src={`https://image.tmdb.org/t/p/original${serie.backdrop_path}`}
                    alt={serie.title}
                    priority
                  />
                  <div className="flex flex-col justify-end w-full h-full transition-opacity absolute bottom-0 p-3">
                    <h1 className="font-extrabold">{serie.name}</h1>

                    <h4 className="ml-2 text-sm">{serie.first_air_date}</h4>
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

export default FeaturedSerie;
