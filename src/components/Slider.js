import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import convo from "./images/convocation.jpg"
import subhash from "./images/subhash.jpg"
import isro from "./images/isro.jpg"




const Slider = () => {
  return (
   <>
   <Swiper
   style={{
    "--swiper-navigation-color": "#000",
    "--swiper-navigation-size": "0px",
   
  }}    
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation , Autoplay]}
        className="mySwiper"
      >
        <div class="slidercss">
        <SwiperSlide><div className='swiper-cont'> <img src={subhash} alt='oky' /> </div></SwiperSlide>
        <SwiperSlide><div className='swiper-cont'>  <img src={isro} alt='oky' /> </div> </SwiperSlide>
        <SwiperSlide><div className='swiper-cont'> <img src={convo} alt='oky' /> 
</div></SwiperSlide></div>
      
        
      </Swiper>
   </>
  )
}

export default Slider
