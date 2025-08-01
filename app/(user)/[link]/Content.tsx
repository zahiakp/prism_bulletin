import { getRelativeTime } from "@/components/common/DateConvert";
import { StringtoArray } from "@/components/common/decodeTags";
import { ROOT_URL } from "@/components/data/func";
import { Metadata } from "next";
import React from "react";


// export const metadata = ({ data }: { data: any }): Metadata => ({
//   title: data.title,
//   description: data.dis,
//   keywords: data.tags || "",
//   metadataBase: new URL('https://bulletin.prismonline.org/'),
//   openGraph: {
//     url: `https://bulletin.prismonline.org/${data.url}`,
//     description: data.title,
//     images: `${ROOT_URL}uploads/news/${data.image}`
//   },
// });


function Content({ data }: { data: any }) {
  if (!data) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <main className="flex flex-col ">
      <h6 className="text-5xl font-bold leading-[60px]">{data?.title}</h6>
      <span className="text-blue-600">{getRelativeTime(data?.date)}</span>
      {data?.image!="" && <div className="w-full h-[450px] overflow-hidden rounded-2xl my-7">
        <img
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
