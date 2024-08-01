import { getRelativeTime } from "@/components/common/DateConvert";
import { StringtoArray } from "@/components/common/decodeTags";
import { ROOT_URL } from "@/components/data/func";
import React from "react";

function Content({ data }: { data: any }) {
  const newsData = data[0];

  return (
    <main className="flex flex-col ">
      <h6 className="text-5xl font-bold leading-[60px]">{newsData.title}</h6>
      {getRelativeTime(data?.date)}
      <div className="w-full h-[450px] overflow-hidden rounded-2xl my-7">
        <img
          src={newsData.image!=""? `${ROOT_URL}uploads/news/${newsData.image}`:"prism thumb.jpg"}
          alt=""
          className="w-full h-full object-cover"
        />
        
      </div>
      <article
                        className="text-justify leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: newsData.body }}
                      />
      <div className="flex gap-2 my-10 flex-wrap">{StringtoArray(newsData.tags).map((item:any,index:number)=><p key={index} className="p-[6px] px-7 bg-zinc-200 rounded-3xl">{item}</p>)}</div>
    </main>
  );
}

export default Content;
