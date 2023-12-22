import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./demo.css";
// import { FaAngleLeft } from "react-icons/fa";
import { FaEnvelope, FaHome, FaLinkedin, FaPhone, FaResearchgate } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import {SiGooglescholar } from "react-icons/si";
import prof1 from "./profimages/drpaul.jpg"

const drpaul = () => {
  return (
    <>
      
      <span className="pc1-headmain">Prof. Dr. Ahoutou Paul KOUAKOU</span>
      {/*<div className="head">
        <i className="back-button">
          <a href="faculty">
            <FaAngleLeft />
          </a>
        </i>
        <span>PROFILE</span>
      </div>*/}

      <div class="main">
            <div class="left">
                <div>
                <img src={prof1} alt="" />
               
                
            
            </div>


            
        <div className="pc2">
            
            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		:-- </li>
              <li>Email	 (<i><FaEnvelope/></i>)	:-</li>
              <li>Contact  (<i><FaPhone/></i>)		: -</li>
            
              
            </ul>
            <div class="aca"><span className="pc1-head">ACADEMIC BACKGROUND</span></div></div>
            <div class="acalist">
<ul>
<li>University of Lorraine (France) 2004</li>
<br />
            <li> Master's degree University of Lorraine (France),2001 </li>
            <br />
            <li>DEUG Université Félix Houphouët-Boigny ,1998</li>
            
</ul></div>

         
            
            </div>

            
            <div class="right">
            <div className="pc11">
              
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
          
          <li>     Carbon based thin films materials deposition by CVD and PVD assisted by plasma
</li>
              <li>  characterization of the properties of the films (nano-indentation, XPS, SIMS)</li>
              <li>Plasma diagnostic by Optical emission spectroscopy</li>



          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">POSITIONS HELD</span>
          <ul>
            <li>
            Visiting Professor under C. V. Raman International Fellowship
            </li>
            <li>Assistant professor at Université NANGUI ABROGOUA</li>
            
            
          </ul>
        </div>
        

        <div className="pc1">
          <span className="pc1-head">Projects</span>
          <ul>
            <li>
            Thin film solar cells, perovskite solar cell.
            <br />
-Optimization of the spin-coated Spiro-OMeTAD HTM and CH3NH3PbI3 absorber
<br />
-Characterization of the films structural, chemical, morphological, optical and electrical properties
<br />
-Fabrication and characterization of perovskite solar cells obtained by spin-coating
            </li>
            
            
          </ul>
        </div>
        
      
        
        
        
        
        
        
        </div>
      </div>

      </div>

     
    </>
  );
};

export default drpaul;
