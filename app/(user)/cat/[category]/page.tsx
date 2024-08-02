import Header from '@/components/Home/Header'
import SubHeader from '@/components/Home/SubHeader';
import React from 'react'
import Content from './Content';
import { NEWS } from '@/components/data/data';
import GuestLayout from '@/components/layouts/GuestLayout';
import { getArticle } from '@/app/(admin)/admin/articles/Add/func';

async function page({ params }: { params: any }) {
    const cat = params.category;
    const art = await getArticle()
    const data = art?.data?.filter((item:any)=>cat!="All" ? item.category==cat : item);
    
  return (
    <GuestLayout cat={cat}>
      <SubHeader active={cat}/>
      <Content data={data}/>
    </GuestLayout>
  )
}

export default page
