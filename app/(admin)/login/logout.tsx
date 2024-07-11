"use client";

import { useRouter } from "next/navigation";
import { MdDelete, MdDeleteOutline } from "react-icons/md";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Cookies from "js-cookie";
import { IoLogOut } from "react-icons/io5";

const Logout = () => {
  // const ids = decodeId(id)
  const router = useRouter();
  return (
    <button
      onClick={async () => {
        if (confirm("Are you sure you want to logout")) {
          Cookies.remove('token');
            window.location.replace('/login');
        }
      }}
      className="rounded-lg flex items-center justify-center gap-2 bg-zinc-800 p-3 px-5 text-white"
    >
      <IoLogOut className="text-lg"/>Logout
    </button>
  );
};

export default Logout;
