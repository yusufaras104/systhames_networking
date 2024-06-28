import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AngleArrow from '@/src/svg/angle-arrow'; 
import LineArrowTwo from '@/src/svg/line-arrow-2';

import offer_shape_1 from "@assets/img/offering/shape.png";
import offer_shape_2 from "@assets/img/offering/shape-2.png";

import offering_img_1 from "@assets/img/offering/img-1.png";
import offering_img_2 from "@assets/img/offering/img-2.png";
import offering_img_3 from "@assets/img/offering/img-3.png";
import offering_img_4 from "@assets/img/offering/img-4.png";

const offering_data = [
    {
        id: 1,
        img: offering_img_1,
        title: <>CAT . 5 - 6 <br /> KEYSTONE</>, 
    },
    {
        id: 2,
        img: offering_img_2,
        title: <>CAT . 6A - 7A - 8 <br />  KEYSTONE</>, 
    },
    {
        id: 3,
        img: offering_img_3,
        title: <>PATCH <br /> PANELS</>,  
    },
    {
        id: 4,
        img: offering_img_4,
        title: <>STRUCTURED WIRING <br /> TOOLS</>, 
    },
]

const OfferArea = () => {
    return (
        <>
           <section className="tp-offer-area p-relative pt-120 pb-90" style={{backgroundImage: `url(/assets/img/offering/bg.png)`}}>
            <div className="tp-offer-overlay"></div>
            <div className="tp-offer-shape">
               <Image className="shape-1 d-none d-xl-block" src={offer_shape_1} alt="theme-pure" />
               <Image className="shape-2" src={offer_shape_2} alt="theme-pure" />
            </div>
            <div className="container">

               <div className="row align-items-center">
                  <div className="col-lg-6">
                     <div className="tp-feature-title-wrapper">
                        <span className="tp-section-title__pre">
                           feature <span className="title-pre-color"> it Products</span> 
                           <AngleArrow />
                        </span>
                        <h3 className="tp-section-title">Spectrum of Keystone Jack Categories
                        </h3>
                     </div>
                  </div>
                  <div className="col-lg-6">
                     <div id='tp-feature-wrapper2' className="tp-feature-wrapper offer p-relative">
                        <p>As the complexity of buildings to increase, the field of arch <br /> 
                        became multi-disciplinary with technological expertise. </p>
                     </div>
                  </div>
               </div>
               <div className="row">
                {offering_data.map((item, i) => 
                    <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                        <div className="tp-offer-wrapper text-center mb-30">
                        <h3 className="offer-title">{item.title}</h3>
                        <div className="tp-offer-wrapper-thumb">
                            <Image src={item.img} alt="theme-pure" />
                        </div>
                        </div>
                    </div>
                )} 
               </div>
            </div>
          </section> 
        </>
    );
};

export default OfferArea;