import React from "react";

import "./demo.css";
// import { FaAngleLeft } from "react-icons/fa";
import { FaEnvelope,  FaLinkedin, FaPhone, FaResearchgate ,FaHome} from "react-icons/fa";
import Table from "react-bootstrap/Table";
import {SiGooglescholar } from "react-icons/si";
import prof1 from "./profimages/prof1.jpg"

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
<span className="pc1-headmain">Prof. Chandan Halder</span>
      <div class="main">
            <div class="left">
                <div>
                <img src={prof1} alt="" />
               
                
            
            </div>


            
        <div className="pc2">
            
            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		:Room No. 211 (G), CITC </li>
              <li>Email	 (<i><FaEnvelope/></i>)	: chalder@iiti.ac.in </li>
              <li>Contact  (<i><FaPhone/></i>)		:  +91-07316603182 </li>
           
            {/* <a href="https://iiti.ac.in/people/~ajaykk " target="_blank" rel="noreferrer"> <i><FaHome/></i></a> */}
            <div className="homepage_div" >
              <span className="homepage" >Home Page</span>
            
              <a href="http://people.iiti.ac.in/~dkr/ " target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
              </div>
              <div className="links">
             <a href=" https://scholar.google.com/citations?user=Jc4fgVQAAAAJ&hl=en  "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href="https://www.researchgate.net/profile/Chandan-Halder"target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
             
             <a href="www.linkedin.com/in/dr-chandan-halder-0408042b"target="_blank"  rel="noreferrer"> <i><FaLinkedin/></i></a>
             
             </div>
             
             
              
              
             
          
              
            </ul>
            <div class="aca"><span className="pc1-head">ACADEMIC BACKGROUND</span></div></div>
            <div class="acalist">
            <ul>
            <li>Ph.D, Department of Metallurgical and Materials Engineering, IIT Kharagpur, 2016</li>
            <br /><li>M.Tech, Department of Metallurgical and Materials Engineering, IIT Kharagpur, 2011</li>
            <br /><li>B.Tech, Department of Metallurgical and Materials Engineering, NIT Durgapur, 2009</li>
            
          </ul></div>

         
            
            </div>

            
            <div class="right">
            <div className="pc1">
              
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
          
        <li>Mechanistic Diffusion Modeling</li>
        <li> Multi-Scale Finite Element Modeling</li>
        <li> Modeling and Simulation of Microstructure Evolution</li>
        <li> Neural-Network based Alloy Design</li>



          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">POSITIONS HELD</span>
          <ul>
            <li>
            Assistant Professor, MEMS Department, IIT Indore, 2022 – present
            </li>
            <li> Industrial : Senior Manager, R&D, Mishra Dhatu Nigam Limited, Hyderabad, 2016 – 2022</li>
           
            
            
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
                  C. Halder, L. Madej & M. Pietrzyk, “Discrete micro-scale cellular automata model for modelling phase   
   transformation during heating of dual phase steels”, Archives of Civil and Mechanical Engineering, 14(1),  
   (2014) 96-103, https://doi.org/10.1016/j.acme.2013.07.001

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  C. Halder, A. Karmakar, Sk. Md. Hasan, D. Chakrabarti, M. Pietrzyk & N. Chakraborti, “Effect of Carbon 
   Distribution During the Microstructure Evolution of Dual-Phase Steels Studied Using Cellular Automata, Genetic  
   Algorithms, and Experimental Strategies”, Metallurgical and Materials Transaction A, 47, (2016), 5890-5906, 
   https://doi.org/10.1007/s11661-016-3725-y

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    C. Halder, D. Bachniak, L. Madej, N. Chakraborti & M. Pietrzyk, “Sensitivity analysis of the finite difference 2-D 
   cellular automata model for phase transformation during heating”, ISIJ International, 55(1), (2015) 285-292,  
   2015. https://doi.org/10.2355/isijinternational.55.285.
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                  C. Halder, L. Madej, M. Pietrzyk & N. Chakraborti, “Optimization of cellular automata model for the heating of 
    dual-phase steel by genetic algorithm and genetic programming”, Materials and Manufacturing Processes,
    30(4), (2015), 552-562, https://doi.org/10.1080/10426914.2014.994765.
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                  C. Halder, K.L. Prasanna; S. Dixit, S. Pal & S.K. Jha, “Bi-objective Optimization of Maraging Steel Produced by 
    Vacuum Induction Melting Using Evolutionary Algorithms”, Transactions of the Indian Institute of Metals, 74(5),  
    (2021), 1193-1201, https://doi.org/10.1007/s12666-020-02153-x.
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
       
        <div className="pc1">
          <span className="pc1-head">AWARDS AND ACHIEVEMENTS</span>
          <div>
          {/* Inspire Faculty Award, DST, 2017 */}
          </div>
        </div>
       
        
        
        
        
        
        
        </div>
      </div>

      </div>

     
    </>
  );
};

export default profile11;
