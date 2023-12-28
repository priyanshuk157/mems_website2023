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
import Stats from "./phd";

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
                Our Metallurgy and Material Science BTech program at IIT Indore is rigorous, requiring 146.5 credits for graduation. With 49 courses and 12 labs, students gain theoretical and practical expertise in materials engineering. The seventh semester focuses on industry-connected projects, offering hands-on experience within research groups of leading companies.
{" "}
<br />
                </li>
                <li>
                Our curriculum prioritises practical learning, featuring 12 labs that provide essential hands-on experience, preparing students for industry demands.{" "}
                <br />
                </li>
                <li>
                Students actively participate in national tests and competitions, fostering teamwork and aligning them with industry dynamics. Our goal is to equip graduates for successful Metallurgy and Material Science careers by blending academic excellence with real-world applications.
                </li>
              </ul>
            </div>
          </div>
          <div className="industry-cards2">
            <div className="industrycards-head">MTech</div>
            <div className="industrycard-content">
              <ul>
                <li>
                At IIT Indore, our MTech programs offer a comprehensive academic journey focusing on practical application. The curriculum includes nine courses and four labs, ensuring a balanced understanding of materials engineering{" "}
                </li>
                <li>
                  {" "}
                  Graduates emerge well-prepared for academic, industry, and research challenges, equipped with valuable skills for seamless integration into real-world scenarios.
                  <br />
                  This includes 9 courses and 4 labs which imparts theoretical
                  and practical knowledge in various domains of materials
                  engineering.{" "}
                </li>
                <li>
                Beyond academics, our vibrant campus life fosters holistic development. Opportunities for networking, seminar participation, and extracurricular engagement make IIT Indore MTech graduates ideal candidates for industry partnerships and job opportunities. Join us to access a talent pool with the skills and knowledge your industry demands.
                </li>
             
              </ul>
              <img src={workshop} alt="" />
            </div>
          </div>
          <div className="industry-cards">
            <div className="industrycards-head">PhD</div>
            <div className="industrycard-content">
              <div className="stat"><Stats /></div>
            
              <ul>
              Our PhD program at IIT Indore is a dynamic hub of innovation and excellence, intricately weaving a tapestry of academic rigor and industry relevance.
              <br />

                <li>
                Progress Review and Global Exposure: Annual progress seminars ensure continual refinement of theses, complemented by institute-funded international conference travel for a global research perspective.{" "}
                </li>
                <li>
                  {" "}
                  Prestigious Fellowships and Student Symposia: PhD scholars secure esteemed PMRF funding and actively engage in student-led symposiums, showcasing their research prowess and academic leadership.
                  
                </li>
                
                <li>Materials Advantage Chapter: Our active MA chapter <a href="https://materialadvantage.org/">https://materialadvantage.org/</a> connects students with four materials societies, fostering academic growth and networking opportunities.
</li>
<br />
                Our PhD graduates embody a fusion of advanced research skills and practical experience, making them valuable assets in both industry and academia. We invite industry partners to harness this talent pool, offering opportunities for impactful collaborations. Additionally, our graduates are well-suited for postdoctoral research positions, contributing to cutting-edge scientific advancements. 
                

              </ul>
            </div>
          </div>
          <div className="industry-cards2">
            <div className="industrycards-head">Footprints of MEMS</div>
            <div className="industrycard-content">
           
              
                  
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
    <div className="research-head">Number Of Theses Submited</div>
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
