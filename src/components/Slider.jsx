import "./Slider.css"
import jai from "./images/yeih.jpg"
import jai1 from "./images/statimg.jpg"
import jai2 from "./images/statimg2.jpg"

import newimage from "./images/WhatsApp Image 2023-12-27 at 2.30.02 PM.jpeg"
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useState } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from 'swiper/modules';


function CarouselFadeExample() {
  const [swiperRef, setSwiperRef] = useState(null);
  
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
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        loop={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><div className="img-hgt"><img src={jai} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="img-hgt"><img src={jai1} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="img-hgt"><img src={jai2} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="img-hgt"><img src={jai} alt="" /></div></SwiperSlide>
        <SwiperSlide><div className="img-hgt"><img src={newimage} alt="" /></div></SwiperSlide>
      </Swiper>
  
   
    </div>
    </>
  );
}

export default CarouselFadeExample;