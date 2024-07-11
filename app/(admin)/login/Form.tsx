"use client";

import { useFormik } from "formik";
import { useState } from "react";
import Cookies from "js-cookie";
import { ROOT_URL } from "@/components/data/func";
import { toast } from "react-toastify";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function login(email: string, pass: string) {
    setLoading(true);
    const validEmail = "test";
    const validPass = "test";
    const token = "prismpass";

    try {
      if (email == validEmail) {
        if (pass == validPass) {
          Cookies.set("token", token);
          window.location.replace("/admin");
        } else {
          toast.error("Incorrect Password");
          setLoading(false);
        }
      } else {
        toast.error("Invalid Email");
        setLoading(false);
      }
    } catch {
      console.log("error at login");
      setLoading(false);
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      await login(values.email, values.password);
      setLoading(false);
    },
  });

  return (
    <form
      className="h-full md:h-fit bg-white overflow-hidden md:rounded-xl border border-zinc-900 
             items-center justify-center w-full max-w-[600px] grid grid-cols-5"
      onSubmit={formik.handleSubmit}
    >
      <div className="bg-zinc-900 p-14 w-full h-full flex items-center justify-center col-span-2">
        <img src="/prism logo light dd.png" className="w-52" alt="" />
      </div>
      <div className="flex flex-col col-span-3 px-14 p-10 w-full">
        <h1 className="text-2xl font-bold my-3 text-zinc-900">
          <span className="font-[400]">Login to</span> Panel
        </h1>

        <div className="text-red-600 font-bold">{error}</div>
        <div className="w-full">
          <input
            type="text"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="px-4 py-3 rounded-lg border border-zinc-400 outline-zinc-500 my-2 w-full"
            placeholder="Email"
          />
        </div>

        <div className="w-full">
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className="px-4 py-3 rounded-lg border border-zinc-400 outline-zinc-500 my-2 w-full"
            placeholder="Password"
          />
        </div>

        <button
          type="submit"
          className="py-3 px-7 w-full my-3 bg-zinc-700 rounded-lg text-white text-lg hover:bg-zinc-800 duration-300"
          disabled={loading}
        >
          {loading ? "Verifying Credentials" : "Login"}
        </button>
      </div>
    </form>
  );
};

export default LoginForm;
