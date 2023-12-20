import React from 'react'
import './industry.css'
import Navbar from './navbar2'
import Footer from "../components/footer";
// import { FaCaretRight } from "react-icons/fa";
import { useState } from 'react';
import ve from "../components/images/volvo.png"
import um from "../components/images/Logo_UshaMartin.png"
import tf from "../components/images/technofast-og.jpg"
import rc from "../components/images/raychem-logo.png"
import mra from "../components/images/moyra.jpg"
import fundplot from "../components/images/chart.svg"
import { Accordion } from 'react-bootstrap';
import convo from "../components/images/convocation.jpg"
import workshop from "../components/images/irina.jpg"
import publ from "../components/images/iiii.png"
import accenture from "../mainpages/mainpageimages/accenture.png"
import jio from "../mainpages/mainpageimages/BjxmtD.webp"
// import walmart from "./mainpageimages/walmart.png"
import gs from "../mainpages/mainpageimages/Goldman_Sachs.png"
import razorpay from "../mainpages/mainpageimages/Razorpay.jpg"


const Industry2 = () => {

    const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }

  return (
    <>
    <div>
      <Navbar />
    </div>
    <div className='industry-butt'>
    <div className={toggleState === 1 ? " displaybutton201" : " nodispbutton201"} onClick={() => toggleTab(1)}>Our Students</div>
    <div className={toggleState === 2 ? " displaybutton202" : "  nodispbutton202"} onClick={() => toggleTab(2)}>Work With Us</div>
    </div>
    


    <div className={toggleState === 1 ? " displaycontent101" : " nodiscontent101"}>
      <div className="industry-main">
      <div className="industry-cards">
        <div className="industrycards-head">BTech</div>
        <div className='industrycard-content'>
          <img src={convo} alt="" />
          <ul>
            <li>About Curriculum : Our students go through a robust curriculum in Metallurgy and Material Science.</li>
            <li>The Btech programme requires each student to finish X credits to obtain a degree in Metallurgy and Material Science at IIT Indore. <br />
            This includes A courses and B labs which imparts theoretical and practical knowledge in various domains of materials engineering.  </li>
            <li>A whole semester (7th) is dedicated to a project where the students work in a research group of company which gives exposure to researsh and industry environment.</li>
            <li>Additionally, Students actively participate in several natioanl test, competition associated with the clubs within IIT Indore which inculcate working in teams culture.</li>
          </ul>
        </div>
      </div>
    <div className="industry-cards">
    <div className="industrycards-head">MTech</div>
    <div className='industrycard-content'>
          <ul>
            <li>About Curriculum : Our students go through a robust curriculum in Metallurgy and Material Science.</li>
            <li>The Btech programme requires each student to finish X credits to obtain a degree in Metallurgy and Material Science at IIT Indore. <br />
            This includes A courses and B labs which imparts theoretical and practical knowledge in various domains of materials engineering.  </li>
            <li>A whole semester (7th) is dedicated to a project where the students work in a research group of company which gives exposure to researsh and industry environment.</li>
            <li>Additionally, Students actively participate in several natioanl test, competition associated with the clubs within IIT Indore which inculcate working in teams culture.</li>
          </ul>
          <img src={workshop} alt="" />
        </div>
    </div>
    <div className="industry-cards">
    <div className="industrycards-head">PhD</div>
    <div className='industrycard-content'>
    <img src={publ} alt="" />
          <ul>
            <li>About Curriculum : Our students go through a robust curriculum in Metallurgy and Material Science.</li>
            <li>The Btech programme requires each student to finish X credits to obtain a degree in Metallurgy and Material Science at IIT Indore. <br />
            This includes A courses and B labs which imparts theoretical and practical knowledge in various domains of materials engineering.  </li>
            <li>A whole semester (7th) is dedicated to a project where the students work in a research group of company which gives exposure to researsh and industry environment.</li>
            <li>Additionally, Students actively participate in several natioanl test, competition associated with the clubs within IIT Indore which inculcate working in teams culture.</li>
          </ul>
        </div>
    </div>
      <div className="industry-cards">
      <div className="industrycards-head">Footprints of MEMS</div>
      <div className='industrycard-content'>
      
        <div className='ind-section'>
                <div className="sub-ind-sec9">
                Our Students got placed in companies like  
                    <div class="slide-track">
                      

                          <img class="aclogo"src={accenture} width="250" alt="" />
                          <img class="galogo" src={gs}  width="100" alt="" />
                          <img class="rplogo" src={razorpay}  width="250" alt="" />
                          <img class="jiologo" src={jio} width="100" alt="" />
     






</div>
             
                   
                    
                </div>
                

            </div> 
          </div>
      </div>
      </div>

    
    </div>
    <div className={toggleState === 2 ? " displaycontent101" : " nodiscontent101"}>
    <div className="industry-main">
    <div className="industry-cards">
    <div className="research-section">
        <div className="research-secleft">
        <div className="research-head">FUNDING</div>
     
      <div className="fund-plot">
        <img src={fundplot} alt="" />
     
      </div>
        </div>
        <div className="research-secright">
        <div className="research-head">CONSULTANCY</div>
        <div className="consultancy-logos">
         <img src={ve} alt="" />
         <img src={um} alt="" />
         <img src={rc} alt="" />
         <img src={mra} alt="" />
         <img src={tf} alt="" />
        
         
        </div>
        <div className="consult-button">
          <a href="cons">Click for more details</a>
          </div>
        </div>
      </div>
      <Accordion defaultActiveKey="-1">
              
                
      <Accordion.Item eventKey="2">
        <Accordion.Header><span className='res-header'>Internships</span></Accordion.Header>
        <Accordion.Body><div class="ss">
         Under Construction</div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><span className='res-header'>Training</span></Accordion.Header>
        <Accordion.Body><div class="ss">
         We offer training programs for Industry person to acquire operational knowledge and skill on certain instruments <br /> We conduct focused workshops to cater to the needs of partnering   Industries in the domain of Metallurgical Engineering and Materials Science.
        </div>
        </Accordion.Body>
      </Accordion.Item>
</Accordion>
     
      </div>
      </div>
    </div>
    <div>
        <Footer />
      </div>
    </>
  )
}

export default Industry2