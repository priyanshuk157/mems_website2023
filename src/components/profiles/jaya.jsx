import React from "react";

import "./demo.css";
// import { FaAngleLeft } from "react-icons/fa";
import { FaEnvelope,  FaPhone, FaResearchgate } from "react-icons/fa";
import {SiGooglescholar } from "react-icons/si";
import prof44 from "./profimages/muru.jpg"

const profile11 = () => {
  return (
    <>
   

      {/*<div className="head">
        <i className="back-button">
          <a href="faculty">
            <FaAngleLeft />
          </a>
        </i>
        <span>PROFILE</span>
      </div>*/}
<span className="pc1-headmain">	
Dr. Jayaprakash Murugesan</span>
      <div class="main">
            <div class="left">
                <div>
                <img src={prof44} alt="" />
               
                
            
            </div>


            
        <div className="pc2">
            
            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		: Room No. 1D- 608 </li>
              <li>Email	 (<i><FaEnvelope/></i>)	: jayaprakash@iiti.ac.in </li>
              <li>Contact  (<i><FaPhone/></i>)		: - </li>
            <div className="fac-links">
             
             <a href=" https://scholar.google.com/citations?user=P9nZOBsAAAAJ&hl=en&authuser=1"target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href="https://www.researchgate.net/profile/Abhijit-Ghosh-8"target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
            
             
             
              
              
             
            </div>
              
            </ul>
            <div class="aca"><span className="pc1-head">ACADEMIC BACKGROUND</span></div></div>
            <div class="acalist">
<ul>
<li>Ph.D, Materials Research Centre, Indian Institute of Science (IISc) Bangalore, 2012</li>
<br />
            <li> MSc Physics, Department of Physics and Astrophysics, University of Delhi, 2004</li>
            <br />
            <li>BSc Physical Sciences, Maharshi Dayanand University Rohtak , 2002</li>
            
</ul></div>

       
            </div>

            
            <div class="right">
            <div className="pc1">
     
        
        
        
       
        
        
        
        
        
        
        </div>
      </div>

      </div>

    </>
  );
};

export default profile11;
