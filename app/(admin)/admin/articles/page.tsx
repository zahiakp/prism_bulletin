
import React from 'react'
import Header from './Header'
import Content from './Content'
import AdminLayout from '@/components/layouts/AdminLayout'
import { getArticle } from './Add/func'
import { NEWS } from '@/components/data/data'

async function page() {
  const Articles = await getArticle()
  console.log(Articles?.data);
  
  return (
    <AdminLayout active={"Articles"}>
      <Header/>
      <Content article={Articles?.data}/>
    </AdminLayout>
  )
}

export default page
