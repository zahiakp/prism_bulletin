"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BiPlusCircle } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiInstagramLine } from "react-icons/ri";
import { FaFacebookF, FaXTwitter } from "react-icons/fa6";

function Header() {
  const [openFollow, setOpenFollow] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <main className="flex w-full justify-center border-b border-zinc-300 ">
      <div className="w-[90%] max-w-[1200px] flex items-center justify-center md:justify-between duration-300 text-center gap-4 py-6 ">
        <a href="/" className="flex items-center gap-3 text-3xl font-bold">
          <Image alt="" src={"/prism.png"} width={35} height={35} priority />

          <p>Prism Bulletin</p>
        </a>
        <button
          onClick={() => setOpenFollow(true)}
          className="hidden p-2 px-5 rounded-lg bg-zinc-100 md:flex items-center gap-2 font-semibold"
        >
          <BiPlusCircle /> Follow
        </button>
      </div>
      {openFollow && (
        <dialog id="my_modal_3" className="modal modal-open">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => setOpenFollow(!openFollow)}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </button>
            </form>
            <h3 className="font-bold text-lg">Follow Us</h3>
            <div className="flex items-center gap-3 justify-center mt-3">
              {[{icon:<IoLogoWhatsapp />,color:"purple"},{icon:<FaFacebookF />,color:"blue"},{icon:<AiFillInstagram />,color:"blue"},{icon:<FaXTwitter />,color:"blue"},].map((item: any, index: number) => (
                <div
                  key={index}
                  className={`w-24 h-24 flex items-center justify-center rounded-2xl bg-zinc-100 text-6xl text-zinc-600 hover:bg-blue-100 hover:text-blue-600 duration-300 group cursor-pointer`}
                >
                  <div className="group-hover:scale-105 duration-150">
                    {item.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </dialog>
      )}
    </main>
  );
}

export default Header;
