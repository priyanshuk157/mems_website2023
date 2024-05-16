import "./Slider.css"

import jai1 from "./images/statimg.jpg"
import jai2 from "./images/statimg2.jpg"
import graphabstract from "./images/Graphical_Abstract_Vamsi_group.jpg"
import graphabstract2 from "./images/MEMS Website - SK group Graphical Abstract.jpg"
import drkga from "./images/DK Rai PPT Department webpage.jpg"


import kbuga from "./images/G.A_Khushubo.jpg"
import rupuga from "./images/Graphical Abstract  _ Prof. Rupesh Devan.jpg"
import ramjiga from "./images/Graphical Abstract  MEMS faculty group - Dr Ram Sajeevan Maurya.jpg"
import jpga from "./images/Graphical Abstract  MEMS faculty group-JP.jpg"
import niga from "./images/Graphical Abstract_Nisheeth.jpg"





import newimage from "./images/WhatsApp Image 2023-12-27 at 2.30.02 PM.jpeg"
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation,Autoplay } from 'swiper/modules';


function CarouselFadeExample() {
  const [ setSwiperRef] = useState(null);
  
  return (
    <>
    <div className='carousel-main'>
    {/*<Swiper
    style={{
      "--swiper-navigation-color": "#000",
      "--swiper-navigation-size": "25px",
      "--swiper-navigation-top-offset": "50%",
      "--swiper-navigation-sides-offset": "0px",
     
    }} 
        slidesPerView={3}
        spaceBetween={0}
        // freeMode={true}
        loop={true}
        preventInteractionOnTransition={false}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={10000}
        freemodemomentum= "false"
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination,Navigation]}
        className="homepage-slider"
      >
        <SwiperSlide><div className="img-hgt"><img src={jai} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="img-hgt"><img src={jai1} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="img-hgt"><img src={jai2} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="img-hgt"><img src={jai} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="img-hgt"><img src={newimage} alt="" /></div></SwiperSlide>
        
      </Swiper>*/}
      <Swiper
        slidesPerView={1}
        
        spaceBetween={0}
        
        // freeMode={true}
        loop={true}
        preventInteractionOnTransition={false}
        autoplay={{
          delay: 1,
          disableOnInteraction: true,
        }}
        speed={10000}
        freemodemomentum= "true"
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          600: {
              width:800,
            slidesPerView:1,
            spaceBetween:10
          }}}
        navigation={false}
        modules={[Autoplay, Pagination,Navigation]}
        className="mySwiper"
      >

        {/* <SwiperSlide><div className="img-hgt"><img src={jai1} alt="" /></div></SwiperSlide> */}
        <SwiperSlide><div className="img-hgt"><img src={graphabstract2} alt="" /></div></SwiperSlide>
        {/* <SwiperSlide><div className="img-hgt"><img src={jai2} alt="" /></div></SwiperSlide> */}
        <SwiperSlide><div className="img-hgt"><img src={graphabstract} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="img-hgt"><img src={drkga} alt="" /></div></SwiperSlide>

        <SwiperSlide><div className="img-hgt"><img src={jpga} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="img-hgt"><img src={rupuga} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="img-hgt"><img src={kbuga} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="img-hgt"><img src={ramjiga} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="img-hgt"><img src={niga} alt="" /></div></SwiperSlide>
        
      </Swiper>
        
   
    </div>
    </>
  );
}

export default CarouselFadeExample;