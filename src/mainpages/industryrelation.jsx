import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import './industry.css'
import { FaEnvelope } from "react-icons/fa";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Card from 'react-bootstrap/Card';
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Autoplay, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import stat1 from "./mainpageimages/stat1.png"
import stat2 from "./mainpageimages/stat2.png"
import stat3 from "./mainpageimages/stat3.png"
import stat4 from "./mainpageimages/stat4.png"




const industryrelation = () => {
    return (
        <>

            <div>
                <Navbar />
            </div>
           
            <div className='ind-head'>Industrial Collaborations</div>
            <div className='industrycolab'>
                <img src="https://whoowner.b-cdn.net/wp-content/uploads/2018/01/Owner-of-VE-Commercial-Vehicles-Limited-Wiki-Logo.jpg" alt="" />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvK1fNzWbbTsHsWzOwSN6kmDRrqcXe9J5gUA&usqp=CAU" alt="" />
                <img src="https://rajratan.co.in/wp-content/uploads/2021/08/Rajratan-Horizontal-Logo.png" alt="" />
                <img src="https://www.yelu.in/img/in/a/1540896763-86-moira-sariya.jpg" alt="" />

            </div>
          
            <div className="placements">
                <Card className="bg-white text-red">


                    <Card.Title className='title'>PLACEMENTS</Card.Title>
                   <div>
                   <Swiper
   style={{
    "--swiper-navigation-color": "#000",
    "--swiper-navigation-size": "0px",
   
  }}    
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
        slidesPerView={1}
        spaceBetween={3}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation , Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><div className='place-image'> <img src={stat1} alt='oky' /> </div></SwiperSlide>
        <SwiperSlide><div className='place-image'>  <img src={stat2} alt='oky' /> </div> </SwiperSlide>
        <SwiperSlide><div className='place-image'> <img src={stat3} alt='oky' /> </div></SwiperSlide>
        <SwiperSlide><div className='place-image'> <img src={stat4} alt='oky' /> </div></SwiperSlide>
      
        {/* <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
      </Swiper>
                   </div>
                    

                </Card>
            </div>
            <div className="ongoing">
                <Card className="bg-white text-blue">


                    <Card.Title className='title'>ONGOING RESEARCH</Card.Title>
                    <Card.Text className='cardtext'>
                        <ul>
                            <li>project 1</li>
                            <li>project 1</li>
                            <li>project 1</li>
                            <li>project 1</li>
                            <li>project 1</li>
                            <li>project 1</li>
                        </ul>
                       

                    </Card.Text>
                   
                </Card>
            </div>
            <div className="blank">
              

<div className="connect-with"> CONNECT WITH US
                   
                      
                      (  <i><FaEnvelope/></i>) : <a href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSKjfscDkXcsqjVTCnNTlBWwtGcgpLGnXHcxpGmZZdWLbVZpvNRVfnTlvZjdZJmDfXtncQbh" target='blank' >outreach_mems@iiti.ac.in
</a>
                    </div>

                    

            
            </div>

            <div>
                <Footer />
            </div>

        </>
    )
}

export default industryrelation
