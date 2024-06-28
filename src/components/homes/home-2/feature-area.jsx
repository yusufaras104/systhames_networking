import React, {useRef} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import feature_img_1 from "@assets/img/feature/home-2/Industrial and Manufacturing Facilities copy 3.jpg";
import feature_img_2 from "@assets/img/feature/home-2/Hotels and Hospitality copy.jpg";
import feature_img_3 from "@assets/img/feature/home-2/Finance and Banking copy.jpg";
import feature_img_4 from "@assets/img/feature/home-2/Transportation and Logistics copy.jpg";
import feature_img_5 from "@assets/img/feature/home-2/Information and Technology copy.jpg";
import feature_img_6 from "@assets/img/feature/home-2/Construction and Building copy.jpg";
import feature_img_7 from "@assets/img/feature/home-2/Energy and Telecommunications Infrastructure copy.jpg";
import feature_img_8 from "@assets/img/feature/home-2/Education and Public Institutions copy.jpg";
import feature_img_9 from "@assets/img/feature/home-2/Healthcare and Medical Facilities copy.jpg";
import feature_img_0 from "@assets/img/feature/home-2/Retail and Shopping Centers copy 3.jpg";



  const feature_slide_data = [
    {
        id: 1, 
        img: feature_img_1,
        subtitle: "Industrial and Manufacturing Facilities",
    },
    {
        id: 2, 
        img: feature_img_2,
        subtitle: "Hotels and Hospitality",
    },
    {
        id: 3, 
        img: feature_img_3,
        subtitle: "Finance and Banking",
    },
    {
        id: 4, 
        img: feature_img_4,
        subtitle: "Transportation and Logistics",
    },
    {
        id: 5, 
        img: feature_img_5,
        subtitle: "Information and Technology",
    },
    {
        id: 6, 
        img: feature_img_6,
        subtitle: "Construction and Building",
    },
    {
        id: 7, 
        img: feature_img_7,
        subtitle: "Energy and Telecommunications Infrastructure",
    },
    {
        id: 8, 
        img: feature_img_8,
        subtitle: "Education and Public Institutions",
    },
    {
        id: 9, 
        img: feature_img_9,
        subtitle: "Healthcare and Medical Facilities",
    },
    {
        id: 10, 
        img: feature_img_0,
        subtitle: "Retail and Shopping Centers",
    },
  ]

const FeatureArea = () => {

    const setting = {
        type   : 'loop',
        pagination: false,
        arrows: false,
        focus: 'center',
        perPage: 1,
        gap:'30px',
        padding: '25%',
        throttle: 300,
        breakpoints: {
            991: {
                padding: '15%'
            },
            765: {
                padding: '12%',
                gap:'25px',
            },
            575: {
                arrows: false,
                padding: '0%',
            },
          },
      }
   const splideRef = useRef(null); 


    return (
        <>
            <section className="tp-feature-area-2">
                <div className="container-fluid gx-0">
                    <div className="row gx-0">
                        <div className="col-lg-12">
                            <Splide options={setting} ref={splideRef} 
                            className="tp-feature-active-2 pt-35 splide wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s"> 
                                    {feature_slide_data.map((item, i)  =>
                                        <SplideSlide key={i}>
                                            <div className="tp-feature-thumb-2 w-img p-relative">
                                                <Image width={650} src={item.img} alt="theme-pure" />
                                            <div className="tp-feature-2-info d-flex align-items-center p-relative">
                                                <div className="tp-feature-2-title-wrapper">
                                                    <span className="tp-feature-2-title-sub">{item.subtitle}</span>
                                                    <h4 className="tp-feature-2-title">{item.title}
                                                    </h4>
                                                </div>
                                            </div>
                                            </div>
                                        </SplideSlide>
                                    )} 
                            </Splide>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeatureArea;