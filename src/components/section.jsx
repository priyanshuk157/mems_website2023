import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
import "./section.css"
import Newssection from './news-section'

import Stats from './stats'
import { FaEnvelope } from 'react-icons/fa'
import prof20 from "./profiles/profimages/prof20.jpeg"
import convopic from "./profiles/profimages/convocation.jpg"
import re from "./profiles/profimages/re.jpg"




const section = () => {
  return (
    <>
    <div className='sec'>
      <div className='sec2'>    <div className='sec-img'>
        <img src={prof20}  alt='we'/>
        <hr />
        <div className="hodtext1">
                <div className="name">Prof. Ajay Kumar Kushwaha</div>
                <div className="post"> HoD & Associate Professor </div>
                <div className="post"> Office		: 1D-610  </div>
                <div className="post"> Phone no(<i><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"></path></svg></i>) : 302 +91-731-666-3516 </div>
                <div className="post"> Email	 (<i><FaEnvelope/></i>)	:hodmems@iiti.ac.in</div>
                
               
              </div>
        </div>
       
        <div className='sec-cont'>
        <div className='sec-conthead'>About The Department</div>
        Welcome to the home page of Department of Metallurgical Engineering and Materials Science! <br />
<br />
The Department of MEMS was initially started as a Center for Materials Science Engineering comprising of faculty from Schools of basic sciences and engineering. Upon its progress in short period of time, the center for MSE was made in to full fledged Department of Metallurgical Engineering and Materials Science from 2016.
 <br />
 <br />
Materials continue to play a vital role in almost every technological advancement since the beginning of civilization. The emphasis of the Department is to promote multidisciplinary research to find amicable solutions for the real- world problems and work on the cutting-edge research problems that benefits society. The key research focus of the Department is to understand the processing, structure of several classes of materials and correlate them to the properties and thus enhancing their performance.
        </div></div>
   
        <div className='vision'>
        <div className='sec-conthead'>VISION AND MISSION</div>
      To be among the institutes of world-class by educating and mentoring the next generation of engineers, scientists, and entrepreneurs in order to contribute to the economic and social development of India & world. 
 <br /> <br /> 
 Educate our students in fundamental-to-advanced topics in materials & metallurgical engineering to enable them with necessary skills to succeed in academia and industry. <br />  <br /> 
Innovative research focused on design, processing, characterization, and application of novel materials. <br /> <br /> 
Encourage innovation & entrepreneurship and provide conducive environment for translational research by collaborating with relevant industries. <br /> <br /> 
Engage with broader community via outreach programs to promote science & technology awareness

    </div>
       
    </div>
   
   
    <div className="ranking3">

   
    <div className='sub-rank' >  <div className='ranking'>
    <div className='sec-conthead'>NEWS</div>
      
   <div className='ranking-news-main'>
    <Newssection/>
   </div>
    </div>
    <div className='ranking'>
    <div className='sec-conthead'>STATISTICS</div>
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
        
        <div className='sec-conthead'>EVENTS
        </div>
        <div className='gallery-grid2'>
  


  <img className='grid-itemx' src={convopic} alt="" />
  



</div>
          <div class="eventx">Conference/Seminar/Courses</div>
          <div className='event-button'>
            
             <a href="resources">view</a>
            </div>
        </div>
        <div className="events1">
        <div className='sec-conthead'>RESOURCES</div>
        <div className='gallery-grid2'>
  


  <img className='grid-itemx' src={re} alt="" />
  



</div>
        

<div class="eventx">click here to check our RESOURCES</div>
          <div className='event-button'>
             <a href="resources">view</a>
            </div>
        </div>
          <div className="events1">
          <div className='sec-conthead'>GALLERY</div>
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
