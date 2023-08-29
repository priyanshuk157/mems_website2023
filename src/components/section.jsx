import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
import "./section.css"
import Newssection from './news-section'

import Stats from './stats'
import { FaEnvelope } from 'react-icons/fa'


const section = () => {
  return (
    <>
    <div className='sec'>
      <div className='sec2'>    <div className='sec-img'>
        <img src="https://iiti.ac.in/people/~ajaykk/ajaykk.jpg" alt="" />
        <hr />
        <div className="hodtext1">
                <div className="name">Prof. Ajay Kumar Kushwaha</div>
                <div className="post"> HoD & Associate Professor </div>
                <div className="post"> Office		: 1D-610  </div>
                <div className="post"> Email	 (<i><FaEnvelope/></i>)	:akk@iiti.ac.in</div>
                
               
              </div>
        </div>
       
        <div className='sec-cont'>
        <div ><h2>About The Department</h2></div>
        Welcome to the home page of Department of Metallurgical Engineering and Materials Science! <br />

The Department of MEMS was initially started as a Center for Materials Science Engineering comprising of faculty from Schools of basic sciences and engineering. Upon its progress in short period of time, the center for MSE was made in to full fledged Department of Metallurgical Engineering and Materials Science from 2016. <br />
Materials continue to play a vital role in almost every technological advancement since the beginning of civilization. The emphasis of the Department is to promote multidisciplinary research to find amicable solutions for the real- world problems and work on the cutting-edge research problems that benefits society. The key research focus of the Department is to understand the processing, structure of several classes of materials and correlate them to the properties and thus enhancing their performance.
        </div></div>
   
        <div className='vision'>
      <div ><h2>VISION AND MISSION</h2></div>
      To be among the institutes of world-class by educating and mentoring the next generation of engineers, scientists, and entrepreneurs in order to contribute to the economic and social development of India & world. 
 <br />
 Educate our students in fundamental-to-advanced topics in materials & metallurgical engineering to enable them with necessary skills to succeed in academia and industry. <br /> 
Innovative research focused on design, processing, characterization, and application of novel materials. <br />
Encourage innovation & entrepreneurship and provide conducive environment for translational research by collaborating with relevant industries. <br />
Engage with broader community via outreach programs to promote science & technology awareness

    </div>
       
    </div>
   
   
    <div className="ranking3">

   
    <div className='sub-rank' >  <div className='ranking'>
      <div ><h2>NEWS</h2></div>
   <div className='ranking-news-main'>
    <Newssection/>
   </div>
    </div>
    <div className='ranking'>
      <div ><h2>STATISTICS</h2></div>
   <div className='ranking-main'>
   <Stats/>
   </div>
    </div>
    </div></div>
  
  
   
 
    
    {/* <div className='eve-pos'>
   
     
      <div className="events">
      <div><h1>EVENTS</h1></div>
      <Carousel variant="dark">
      <Carousel.Item className='item-cor'>
       
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item-cor'>
       
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='item-cor'>
        
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div >
      <div  className=' open-pos'>
      <div><h1>OPEN POSITIONS</h1></div>
   <table className='table-main'>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
       </tr>
     
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
       </tr>
     
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
       </tr>
     
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
       </tr>
     
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
       </tr>
     
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
       </tr>
     
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
       </tr>
     
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
       </tr>
     
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
       </tr>
     
     
        
       

      </tbody>
      </table>
      </div>
      </div> */}
      <div className='section4'>
    
        <div className="events1">
          <h1>EVENTS</h1>
          click here to explore our Events
          <div className='event-button'>
             <a href="resources">view</a>
            </div>
        </div>
        <div className="events1">
        <h1>RESOURCES</h1>

click here to check our RESOURCES
          <div className='event-button'>
             <a href="resources">view</a>
            </div>
        </div>
          <div className="events1">
            <h1>Gallery </h1>
<div className='gallery-grid'>
  <img src="https://ionicframework.com/docs/img/demos/thumbnail.svg" alt="" />


  <img className='grid-item1' src="https://ionicframework.com/docs/img/demos/thumbnail.svg" alt="" />
  <img className='grid-item2' src="https://ionicframework.com/docs/img/demos/thumbnail.svg" alt="" />
  <img className='grid-item3' src="https://ionicframework.com/docs/img/demos/thumbnail.svg" alt="" />




</div>
            
            <div className='event-button'>
             <a href="gallery">view</a>
            </div>
          </div>
      
     


      </div>
    
   
    </>
  )
}

export default section
