import React from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import UploadForm from "./Form";
function page() {
  return (
    <AdminLayout active={"Articles"}>
        <UploadForm />
    </AdminLayout>
  );
}

export default page;
