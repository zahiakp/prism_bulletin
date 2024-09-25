"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { NEWS } from "../data/data";
import { ROOT_URL } from "../data/func";
import { getRelativeTime } from "../common/DateConvert";
import NewsCard from "../common/NewsCard";

function SubSlider({ data }: { data: any }) {
  return (
    <main className="flex justify-center mt-10">
      <section className="w-[90%] max-w-[1200px] flex flex-col md:flex-row border-t border-zinc-200 pt-7">
        <>
          <Swiper
            id="swiper"
            modules={[Autoplay]}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            loop={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {data?.map((item: any, index: number) => (
              <div key={index}>
                <SwiperSlide>
                  <NewsCard data={item} />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </>
      </section>
    </main>
  );
}

export default SubSlider;
