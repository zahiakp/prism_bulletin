"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import { NEWS } from "../data/data";

function Health() {
  return (
    <main className="flex justify-center mt-10 ">
      <section className="w-[90%] max-w-[1200px] flex flex-col pt-7">
        <div className="flex items-center justify-between">
            <p className="text-3xl font-bold">Health</p>
            <Link href={`/category/${"Health"}`} className="flex items-center gap-3 hover:gap-4 duration-300 rounded-3xl p-2 px-5 bg-zinc-100 text-sm"> View All <HiOutlineArrowLongRight className="text-xl"/>
            </Link>
        </div>
        <div className="flex flex-col md:flex-row mt-4">
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
            {NEWS.filter((item:any)=>item.cat=="Health").map((item: any, index: number) => (
              <div key={index} >
                <SwiperSlide>
                  <Link href={`/news/${item.url}`} className="flex flex-col mb-10 py-5">
                    <div className="h-40 w-full overflow-hidden rounded-xl  col-span-3 relative">
                      <img
                        src={item.image!==""? item.image : "prism thumb.jpg"}
                        className="h-full w-full object-cover"
                      />
                       <p className="absolute bottom-4 right-4 p-[6px] px-4 rounded-lg bg-zinc-100 text-sm w-fit">{item.cat}</p>
                    </div>
                    <div className="col-span-2 ">
                       
                      <h6 className="text-lg font-bold mt-3 line-clamp-2">
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
                  </Link>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
}

export default Health;
