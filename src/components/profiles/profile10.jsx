import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./profile.css";
import { FaEnvelope, FaHome,  FaPhone, FaResearchgate,  FaTwitterSquare } from "react-icons/fa";
import {SiGooglescholar } from "react-icons/si";

import prof3 from "./profimages/prof3.jpg"


const profile10 = () => {
  return (
    <>
       <div>
        <Navbar />
      </div>

      {/* <div className="head4">
        <i className="back-button">
          <a href="faculty">
          </a>
        </i>
        <span>PROFILE</span>
      </div> */}
      <div className="pm-head">Prof. Dhirendra Kumar Rai</div>
      <div className="profile-main">
        <div className="profile-section-1">
          <div className="profile-img">
            <img src={prof3} alt="sd" />
          </div>
          {/* pc=profile content */}

          <div className="pc2">
          

            <ul>
              <li>Assistant Professor </li>
              <li>Office		: POD-1D, Room No. 418</li>
              <li>Email	 (<i><FaEnvelope/></i>)	: dkrai@iiti.ac.in</li>
              <li>Contact  (<i><FaPhone/></i>)		: +91-731660-3278/5118 </li>
            <div className="fac-links">
             <a href="http://people.iiti.ac.in/~dkr/ " target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
             <a href="  https://scholar.google.com/citations?user=pFwwR8UAAAAJ  "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href="https://www.researchgate.net/profile/Dr-Ajay-Kushwaha-2"target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
             <a href="@Dhirend59162402"target="_blank"  rel="noreferrer"><i><FaTwitterSquare/></i></a>
             {/* <a href="https://in.linkedin.com/in/dr-ajay-k-kushwaha-16b46a49?trk=public_post_feed-actor-name "target="_blank"  rel="noreferrer"> <i><FaLinkedin/></i></a> */}
             
             
              
              
             
            </div>
              
            </ul>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
         

          <div>
            <ul>
              <li>Energy Storage (Supercapacitors, Batteries)</li>
              <li>Energy Harvesting (Blue energy, Evaporation Induced generation (EIG)) </li>
              <li>Electrocatalysis (HER, OER, CO2RR) </li>  
              {/* <li>Sensors, Corrosion</li> */}
              <li>CO2 Capture and Utilization (CCU) </li>
              
            </ul>
           
    
            
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">ACADEMIC BACKGROUND</span>
          
         

          <ul>
            <li> Ph.D, Department of Chemistry, Indian Institute of Technology Bombay, 2013</li>
            <li>Master’s degree, Department of Chemistry, Banaras Hindu University, 2006</li>
            <li>Bachelor’s degree, Udai Pratap Autonomous College, 2004</li>
          
            
          </ul>
        </div>
        <div className="pc1">
          <span className="pc1-head">PROFESSIONAL EXPERIENCE</span>
          
          <ul>
            <li>
            Assistant Professor, Department of Metallurgical Engineering and Materials Science, IIT Indore, September 29, 2017 – present             </li>
            <li>DST Young Scientist, Department of Chemistry, IIT Indore, September 23, 2015 – September 28, 20217</li>
            <li>
            Industrial : Position, Group, Company, From – To ( Year)            </li>
            
            
          </ul>
        </div>


        {/* <div className="pc1">
          <span className="pc1-head">AWARDS AND RECOGNITIONS  </span>
          <div>
         

           <ul>
            <li>2023, Best Paper Presentation Award : 11th Asia Conference on Mechanical and Materials Engineering, Japan</li>
            <li>2017, Early Career Research Award : SERB, Gov. of India</li>
            <li>2016, INSPIRE Faculty Award : DST, Gov. of India</li>
            <li>2013, Young Scientist Travel Grant: DST, Gov. of India</li>
            </ul>
          </div>
        </div> */}
        <div className="pc1">
          <span className="pc1-head">SELECTED PUBLICATIONS</span>
          <div>
          
            <ul>
            <li>S. Krishnan, A. K. Gupta, M. K. Singh, N. Guha, and D. K. Rai “Nitrogen-rich Cu-MOF decorated on reduced graphene oxide nanosheets for hybrid supercapacitor applications with enhanced cycling stability” Chemical Engineering Journal, 435 (2022), 135042. (IF: 16.77)</li>
            <li>M. K. Singh, S. Krishnan, and D. K. Rai“Rational design of Ti3C2x MXene coupled with hierarchical CoS for a flexible supercapattery” Electrochimica Acta, 441, (2023), 141825. (IF: 7.34)

</li>
            <li>M. K. Singh, A. K. Gupta, S. Krishnan, N. Guha, and D. K. Rai, “A new hierarchically porous Cu-MOF composited with rGO as an efficient hybrid supercapacitor electrode material” Journal of Energy Storage, 43, 103301 (2021).(IF:8.91)
</li>
            <li>N. Guha, A. K. Gupta, S. Chatterjee, S. Krishnan, M. K. Singh, and D. K. Rai “Environmentally benign melamine functionalized silica-coated iron oxide for selective CO2 capture and fixation into cyclic carbonate” Journal of CO2 Utilization, 49 (2021) 101575. (IF: 8.32)</li>
            <li>S. Krishnan, S. Marimuthu, M. K. Singh, and D. K. Rai “Two Dimensional Ti3C2Tx MXene Nanosheets for CO2 Electroreduction in Aqueous Electrolytes” RSC Energy Advances, DOI: 10.1039/D3YA00117B (2023) release)
</li>


            </ul>
            
          </div>
        
        </div>
      
        {/* <div className="pc1">
          <span className="pc1-head">SELECTED PATENTS</span>
        
          <ul>
            <li>Amorphous Metal Oxide films, K.L.G. Goh, H.Q. Le, and Ajay Kushwaha,  20170259300,US Patent (Patent number: 10668500).</li>
          </ul>
        </div> */}
      
       
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default profile10;
