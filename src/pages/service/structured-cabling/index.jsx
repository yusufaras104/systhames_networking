import React from 'react';
import Wrapper from '@/src/layout/wrapper';
import SEO from '@/src/common/seo';
import Sevice from '@/src/components/about/pdf';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Sevice"}/>
            <Sevice />
        </Wrapper>
    );
};

export default index;