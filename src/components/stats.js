import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import stat2 from "./images/niceug.png"
import stat3 from "./images/nicepg.png"
import stat4 from "./images/iii.png"



import "./news2.css";
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
       <div class="imagesize">
        <SwiperSlide><div className='stats-content2'><img src={stat2} alt='' /></div></SwiperSlide>
        <SwiperSlide><div className='stats-content2'><img src={stat3} alt='' /></div></SwiperSlide>
        <SwiperSlide><div className='stats-content2'><img src={stat4} alt='' /></div></SwiperSlide>
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

export default Stats
