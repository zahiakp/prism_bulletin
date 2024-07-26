"use client";

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

function UploadForm() {
  const types = [
    { label: "News", value: "NEWS1" },
    { label: "Event", value: "EVENT1" },
    { label: "News1", value: "NEWS2" },
  ];

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
      date: convertToDate(new Date()),
      type: "",
      author: "",
      url: "",
      tags: [],
      status: "active",
    },
    validationSchema: Yup.object({
      file: Yup.mixed().required("Image is required"),
      title: Yup.string().required("Title is required"),
      body: Yup.string().required("Content is required"),
      type: Yup.string().required("Category is required"),
      author: Yup.string().required("Author is required"),
      url: Yup.string().required("URL is required"),
      tags: Yup.array().min(1, "At least one tag is required"),
    }),
    onSubmit: async (values) => {
      try {
        setLoading(true);
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
            router.replace("/articles/");
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
    <main>
      <div className="mt-10 p-2 rounded-lg bg-zinc-200 grid gap-2">
        {" "}
        <FormUpload
          add_url=""
          formik={formik}
          label="Upload Image"
          placeholder="Select Item"
          name="file"
          fileTypes=".jpg,.jpeg,.png"
        />{" "}
      </div>
    </main>
  );
}

export default UploadForm;
