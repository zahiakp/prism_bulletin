"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

function Education() {
  return (
    <main className="flex justify-center mt-10 bg-zinc-100">
      <section className="w-[90%] max-w-[1200px] flex flex-col border-t border-zinc-200 pt-7">
        <div className="flex items-center justify-between">
            <p className="text-3xl font-bold">Education</p>
            <a href="" className="flex items-center gap-3 hover:gap-4 duration-300 rounded-3xl p-2 px-5 bg-white text-sm"> View All <HiOutlineArrowLongRight className="text-xl"/>
            </a>
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
            {[1, 2, 3, 4,5,6].map((item: any, index: number) => (
              <div key={index} >
                <SwiperSlide>
                  <section className="flex flex-col mb-10 py-5">
                    <div className="h-40 w-full overflow-hidden rounded-xl  col-span-3 relative">
                      <img
                        src={`/4343.jpg`}
                        className="h-full w-full object-cover"
                      />
                       <p className="absolute bottom-4 right-4 p-[6px] px-4 rounded-lg bg-zinc-100 text-sm w-fit">General</p>
                    </div>
                    <div className="col-span-2 ">
                       
                      <h6 className="text-lg font-bold mt-3 line-clamp-2">
                        Mumbai Pub Explains Why BMW Crash Accused Mihir Shah,
                        23, Was Served Liquor
                      </h6>
                      {/* <article
                        className="text-blue-200 mt-2 line-clamp-4"
                        dangerouslySetInnerHTML={{ __html: item.body }}
                      /> */}
                      <p className=" mt-2 line-clamp-[3]">
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
                      {/* <p className="text-sm text-zinc-400 mt-[6px]">12 July 2024</p> */}
                    </div>
                  </section>
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </section>
    </main>
  );
}

export default Education;
