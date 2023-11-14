import "./Slider.css"
import jai from "./images/yeih.jpg"
import jai1 from "./images/statimg.jpg"
import jai2 from "./images/statimg2.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import "swiper/css/navigation";

// import required modules
import { Autoplay , Pagination} from 'swiper/modules';

function CarouselFadeExample() {
  
  return (
    <>
    <div className='carousel-main'>
    <Swiper
    
        slidesPerView={3}
        spaceBetween={0}
        // freeMode={true}
        loop={true}
        preventInteractionOnTransition={true}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        speed={5000}
        freeModeMomentum= {false}
        pagination={{
          clickable: false,
        }}
        modules={[Autoplay, Pagination]}
        className="homepage-slider"
      >
        <SwiperSlide><div><img src={jai} alt="" /></div></SwiperSlide>
        <SwiperSlide><div><img src={jai1} alt="" /></div></SwiperSlide>
        <SwiperSlide><div><img src={jai2} alt="" /></div></SwiperSlide>
        <SwiperSlide><div><img src={jai} alt="" /></div></SwiperSlide>
        <SwiperSlide><div><img src={jai} alt="" /></div></SwiperSlide>
        
      </Swiper>
   
    </div>
    </>
  );
}

export default CarouselFadeExample;