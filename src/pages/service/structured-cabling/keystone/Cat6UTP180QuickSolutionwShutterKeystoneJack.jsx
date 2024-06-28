import React from 'react';
import Wrapper from '../../../../layout/wrapper';
import SEO from '../../../../common/seo';
import KeystoneDetails1 from '@/src/components/service/structured-cabling/keystone/keystone1';
import HeaderTwo from '@/src/layout/headers/header-2';
import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import FooterContact from '@/src/layout/footers/footer-contact';
import FooterThree from '@/src/layout/footers/footer-3';

const keystonePage1 = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Keystone Details 1"} />
            <HeaderTwo />
            <main>
            <Breadcrumb top_title="Keystone" page_title="Cat6UTP180QuickSolutionwShutterKeystoneJack" />
                <KeystoneDetails1 />
        <FooterContact bg_style={true} />
      </main>
      <FooterThree />
            
        </Wrapper>
    );
};

export default keystonePage1;