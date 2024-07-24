"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

function Content({ data }: { data: any }) {
  return (
    <main className="flex w-full justify-center my-14">
      <div className="w-[90%] max-w-[1200px] grid grid-cols-3 gap-10">
       {data.map((item:any,index:number)=>(
        <Link href={`/news/${item.url}`} key={index} className="flex flex-col">
        <div className="h-40 w-full overflow-hidden rounded-xl relative">
          <Image alt="" width={500}  height={500}
            src={`/${item.image}`}
            className="h-full w-full object-cover"
          />
          <p className="absolute bottom-4 right-4 p-[6px] px-4 rounded-lg bg-zinc-100 text-sm w-fit">
            {item.cat}
          </p>
        </div>
        <div className="">
          <h6 className="text-lg font-bold mt-3 line-clamp-2">
            {item.title}
          </h6>
          {/* <article
              className="text-blue-200 mt-2 line-clamp-4"
              dangerouslySetInnerHTML={{ __html: item.body }}
            /> */}
          <p className=" mt-2 line-clamp-[3]">{item.body}</p>
          {/* <p className="text-sm text-zinc-400 mt-[6px]">12 July 2024</p> */}
        </div>
      </Link>
       ))}
      </div>
    </main>
  );
}

export default Content;
