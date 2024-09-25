import React from "react";
import Content from "./Content";
import AdminLayout from "@/components/layouts/AdminLayout";
import { getArticle } from "./Add/func";
export const dynamic = "force-dynamic";

async function page() {
  // const Articles = await getArticle();

  return (
    <>
      <AdminLayout active={"Articles"}>
      <Content/>
{/* <div className="flex flex-col gap-2">
      <div className="flex gap-2 flex-col md:flex-row">
        <div className="h-60 flex gap-2 w-full">
          <div className="flex w-full flex-col gap-2">
            <div className="h-[25%] bg-blue-200 w-full "></div>
            <div className="w-full h-[75%] bg-blue-200"></div>
          </div>
          <div className="flex w-full bg-blue-200"></div>
        </div>
        <div className="h-60 flex gap-2 w-full flex-row-reverse md:flex-row">
          <div className="flex flex-col gap-2 w-[35%]">
            <div className="h-[75%] bg-blue-200 w-full "></div>
            <div className="w-full h-[25%] bg-blue-200"></div>
          </div>
          <div className="flex bg-blue-200  w-[65%]"></div>
        </div>
        <div className="flex flex-col w-full gap-2 h-60">
          <div className="w-full flex gap-2 h-1/3">
            <div className="h-full w-[65%] bg-blue-200 "></div>
            <div className="h-full w-[35%] bg-blue-200"></div>
          </div>
          <div className="w-full flex gap-2 h-1/3">
            <div className="h-full w-[35%] bg-blue-200 "></div>
            <div className="h-full w-[65%] bg-blue-200"></div>
          </div>
          <div className="w-full flex gap-2 h-1/3">
            <div className="h-full w-[65%] bg-blue-200 "></div>
            <div className="h-full w-[35%] bg-blue-200"></div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 flex-col h-40 w-full">
        <div className="flex gap-2 w-full h-1/2">
          <div className="bg-blue-200 w-[70%]"></div>
          <div className="bg-blue-200 w-[30%]"></div>
        </div>
        <div className="flex gap-2 w-full h-1/2">
          <div className="bg-blue-200 w-2/6"></div>
          <div className="bg-blue-200 w-1/6"></div>
          <div className="bg-blue-200 w-1/6"></div>
          <div className="bg-blue-200 w-2/6"></div>
        </div>
      </div></div> */}
     </AdminLayout>
    </>
  );
}

export default page;
