import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EmailIcon from '@/src/svg/email-icon';
import AngleArrow from '@/src/svg/angle-arrow';
// shape import here
import cta_shape_1 from "@assets/img/cta/img.png";
import cta_shape_2 from "@assets/img/cta/img-2.png";
import cta_shape_3 from "@assets/img/cta/bg.png";

const cta_content = {
    phone: "",
}

const CtaArea = () => {
    return (
        <>
           <section className="tp-cta-2-area p-relative pt-200 pb-90" style={{backgroundImage: `url(/assets/img/cta/bg-shape.png)`}}>
            <div className="tp-cta-2-shape">
               <Image className="shape-1" src={cta_shape_1} alt="theme-pure" />
               <Image className="shape-3" src={cta_shape_3} alt="theme-pure" />
            </div> 
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xl-6 col-lg-6">
                     <div className="tp-cta-2-title-wrapper">
                        <h3 className="tp-section-title">
                            We’re Ready to <span className="title-color">Growth</span> Structured Cabling
                        </h3>
                        <div className="tp-cta-2-btn">
                           <Link className="tp-btn" href="/contact">Get a Free Quatre</Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-2 "></div>
               </div>
            </div>
         </section> 
        </>
    );
};

export default CtaArea;