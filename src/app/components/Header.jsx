"use client";
import React from "react";
import Image from "next/image";

import SwiperNavButtons from "./SwiperNavButtons";
import ButtonLink from "./ButtonLink";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const images = ["ARBOR", "DAE", "KANSO", "OPA", "PINETREE", "RESIDENCE"];

const Header = () => {
  return (
    <main className="h-[100vh] flex flex-col pt-12 md:pt-0 md:flex-row">
      <div className="flex-1 h-fit md:h-full flex flex-col justify-center md:justify-end gap-5  px-12 md:px-20 md:py-20 relative lg:order-2">
        <div className="md:absolute top-[200px] -left-10 z-20">
          <h1 className="text-5xl lg:text-8xl text-dark font-heading uppercase">
            daedalus <br /> architects
          </h1>
        </div>
        <div>
          <p className="text-xs md:text-base text-pretty">
            Named after Daedalus, the skillful architect and craftsman who was
            known to have built the paradigmatic Labyrinth for King Minos of
            Crete. Like Daedalus, we strive for innovative and thoughtful
            design.
          </p>
        </div>
        <ButtonLink name={"Contact us"} link={"/contact"} />
      </div>
      {/*----------- END SECTION - 1  ---------------*/}
      <div className="h-[400px] md:h-full flex md:flex-1 justify-end items-center overflow-hidden lg:order-1">
        <div className="w-full h-full md:w-[520px] md:h-[600px] relative">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            loop={true}
            slidesPerView="auto"
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            className="w-full h-full relative"
          >
            {images.map((src, i) => (
              <SwiperSlide key={i} className="relative ">
                <Image src={`/static/home-images/${src}.webp`} alt="image-slider" fill />
              </SwiperSlide>
            ))}

            <div className="absolute bottom-0 right-0 z-20">
              <SwiperNavButtons />
            </div>
          </Swiper>
        </div>
      </div>
      {/*----------- END SECTION - 2  ---------------*/}
    </main>
  );
};

export default Header;
