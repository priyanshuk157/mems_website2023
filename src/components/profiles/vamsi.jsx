import React from "react";

import "./demo.css";
// import { FaAngleLeft } from "react-icons/fa";
import { FaEnvelope, FaHome, FaLinkedin, FaPhone, FaResearchgate,  FaTwitterSquare } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import {SiGooglescholar } from "react-icons/si";
import prof18 from "./profimages/prof18.jpg"

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
<span className="pc1-headmain">Prof. K. V. Vamsi</span>
      <div className="main">
            <div className="left">
                <div>
                <img src={prof18} alt="" />
               
                
            
            </div>


            
        <div className="pc2">
            
            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		: Room No. FC 502, Learning Resource Center </li>
              <li>Email	 (<i><FaEnvelope/></i>)	:  kvvamsi@iiti.ac.in </li>
              <li>Contact  (<i><FaPhone/></i>)		: +91-7316603333</li>
            <div className="fac-links">
            <a href="https://kvvamsi20.wixsite.com/vamsi" target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
             <a href=" https://scholar.google.co.in/citations?user=ducGUjAAAAAJ&hl=en  "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href="https://www.researchgate.net/profile/K-V-Vamsi "target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
             <a href="https://twitter.com/kvvamsi "target="_blank"  rel="noreferrer"><i><FaTwitterSquare/></i></a>
             <a href="https://www.linkedin.com/in/kvvamsi/ "target="_blank"  rel="noreferrer"> <i><FaLinkedin/></i></a>
              </div>
              
            </ul>
            <div className="aca"><span className="pc1-head">ACADEMIC BACKGROUND</span></div></div>

            <div className="acalist">
            <ul>
            <li>Ph.D. (Materials Engineering), IISc Bangalore, 2018</li>
            <br /><li>M.E. (Materials Engineering), IISc Bangalore, 2009.
</li>
            <br /><li>B.E. (Metallurgical Engineering), Andhra University College of Engineering, 2006.</li>
            
          </ul></div>
            
            </div>

            
            <div className="right">
            <div className="pc1">
              
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
          
          <ul>
              <li>Alloy design, Structure-property correlations, High-throughput methods. 
</li>
              <li>  Atomistic simulations based on density functional theory, Computational thermodynamics, Integrated Computational Materials Engineering (ICME).</li>
              <li>Planar fault energies, Deformation pathways, High temperature deformation.</li>
              <li>Superalloys, Multi-principal element alloys (MPEAs), Intermetallic compounds.</li>
            </ul>


          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">POSITIONS HELD</span>
          <ul>
          <li>
            Assistant Professor, Metallurgical Engineering and Materials Science, IIT Indore, India (Mar 2023 – present)
            </li>
            <li>Consultant, ICME Group, TCS Research, Pune, India (2022 – 2023)</li>
            <li>
            Postdoctoral Researcher, Materials, University of California Santa Barbara, Santa Barbara, USA (2018 – 2022)
            </li>
            <li>
            Researcher, TATA Steel R&D, Jamshedpur, India (2009 –2010)
            </li>
            <li>
            Senior Engineer, Ispat Industries Ltd., India (2006 –2007)
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
                  K. V. Vamsi, M. A. Charpagne, Tresa M Pollock, "High-throughput approach for estimation of intrinsic barriers in FCC structures for alloy design", Scripta Materialia, 204 (2021) 114126. https://doi.org/10.1016/j.scriptamat.2021.114126
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  K. V. Vamsi and Tresa M. Pollock, “A new proximate structure for the APB(111) in L12 compounds”, Scripta Materialia 182 (2020), 38-42. https://doi.org/10.1016/j.scriptamat.2020.02.038 
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    K. V. Vamsi and S. Karthikeyan, “Modeling APB energies in multicomponent Ni-base superalloys”, Intermetallics 132 (2021), 107124. https://doi.org/10.1016/j.intermet.2021.107124
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                  Yolita M. Eggeler, K. V. Vamsi,  and Tresa M. Pollock, “Precipitate shearing, fault energies and solute segregation to planar faults in Ni-, CoNi- and Co- base superalloys”, Review Article in Annual Review of Materials Research, 51 (2021), 209. https://doi.org/10.1146/annurev-matsci-102419-011433
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                  K.V. Vamsi, S. Karthikeyan, “Full length article
High-throughput estimation of planar fault energies in A3B compounds with L12 structure” https://doi.org/10.1016/j.actamat.2017.10.029
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
            <li>All India GATE rank: 20 (2006)</li>
            <li>Best poster award, 2nd prize in ICSMA-16 (2012)</li>
            <li>Best poster award, 1st prize in Student symposium, Materials Engineering, IISc (2012, 2014)</li>
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
