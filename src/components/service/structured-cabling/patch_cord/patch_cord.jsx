import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import VideoPopup from '@/src/modals/video-popup';
import ServiceContactForm from '@/src/forms/service-contact-form';
import service_details_thumb from "@assets/img/services/service-details/img-1.jpg";
import service_video_thumb from "@assets/img/services/service-details/img-2.jpg";
import accordion from '@/src/data/accordion';

const service_details_content = {
   service_details_tab: [
      { id: 1, title: "SFTP", active: "active" },
      { id: 2, title: "FTP", active: "" },
      { id: 3, title: "UTP", active: "active" },
      { id: 4, title: "Quick Solution", active: "" },
   ],
   title: <>FTP, SFTP, and UTP Keystones</>,
   description: <>Enhance your network infrastructure with SysThames Networking’s premium FTP, SFTP, and UTP keystones. Our keystones are engineered for superior performance, ensuring reliable and efficient connectivity for your structured cabling needs. Whether you require shielded solutions for environments with high electromagnetic interference or unshielded options for standard applications, our FTP, SFTP, and UTP keystones deliver exceptional quality and durability. Trust SysThames Networking to provide you with the best components for a robust and high-performance network.</>,
   title_2: <>Quick Solutions Keystones</>,
   description_2: <>Streamline your network setup with SysThames Networking’s Quick Solutions Keystones. Designed for easy installation and maximum efficiency, our Quick Solutions Keystones are the perfect choice for fast and reliable network connections. These user-friendly keystones ensure seamless integration into your existing cabling infrastructure, minimizing downtime and optimizing performance. Choose SysThames Networking for quick, dependable, and high-quality keystones that keep your network running smoothly. </>,
   description_3: <>Upgrade your network infrastructure with SysThames Networking’s range of CAT3, CAT5, and CAT6 keystones. Designed for superior performance and reliability, our keystones ensure optimal connectivity and data transmission for all your cabling needs. Whether you’re setting up a basic network with CAT3, enhancing your setup with CAT5, or achieving high-speed data transfer with CAT6, SysThames Networking provides keystones that deliver exceptional quality and durability. <br /><br />
  Optimize your network installations with SysThames Networking’s versatile 90-degree and 180-degree keystones. Our 90-degree keystones are perfect for tight spaces, allowing for efficient cable management and minimizing strain on your cables. For straightforward, inline connections, our 180-degree keystones offer simplicity and ease of installation. Both options ensure seamless integration into your existing infrastructure, providing reliable and efficient performance. <br /><br /> </>,


}
const { service_details_tab, title, description, title_2, description_2, description_3 } = service_details_content

const patch_cordDetailsArea = () => {
   const [isVideoOpen, setIsVideoOpen] = useState(false);
   const [isActive, setIsActive] = useState(1)

   return (
      <>
         <section className="tp-service-details-area pt-120 pb-120">
            <div className="container">
               <div className="row">
                  <div className="col-lg-4">
                     <div className="tp-service-widget">

                        <div className="tp-service-widget-item mb-40">
                           <div className="tp-service-widget-tab">
                              <ul>
                                 {service_details_tab.map((item, i) =>
                                    <li key={i}>
                                       <Link className={item.active} href="#">
                                          {item.title}
                                       </Link>
                                    </li>
                                 )}
                              </ul>
                           </div>
                        </div>

                        <div className="tp-service-widget-item mb-40">
                           <div className="tp-service-contact">
                              <div className="tp-service-contact-form">
                                 <ServiceContactForm />
                                 <p className="ajax-response"></p>
                              </div>
                           </div>
                        </div>

                     </div>
                  </div>
                  <div className="col-lg-8">
                     <div className="tp-service-details-wrapper">
                        <div className="tp-service-details-thumb">
                           <Image src={service_details_thumb} alt="theme-pure" />
                        </div>
                        <h3 className="tp-service-details-title">{title}</h3>
                        <p>{description}</p>
                        <div className="row">
                           <div className="col-lg-6">
                              <div className="tp-service-details-thumb p-relative">
                                 <Image src={service_video_thumb} alt="theme-pure" />
                                 <div className="tp-video-play text-center">
                                    <a className="popup-video effect-1 effect-2"
                                       onClick={() => setIsVideoOpen(true)}
                                    ><i className="fa-sharp fa-solid fa-play"></i>
                                    </a>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="tp-service-details-list">
                                 <h3 className="tp-service-details-title">{title_2}</h3>
                                 <p>{description_2}</p>
                                 <ul>
                                 </ul>
                              </div>
                           </div>
                        </div>
                        <p>{description_3}</p>

                        <div className="tp-service-details-faq faq-style-1">
                           <div className="tp-faq-tab-content tp-accordion">
                              <div className="accordion" id="general_accordion">
                                 {accordion.map((item, i) =>
                                    <div key={i} onClick={() => setIsActive(item.id)} className={`accordion-item ${isActive === item.id && "tp-faq-active"}`}>
                                       <h2 className="accordion-header" id={`heading${item.accordion_id}`}>
                                          <button
                                             className={`accordion-button ${item.collapsed}`}
                                             type="button"
                                             data-bs-toggle="collapse"
                                             data-bs-target={`#collapse${item.accordion_id}`}
                                             aria-expanded={item.aria_expanded}
                                             aria-controls={`collapse${item.accordion_id}`}>
                                             {item.question}
                                          </button>
                                       </h2>
                                       <div id={`collapse${item.accordion_id}`}
                                          className={`accordion-collapse collapse ${item?.active && "show"}`}
                                          aria-labelledby={`heading${item.accordion_id}`}
                                          data-bs-parent="#general_accordion">
                                          <div className="accordion-body">
                                             <p>{item.answer}</p>
                                          </div>
                                       </div>
                                    </div>
                                 )}
                              </div>
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

export default patch_cordDetailsArea;