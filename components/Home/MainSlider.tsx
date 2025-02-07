"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { NEWS } from "../data/data";

import Link from "next/link";
import { ROOT_URL } from "../data/func";
import { getRelativeTime } from "../common/DateConvert";
import { encodeId } from "../common/Decode";


function MainSlider({data}:{data:any}) {
  return (
    <main className="flex justify-center">
      <section className="w-[90%] max-w-[1200px] flex flex-col md:flex-row">
        <>
          <Swiper
            id="swiper"
            modules={[Autoplay]}
            slidesPerView={1}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            className="w-full"
          >
            {data?.map((item: any, index: number) => (

              <div key={index} className="cursor-pointer">
                <SwiperSlide>
                  <Link href={`/${item.url+'_'+encodeId(item.id)}`}>
                    <section className="grid grid-cols-1 md:grid-cols-5 gap-5 md:gap-10 md:h-[450px] ">
                      <div className="h-[200px] md:h-full w-full overflow-hidden rounded-xl relative col-span-3 ">
                        <img
                          src={item.image!=""? `${ROOT_URL}uploads/news/${item.image}`:"prism thumb.jpg"}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="col-span-2">
                        <p className="p-2 px-5 rounded-3xl bg-zinc-100  font-semibold text-sm w-fit">
                          {item.category}
                        </p>
                        <h6 className=" text-2xl md:text-3xl font-bold mt-2 md:mt-3 line-clamp-2 md:line-clamp-3">
                          {item.title}
                        </h6>
                        <article
                        className="mt-2 line-clamp-4 md:line-clamp-[11]"
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      />
                        {/* <p className=" mt-2 line-clamp-4 md:line-clamp-[11]">{item.body}</p> */}
                        <p className="text-sm text-zinc-400 mt-[6px]">
                        {getRelativeTime(item?.date)}
                        </p>
                      </div>
                    </section>
                  </Link>

                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </>
      </section>
    </main>
  );
}

export default MainSlider;
