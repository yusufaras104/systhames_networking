import Breadcrumb from "@/src/common/breadcrumb/breadcrumb";
import HeaderTwo from "@/src/layout/headers/header-2";
import React from "react";
import KeystoneDetailsArea from "./keystone";
import FooterContact from "@/src/layout/footers/footer-contact";
import FooterThree from "@/src/layout/footers/footer-3";

const KeystoneDetails = () => {
  return (
    <>
      <HeaderTwo />
      <main>
        <Breadcrumb top_title="Keystone" page_title="Keystone" />
        <KeystoneDetailsArea />
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
    </>
  );
};

export default KeystoneDetails;
