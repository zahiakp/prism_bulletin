import Spinner from "@/components/common/Spinner";
import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { CgPlayListCheck } from "react-icons/cg";
import { GrClear, GrEdit } from "react-icons/gr";
import { HiMiniEye } from "react-icons/hi2";
import { LuFileEdit } from "react-icons/lu";
import {
  MdDelete,
  MdDeleteOutline,
  MdOutlinePublishedWithChanges,
} from "react-icons/md";
import DeleteItem from "./Add/Delete";
import { decodeId, encodeId } from "@/components/common/Decode";

function Content({ article }: { article: any }) {
  const DATA: any = [
    {
      title: "n publishing and graphic design, Lorem ipsum",
      body: "n publishing and graphic design, Lorem ipsum (/ˌlɔː.rəm ˈɪp.səm/) is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available. It is also used to temporarily replace text in a process called greeking, which allows designers to consider the form of a webpage or publication, without the meaning of the text influencing the design.",
      image: "",
      status: "",
      date: "",
    },
  ];
  return (
    <div className="flex flex-col gap-2 mt-10">
      <div className="grid grid-cols-12 pl-1 uppercase font-semibold text-zinc-600 text-sm text-center">
        <p>No</p>
        <p className="col-span-4">Title</p>
        <p className="col-span-2">Author</p>
        <p className="col-span-2">Date</p>
        <p className="">Status</p>
        <p className="col-span-2"></p>
      </div>
      {article ? (
        <>
          {article?.length > 0 ? (
            <>
              {article.map((item: any, index: number) => (
                <div
                  key={index}
                  className="p-5 border bg-white  hover:shadow-md hover:scale-[1.005] duration-200 rounded-xl grid grid-cols-12 gap-5 items-center"
                >
                  <p className="pl-5 font-semibold">{item?.id}</p>
                  <p className="col-span-4 line-clamp-2">{item?.title}</p>
                  <p className="col-span-2 line-clamp-1">{item?.author}</p>
                  <p className="col-span-2">{item?.date}</p>
                  <p className="">{item.status}</p>
                  <div className="col-span-2 flex items-center gap-2 justify-center">
                    <div className="h-10 w-10 rounded-lg bg-zinc-100 flex items-center justify-center cursor-pointer">
                      <MdOutlinePublishedWithChanges className="text-xl text-zinc-600 " />
                    </div>
                    <a
                      href={`/admin/articles/Edit/${encodeId(item?.id)}`}
                      className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center cursor-pointer"
                    >
                      <LuFileEdit className="text-xl text-blue-600 " />
                    </a>
                    {/* <div className="h-10 w-10 rounded-lg bg-red-50 flex items-center justify-center cursor-pointer">
                      <MdDeleteOutline className="text-xl text-red-500 " />
                    </div> */}
                    <DeleteItem id={item?.id} />
                  </div>
                </div>
              ))}
            </>
          ) : (
            <p>Nothing to Show </p>
          )}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Content;
