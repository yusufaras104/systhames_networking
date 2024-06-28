import Image from 'next/image';
import Link from "next/link";
import React,{useState} from 'react';
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
import { CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import about_img from "@assets/img/about/about-1.png";
import about_img_10 from "@assets/img/business/shape-5.png";


const AboutArea = ({about}) => {
    const percentage = 50;
    const percentage2 = 75;
  const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <section className={`${about ? "tp-about-breadcrumb pt-100 pb-90" : "tp-about-3-area pt-185 pb-170"} p-relative`}>
                {about ? 
                <div className="tp-about-3-shape d-none d-lg-block">
                    <Image src={about_img_10} alt="theme-pure" />
                </div>
                :
                <div className="shape-bg">
                    <Image src={about_img_1} alt="theme-pure" />
                </div> 
               }                
                <div className="container">
                <div className="row">
                    {about ?  
                    <div className="col-lg-6">
                        <div className="tp-about-breadcrumb-img p-relative text-center fadeLeft">
                            <Image src={about_img} alt="theme-pure" />
                        </div> 
                    </div>  
                    :  
                    <div className="col-lg-6">
                        <div className="tp-about-3-img p-relative fadeLeft">
                            <Image src={about_img_2} alt="theme-pure" />
                            <Image className="shape-1" src={about_img_3} alt="theme-pure" />
                            <div className="shape-2 p-relative">
                            <Image src={about_img_4} alt="theme-pure" />
                            <div className="tp-video-play">
                                <a className="popup-video" 
                                onClick={() => setIsVideoOpen(true)}>
                                    <i className="fa-sharp fa-solid fa-play"></i>
                                </a>
                            </div>
                            </div>
                            <Image className="shape-3" src={about_shape_1} alt="theme-pure" />
                            <Image className="shape-4" src={about_shape_2} alt="theme-pure" />
                            <Image className="shape-5" src={about_shape_3} alt="theme-pure" />
                        </div>
                    </div>
                    }

                    <div className="col-lg-6">
                        <div className="tp-about-3-wrapper">
                            <div className="tp-about-3-title-wrapper"> 
                                <span className="tp-section-title__pre">
                                qualifications of <span className="title-pre-color">Systhames</span>
                                    <AngleArrow /> 
                                </span>
                                <h3 className="tp-section-title">
                                Cabling Solutions & Performance <br/> Guarantee: <span className="title-color">Systhames</span>
                                    
                                </h3> 
                            </div>
                            <p className="text">
                            At Systhames, we provide reliable and excellent structural cabling solutions. Our products are designed in accordance with international standards and certified by independent testing organizations, supported by certifications such as those from Intertek.
                            </p>
                            <div className="tp-about-progressbar-inner d-flex flex-wrap pt-20">
                            <div className="tp-about-3-progressbar d-flex align-items-center">
                                    <p>We proudly offer a 25-year performance guarantee on our products. This guarantee is a testament to our confidence in the high quality standards and verified performance of our products.</p>
                            </div>
                            </div>
                            <div className="tp-about-3-btn-inner d-flex flex-wrap">
                            <div className="tp-about-btn ">
                                <Link className="tp-btn" href="/about">Our History 
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

export default AboutArea;