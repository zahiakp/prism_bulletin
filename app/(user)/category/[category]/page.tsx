import Header from '@/components/Home/Header'
import SubHeader from '@/components/Home/SubHeader';
import React from 'react'
import Content from './Content';
import { NEWS } from '@/components/data/data';

function page({ params }: { params: any }) {
    const cat = params.category;
    const data = NEWS.filter((item:any)=>cat!="All" ? item.cat==cat : item)
    // console.log(data);
  return (
    <main className="flex w-full flex-col">
      <Header/>
      <SubHeader active={cat}/>
      <Content data={data}/>
    </main>
  )
}

export default page
