import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import stat1 from "./images/stat1.png"
import stat2 from "./images/stat2.png"
import stat3 from "./images/stat3.png"
import stat4 from "./images/stat4.png"

import "./news.css";
const Stats = () => {
  return (
   <>
   <Swiper
   style={{
    "--swiper-navigation-color": "#000",
    "--swiper-navigation-size": "0px",
   
  }}    
      autoplay={{
        delay: 2500,
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
        <SwiperSlide><div className='stats-content'> <img src={stat1} alt='' /></div></SwiperSlide>
        <SwiperSlide><div className='stats-content'><img src={stat2} alt='' /></div></SwiperSlide>
        <SwiperSlide><div className='stats-content'><img src={stat3} alt='' /></div></SwiperSlide>
        <SwiperSlide><div className='stats-content'><img src={stat4} alt='' /></div></SwiperSlide>
      
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

export default Stats
