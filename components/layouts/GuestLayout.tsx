import React from "react";
import SideMenu from "../common/SideMenu";
import GtFooter from "../Home/GtFooter";
import Header from "../Home/Header";
import SubHeader from "../Home/SubHeader";
function GuestLayout(props: any,cat:string) {
    console.log(cat);
    
  return (
    <main className="flex w-full flex-col">
        <Header/>
        {/* <SubHeader active={cat}/> */}
      {props.children}
      <GtFooter />
    </main>
  );
}

export default GuestLayout;
