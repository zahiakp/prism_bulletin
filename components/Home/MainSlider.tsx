"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

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
            {[1, 2, 3, 4].map((item: any, index: number) => (
              <div key={index} >
                <SwiperSlide>
                  <section className="grid grid-cols-5 gap-10 h-[450px] ">
                    <div className="h-full w-full overflow-hidden rounded-xl relative col-span-3 ">
                      <img
                        src={`/4343.jpg`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="col-span-2 ">
                        <p className="p-2 px-5 rounded-3xl bg-zinc-100 text-sm w-fit">General</p>
                      <h6 className="text-3xl font-bold mt-3 line-clamp-3">
                        Mumbai Pub Explains Why BMW Crash Accused Mihir Shah,
                        23, Was Served Liquor
                      </h6>
                      {/* <article
                        className="text-blue-200 mt-2 line-clamp-4"
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      /> */}
                      <p className=" mt-2 line-clamp-[11]">
                        Mumbai: The accused in the Mumbai BMW hit-and-run case
                        allegedly used an identity card that showed his age as
                        27 at a pub where he and his friends went, sources said.
                        Mihir Shah, who was arrested yesterday after a three-day
                        chase, is 23 years old, according to official records,
                        while the minimum legal drinking age is 25. The pub's
                        management alleged Mr Shah showed them the identity card
                        which showed he was 27 years old before they allowed him
                        to enter. Three of his friends who went to the pub with
                        him are over 30 years old. A portion of the pub that was
                        illegally built was demolished by the Mumbai civic
                        agency yesterday. Kaveri Nakva and her husband Pradik
                        Nakva were on a two-wheeler when the BMW driven by Mr
                        Shah, the son of sacked Shiv Sena leader Rajesh Shah,
                        rammed the scooty and sped away. The police have said
                        many CCTV footage have captured the speeding BMW
                        dragging the woman stuck on the bonnet. Mr Shah stopped
                        the car after dragging Ms Nakva for 1.5 km, and then
                        exchanged seats with his driver. He removed the woman's
                        body from underneath the engine bay and the bumper, and
                        left the body on the road. His driver then reversed the
                        BMW and ran over the woman's body before the car
                        disappeared from CCTV view.
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
