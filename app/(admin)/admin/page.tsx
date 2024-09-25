import AdminLayout from '@/components/layouts/AdminLayout'
import React from 'react';
import Graph from '../../../components/(admin)/Graph'
import { getArticle } from './articles/Add/func';
export const dynamic = "force-dynamic";

async function page() {
  const art = await getArticle("")
  return (
    <AdminLayout active={"Dashbord"}>
      <div className="flex items-center justify-center h-full">
      {/* <img src="/giphy.gif" alt="" className=" h-96"/> */}
      <Graph inv={art?.data}/>
      </div>
    </AdminLayout>
  )
}

export default page
