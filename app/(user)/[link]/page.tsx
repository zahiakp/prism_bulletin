import Header from "@/components/Home/Header";
import React from "react";
import Content from "./Content";
import { NEWS } from "@/components/data/data";
import Link from "next/link";
import SocialShare from "./SocialShare";
import GuestLayout from "@/components/layouts/GuestLayout";
import { getArticle, getArticlebyId } from "@/app/(admin)/admin/articles/Add/func";
import { getLastWord } from "@/components/common/IdSepparator";
import { decodeId } from "@/components/common/Decode";
import { ROOT_URL } from "@/components/data/func";
// import Meta from "./head";



async function page({ params }: { params: any }) {
  const id = getLastWord(params.link);
  const data = await getArticlebyId(decodeId(id));
// console.log('data',data);

  return (
    
    <GuestLayout>
      {/* <Meta data={data[0]}/> */}
      
      <main className="flex w-full justify-center my-14">
        <div className="w-[90%] max-w-[1200px] grid grid-cols-1 md:grid-cols-3  gap-10">
          <div className="col-span-2">
          
            <Content data={data?.data} />
          </div>
          <div className="md:col-span-1 flex flex-col gap-5">
            <div className="bg-zinc-100 border border-zinc-500 flex flex-col gap-4 rounded-xl p-7">
              <p>Share Post</p>
              <SocialShare data={data?.data}/>
            </div>
            {/* <p className="p-10 rounded-xl bg-blue-100">{data[0].body}</p> */}
            <article
                        className="p-10 rounded-xl bg-blue-100"
                        dangerouslySetInnerHTML={{ __html: data?.data?.body }}
                      />
            <div className="flex flex-col">
              <p className="text-xl font-bold">Recents</p>
              <div className="flex flex-col gap-3 my-3">
                {/* {[0,1,2,3,4].map((index: number) => (
                  <Link href={`/news/${art?.data[index].url}`} key={index} className="flex gap-3 items-center cursor-pointer hover:bg-zinc-100 duration-300">
                    <div className="h-12 w-12 px-5 flex items-center justify-center rounded-full bg-black text-xl font-semibold text-white">
                      {index + 1}
                    </div>
                    <div className="flex-grow"><h6 className=" font-semibold line-clamp-1">{art?.data[index].title}</h6>
                    <article
                        className="line-clamp-2 text-sm"
                        dangerouslySetInnerHTML={{ __html: art?.data[index].body }}
                      /></div>
                  </Link>
                ))} */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </GuestLayout>
  );
}

export default page;




export async function generateMetadata({ params }: { params: any }) {
  const id = getLastWord(params.link);
  const data = await getArticlebyId(decodeId(id));
  return {
    title: `${data?.data?.title} | Prism Bulletin`,
    description: "Prism Bulletin is a news portal launched in 2024, under Prism Foundation.",
    metadataBase: new URL(`https://bulletin.prismonline.org/${params.link}`),
    openGraph: {
      url: `https://bulletin.prismonline.org/${params.link}`,
      title: data?.data?.title,
      description: 'Prism Bulletin is a news portal launched in 2024, under Prism Foundation.',
      images: [data?.data?.image!=""? `${ROOT_URL}uploads/news/${data?.data?.image}`:"prism thumb.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title: data?.data?.title,
      description: "Prism Bulletin is a news portal launched in 2024, under Prism Foundation.",
      image: data?.data?.image!=""? `${ROOT_URL}uploads/news/${data?.data?.image}`:"prism thumb.jpg",
    },
  };
}

// // Example function to fetch article data (replace this with actual data fetching logic)
// async function fetchArticleData(articleId: string) {
//   // Placeholder for article data fetching logic
//   return {
//     title: "Sample Article Title",
//     description: "This is a sample article description.",
//     image: "https://sunnahclub.in/sample-article-image.png",
//   };
// }
