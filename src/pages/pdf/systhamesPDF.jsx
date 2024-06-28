import React from 'react';
import Wrapper from '../../layout/wrapper';
import SEO from '../../common/seo';
import Catalogue from '../../components/about/pdf';

const indexCatalogue = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Catalogue"} />
            <Catalogue />
        </Wrapper>
    );
};

export default indexCatalogue;