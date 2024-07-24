"use client";
import React, { useState } from "react";
import { BiPlusCircle } from "react-icons/bi";
import { GoReport, GoVerified } from "react-icons/go";
import { MdReport } from "react-icons/md";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { SlUserFollow } from "react-icons/sl";

function Header() {
  const [openFollow, setOpenFollow] = useState(false);
  const [loading, setLoading] = useState(false);
  return (
    <main className="flex w-full justify-center border-b border-zinc-300 ">
      <div className="w-[90%] max-w-[1200px] flex items-center justify-center md:justify-between duration-300 text-center gap-4 py-6 ">
        <a href="/" className="flex items-center gap-3 text-3xl font-bold">
          <RiVerifiedBadgeFill className="text-green-600" />
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
            <h3 className="font-bold text-lg">Follow our blogs</h3>
            <form
            // onSubmit={handleUpload}
            >
              {/* <JMFileUpload
                formik={formik}
                name="file"
                label=""
                accept="image/*"
              /> */}
              <div className="mb-3"></div>
              <div className="flex items-center gap-3">
                {" "}
                <input
                  type="email"
                  className="p-2 px-3 flex-grow border rounded-md border-zinc-800 outline-zinc-900"
                  //  onChange={handleFileChange}
                />
                <button
                  type="submit"
                  className="hover:bg-black btn px-5 py-[3px] bg-zinc-900 text-white"
                  disabled={loading}
                >
                  {loading ? "Following..." : "Follow Now"}
                </button>
              </div>
            </form>
          </div>
        </dialog>
      )}
    </main>
  );
}

export default Header;
