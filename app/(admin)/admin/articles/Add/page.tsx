import React from "react";
import AdminLayout from "@/components/layouts/AdminLayout";
import UploadForm from "./Form";
function page() {
  return (
    <AdminLayout active={"Articles"}>
      <div className="flex justify-center">
        <UploadForm />
      </div>
    </AdminLayout>
  );
}

export default page;
