import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import convo from "./images/convocation.jpg"
import subhash from "./images/subhash.jpg"
import isro from "./images/isro.jpg"


import "./news.css";
const Newssection = () => {
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
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation , Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><div className='swiper-cont'> <img src={subhash} alt='oky' /> Mr. Subhash Chand Yadav, Research Scholar in the Department of Metallurgical Engineerihng and Materials Science has successfully defended his Thesis</div></SwiperSlide>
        <SwiperSlide><div className='swiper-cont'>  <img src={isro} alt='oky' /> MEMS Department, IIT Indore Welcomed Prof. Bhanu Pant, Former Outstanding Scientist and Group Director Materials and Metallurgy Group at Vikram Sarabhai Space Centre, ISRO and Professor College of Engineering, Pune.</div> </SwiperSlide>
        <SwiperSlide><div className='swiper-cont'> <img src={convo} alt='oky' /> IIT Indore conducted its 11th Convocation on July 15, 2023 in which Prof. Dr. Volker Epping, President, Leibniz University Hannover Germany graced the occasion as Chief Guest and Shri S. 'Kris' Gopalakrishnan, Chairman Axilor Ventures, Co-founder Infosys and President ISF graced the occasion as Guest of Honor.
</div></SwiperSlide>
      
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

export default Newssection
