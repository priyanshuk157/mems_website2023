import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
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
            <div className='ind-section'>
                <div className="sub-ind-sec1">
                    <div className='ind-head'> WHY MEMS ?   </div>
             
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa reiciendis amet vero quibusdam consequatur reprehenderit iste ab natus nesciunt minus commodi harum ut quidem exercitationem, nam sit perspiciatis delectus aperiam.
                </div>
                {/* <div className="sub-ind-sec2">
                <div className='ind-head'> BROCHURE</div>
                    

                </div> */}

            </div>
            <div className='ind-section'>
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

            </div>
            <div className='ind-section'>
                <div className="sub-ind-sec5">
                <div className='ind-head'> STATS AND PLACEMENT</div>
               
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
        <SwiperSlide><div className='stats-content'><img src={stat2} alt='' /></div></SwiperSlide>
        <SwiperSlide><div className='stats-content'><img src={stat3} alt='' /></div></SwiperSlide>
        <SwiperSlide><div className='stats-content'><img src={stat4} alt='' /></div></SwiperSlide>
       
      </Swiper>
   
                </div>
                <div className="sub-ind-sec6">
                <div className='ind-head'> FOOTPRINTS OF MEMS</div>
                <div className='footprints-logos'>
                    <img src={accenture} alt="" />
                    <img src={walmart} alt="" />
                    <img src={gs} alt="" />
                    <img src={razorpay} alt="" />
                    <img src={jio} alt="" />

                </div>

                </div>

            </div>
           
            <div className='ind-section'>
                <div className="sub-ind-sec9">
                <div className='ind-head'> ONGOING CONSULTING PROJECT   </div>
                    <ul>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus similique quam corrupti laudantium, ipsam </li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus similique quam corrupti laudantium, ipsam </li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus similique quam corrupti laudantium, ipsam </li>
                        <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus similique quam corrupti laudantium, ipsam </li>
                       
                    </ul>
                </div>
                

            </div>
           
          
            <div>
                <Footer />
            </div>

        </>
    )
}

export default industryrelation
