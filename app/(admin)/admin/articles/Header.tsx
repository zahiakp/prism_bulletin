
import Link from 'next/link'
import React from 'react'
import { IoSearchOutline } from 'react-icons/io5'
import { RiAddCircleFill } from 'react-icons/ri'

function Header() {
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
          <h1 className="text-3xl font-[200]">Articles</h1>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-den">
        <div className="p-[6px] pr-4 bg-white shadow-md rounded-xl flex items-center  gap-3">
          <select
            // onChange={handleChange}
            // value={selectedValue}
            className="select select-bordered select-sm w-32 max-w-xs"
          >
            <option value="jamiaNo">Title</option>
            <option value="name">Author</option>
          </select>
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
          className="gap-2 cursor-pointer p-[8px] px-4 bg-zinc-800 hover:shadow-lg hover:-translate-y-1 duration-200 rounded-lg text-white w-fit shadow-lg flex items-center"
        >
          <RiAddCircleFill />
          Create New
        </Link>
      </div>
    </main>
  );
}

export default Header;
