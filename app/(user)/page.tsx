import Education from "@/components/Home/Education";
import Header from "@/components/Home/Header";
import Health from "@/components/Home/Health";
import MainSlider from "@/components/Home/MainSlider";
import SubHeader from "@/components/Home/SubHeader";
import SubSlider from "@/components/Home/SubSlider";
import AdminLayout from "@/components/layouts/AdminLayout";
import GuestLayout from "@/components/layouts/GuestLayout";
import Image from "next/image";

export default function Home() {
  return (
    <GuestLayout>
      <SubHeader/>
      <MainSlider/>
      <SubSlider/>
    <Education/>
    <Health/>
   </GuestLayout>
  );
}
