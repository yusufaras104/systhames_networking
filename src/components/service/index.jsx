import React from "react"; 
import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import ServiceArea from "./service-area";
import VideoArea from "@/src/common/video-area";
import IndustryArea from "@/src/common/industry-area";
import BrandArea from "@/src/common/brand-area";
import BlogArea from "@/src/common/blog-area";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";

const Sevice = () => {
  return (
    <>
      <HeaderTwo />
      <main>
            <Breadcrumb top_title="Our Services" page_title="Service" />
            <ServiceArea />
            <VideoArea service={true}/>
            <FooterContact />
      </main>
      <FooterThree />
    </>
  );
};

export default Sevice;
