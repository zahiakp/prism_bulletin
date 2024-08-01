import React from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import UploadForm from "./demoform";
// import dynamic from "next/dynamic";
// import UploadForm from "./UploadForm";
// import UploadForm from "./Form";
import dynamic from "next/dynamic";
function page() {
const UploadForm = dynamic(() => import('./Form'), { ssr: false });

  return (
    <AdminLayout active={"Articles"}>
        {/* <UploadForm /> */}
        <UploadForm/>
    </AdminLayout>
  );
}

export default page;
