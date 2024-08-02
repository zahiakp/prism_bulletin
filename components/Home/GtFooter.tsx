import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BiPlusCircle } from "react-icons/bi";

function Footer({active}:{active?:any}) {
  return (
    <>
      <footer className="md:flex justify-center w-full border-t border-zinc-300 hidden">
        <div className="w-[90%] max-w-[1200px] flex items-center justify-center md:justify-between duration-300 text-center gap-4 py-12 ">
          <div className="flex flex-col gap-2 items-start justify-start">
            <a href="/" className="flex items-center gap-3 text-3xl font-bold">
              <Image
                alt=""
                src={"/prism.png"}
                width={35}
                height={35}
                priority
              />

              <p>Prism Bulletin</p>
            </a>
            {/* <p className="text-sm text-zinc-500 text-left">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              modi, deleniti quod vitae adipisci ullam aut facere exercitationem
              impedit commodi.
            </p> */}
          </div>
          <ul className="flex gap-3">
          {["All","General","Education","Health","Culture","Commerce","Agriculture","Living",].map((item: any, index: number) => (
            <Link href={`/cat/${item}`}
              key={index}
              className={`p-[6px] px-4 ${active ==item ? "bg-zinc-900 text-white":"bg-zinc-100"}  text-sm rounded-3xl duration-300 hover:bg-zinc-900 hover:text-white cursor-pointer`}
            >
              {item}
            </Link>
          ))}
        </ul>
        </div>
      </footer>
      <section className="flex justify-center w-full bg-zinc-100">
        <div className="w-[90%] max-w-[1200px] flex items-center justify-center md:justify-between duration-300 gap-4 py-7">
          <p>© 2024 Prism Bulletin</p>
          <a href="https://abaqas.in" className="hidden md:block">abaqas.in</a>
        </div>
      </section>
    </>
  );
}

export default Footer;
