'use client'
import Spinner from "@/components/common/Spinner";
import React, { useCallback, useEffect, useState } from "react";
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
import { ROOT_URL } from "@/components/data/func";
import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import { RiAddCircleFill } from "react-icons/ri";

function Content({ article }: { article: any }) {
  const [imageView,setImageView] = useState<any>(false)
  const [search,setSearch]=useState<any>(null)
  const [catFilter,setCatFilter]=useState<any>(null)
  const [filteredData, setFilteredData] = useState<any>([]);

  const Categories = [
    { label: "General", value: "General" },
    { label: "Education", value: "Education" },
    { label: "Health", value: "Health" },
    { label: "Culture", value: "Culture" },
    { label: "Commerce", value: "Commerce" },
    { label: "Agriculture", value: "Agriculture" },
    { label: "Living", value: "Living" },
  ];
  const filterData = useCallback(() => {
    let filtered = article;

    if (catFilter) {
      filtered = filtered.filter((item: any) => item?.category === catFilter);
    }
    if (search) {
      filtered = filtered.filter((item: any) => {
        if (search) {
          return item.title.toLowerCase().includes(search.toLowerCase());
        }
        return true;
      });
    }

    setFilteredData(filtered);
  }, [catFilter, search, article]);

  useEffect(() => {
    filterData();
  }, [ catFilter, search, filterData]);
  const handleSearchChange = (event: any) => {
    setSearch(event.target.value);
  };
  const handleCatFilterChange = (event: any) => {
    setCatFilter(event.target.value);
  };
  return (
    <>
    <main className="w-full flex justify-between">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-zinc-900 text-sm breadcrumbs">
              <ul>
                <li>
                  <Link href="/admin">Dashbord</Link>
                </li>
                <li>Articles</li>
              </ul>
            </div>
            <h1 className="text-3xl font-[200]">Articles</h1>
          </div>
        </div>
        <div className="flex gap-3 items-center justify-den">

        <div className="p-[5px] bg-white shadow-md rounded-lg">
        <select
            onChange={handleCatFilterChange}
            // value={selectedValue}
            className="select select-bordered select-sm w-40"
          >
            <option value="">All Categories</option>
            {Categories.map((item:any,index:number)=>(<option key={index} value={item.value}>{item.label}</option>))}
          </select>
</div>

        <div className="p-[8px] px-4 bg-white shadow-md rounded-lg flex items-center  gap-3">
          
          <input
            id="search-input"
            onChange={handleSearchChange}
            className="outline-none "
            type="search"
            placeholder="Search"
          />
          <div>
            <IoSearchOutline className="text-xl" />
          </div>
        </div>{" "}
        <Link
          href={"/admin/articles/Add"}
          className="gap-2 cursor-pointer p-[8px] px-4 bg-zinc-800 hover:shadow-lg hover:-translate-y-1 duration-200 rounded-md text-white w-fit shadow-lg flex items-center"
        >
          <RiAddCircleFill />
          Create New
        </Link>
      </div>
    </main>
    <div className="flex flex-col gap-2 mt-10">
      <div className="grid grid-cols-11 pl-1 uppercase font-semibold text-zinc-600 text-sm text-center">
        <p>No</p>
        <p className="col-span-4">Title</p>
        <p className="col-span-2">category</p>
        <p className="col-span-2">Date</p>
        <p className="col-span-2">Actions</p>
      </div>
      {filteredData ? (
        <>
          {filteredData?.length > 0 ? (
            <>
              {
              filteredData.map((item: any, index: number) => (
                <div
                  key={index}
                  className="p-5 border bg-white shadow-sm duration-200 rounded-xl grid grid-cols-11 gap-5 items-center"
                >
                  <p className="pl-5 font-bold">{item?.id}</p>
                  <p className="col-span-4 line-clamp-2">{item?.title}</p>
                  <p className="col-span-2 line-clamp-1 text-center font-semibold text-blue-600">{item?.category}</p>
                  <p className="col-span-2 text-center">{getRelativeTime(item?.date)}</p>
                  <div className="col-span-2 flex items-center gap-2 justify-center">
                    <div data-tip="View Image" onClick={()=>setImageView(item?.image)} className="tooltip h-10 w-10 rounded-lg bg-zinc-100 flex items-center justify-center cursor-pointer">
                      <TbPhotoUp  className="text-xl text-zinc-600 " />
                    </div>
                    <a data-tip="Edit"
                      href={`/admin/articles/Edit/${encodeId(item?.id)}`}
                      className="tooltip h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center cursor-pointer"
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
            <div className="mx-auto rounded-xl overflow-hidden mt-10"><img src="/empty cart.gif" alt="" className="h-80"/></div>
          )}
        </>
      ) : (
        <Spinner />
      )}
      {imageView && (
        <dialog id="my_modal_3" className="modal modal-open">
          <div className="modal-box w-fit p-0 relative">
            <form method="dialog absolute top-3 right-3">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => setImageView(false)}
                className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 text-white bg-black/30 hover:bg-black/50"
              >
                ✕
              </button>
            </form>
            <img src={`${ROOT_URL}uploads/news/${imageView}`} className="w-[1500px] h-auto"/>
          </div>
        </dialog>
      )}
    </div></>
  );
}

export default Content;
