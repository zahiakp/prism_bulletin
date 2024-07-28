import React from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
// import UploadForm from "./demoform";
// import UploadForm from "./UploadForm";
import UploadForm from "./Form";
function page() {
  return (
    <AdminLayout active={"Articles"}>
        <UploadForm />
        {/* <UploadForm/> */}
    </AdminLayout>
  );
}

export default page;
