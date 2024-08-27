import Education from "@/components/Home/Education";
import Header from "@/components/Home/Header";
import Health from "@/components/Home/Health";
import MainSlider from "@/components/Home/MainSlider";
import SubHeader from "@/components/Home/SubHeader";
import SubSlider from "@/components/Home/SubSlider";
import AdminLayout from "@/components/layouts/AdminLayout";
import GuestLayout from "@/components/layouts/GuestLayout";
import Image from "next/image";
import { getArticle, getArticlebyCount, getArticlesasNewArray } from "../(admin)/admin/articles/Add/func";
export const dynamic = "force-dynamic";

export default async function Home() {
  const news = await getArticle()
  const cnews = await getArticlebyCount("5")
  const CatArray = await getArticlesasNewArray()
  // console.log(news);
  
  return (
    <GuestLayout>
      <SubHeader/>
      <MainSlider data={cnews?.data}/>
      <SubSlider data={cnews?.data}/>
    <Education data={CatArray?.data}/>
   </GuestLayout>
  );
}
