import Header from '@/components/Home/Header'
import SubHeader from '@/components/Home/SubHeader';
import React from 'react'
import Content from './Content';
import { NEWS } from '@/components/data/data';
import GuestLayout from '@/components/layouts/GuestLayout';
import { getArticle, getArticlebyCategory } from '@/app/(admin)/admin/articles/Add/func';

async function page({ params }: { params: any }) {
    const cat = params.category;
    const art =cat!=="All" ? await getArticlebyCategory(cat) : await getArticle();
    
    
  return (
    <GuestLayout cat={cat}>
      <SubHeader active={cat}/>
      <Content data={art?.data}/>
    </GuestLayout>
  )
}

export default page
