"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import NewsCard from "@/components/common/NewsCard";

function Content({ data }: { data: any }) {
  return (
    <main className="flex w-full justify-center my-14">
      <div className="w-[90%] max-w-[1200px] grid grid-cols-1 md:grid-cols-3 gap-10">
       {data.length> 0 ? data.map((item:any,index:number)=>(
        <Link key={index} href={`/news/${item.url}`}>
        {/* <section className="flex flex-col mb-10">
          <div className="h-48 w-full overflow-hidden rounded-xl  col-span-3 relative">
            <img
              src={item.image!=""? `${ROOT_URL}uploads/news/${item.image}`:"prism thumb.jpg"}
              className="h-full w-full object-cover"
            />
             <p className="absolute bottom-4 right-4 p-[6px] px-4 rounded-lg bg-zinc-100 text-sm w-fit">{item.category}</p>
          </div>
          <div className="col-span-2 ">
             <p className="text-sm text-zinc-400 mt-3">{getRelativeTime(item?.date)}</p>
            <h6 className="text-xl font-bold mt-1 line-clamp-2">
              {item.title}
            </h6>
            <article
              className="mt-2 line-clamp-[3]"
              dangerouslySetInnerHTML={{ __html: item.body }}
            />
          </div>
        </section> */}
        <NewsCard data={item}/>
        </Link>
       )): <div className="flex items-center justify-center w-full col-span-3"> 
       <Image alt="" src={"/empty.jpg"} width={400}  height={400} className="rounded-3xl"/></div>}
      </div>
    </main>
  );
}

export default Content;
