import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Accordion from 'react-bootstrap/Accordion';
import './industry.css'

// import { FaEnvelope } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import Card from 'react-bootstrap/Card';
// import { Swiper, SwiperSlide } from "swiper/react"; 
// import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import stat1 from "./mainpageimages/stat1.png"
import stat2 from "./mainpageimages/stat2.png"
import stat3 from "./mainpageimages/stat3.png"
import stat4 from "./mainpageimages/stat4.png"
import accenture from "./mainpageimages/accenture.png"
import jio from "./mainpageimages/BjxmtD.webp"
import walmart from "./mainpageimages/walmart.png"
import gs from "./mainpageimages/Goldman_Sachs.png"
import razorpay from "./mainpageimages/Razorpay.jpg"
import sample from "./mainpageimages/sample.mp4"
import { SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination } from 'swiper';
import  { Mousewheel, Navigation } from 'swiper';
import { Keyboard } from 'swiper';
import { Swiper } from 'swiper/react';



const industryrelation = () => {
    return (
        <>

            <div>
                <Navbar />
            </div>


        
              <span class="wwu">
                <h1>FOR STUDENTS</h1></span>
               
            <div className='ind-section'>
                <div className="sub-ind-sec1">
                    
                    <span  class="ind-head2">WHY MEMS ?</span>
             <div class="con">
                    MEMS is a multidisciplinary department that covers a wide range of topics related to the design, synthesis, characterization, and application of various materials, such as metals, ceramics, polymers, composites, nanomaterials, biomaterials, etc. 
<br />
                    <br />You can learn about the fundamental principles and advanced techniques of materials science and engineering, as well as the latest developments and innovations in the field
                    </div>
                </div>
                <div className="sub-ind-sec2">
               
                <span  class="ind-head2">BROCHURE</span>
                    

                </div>

            </div>
          
            <div className='ind-section'>
                <div className="sub-ind-sec5">
                
                <span  class="ind-head2">PLACEMENT</span>
                
               
      <Swiper
       style={{
        "--swiper-navigation-color": "#000",
        "--swiper-navigation-size": "2px",
       
      }}  
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
     
        cssMode={false}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination,  Mousewheel, Autoplay, Keyboard]}
        className="stats"
      >
        <SwiperSlide><div className='stats-content'> <img src={stat1} alt='' /></div></SwiperSlide>
        
        <SwiperSlide><div className='stats-content'><img src={stat3} alt='' /></div></SwiperSlide>
        
       
      </Swiper>
   
                </div>





            <div className="sub-ind-sec5">
                
                <span  class="ind-head2">PUBLICATION</span>
               
      <Swiper
       style={{
        "--swiper-navigation-color": "#000",
        "--swiper-navigation-size": "2px",
       
      }}  
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
     
        cssMode={false}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination,  Mousewheel, Autoplay, Keyboard]}
        className="stats"
      >
       
        <SwiperSlide><div className='stats-content'><img src={stat2} alt='' /></div></SwiperSlide>
        
        <SwiperSlide><div className='stats-content'><img src={stat4} alt='' /></div></SwiperSlide>
       
      </Swiper>
   
                </div>











               {/* <div className="sub-ind-sec6">
                <div className='ind-head'> FOOTPRINTS OF MEMS</div>
                <div className='footprints-logos'>
                    <img src={accenture} alt="" />
                    <img src={walmart} alt="" />
                    <img src={gs} alt="" />
                    <img src={razorpay} alt="" />
                    <img src={jio} alt="" />

                </div>

    </div>*/}

    </div>
           
      







<div className='ind-section'>
                <div className="sub-ind-sec9">
                <span  class="ind-head2">FOOTPRINTS OF MEMS</span>
                    <div class="slide-track">

                          <img class="aclogo"src={accenture} width="250" alt="" />
                          <img class="galogo" src={gs}  width="100" alt="" />
                          <img class="rplogo" src={razorpay}  width="250" alt="" />
                          <img class="jiologo" src={jio} width="100" alt="" />







</div>
             
                   
                    
                </div>
                

            </div>
            




            <div className='ind-section'>
                <div className="sub-ind-sec9">
                <div className='ind-head2'> INDUSTRIAL COLLABORATION</div>
                <div className="collabb">
                <div className='industrycolab'>
                <img src="https://whoowner.b-cdn.net/wp-content/uploads/2018/01/Owner-of-VE-Commercial-Vehicles-Limited-Wiki-Logo.jpg" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvK1fNzWbbTsHsWzOwSN6kmDRrqcXe9J5gUA&usqp=CAU" alt="" />
                <img src="https://rajratan.co.in/wp-content/uploads/2021/08/Rajratan-Horizontal-Logo.png" alt="" />
                <img src="https://www.yelu.in/img/in/a/1540896763-86-moira-sariya.jpg" alt="" />

            </div>
                </div>
                 
                </div>
                

    </div>


         
              <div class="work_with_us">
                <span class="wwu">
            <h1>WORK WITH US</h1></span>
                </div>

                <div class="aa">
                    
                                        <div class="concon">Anybody from Industry/ External Agency can contact the Institute to solve almost any type of problem or meet any type of need in almost any division of engineering, technology or science. The institute through its faculty, scientist or technical staff can handle such requests from industry or any external agency; such requests will come under the term consultancy in its broadest sense.</div>
               <Accordion defaultActiveKey="-1">
               <Accordion.Item eventKey="0">
        <Accordion.Header><span className='res-header'>Consultancy</span></Accordion.Header>
        <Accordion.Body><div class="ss">
        <span>&#8226;</span> Under Construction
        </div>
        </Accordion.Body>
      </Accordion.Item>
                
      <Accordion.Item eventKey="2">
        <Accordion.Header><span className='res-header'>Research</span></Accordion.Header>
        <Accordion.Body><div class="ss">
        <span>&#8226;</span> Under Construction</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><span className='res-header'>Training</span></Accordion.Header>
        <Accordion.Body><div class="ss">
        <span>&#8226;</span> Under Construction</div>
        </Accordion.Body>
      </Accordion.Item>
</Accordion>
                </div>

                









           
          
            <div>
                <Footer />
            </div>

        </>
    )
}

export default industryrelation
