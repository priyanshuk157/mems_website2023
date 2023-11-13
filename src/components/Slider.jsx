import Carousel from 'react-bootstrap/Carousel';
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
import { Autoplay , Pagination,Navigation ,Keyboard , Mousewheel, FreeMode} from 'swiper/modules';

function CarouselFadeExample() {
  
  return (
    <>
    <div className='carousel-main'>
    <Swiper
    
        slidesPerView={2}
        spaceBetween={0}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        speed={5000}
        freeModeMomentum= {false}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay,FreeMode, Pagination]}
        className="homepage-slider"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
   
    </div>
    </>
  );
}

export default CarouselFadeExample;