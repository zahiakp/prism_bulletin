import SubHeader from '@/components/Home/SubHeader';
import React, { Suspense } from 'react'
import GuestLayout from '@/components/layouts/GuestLayout';
import CatPage from '@/components/Home/(skeleton)/CatPage';
import dynamic from 'next/dynamic';
const Content = dynamic(() => import("./Content"), {
  ssr: false,
  loading: () => <CatPage />,
});
async function page({ params }: { params: any }) {
    const cat = params.category;
    
    
  return (
    <GuestLayout cat={cat}>
      <SubHeader active={cat}/>
      <Suspense fallback={<CatPage/>}>
      <Content cat={cat}/>
      </Suspense>
    </GuestLayout>
  )
}

export default page
