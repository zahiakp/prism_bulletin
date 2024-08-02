import Link from "next/link";
import React from "react";
import { IoSearch } from "react-icons/io5";

function SubHeader({active}:{active?:any}) {
  return (
    <main className="w-full flex justify-center">
      <section className="w-[90%] max-w-[1200px] flex items-center justify-between py-5 md:py-10 overflow-x-auto">
        <ul className="flex gap-3 ">
          {["All","General","Education","Health","Culture","Commerce","Agriculture","Living",].map((item: any, index: number) => (
            <Link href={`/cat/${item}`}
              key={index}
              className={`p-[6px] px-4 ${active ==item ? "bg-zinc-900 text-white":"bg-zinc-100"}  text-sm rounded-3xl duration-300 hover:bg-zinc-900 hover:text-white cursor-pointer`}
            >
              {item}
            </Link>
          ))}
        </ul>
        <div className="border hidden border-zinc-800 md:flex items-center rounded-3xl overflow-hidden">
            <input type="search" className="border-none outline-none h-full p-2 px-5 w-80"/>
            <div className="bg-zinc-900 w-14 h-10 flex items-center justify-center pr-2"><IoSearch className="text-white text-xl"/></div>
        </div>
      </section>
    </main>
  );
}

export default SubHeader;
