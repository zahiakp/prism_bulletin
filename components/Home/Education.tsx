"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";
import NewsCard from "../common/NewsCard";
import NewsCardSkeleton from "./(skeleton)/CatSkeleton";

function Education({ data, loading }: { data: any; loading?: boolean }) {
  return (
    <>
      {(loading ? Array(2).fill(null) : data)?.map((item: any, index: number) => (
        <main
          key={index}
          className={`flex justify-center py-5 my-3 ${
            index % 2 == 0 ? "bg-zinc-100" : "bg-white"
          } `}
        >
          <section className="w-[90%] max-w-[1200px] flex flex-col pt-7">
            <div className="flex items-center justify-between">
              <p className="text-3xl font-bold">
                {loading ? (
                  <span className="bg-gray-300 h-6 w-32 rounded animate-pulse inline-block"></span>
                ) : (
                  item.name
                )}
              </p>
              {!loading && (
                <Link
                  href={`/category/${item.name}`}
                  className={`flex items-center gap-3 hover:gap-4 duration-300 rounded-3xl p-2 px-5 ${
                    index % 2 == 0 ? "bg-white" : "bg-zinc-100"
                  } text-sm`}
                >
                  View All <HiOutlineArrowLongRight className="text-xl" />
                </Link>
              )}
            </div>
            <div className="flex flex-col md:flex-row mt-4">
              <Swiper
                key={index}
                modules={[Autoplay]}
                breakpoints={{
                  640: { slidesPerView: 1, spaceBetween: 10 },
                  1024: { slidesPerView: 3, spaceBetween: 20 },
                }}
                loop={true}
                autoplay={{ delay: 10000, disableOnInteraction: false }}
                className="w-full"
              >
                {(loading ? Array(3).fill(null) : item?.data)?.map(
                  (slide: any, idx: number) => (
                    <SwiperSlide key={idx}>
                      {loading ? <NewsCardSkeleton /> : <NewsCard data={slide} />}
                    </SwiperSlide>
                  )
                )}
              </Swiper>
            </div>
          </section>
        </main>
      ))}
    </>
  );
}

export default Education;
