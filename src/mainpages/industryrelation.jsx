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
// import stat1 from "./mainpageimages/stat1.png"
// import stat2 from "./mainpageimages/stat2.png"
// import stat3 from "./mainpageimages/stat3.png"
// import stat4 from "./mainpageimages/stat4.png"
import sample from "./mainpageimages/sample.mp4"




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
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <img src="" alt="" />
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
                    
                </div>
                <div className="sub-ind-sec6">
                <div className='ind-head'> FOOTPRINTS OF MEMS</div>

                </div>

            </div>
           
            <div className='ind-section'>
                <div className="sub-ind-sec">
                <div className='ind-head'> ONGOING CONSULTING PROJECT   </div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente alias pariatur ex velit asperiores nobis. Officia, voluptatum consectetur eveniet sit aspernatur ipsa, et eaque, totam esse rerum dolore sint quia.
                </div>
                

            </div>
           
          
            <div>
                <Footer />
            </div>

        </>
    )
}

export default industryrelation
