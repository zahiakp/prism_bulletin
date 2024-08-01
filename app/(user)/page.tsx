import Education from "@/components/Home/Education";
import Header from "@/components/Home/Header";
import Health from "@/components/Home/Health";
import MainSlider from "@/components/Home/MainSlider";
import SubHeader from "@/components/Home/SubHeader";
import SubSlider from "@/components/Home/SubSlider";
import AdminLayout from "@/components/layouts/AdminLayout";
import GuestLayout from "@/components/layouts/GuestLayout";
import Image from "next/image";
import { getArticle } from "../(admin)/admin/articles/Add/func";

export default async function Home() {
  const news = await getArticle()
  // console.log(news);
  
  return (
    <GuestLayout>
      <SubHeader/>
      <MainSlider data={news?.data}/>
      <SubSlider data={news?.data}/>
    <Education data={news?.data}/>
    {/* <Health/> */}
   </GuestLayout>
  );
}
