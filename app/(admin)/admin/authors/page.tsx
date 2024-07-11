
import AdminLayout from '@/components/layouts/AdminLayout'
import React from 'react'

function page() {
  return (
    <AdminLayout active={"Authors"}>
      <div className="flex items-center justify-center h-full">
      <img src="/giphy.gif" alt="" className="-translate-y-4 h-96"/>
      </div>
    </AdminLayout>
  )
}

export default page
