import React from 'react';
import Wrapper from '@/src/layout/wrapper';
import SEO from '@/src/common/seo';
import Catalogue from '@/src/components/about/pdf';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Catalogue"} />
            <Catalogue />
        </Wrapper>
    );
};

export default index;