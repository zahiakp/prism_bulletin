import Header from "@/components/Home/Header";
import React from "react";
import Content from "./Content";
import { NEWS } from "@/components/data/data";
import Link from "next/link";
import SocialShare from "./SocialShare";

function page({ params }: { params: any }) {
  const link = params.link;
  const data = NEWS.filter((item: any) => item.url == link);

  return (
    <div className="flex w-full flex-col">
      <Header />
      <main className="flex w-full justify-center my-14">
        <div className="w-[90%] max-w-[1200px] grid grid-cols-3  gap-10">
          <div className="col-span-2">
            <Content data={data} />
          </div>
          <div className="col-span-1 flex flex-col gap-5">
            <div className="bg-zinc-100 border border-zinc-500 rounded-xl p-10">
              <p>Share Post</p>
              <SocialShare data1={data}/>
            </div>
            <p className="p-10 rounded-xl bg-blue-100">{data[0].body}</p>
            <div className="flex flex-col">
              <p className="text-xl font-bold">Recents</p>
              <div className="flex flex-col gap-3 my-3">
                {[0,1,2,3,4].map((index: number) => (
                  <Link href={`/news/${NEWS[index].url}`} key={index} className="flex gap-3 items-center cursor-pointer hover:bg-zinc-100 duration-300">
                    <div className="h-12 w-12 px-5 flex items-center justify-center rounded-full bg-black text-xl font-semibold text-white">
                      {index + 1}
                    </div>
                    <div className="flex-grow"><h6 className=" font-semibold line-clamp-1">{NEWS[index].title}</h6><p className="line-clamp-2 text-sm">{NEWS[index].body}</p></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default page;
