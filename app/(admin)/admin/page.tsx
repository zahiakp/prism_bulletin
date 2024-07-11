import AdminLayout from '@/components/layouts/AdminLayout'
import React from 'react'

function page() {
  return (
    <AdminLayout active={"Dashbord"}>
      <div className="flex items-center justify-center h-full">
      <img src="/giphy.gif" alt="" className=" h-96"/>
      </div>
    </AdminLayout>
  )
}

export default page
