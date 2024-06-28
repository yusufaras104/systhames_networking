import React from 'react';
import Wrapper from '../../../../layout/wrapper';
import SEO from '../../../../common/seo';
import KeystoneDetails from '@/src/components/service/structured-cabling/keystone/index';

const keystonePage = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Keystone Details"} />
            <KeystoneDetails />
        </Wrapper>
    );
};

export default keystonePage;