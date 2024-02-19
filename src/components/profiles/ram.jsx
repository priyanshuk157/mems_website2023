import React from "react";

import "./demo.css";
// import { FaAngleLeft } from "react-icons/fa";
// import "./profile.css";
import { FaEnvelope,   FaPhone, FaResearchgate, FaHome  } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import {SiGooglescholar } from "react-icons/si";
import prof44 from "./profimages/rsm.jpg"

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
<span className="pc1-headmain">Prof. Ram Sajeevan Maurya</span>
      <div class="main">
            <div class="left">
                <div>
                <img src={prof44} alt="" />
               
                
            
            </div>


            
        <div className="pc2">
            
            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		: Chromium, POD 1D-613 </li>
              <li>Email	 (<i><FaEnvelope/></i>)	: ramsajeevan@iiti.ac.in </li>
              <li>Contact  (<i><FaPhone/></i>)		: 0731-660-3202</li>
            <div className="fac-links">
             
            { <a href="https://ramsajeevan.wixsite.com/amorphous-metals-lab " target="_blank" rel="noreferrer"> <i><FaHome/></i></a>}
             <a href=" http://scholar.google.com/citations?user=6f8zrTcAAAAJ&hl=en "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href="https://www.researchgate.net/profile/Ram-Maurya-7 "target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
            
             
             
              
              
             
            </div>
              
            </ul>
            <div class="aca"><span className="pc1-head">ACADEMIC BACKGROUND</span></div></div>
            <div class="acalist">
            <ul>
           
            <li>Ph.D, (Metallurgical and Materials Engineering), IIT Kharagpur, 2017</li>
            <li>B.Tech (Metallurgical and Materials Engineering), NIT Durgapur, 2011
</li>
          
            
          </ul></div>

        
            
            </div>

            
            <div class="right">
            <div className="pc1">
              
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
          
          <li>         Alloys Development: Bulk metallic glasses, High Entropy Alloys, Oxide dispersion strengthen alloys, Tungsten based alloys, Metal based composites
</li>
              <li>  Synthesis and characterization: Powder Metallurgy, Sintering, Liquid Metallurgy, Materials structure-properties correlation</li>
              <li>Application’s fields: Aerospace, Automobile, Bio-implant, Defense and Nuclear sector</li>
             


          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">POSITIONS HELD</span>
          <ul>
            <li>
            Assistant Professor, Metallurgical Engineering and Materials Science, IIT Indore, 2019 – Present
            </li>
            <li>Assistant Professor, Metallurgical and Materials Engineering, NIT Rourkela, 2018 – 2019</li>
            <li>
            Postdoc, Metallurgical and Materials Engineering, IIT Madras, 2017 – 2018
            </li>
            <li>
            Industrial : Assistant System Engineer, TATA, Consultancy Services Ltd, 2011 – 2013
            </li>
            
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
                  Gopi Talluri, M. Nagini, D. Arvindha Babu, B.S. Murty, R.S. Maurya, "Microstructural verification of the theoretically designed novel eutectic multi-principal element alloy", Materials Letters, 344, (2023), 134420, https://doi.org/10.1016/j.matlet.2023.134420
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  Gopi Talluri, D. Arvindha Babu, V.S. Hariharan, B.S. Murty, R.S. Maurya, "A simplistic accelerated design methodology for eutectic multi-principal element alloys", Journal of Alloys and Compounds, 960, (2023), 170834, https://doi.org/10.1016/j.jallcom.2023.170834
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                  V Suman, RS Maurya, M Debata, D Chaira, "Effect of Si addition on phase evolution and microstructure in Y2O3 dispersed tungsten (W) and W-based alloys synthesized via mechanical alloying and consecutive conventional sintering", Materials Today Communications, 31, (2022), 103341, https://doi.org/10.1016/j.mtcomm.2022.103341
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                  A Sahu, RS Maurya, S Dinda, T Laha, "Phase Evolution-Dependent Nanomechanical Properties of Al86Ni8Y6 and Al86Ni6Y4.5Co2La1.5 Spark Plasma-Sintered Bulk Amorphous Composites", Metallurgical and Materials Transactions A, 51, (2020), 5110-5119, 10.1007/s11661-020-05916-9
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                  Ram S. Maurya, A. Sahu, T. Laha, "Quantitative phase analysis in Al86Ni8Y6 bulk glassy alloy synthesized by consolidating mechanical alloyed amorphous powder via spark plasma sintering", Materials & Design, 93, (2016), 96-103, https://doi.org/10.1016/j.matdes.2015.12.129
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
       
        <div className="pc1">
          <span className="pc1-head">AWARDS AND ACHIEVEMENTS</span>
          <div>
          <ul>
            <li>2017, National Post-Doctoral Fellowship, SERB</li>
            <li>2019, Early Career Research Award, SERB</li>
           
           </ul>
          </div>
        </div>
       
        
        
        
        
        
        
        </div>
      </div>

      </div>

     
    </>
  );
};

export default profile11;
