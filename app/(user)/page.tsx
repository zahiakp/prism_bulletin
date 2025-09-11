import SubHeader from "@/components/Home/SubHeader";
import GuestLayout from "@/components/layouts/GuestLayout";
import { getArticlebyCount, getArticlesasNewArray } from "../(admin)/admin/articles/Add/func";
import { Suspense } from "react";
import NewsSkeleton from "@/components/Home/(skeleton)/MainSkelten";
import dynamic from "next/dynamic";
import SubSliderSkeleton from "@/components/Home/(skeleton)/SubSlider";
import NewsCardSkeleton from "@/components/Home/(skeleton)/CatSkeleton";
const MainSlider = dynamic(() => import("@/components/Home/MainSlider"), {
  // ssr: false,
  loading: () => <NewsSkeleton />,
});
const SubSlider = dynamic(() => import("@/components/Home/SubSlider"), {
  // ssr: false,
  loading: () => <SubSliderSkeleton />,
});
const Education = dynamic(() => import("@/components/Home/Education"), {
  // ssr: false,
  loading: () => <SubSliderSkeleton />,
});
export default async function Home() {
  const cnews = await getArticlebyCount("5")
  const CatArray = await getArticlesasNewArray()
  // console.log(news);
  
  return (
    <GuestLayout>
      <SubHeader/>
      {/* <Suspense fallback={<NewsSkeleton/>}> */}
      <MainSlider data={cnews?.data}/>
      {/* </Suspense> */}
      {/* <Suspense fallback={<SubSliderSkeleton/>}> */}
      <SubSlider data={cnews?.data}/>
      {/* </Suspense> */}
    {/* <Suspense fallback={<SubSliderSkeleton />}> */}
  <Education data={CatArray?.data} />
{/* </Suspense> */}
   </GuestLayout>
  );
}
