import React from "react";

import "./demo.css";
// import { FaAngleLeft } from "react-icons/fa";
import { FaEnvelope, FaHome, FaLinkedin, FaPhone, FaResearchgate } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import {SiGooglescholar } from "react-icons/si";
import kd from "./profimages/kd.jpg"

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
<span className="pc1-headmain">Prof. Khushubo Devi</span>
      <div class="main">
            <div class="left">
                <div>
                <img src={kd} alt="" />
               
                
            
            </div>


            
        <div className="pc2">
           
            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		: Room No. 1D- 608 </li>
              <li>Email	 (<i><FaEnvelope/></i>)	: khushubo@iiti.ac.in  </li>
              <li>Contact  (<i><FaPhone/></i>)		:+91-8858588259 </li>
            <div className="fac-links">
            {/* <a href="sa" target="_blank" rel="noreferrer"> <i><FaHome/></i></a> */}
             <a href=" https://scholar.google.com/citations?user=sCL9Zl4AAAAJ&hl=en   "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href="https://www.researchgate.net/profile/Khushubo-Devi "target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
             
             <a href="https://www.linkedin.com/in/khushubo-tiwari-09872462/  "target="_blank"  rel="noreferrer"> <i><FaLinkedin/></i></a>
             
             
              
              
             
            </div>
              
            </ul>
            <div class="aca"><span className="pc1-head">ACADEMIC BACKGROUND</span></div></div>
            <div class="acalist">
            <ul>
            <li>Ph.D (Materials Science and Engineering), IIT Kanpur, 2021</li>
           <br /> <li>M.Tech (Metallurgical Engineering), IIT (BHU), Varanasi, 2015

</li>
            <br /><li>B.Tech (Metallurgical Engineering), NIT Raipur, 2012
.</li>
            
          </ul></div>

       
            </div>

            
            <div class="right">
            <div className="pc1">
              
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
          
          <ul>
              <li>          Sustainable metallurgy and materials 
</li>
              <li>  Green Steel, Hydrogen plasma-based/ Direct reduction of iron ores.</li>
              <li>In-situ Heating TEM, Environmental In-Situ TEM
.</li>
              <li>Phase Transformation, Nanomaterials.</li>
            </ul>


          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">POSITIONS HELD</span>
          <ul>
          <li>
            Alexander-von-Humboldt postdoctoral fellow, Dept. of Microstructure Physics and Alloy Design, Max-Planck-Institut für Eisenforschung GmbH, Germany, January 2022 – November 2023
            </li>
            <li>Research Associate, Materials Science and Engineering, Indian Institute of Technology Kanpur, India, August 2021 – December 2021.</li>
            <li>
            Industrial: Graduate Engineer Trainee, Steel Exchange India Limited, Visakhapatnam, India, July 2012 – October 2012. 

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
                  Khushubo Tiwari, Paliwal, M, Biwas, K.. Phase transformation of Ag–Cu alloy nanoparticle embedded in Ni matrix. Journal of Materials Research (2022), 37(23), 4124-4139
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  Khushubo Tiwari, M. M Devi, K Biswas, K. Chattopadhyay, Phase Transformation in Nanoalloys, Progress in Materials Science, p.100794 (2021) DOI: 10.1016/j.pmatsci.2021.100794.
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    Khushubo Tiwari, M Paliwal, M Verma, and K Biswas, Solidification Behaviour of Nanoscale Tri-phasic Bismuth-Indium-Tin Alloy Particles Embedded in Al–Cu–Fe Quasicrystalline Matrix, Journal of Alloys and Compounds, (2021) 867, 159011
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                  Khushubo Tiwari, K. Biswas, M. Palliwal, B. Majumdar, H.-J. Fecht, Melting behaviour of tri-phasic Bi44In32Sn23 alloy nanoparticle embedded in icosahedral quasicrystalline matrix, Journal of Alloys and Compounds, (2020), 834, 155160
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                  Khushubo Tiwari, Gautam G, Kumar N, Mohan A, Mohan S. Effect of primary silicon refinement on mechanical and wear properties of a hypereutectic Al-Si alloy. Silicon. 10:2227-39 (2018)
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
            <li>First recipient of Alexander von Humboldt fellowship through the Henritte Herz (HH) Scouting program, 2022.</li>
            <li>Alexander von Humboldt Foundation research fellowship for Postdoctoral position at MaxPlanck-Institute für Eisenforschung (MPIE) Germany, 2022</li>
            <li>Teaching Assistance in “Phase Transformation in Materials” and “Nanomaterials and their Properties” course offered by National Programme on Technology Enhanced Learning (NPTEL) sponsored by Ministry of Human Resource Development (MHRD), India (2018 & 2021).</li>
            <li>Received first prize in the poster presentation on Research Scholar Day Padarth-2019 held at Indian Institute of Technology, Kanpur, India, 2019.</li>
            <li>Received NIMS (National Institute for Materials Science) internship fellowship award for a period of three months in Japan, 2018.</li>
            <li>Active reviewer for Transaction of Indian Institute of Metals (IIM), Materialia, Journal of Alloys and Compounds, Materials Characterization, Philosophical Magazine.</li>
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
