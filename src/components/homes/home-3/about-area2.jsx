import Image from 'next/image';
import Link from "next/link";
import React, { useState } from 'react';
import AngleArrow from '@/src/svg/angle-arrow';
import VideoPopup from '@/src/modals/video-popup';
// about img import here
import about_img_1 from "@assets/img/about/home-3/shape-4.png";
import about_img_2 from "@assets/img/about/home-3/img-1.jpg";
import about_img_3 from "@assets/img/hero/hero-2/shape-3.png";
import about_img_4 from "@assets/img/about/home-3/img-3.jpg";
// about shape import here
import about_shape_1 from "@assets/img/hero/hero-2/shape-2.png";
import about_shape_2 from "@assets/img/hero/hero-2/shape-12.png";
import about_shape_3 from "@assets/img/about/home-3/shape-3.png";
// import progressbar   
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import about_img from "@assets/img/about/about-1.png";
import about_img_10 from "@assets/img/business/shape-5.png";


const AboutArea2 = ({ about }) => {
    const percentage = 50;
    const percentage2 = 75;
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <section className={"tp-about-breadcrumb pt-100 pb-90 tp-about-3-area pt-185 pb-170"} >

                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="tp-about-3-wrapper">
                                <div className="tp-about-3-title-wrapper">
                                    <span className="tp-section-title__pre">
                                        qualifications of <span className="title-pre-color">Systhames</span>
                                        <AngleArrow />
                                    </span>
                                    <h3 className="tp-section-title">
                                     <span className="title-color">Systhames</span>: 
                                     SysThames: Leading Cabling and Termination Solutions Provider
                                    </h3>
                                    <p className='h5'>Cabling Solutions & Performance Guarantee</p><br />
                                </div>
                                <p className="text">Welcome to SysThames, a pioneer in cabling and termination solutions since 1997. Renowned for our unwavering commitment to quality, we offer the most reliable and high-performance products in the industry. Each of our products is backed by a 25-year system performance guarantee, ensuring superior performance and durability.</p>
                                <div className="tp-about-progressbar-inner d-flex flex-wrap pt-20">
                                    <h4>Why Choose SysThames?</h4>
                                    <ul>
                                        <li><b>Superior Quality Assurance:</b> Our products are manufactured to the highest standards and come with a 25-year system performance guarantee.</li>
                                        <li><b>Premium Gold-Plated Connectors:</b> Our connectors feature authentic gold ratios, ensuring long-term reliability and durability.</li>
                                        <li><b>High-Standard Production:</b> Utilizing top-tier manufacturing processes, we maintain exceptional quality despite rising costs, adhering to a quality-focused pricing policy.</li>
                                    </ul>
                                    <div className="tp-about-3-progressbar d-flex align-items-center">
                                        <p>We proudly offer a 25-year performance guarantee on our products. This guarantee is a testament to our confidence in the high quality standards and verified performance of our products.</p>
                                    </div>
                                    <h4>Our Mission and Vision: Future-Proofing Communication Infrastructure</h4>
                                    <p>At SysThames, we believe that cabling and termination are the cornerstones of future communication infrastructure. Our mission is to uphold and enhance this quality. Since 1997, our leadership has specialized exclusively in cabling, acquiring deep expertise and industry knowledge.</p>
                                    <h4>Rigorous Testing and Certification for Unmatched Reliability</h4>
                                    <p>We go beyond product sales, emphasizing rigorous testing and certification. Each product undergoes stringent tests to meet international standards, ensuring unparalleled reliability and performance for our customers.</p>
                                </div>
                                <h4>Innovation and Technology: Staying Ahead in the Cabling Industry</h4>
                                <p>By integrating the latest technologies into our products, we stay ahead of industry aådvancements. Our dedication to innovation and technology solidifies SysThames as a leading name in the <b>cabling industry</b>. <br />

                                    Join SysThames, a globally recognized and trusted brand in <b>structured cabling solutions</b>. Our unwavering focus on quality and customer satisfaction sets us apart in the industry. <br />
                                    <b>SysThames</b> – Pushing the Boundaries of Communication.</p> <br /><br />
                                <div className="tp-about-3-btn-inner d-flex flex-wrap">
                                    <div className="tp-about-btn ">
                                        <Link className="tp-btn" href="/pdf/systhamesPDF">See Catalogue
                                            <i className="fa-regular fa-arrow-right-long"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* video modal start */}
            <VideoPopup
                isVideoOpen={isVideoOpen}
                setIsVideoOpen={setIsVideoOpen}
                videoId={"csnD5EVL5z8"}
            />
            {/* video modal end */}
        </>
    );
};

export default AboutArea2;