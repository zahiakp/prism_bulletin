"use client";
import Image from "next/image";
import { useState } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { BiPlusCircle } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiThreadsLine } from "react-icons/ri";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";


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
          <div className="modal-box w-fit p-8">
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
              {[
                {icon:<IoLogoWhatsapp />,url:"https://wa.me/+919048338225"},
                {icon:<FaFacebookF />,url:"https://www.facebook.com/PRISMFoundationOfficial"},
                {icon:<AiFillInstagram />,url:"https://www.instagram.com/prismfoundationofficial?igsh=ZWZ3aHR6bnB4c2M2"},
                {icon:<RiThreadsLine />,url:"https://www.threads.com/@prismfoundationofficial"},
                {icon:<FaLinkedinIn />,url:"http://www.linkedin.com/in/prismfoundation"},
                {icon:<FaTelegramPlane />,url:"https://t.me/+919048338225"},
              ].map((item: any, index: number) => (
                <a href={item.url} target="_blank" key={index}><div
                  
                  className={`w-14 h-14 flex items-center justify-center rounded-2xl bg-zinc-100 text-3xl text-zinc-600 hover:bg-blue-100 hover:text-blue-600 duration-300 group cursor-pointer`}
                >
                  <div className="group-hover:scale-105 duration-150">
                    {item.icon}
                  </div>
                </div></a>
              ))}
            </div>
          </div>
        </dialog>
      )}
    </main>
  );
}

export default Header;
