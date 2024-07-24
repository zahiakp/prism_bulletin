"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { NEWS } from "../data/data";

function MainSlider() {
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
            {NEWS.map((item: any, index: number) => (
              <div key={index} >
                <SwiperSlide>
                  <section className="grid grid-cols-5 gap-10 h-[450px] ">
                    <div className="h-full w-full overflow-hidden rounded-xl relative col-span-3 ">
                      <img
                        src={item.image}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="col-span-2 ">
                        <p className="p-2 px-5 rounded-3xl bg-zinc-100 text-sm w-fit">{"General"}</p>
                      <h6 className="text-3xl font-bold mt-3 line-clamp-3">
                        {item.title}
                      </h6>
                      {/* <article
                        className="text-blue-200 mt-2 line-clamp-4"
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      /> */}
                      <p className=" mt-2 line-clamp-[11]">
                        {item.body}
                      </p>
                      <p className="text-sm text-zinc-400 mt-[6px]">12 July 2024</p>
                    </div>
                  </section>
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
