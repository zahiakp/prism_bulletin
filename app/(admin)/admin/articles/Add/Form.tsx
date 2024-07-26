"use client";
import { Editor } from "primereact/editor";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  FormCusInput,
  BodyInput,
  FormSelect,
  FormUpload,
  TitleInput,
} from "@/components/common/FormAssets";
import { useRouter } from "next/navigation";
import { PiUploadBold } from "react-icons/pi";
import { RiSave3Line } from "react-icons/ri";
import { convertToDate } from "@/components/common/ConvertToDDMMYYYY";
import { IoMdAddCircle } from "react-icons/io";
import { toast } from "react-toastify";
import { Select } from "antd";
import { antFilterOption } from "@/components/common/antFillteroption";
import { ArraytoString } from "@/components/common/decodeTags";
import { uploadArticle, uploadImage } from "./func";
import { TbTruckLoading } from "react-icons/tb";

const UploadForm = () => {
  const POST_STATUS = [
    { value: "active", label: "active" },
    { value: "inactive", label: "inactive" },
  ];
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      file: null,
      image: "",
      title: "",
      body: "",
      date: new Date().toString(),
      type: "",
      author: "no",
      url: "",
      tags: [],
      status: "active",
    },
    validationSchema: Yup.object({
      file: Yup.mixed().required("Image is required"),
      title: Yup.string().required("Title is required"),
      body: Yup.string().required("Content is required"),
      type: Yup.string().required("Category is required"),
      url: Yup.string().required("URL is required"),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
        console.log("clicked");

        const imageUploadResult = await uploadImage(values.file);
        if (imageUploadResult?.success) {
          console.log("Image Added");
          const image = imageUploadResult.filename;
          const newsUploadResult = await uploadArticle(
            values.title,
            values.body,
            image,
            values.author,
            values.type,
            values.date,
            values.url,
            ArraytoString(values.tags),
            values.status
          );
          if (newsUploadResult) {
            toast.success("News uploaded successfully");
            router.replace("/admin/articles/");
            router.refresh();
          } else {
            toast.error("Something went wrong!");
          }
        }
      } catch (error) {
        console.error("Error:", error);
        toast.error("Something went wrong!");
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <div className="w-[95%] max-w-[1200px] flex items-center">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <div className="col-span-2">
          <TitleInput
            formik={formik}
            label="Title"
            name="title"
            placeholder="Title"
          />
          <BodyInput
            formik={formik}
            label=""
            name="body"
            placeholder="Content"
          />
          {/* <Editor
            value={formik.values["body"]}
            onTextChange={(value) => formik.setFieldValue("body", value)}
            style={{ height: "500px" }}
            className="bg-white text-xl"
          /> */}
          <div className="bg-white rounded-md mt-4 p-4 grid gap-1">
            <div className="flex justify-between items-center">
              <p>Select Tags</p>
              {/* <button className="p-[6px] px-4 rounded-md bg-zinc-900 text-white flex items-center gap-2">
                <IoMdAddCircle /> Add
              </button> */}
            </div>
            <Select
              variant="borderless"
              mode="tags"
              className="w-full border rounded-md focus:border-zinc-900 mt-2 py-1 cursor-pointer"
              showSearch
              placeholder="Select tags"
              size="large"
              filterOption={antFilterOption}
              value={formik.values["tags"]}
              onChange={(value) => formik.setFieldValue("tags", value)}
              options={Categories}
            />
          </div>
        </div>
        <div className="col-span-1">
          <div className="grid gap-2 w-full text-lg">
            <button
              className="bg-zinc-800 hover:bg-black duration-300 rounded-lg text-base font-semibold text-white flex items-center justify-center gap-3 py-3 px-10"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  {/* <TbTruckLoading/> */}
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <p>Publishing...</p>
                </>
              ) : (
                <>
                  <PiUploadBold className="text-lg ml-2" />
                  <p>Publish</p>
                </>
              )}
            </button>
            <button className="btn bg-white text-zinc-800 border-zinc-700">
              <RiSave3Line className="mr-2 text-lg" />
              Save & Unlist
            </button>
          </div>
          <div className="mt-10 p-2 rounded-lg bg-zinc-200 grid gap-2">
            {/* <FormUpload
              add_url=""
              formik={formik}
              label="Upload Image"
              placeholder="Select Item"
              name="file"
              fileTypes=".jpg,.jpeg,.png"
            /> */}
            <input type="file" className="w-full p-3 px-5 border border-blue-300 rounded-[15px] outline-blue-500" name={"image"} onChange={formik.handleChange} value={formik.values["image"]}
            />
          </div>

          <div className="mt-2 p-2 rounded-lg bg-zinc-200 grid gap-2">
            {/* <div className={` border  rounded-md p-4 grid gap-3 ${
                formik.errors["author"] && formik.touched["author"]
                  ? "bg-red-100 border-red-500"
                  : "bg-white"
              }`}>
              <div className="flex justify-between items-center">
                <p>Select Author</p>
                
              </div>
              <Select
                variant="borderless"
                className="w-full border rounded-md focus:border-zinc-900 mt-2 py-1 cursor-pointer"
                showSearch
                placeholder="Select a Author"
                size="large"
                filterOption={antFilterOption}
                value={formik.values["author"]}
                onChange={(value) => formik.setFieldValue("author", value)}
                options={Categories}
              />
            </div> */}

            {/* <div className="bg-white rounded-md p-4 grid gap-3">
              <p>Select Date</p>
              <FormCusInput
                formik={formik}
                label=""
                name="date"
                placeholder="Date"
                type="date"
              />
              
            </div> */}

            {/* <div className="collapse collapse-arrow bg-white rounded-lg">
              <input type="radio" name="my-accordion-2" />
              <div className="collapse-title font-medium">Post Date</div>
              <div className="collapse-content">
                <p>Select Custom Date</p>
                <FormCusInput
                  formik={formik}
                  label=""
                  name="date"
                  placeholder="Date"
                  type="date"
                />
              </div>
            </div> */}

            <div
              className={` border  rounded-md p-4 grid gap-3 ${
                formik.errors["type"] && formik.touched["type"]
                  ? "bg-red-100 border-red-500"
                  : "bg-white"
              }`}
            >
              <div className="flex justify-between items-center">
                <p>Select Category</p>
                {/* <button className="p-[6px] px-4 rounded-md bg-zinc-900 text-white flex items-center gap-2">
                  <IoMdAddCircle /> Add
                </button> */}
              </div>
              <FormSelect
                formik={formik}
                name="type"
                placeholder="Select Category"
                label=""
                items={Categories}
              />
            </div>

            {/* <div
              className={` border  rounded-md p-4 grid gap-3 ${
                formik.errors["status"] && formik.touched["status"]
                  ? "bg-red-100 border-red-500"
                  : "bg-white"
              }`}
            > <p>Select Status</p>
                
              <FormSelect
                formik={formik}
                name="status"
                placeholder="Select Status"
                label=""
                items={POST_STATUS}
              />
            </div> */}

            <div
              className={` border  rounded-md p-4 grid gap-3 ${
                formik.errors["url"] && formik.touched["url"]
                  ? "bg-red-100 border-red-500"
                  : "bg-white"
              }`}
            >
              <p>Enter Custom URL</p>
              <FormCusInput
                formik={formik}
                label=""
                name="url"
                placeholder="eg:article-about-prism"
                type="text"
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UploadForm;

export const Categories = [
  { label: "General", value: "General" },
  { label: "Education", value: "Education" },
  { label: "Health", value: "Health" },
  { label: "Culture", value: "Culture" },
  { label: "Commerce", value: "Commerce" },
  { label: "Agriculture", value: "Agriculture" },
  { label: "Living", value: "Living" },
];
