import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import stat3 from "./images/nicepg.png"
import stat from "./images/stat4.png"

import publ from "../components/images/iiii.png";


import "./phdcss.css";
const phd1 = () => {
  return (
   <>
   <Swiper
   style={{
    "--swiper-navigation-color": "#000",
    "--swiper-navigation-size": "25px",
    "--swiper-navigation-top-offset": "50%",
    "--swiper-navigation-sides-offset": "0px",
   
  }}    
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
        slidesPerView={1}
        spaceBetween={40}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation , Autoplay]}
        className="mySwiper"
      >
       <div class="imagesize">
        <SwiperSlide><div className='stats-content2'><img src={publ} alt='' /></div></SwiperSlide>
        <SwiperSlide><div className='stats-content2'><img src={stat3} alt='' /></div></SwiperSlide>
        <SwiperSlide><div className='stats-content2'><img src={stat} alt='' /></div></SwiperSlide>
        
      </div>
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide> 
        <SwiperSlide>Slide 7</SwiperSlide> 
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
   </>
  )
}

export default phd1
