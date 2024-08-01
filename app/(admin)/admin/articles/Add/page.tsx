import React from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import UploadForm from "./demoform";
import dynamic from "next/dynamic";
// import UploadForm from "./UploadForm";
// import UploadForm from "./Form";
function page() {
const UploadForm = dynamic(() => import('./demoform'), { ssr: false });

  return (
    <AdminLayout active={"Articles"}>
        {/* <UploadForm /> */}
        <UploadForm/>
    </AdminLayout>
  );
}

export default page;
