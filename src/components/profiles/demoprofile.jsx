import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./demo.css";
// import { FaAngleLeft } from "react-icons/fa";
import { FaEnvelope,  FaPhone, FaResearchgate } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import {SiGooglescholar } from "react-icons/si";
import prof44 from "./profimages/ghosh.jpg"

const profile11 = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

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
                <img src={prof44} alt="" />
               
                
            
            </div>


            
        <div className="pc2">
            <span className="pc1-head">Prof. Abhijit Ghosh</span>
            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		: Room No. 1D- 608 </li>
              <li>Email	 (<i><FaEnvelope/></i>)	: aghosh@iiti.ac.in </li>
              <li>Contact  (<i><FaPhone/></i>)		: +91 0731 660 3287 </li>
            <div className="fac-links">
             
             <a href=" https://scholar.google.com/citations?user=P9nZOBsAAAAJ&hl=en&authuser=1"target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href="https://www.researchgate.net/profile/Abhijit-Ghosh-8"target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
            
             
             
              
              
             
            </div>
              
            </ul>
            <div class="aca"><span className="pc1-head">ACADEMIC BACKGROUND</span></div></div>
            <div class="acalist">
            <ul>
            <li>Ph.D, IIT Kharagpur 2016</li>
            <br /><li>M.Tech, IIT Kharagpur 2011</li>
            <br /><li>B.E, BESU Shibpur 2009</li>
            
          </ul></div>

     
            </div>

            
            <div class="right">
            <div className="pc1">
              
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
          
        <li>Crystallographic texture and grain boundary</li>
         
        <li>Martensitic transformation</li>
        <li>Creep and Fracture</li>
        <li>Crystal Plasticity</li>



          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">POSITIONS HELD</span>
          <ul>
            <li>
            Assistant Professor, MEMS Department, IIT Indore, November 2017 – present
            </li>
            <li>Post Doctoral Fellow, Department of Materials Engineering, IISC Bangalore, March 2016- October 2017</li>
           
            
            
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
                  V. Jain, P. Modak, S. Patra, A. Ghosh, Origin of Goss texture in grain oriented electrical steel: Role of shear bands,
Materialia. 22 (2022) 101398.
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  P. Kumar, S. Samal, A. Ghosh, Effect of hot rolling and annealing on microstructure and mechanical properties of
the Fe-Co-Cr-Ni-V-Zrx(x = 0-5) high entropy alloys, J. Alloys Compd. (2023) 172447.

                    .
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    V. Jain, S. Patra, C. Halder, S.M. Hasan, A. Ghosh, Study on the formation of alligator crack and edge crack in high
silicon grain oriented electrical steel during cold rolling, J. Appl. Phys. 132 (2022) 105101.
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                  K. Barat, A. Ghosh, A. Doharey, S. Mukherjee, A. Karmakar, Crystallographic evaluation of low cycle fatigue crack
growth in a polycrystalline Ni based superalloy, Int. J. Plast. 149 (2022) 103174.
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                  V. Jain, P. Kumar, S. Bagui, C. Halder, S. Patra, A. Ghosh, Comprehensive study on the through-process Goss
texture evolution in Fe-3.78 wt.%Si grain oriented electrical steel, Mater. Chem. Phys. 309 (2023) 128428.
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
       
        <div className="pc1">
          <span className="pc1-head">AWARDS AND ACHIEVEMENTS</span>
          <div>
          Inspire Faculty Award, DST, 2017
          </div>
        </div>
       
        
        
        
        
        
        
        </div>
      </div>

      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default profile11;
