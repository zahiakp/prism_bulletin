import { getRelativeTime } from "@/components/common/DateConvert";
import { StringtoArray } from "@/components/common/decodeTags";
import SafeImage from "@/components/common/SafeImage";
import { ROOT_URL } from "@/components/data/func";
import Image from "next/image";
import React from "react";



function Content({ data }: { data: any }) {
  if (!data) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <main className="flex flex-col ">
      <h6 className="text-5xl font-bold leading-[60px]">{data?.title}</h6>
      <div className="flex gap-3 mt-3"><span className="text-blue-700 bg-blue-50 p-2  px-5 rounded-2xl w-fit">{getRelativeTime(data?.date)}</span>
      <span className="text-zinc-700 bg-zinc-50 p-2 px-5 rounded-2xl w-fit">{getReadingTime(data?.body)} min read</span></div>
      {data?.image!="" && <div className="w-full h-[450px] bg-gray-100 overflow-hidden rounded-2xl my-7">
        <SafeImage height={400} width={500}
          src={`${ROOT_URL}uploads/news/${data?.image}`}
          alt=""
          className="w-full h-full object-cover"
        />
        
      </div>}
      <article
                        className="text-justify leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: data?.body }}
                      />
      <div className="flex gap-2 my-10 flex-wrap">{StringtoArray(data?.tags).map((item:any,index:number)=><p key={index} className="p-[6px] px-7 bg-zinc-100 rounded-3xl">{item}</p>)}</div>
    </main>
  );
}

export default Content;


export function getReadingTime(content: string, wordsPerMinute: number = 200): number {
  // Remove HTML tags if content includes markup
  const plainText = content.replace(/<[^>]+>/g, '');
  const wordCount = plainText.trim().split(/\s+/).length;
  const time = Math.ceil(wordCount / wordsPerMinute);
  return time; // time in minutes
}