import React from "react";

import "./demo.css";
// import { FaAngleLeft } from "react-icons/fa";
import { FaEnvelope, FaHome,  FaPhone, FaResearchgate,  FaTwitterSquare } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import {SiGooglescholar } from "react-icons/si";
import prof3 from "./profimages/prof3.jpg"

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
<span className="pc1-headmain">Prof. Dhirendra Kumar Rai</span>
      <div class="main">
            <div class="left">
                <div>
                <img src={prof3} alt="" />
               
                
            
            </div>


            
        <div className="pc2">
          
            <ul>
              <li>Designation	: Associate Professor</li>
              <li>Office		: Room No. 1D- 418 </li>
              <li>Email	 (<i><FaEnvelope/></i>)	: dkrai@iiti.ac.in </li>
              <li>Contact  (<i><FaPhone/></i>)		: +91-731660-3278/5118   </li>

              <div className="homepage_div" >
              <span className="homepage" >Home Page</span>
            
              <a href="http://people.iiti.ac.in/~dkr/ " target="_blank" rel="noreferrer"> <i><FaHome/></i></a></div>
           
             
            <div className="links">
            <a href="  https://scholar.google.com/citations?user=pFwwR8UAAAAJ  "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
          
            
          <a href="https://www.researchgate.net/profile/Dhirendra-Rai"target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
         
       
          <a href="@Dhirend59162402"target="_blank"  rel="noreferrer"><i><FaTwitterSquare/></i></a>

            </div>
              

            
              
            </ul>
            <div class="aca"><span className="pc1-head">ACADEMIC BACKGROUND</span></div></div>
            <div class="acalist">
            <ul>
            <li> Ph.D (Department of Chemistry), IIT Bombay, 2013</li>
            <br /><li>Master’s degree (Department of Chemistry), Banaras Hindu University, 2006</li>
            <br /><li>Bachelor’s degree, VBS Purvanchal University, Jaunpur, 2004</li>
          
            
          </ul></div>
            
            </div>

            
            <div class="right">
            <div className="pc1">
              
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
          <span className="pc1-head">POSITIONS HELD</span>
          <ul>
          <li>
          Associate Professor, Department of Metallurgical Engineering and Materials Science, IIT Indore, 2024 – present             </li>
          <li>
            Assistant Professor, Department of Metallurgical Engineering and Materials Science, IIT Indore, September 2017 – October 2023            </li>
            <li>DST Young Scientist, Department of Chemistry, IIT Indore, September 23, 2015 – September 28, 2017</li>
        
            
            
            
          </ul>
        </div>
        
        
        <div className="pc1">
          <span className="pc1-head">PUBLICATIONS</span>
          <div>
            <Table>
              <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th> Publication Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                  S. Krishnan, A. K. Gupta, M. K. Singh, N. Guha, and D. K. Rai “Nitrogen-rich Cu-MOF decorated on reduced graphene oxide nanosheets for hybrid supercapacitor applications with enhanced cycling stability” Chemical Engineering Journal, 435 (2022), 135042. (IF: 16.77)
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  M. K. Singh, S. Krishnan, and D. K. Rai“Rational design of Ti3C2x MXene coupled with hierarchical CoS for a flexible supercapattery” Electrochimica Acta, 441, (2023), 141825. (IF: 7.34)
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    M. K. Singh, A. K. Gupta, S. Krishnan, N. Guha, and D. K. Rai, “A new hierarchically porous Cu-MOF composited with rGO as an efficient hybrid supercapacitor electrode material” Journal of Energy Storage, 43, 103301 (2021).(IF:8.91)
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                  N. Guha, A. K. Gupta, S. Chatterjee, S. Krishnan, M. K. Singh, and D. K. Rai “Environmentally benign melamine functionalized silica-coated iron oxide for selective CO2 capture and fixation into cyclic carbonate” Journal of CO2 Utilization, 49 (2021) 101575. (IF: 8.32)
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                  S. Krishnan, S. Marimuthu, M. K. Singh, and D. K. Rai “Two Dimensional Ti3C2Tx MXene Nanosheets for CO2 Electroreduction in Aqueous Electrolytes” RSC Energy Advances, DOI: 10.1039/D3YA00117B (2023)
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">AWARDS AND ACHIEVEMENTS</span>
          <div>
          "Best Researcher Award" by International Research Awards on New Science Innovations (NESIN)(2020)
          </div>
        </div>
        
       
        
        
        
        
        
        
        </div>
      </div>

      </div>

      
    </>
  );
};

export default profile11;
