"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { NEWS } from "../data/data";

function SubSlider() {
  return (
    <main className="flex justify-center mt-10">
      <section className="w-[90%] max-w-[1200px] flex flex-col md:flex-row border-t border-zinc-200 pt-7">
        <>
          <Swiper
            id="swiper"
            modules={[Autoplay]}
            slidesPerView={3}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {NEWS.map((item: any, index: number) => (
              <div key={index} >
                <SwiperSlide>
                  <Link href={`/news/${item.url}`}>
                  <section className="flex flex-col mb-10">
                    <div className="h-48 w-full overflow-hidden rounded-xl  col-span-3 relative">
                      <img
                        src={item.image}
                        className="h-full w-full object-cover"
                      />
                       <p className="absolute bottom-4 right-4 p-[6px] px-4 rounded-lg bg-zinc-100 text-sm w-fit">{item.cat}</p>
                    </div>
                    <div className="col-span-2 ">
                       
                      <h6 className="text-xl font-bold mt-3 line-clamp-2">
                        {item.title}
                      </h6>
                      {/* <article
                        className="text-blue-200 mt-2 line-clamp-4"
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      /> */}
                      <p className=" mt-2 line-clamp-[3]">
                        {item.body}
                      </p>
                      {/* <p className="text-sm text-zinc-400 mt-[6px]">12 July 2024</p> */}
                    </div>
                  </section></Link>
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
