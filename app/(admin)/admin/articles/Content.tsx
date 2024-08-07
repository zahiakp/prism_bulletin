'use client'
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
import { getRelativeTime } from "@/components/common/DateConvert";
import { TbPhotoUp } from "react-icons/tb";

function Content({ article }: { article: any }) {
  const [imageView,setImageView] = useState<any>(false)
  return (
    <div className="flex flex-col gap-2 mt-10">
      <div className="grid grid-cols-11 pl-1 uppercase font-semibold text-zinc-600 text-sm text-center">
        <p>No</p>
        <p className="col-span-4">Title</p>
        <p className="col-span-2">category</p>
        <p className="col-span-2">Date</p>
        <p className="col-span-2"></p>
      </div>
      {article ? (
        <>
          {article?.length > 0 ? (
            <>
              {article.map((item: any, index: number) => (
                <div
                  key={index}
                  className="p-5 border bg-white shadow-sm duration-200 rounded-xl grid grid-cols-11 gap-5 items-center"
                >
                  <p className="pl-5 font-bold">{item?.id}</p>
                  <p className="col-span-4 line-clamp-2">{item?.title}</p>
                  <p className="col-span-2 line-clamp-1 text-center font-semibold text-blue-600">{item?.category}</p>
                  <p className="col-span-2 text-center">{getRelativeTime(item?.date)}</p>
                  <div className="col-span-2 flex items-center gap-2 justify-center">
                    <div onClick={()=>setImageView(!imageView)} className="h-10 w-10 rounded-lg bg-zinc-100 flex items-center justify-center cursor-pointer">
                      <TbPhotoUp  className="text-xl text-zinc-600 " />
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
      {imageView && (
        <dialog id="my_modal_3" className="modal modal-open">
          <div className="modal-box w-fit p-8">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => setImageView(!imageView)}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Follow Us</h3>
            <div className="flex items-center gap-3 justify-center mt-3">
              
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}

export default Content;
