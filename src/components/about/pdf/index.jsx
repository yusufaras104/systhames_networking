import React from 'react';
import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import FooterContact from '@/src/layout/footers/footer-contact';
import FooterThree from '@/src/layout/footers/footer-3';
import SysthamesPDF from './systhamesPDF';

const Catalogue = () => {
    return (
        <>
          <HeaderTwo />  
          <main>
            <Breadcrumb top_title="Catalogue"  page_title="Catalogue" />
            <SysthamesPDF/>
            <FooterContact />
          </main>
          <FooterThree />
        </>
    );
};

export default Catalogue;