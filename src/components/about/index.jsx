import React from 'react';
import HeaderTwo from "@/src/layout/headers/header-2";
import Breadcrumb from '@/src/common/breadcrumb/breadcrumb';
import AboutArea2 from './../homes/home-3/about-area2';
import CounterArea from '../homes/home-2/counter-area';
import FeatureArea from '../homes/home/feature-area';
import SupportArea from './support-area';
import VideoArea from '../../common/video-area';
import TestimonialFeature from './feature-testimonial';
import TestimonialArea from '@/src/common/testimonial-area';
import BrandArea from '@/src/common/brand-area';
import TeamArea from '@/src/common/team-area';
import BlogArea from '@/src/common/blog-area';
import FooterContact from '@/src/layout/footers/footer-contact';
import FooterThree from '@/src/layout/footers/footer-3';

const About = () => {
    return (
        <>
          <HeaderTwo />  
          <main>
            <Breadcrumb top_title="Our Company"  page_title="Our Company" />
            <AboutArea2 about={true} /> 
            <CounterArea about={true} />
            <FeatureArea about={true} />
            <VideoArea />
            <TestimonialFeature />
            <FooterContact />
          </main>
          <FooterThree />
        </>
    );
};

export default About;