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


            <div class="student">
                <h1>FOR STUDENTS</h1>
                </div>
            <div className='ind-section'>
                <div className="sub-ind-sec1">
                    <div className='ind-head'> WHY MEMS ?   </div>
             
                    MEMS is a multidisciplinary department that covers a wide range of topics related to the design, synthesis, characterization, and application of various materials, such as metals, ceramics, polymers, composites, nanomaterials, biomaterials, etc. 
<br />
                    <br />You can learn about the fundamental principles and advanced techniques of materials science and engineering, as well as the latest developments and innovations in the field
                    
                </div>
                {/* <div className="sub-ind-sec2">
                <div className='ind-head'> BROCHURE</div>
                    

                </div> */}

            </div>
           {/* <div className='ind-section'>
                <div className="sub-ind-sec3">
                <div className='ind-head'> INDUSTRIAL COLLABORATION</div>
                <div className="collabb">
                <div className='industrycolab'>
                <img src="https://whoowner.b-cdn.net/wp-content/uploads/2018/01/Owner-of-VE-Commercial-Vehicles-Limited-Wiki-Logo.jpg" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvK1fNzWbbTsHsWzOwSN6kmDRrqcXe9J5gUA&usqp=CAU" alt="" />
                <img src="https://rajratan.co.in/wp-content/uploads/2021/08/Rajratan-Horizontal-Logo.png" alt="" />
                <img src="https://www.yelu.in/img/in/a/1540896763-86-moira-sariya.jpg" alt="" />

            </div>
                </div>
                 
                </div>
                <div className="sub-ind-sec4">
                <div className='ind-head'> 
                <video className='industry-vid' src={sample} autoPlay controls loop ></video>
                </div>

                </div>

            </div>*/}
            <div className='ind-section'>
                <div className="sub-ind-sec5">
                <div className='ind-head'> PLACEMENT STATS</div>
               
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
                <div className='ind-head'> PUBLICATION STATS</div>
               
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
                <div className="sub-ind-sec1">
                    <div className='ind-head'>


                    <div class='marquee'>
      
      <marquee behavior="" direction="">
                  <div class="slide-track">

                    <img src={accenture} width="250" alt="" />
                    <img src={gs}  width="100" alt="" />
                    <img src={razorpay}  width="250" alt="" />
                    <img src={jio} width="100" alt="" />
		{/*<div class="slide">
			<img src={accenture}  width="250" alt="" />
</div>
		<div class="slide">
			<img src={walmart} height="100" width="250" alt="" />
</div>
		<div class="slide">
			<img src={razorpay} height="100" width="250" alt="" />
</div>
		<div class="slide">
			<img src={gs} height="100" width="250" alt="" />
</div>
<div class="slide">
			<img src={jio} height="100" width="100" alt="" />
		</div>
<div class="slide">
			<img src={accenture}  width="250" alt="" />
</div>
		<div class="slide">
			<img src={walmart} height="100" width="250" alt="" />
</div>
		<div class="slide">
			<img src={razorpay} height="100" width="250" alt="" />
</div>
		<div class="slide">
			<img src={gs} height="100" width="250" alt="" />
</div>



<div class="slide">
			<img src={jio} height="100" width="100" alt="" />
		</div>

<div class="slide">
			<img src={accenture}  width="250" alt="" />
</div>
		<div class="slide">
			<img src={walmart} height="100" width="250" alt="" />
</div>
		<div class="slide">
			<img src={razorpay} height="100" width="250" alt="" />
</div>
		<div class="slide">
			<img src={gs} height="100" width="250" alt="" />
</div>
<div class="slide">
			<img src={jio} height="100" width="100" alt="" />
</div>*/}
		
		
		
		
		
	        </div></marquee>
    </div>
                    </div>
             
                   
                    
                </div>
                

            </div>
            







            <div class="student">
              <div class="work_with_us">
            <h1>WORK WITH US</h1></div>
                </div>

                <div class="aa">
                    
                                        <div class="concon">Anybody from Industry/ External Agency can contact the Institute to solve almost any type of problem or meet any type of need in almost any division of engineering, technology or science. The institute through its faculty, scientist or technical staff can handle such requests from industry or any external agency; such requests will come under the term consultancy in its broadest sense.</div>
               <Accordion defaultActiveKey="-1">
               <Accordion.Item eventKey="0">
        <Accordion.Header><span className='res-header'>Consultancy</span></Accordion.Header>
        <Accordion.Body><div class="ss">
        <br /><span>&#8226;</span> Analytical studies
        <br /><span>&#8226;</span> Calibration
        <br /><span>&#8226;</span> Simulation/ modelling/ optimization
        <br /><span>&#8226;</span> Development of laboratories
        <br /><span>&#8226;</span> Human Resource development programmes</div>
        </Accordion.Body>
      </Accordion.Item>
                <Accordion.Item eventKey="1">
        <Accordion.Header><span className='res-header'>Expertise</span></Accordion.Header>
        <Accordion.Body><div class="ss">
        <br /><span>&#8226;</span> Analytical studies
        <br /><span>&#8226;</span> Calibration
        <br /><span>&#8226;</span> Simulation/ modelling/ optimization
        <br /><span>&#8226;</span> Development of laboratories
        <br /><span>&#8226;</span> Human Resource development programmes</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><span className='res-header'>Research</span></Accordion.Header>
        <Accordion.Body><div class="ss">
        <br /><span>&#8226;</span> Analytical studies
        <br /><span>&#8226;</span> Calibration
        <br /><span>&#8226;</span> Simulation/ modelling/ optimization
        <br /><span>&#8226;</span> Development of laboratories
        <br /><span>&#8226;</span> Human Resource development programmes</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><span className='res-header'>Training</span></Accordion.Header>
        <Accordion.Body><div class="ss">
        <br /><span>&#8226;</span> Analytical studies
        <br /><span>&#8226;</span> Calibration
        <br /><span>&#8226;</span> Simulation/ modelling/ optimization
        <br /><span>&#8226;</span> Development of laboratories
        <br /><span>&#8226;</span> Human Resource development programmes</div>
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
