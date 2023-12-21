import React from "react";
import "./industry.css";

// import { FaCaretRight } from "react-icons/fa";
import { useState } from "react";
import ve from "../components/images/volvo.png";
import um from "../components/images/Logo_UshaMartin.png";
import tf from "../components/images/technofast-og.jpg";
import rc from "../components/images/raychem-logo.png";
import mra from "../components/images/moyra.jpg";
import fundplot from "../components/images/chart.svg";
import { Accordion } from "react-bootstrap";
import convo from "../components/images/convocation.jpg";
import workshop from "../components/images/irina.jpg";
import publ from "../components/images/iiii.png";
import accenture from "../mainpages/mainpageimages/accenture.png";
import jio from "../mainpages/mainpageimages/BjxmtD.webp";
// import walmart from "./mainpageimages/walmart.png"
import gs from "../mainpages/mainpageimages/Goldman_Sachs.png";
import razorpay from "../mainpages/mainpageimages/Razorpay.jpg";

const Industry2 = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <>
      <div className="industry-butt">
        <div
          className={
            toggleState === 1 ? " displaybutton201" : " nodispbutton201"
          }
          onClick={() => toggleTab(1)}
        >
          Our Students
        </div>
        <div
          className={
            toggleState === 2 ? " displaybutton202" : "  nodispbutton202"
          }
          onClick={() => toggleTab(2)}
        >
          Work With Us
        </div>
      </div>

      <div
        className={
          toggleState === 1 ? " displaycontent101" : " nodiscontent101"
        }
      >
        <div className="industry-main">
          <div className="industry-cards">
            <div className="industrycards-head">BTech</div>
            <div className="industrycard-content">
              <img src={convo} alt="" />
              <ul>
                <li>
                  About Curriculum : Our students undergo a rigorous curriculum
                  in Metallurgy and Material Science. The BTech program requires
                  each student to complete X credits to obtain a degree in
                  Metallurgy and Material Science at IIT Indore. <br />
                  This includes A courses and B labs, which impart theoretical
                  and practical knowledge in various domains of materials
                  engineering.{" "}
                </li>
                <li>
                  An entire semester (7th) is dedicated to a project where
                  students work in a research group of a company, providing
                  exposure to research and the industry environment.{" "}
                </li>
                <li>
                  Additionally, students actively participate in several
                  national tests and competitions associated with the clubs
                  within IIT Indore, fostering a culture of teamwork.
                </li>
              </ul>
            </div>
          </div>
          <div className="industry-cards2">
            <div className="industrycards-head">MTech</div>
            <div className="industrycard-content">
              <ul>
                <li>
                  MTech students at IIT Indore experience a comprehensive and
                  advanced academic journey in their chosen fields.{" "}
                </li>
                <li>
                  {" "}
                  The MTech programs are designed to provide in-depth knowledge
                  and hands-on experience, fostering a strong foundation for
                  research and innovation.
                  <br />
                  This includes A courses and B labs which imparts theoretical
                  and practical knowledge in various domains of materials
                  engineering.{" "}
                </li>
                <li>
                  The curriculum emphasizes a balance between theoretical
                  understanding and practical application, ensuring that MTech
                  graduates are well-equipped for challenges in academia,
                  industry, and research.
                </li>
                <li>
                  Beyond academics, the vibrant campus life offers opportunities
                  for networking, participation in seminars, and involvement in
                  various extracurricular activities, contributing to the
                  holistic development of MTech students at IIT Indore.
                </li>
              </ul>
              <img src={workshop} alt="" />
            </div>
          </div>
          <div className="industry-cards">
            <div className="industrycards-head">PhD</div>
            <div className="industrycard-content">
              <img src={publ} alt="" />
              <ul>
                <li>
                  MTech students at IIT Indore experience a comprehensive and
                  advanced academic journey in their chosen fields.{" "}
                </li>
                <li>
                  {" "}
                  The MTech programs are designed to provide in-depth knowledge
                  and hands-on experience, fostering a strong foundation for
                  research and innovation.
                  <br />
                  This includes A courses and B labs which imparts theoretical
                  and practical knowledge in various domains of materials
                  engineering.{" "}
                </li>
                <li>
                  The curriculum emphasizes a balance between theoretical
                  understanding and practical application, ensuring that MTech
                  graduates are well-equipped for challenges in academia,
                  industry, and research.
                </li>
                <li>
                  Beyond academics, the vibrant campus life offers opportunities
                  for networking, participation in seminars, and involvement in
                  various extracurricular activities, contributing to the
                  holistic development of MTech students at IIT Indore.
                </li>
              </ul>
            </div>
          </div>
          <div className="industry-cards2">
            <div className="industrycards-head">Footprints of MEMS</div>
            <div className="industrycard-content">
              <div className="ind-section">
                <div className="sub-ind-sec9">
                  Our Students got placed in companies like
                  <div className="slide-track">
                    <img
                      className="aclogo"
                      src={accenture}
                      width="250"
                      alt=""
                    />
                    <img className="galogo" src={gs} width="100" alt="" />
                    <img className="rplogo" src={razorpay} width="250" alt="" />
                    <img className="jiologo" src={jio} width="100" alt="" />
                  </div>
    
   
      
        </div>
      </div>
      </div>
      </div>
      </div>
      </div>
      <div
        className={
          toggleState === 2 ? " displaycontent101" : " nodiscontent101"
        }
      >
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
          </div>
         
      <div className="industry-cards2">
    <div className="research-head">Publications</div>
    <div className='industrycard-content'>
    <img src={publ} alt="" />
          
        </div>
        <Accordion defaultActiveKey="-1">
              
                
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <span className="res-header">Internships</span>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="ss">Under Construction</div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                
                <Accordion.Header><span className='res-header'>Training</span></Accordion.Header>
                <Accordion.Body><div className="ss">
                 <ul><li>We offer training programs for Industry person to acquire operational knowledge and skill on certain instruments</li> 
                 <br /><li> We conduct focused workshops to cater to the needs of partnering   Industries in the domain of Metallurgical Engineering and Materials Science.</li></ul>
                </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
        
     </div>
     </div>
     </div>
    </>
  )
}

export default Industry2
