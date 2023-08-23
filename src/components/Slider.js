import Carousel from 'react-bootstrap/Carousel';
import "./Slider.css"
import jai from "./images/yeih.jpg"
import jai1 from "./images/statimg.jpg"
import jai2 from "./images/statimg2.jpg"

function CarouselFadeExample() {
  
  return (
    <>
    <div className='carousel-main'>
    <Carousel fade >
      <Carousel.Item interval={4000}> 
        <img
          className="d-block w-100 img-hgt"
          src={jai}
          alt="First slide"
        />
        <Carousel.Caption>
          {/* <h3>First slide label</h3> */}
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 img-hgt"
          src={jai1}
          alt="Second slide"
        />

        <Carousel.Caption>
          {/* <h3>Second slide label</h3> */}
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4000}>
        <img
          className="d-block w-100 img-hgt"
          src={jai2}
          alt="Third slide"
        />

        <Carousel.Caption>
          {/* <h3>Third slide label</h3> */}
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  );
}

export default CarouselFadeExample;