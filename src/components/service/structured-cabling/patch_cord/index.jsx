import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import patch_cordDetailsArea from "./patch_cord";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";

const patch_cordDetails = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="patch_cord" page_title="patch_cord" />
        <patch_cordDetailsArea />
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default patch_cordDetails;
