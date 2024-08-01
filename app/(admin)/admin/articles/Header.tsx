
import Link from 'next/link'
import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { RiAddCircleFill } from 'react-icons/ri'

function Header() {
  const Categories = [
    { label: "General", value: "General" },
    { label: "Education", value: "Education" },
    { label: "Health", value: "Health" },
    { label: "Culture", value: "Culture" },
    { label: "Commerce", value: "Commerce" },
    { label: "Agriculture", value: "Agriculture" },
    { label: "Living", value: "Living" },
  ];
  
  return (
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
            // onChange={handleChange}
            // value={selectedValue}
            className="select select-bordered select-sm w-40"
          >
            <option value="jamiaNo">All Categories</option>
            {Categories.map((item:any,index:number)=>(<option key={index} value={item.value}>{item.label}</option>))}
          </select>
</div>

        <div className="p-[8px] px-4 bg-white shadow-md rounded-lg flex items-center  gap-3">
          
          <input
            id="search-input"
            // onChange={handleSearchChange}
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
  );
}

export default Header;
