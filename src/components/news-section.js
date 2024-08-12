import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";

import convo from "./images/convocation.jpg"
import subhash from "./images/subhash.jpg"
import isro from "./images/isro.jpg"
import k from "./images/kusenter.jpg"
import r from "./images/ranenter.jpg"

import ira from "./images/irina.jpg"
import nk from "./images/nk.jpg"
import af from "./images/af.jpg"
import aj from "./images/ajay.jpg"
import hema from "./images/heman.jpg"
import book from "./images/book.png"
import ne from "./images/ne.png"
import pkc from "./images/pkc.png"
import "./news.css";
const Newssection = () => {
  return (
   <>
   <Swiper
   style={{
    "--swiper-navigation-size": "25px",
    "--swiper-navigation-top-offset": "50%",
    "--swiper-navigation-sides-offset": "10px",
    "--swiper-navigation-color": "black"
  }}    
      autoplay={{
        delay: 6000,
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
        <SwiperSlide><div className='swiper-cont'>  <img src={k} alt='oky' /> Department of MEMS delighted to welcome new faculty Dr. Khushubo Devi. A warm welcome and lots of good wishes on becoming part of our Department!!.

She pursued her PhD from IIT Kanpur and later worked as a Post-Doc at Max-Planck-Institut für Eisenforschung GmbH, Germany</div> </SwiperSlide>
<SwiperSlide><div className='swiper-cont'> <img src={ira} alt='oky' /> Prof. Irina Alexandrovna Kurzina delivered an expert
lecture titled "Bimetallic catalysts based on palladium
for selective oxidation".</div></SwiperSlide>
<SwiperSlide><div className='swiper-cont'> <img src={nk} alt='oky' /> Professor N.K. Mukhopadhyay delivered an expert
lecture titled 'Multicomponent High Entropy Alloys:
Challenges and Future Prospects'. He also
interacted with the Department faculty and discussed
the future research direction
</div></SwiperSlide>
<SwiperSlide><div className='swiper-cont'> <img src={r} alt='oky' /> Department of MEMS welcomes Dr. Ranjith Kumar Poobalan. He Joined the Department on 10th October as Assistant Professor.
</div></SwiperSlide>
<SwiperSlide><div className='swiper-cont'>  <img src={af} alt='oky' /> Prof. Ahoutou Paul KOUAKOU joined us as visiting
scientist under CV Raman International Fellowship
for 3 months.</div> </SwiperSlide>
<SwiperSlide><div className='swiper-cont'> <img src={hema} alt='oky' /> Dr. Hemant Borkar Participated in 29th International
Conference on Processing and Fabrication of
Advanced Materials (PFAM 2023) organized by IIT
Tirupati and under his supervision Mr. Hitesh Patil
(Research Scholar, IIT Indore) won third prize in
Best Oral Presentation.
</div></SwiperSlide>
<SwiperSlide><div className='swiper-cont'>  <img src={aj} alt='oky' /> Dr. Ajay K Kushwaha visited INST Mohali as an
external Examiner for Ph.D thesis viva. He had a
fruitful meeting with Prof. Abir De Sarkar , Dr.
Ramendra Dey, Dr. Dipankar Mandal, Dr. Rehan
Khan, Dr. Amit and Dr. Himanshu during his visit.</div> </SwiperSlide>
        <SwiperSlide><div className='swiper-cont'> <img src={subhash} alt='oky' /> Mr. Subhash Chand Yadav, Research Scholar in the Department of Metallurgical Engineerihng and Materials Science has successfully defended his Thesis</div></SwiperSlide>
        <SwiperSlide><div className='swiper-cont'>  <img src={isro} alt='oky' /> MEMS Department, IIT Indore Welcomed Prof. Bhanu Pant, Former Outstanding Scientist and Group Director Materials and Metallurgy Group at Vikram Sarabhai Space Centre, ISRO and Professor College of Engineering, Pune.</div> </SwiperSlide>
        <SwiperSlide><div className='swiper-cont'> <img src={convo} alt='oky' /> IIT Indore conducted its 11th Convocation on July 15, 2023 in which Prof. Dr. Volker Epping, President, Leibniz University Hannover Germany graced the occasion as Chief Guest and Shri S. 'Kris' Gopalakrishnan, Chairman Axilor Ventures, Co-founder Infosys and President ISF graced the occasion as Guest of Honor.
</div></SwiperSlide>
<SwiperSlide><div className='swiper-cont'> <img src={ne} alt='oky' /> A Departmental Orientation Program was organized for new PG and Ph.D students on July 24, 2024. Students got a brief idea about the Department and course curriculum. They also got briefed about Laboratory Safety. New students got an opportunity to interact with Faculties, Staff and their seniors and resolve their queries.
MEMS Department welcomes all new PG and Ph.D students and wishes them the best for their Research and Future endeavors.
</div></SwiperSlide>
<SwiperSlide><div className='swiper-cont'> <img src={book} alt='oky' /> A textbook titled "Material Science and Engineering" written by Dr. Vinod Kumar and Dr. Nisheeth K. Prasad (MEMS Department, IIT Indore) has been online published by AICTE on July 16, 2024.
The book is as per AICTE model syllabus and designed for 2nd year Diploma Students of Mechanical Engineering.
It can be downloaded from AICTE website link: https://lnkd.in/dTcri2rm
Congratulations to Dr. Vinod Kumar and Dr. Nisheeth K. Prasad for the achievement!
</div></SwiperSlide>
<SwiperSlide><div className='swiper-cont'> <img src={pkc} alt='oky' /> Prof. Kamanio Chattopadhyay (Professor, IISc Bangalore) visited us on June 5, 2024. During his visit he interacted with Faculties and Research Scholars of the Department. He also visited Labs of the Department.
Thanks Prof. Kamanio Chattopadhyay for visiting us!
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
