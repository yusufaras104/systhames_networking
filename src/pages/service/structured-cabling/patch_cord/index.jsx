import React from 'react';
import Wrapper from '../../../../layout/wrapper';
import SEO from '../../../../common/seo';
import patch_cordDetails from '@/src/components/service/structured-cabling/patch_cord/index';

const patch_cord = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"patch cord Details"} />
            <patch_cordDetails />
        </Wrapper>
    );
};

export default patch_cord;