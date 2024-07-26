import Header from '@/components/Home/Header'
import SubHeader from '@/components/Home/SubHeader';
import React from 'react'
import Content from './Content';
import { NEWS } from '@/components/data/data';
import GuestLayout from '@/components/layouts/GuestLayout';

function page({ params }: { params: any }) {
    const cat = params.category;
    const data = NEWS.filter((item:any)=>cat!="All" ? item.cat==cat : item);
    
  return (
    <GuestLayout cat={cat}>
      <SubHeader active={cat}/>
      <Content data={data}/>
    </GuestLayout>
  )
}

export default page
