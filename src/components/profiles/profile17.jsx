import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./profile.css";
import { FaEnvelope, FaHome, FaLinkedin, FaPhone, FaResearchgate,  FaTwitterSquare } from "react-icons/fa";
import {SiGooglescholar } from "react-icons/si";
import prof17 from "./profimages/prof4.jpg"

const Profile17 = () => {
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
      <div className="pm-head">Prof. Nisheeth Kumar Prasad</div>
      <div className="profile-main">
        <div className="profile-section-1">
          <div className="profile-img">
            <img src={prof17} alt="sd" />
          </div>
          {/* pc=profile content */}

          <div className="pc2">
          

            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		: 211(h), Hub Building (CITC) </li>
              <li>Email	 (<i><FaEnvelope/></i>)	: nisheeth @iiti.ac.in</li>
              <li>Contact  (<i><FaPhone/></i>)		: 0731-660-3175 (O)/ 7726938388 (M)</li>
            <div className="fac-links">
             <a href="https://sites.google.com/iiti.ac.in/nisheeth/about-me " target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
             <a href=" https://scholar.google.com/citations?user=vjypzxYAAAAJ&hl=en "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href="https://www.researchgate.net/profile/Nisheeth-Kumar "target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
             <a href="https://twitter.com/Nishit568 "target="_blank"  rel="noreferrer"><i><FaTwitterSquare/></i></a>
             <a href="https://www.linkedin.com/in/dr-nisheeth-kumar-prasad-272a7095/ "target="_blank"  rel="noreferrer"> <i><FaLinkedin/></i></a>
             
             
              
              
             
            </div>
              
            </ul>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
            <ul>
              <li>          Processing-structure-corrosion property correlation of metals and alloys</li>
              <li>  Anode design for cathodic protection: sacrificial and ICCP</li>
              <li>Protective coatings for extreme environments</li>
              <li>Sustainable corrosion prevention</li>
            </ul>
           
    
            
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">ACADEMIC BACKGROUND</span>
        
          <ul>
            <li>Ph.D, Department of Materials Science and Engineering, IIT Kanpur, 2021</li>
            <li>M.Tech, Department of Metallurgical and Materials Engineering, MNIT Jaipur, 2015</li>
            <li>B.Tech, Department of Metallurgical Engineering, BPUT Rourkela, 2013</li>
            
          </ul>
        </div>
        <div className="pc1">
          <span className="pc1-head">PROFESSIONAL EXPERIENCE</span>
          <ul>
            <li>
            Assistant Professor, Department of Metallurgical Engineering and Materials Science, IIT Indore, (Jul 2022 - Present)
            </li>
            <li>Research Associate, Corrosion Research Laboratory, Hindustan Petroleum Green R&D Centre, Bengaluru (Mar, 2022 - Jul, 2022)</li>
            <li>
            Research Associate-I, Materials Science and Engineering, IIT Kanpur, (Oct, 2021 - Mar, 2022)
            </li>
           
          </ul>
        </div>
        <div className="pc1">
          <span className="pc1-head">AWARDS AND RECOGNITIONS  </span>
          <div>
           <ul>
            <li>2021, Outstanding PhD thesis award at IIT Kanpur</li>
            <li>2021, Best paper presentation award in Young Student and Scientist Forum at CORCON, NACE International</li>
            <li>2015, Gold Medal during M.Tech</li>
            <li>2012-13, Overall best academic performance award during B.Tech</li>
           </ul>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">SELECTED PUBLICATIONS</span>
          <div>
            <ul>
              <li> N.K. Prasad, H. Kancharla, B. Bhushan, S. Kundu and K. Mondal, Effect of Al and Zn addition on the active behavior of the high P pig iron-based composite anodes, J. Appl. Electrochem. 53 (2023) 141-165.</li>
              <li>  N.K. Prasad, A.S. Pathak, S. Kundu and K. Mondal, Highly active and efficient hybrid sacrificial anodes based on high P pig iron, Zn and Mg, J. Electrochem. Soc. 168 (2021) 111504 - 111525. </li>
              <li>  N.K. Prasad, A.S. Pathak, S. Kundu and K. Mondal, Novel hybrid sacrificial anodes based on high phosphorus pig iron and Zn, Corros. Sci. 189 (2021) 109616 - 109634.</li>
              <li>N.K. Prasad, A.S. Pathak, S. Kundu and K. Mondal, Influence of deaeration, Cl- ion and strong oxidizer on the active behavior of the high phosphorus containing pig iron and subsequent effect on the sacrificial anode behavior, Met. Mater. Int. 28 (2022) 2083 - 2102.</li>
              <li>N.K. Prasad, A.S. Pathak, C. Panchal, S. Kundu and K. Mondal, On the novel approach of sacrificial cathodic protection of mild steel in simulated concrete pore solution and concrete mortar by high phosphorus pig iron anodes, J. Mater. Res. Technol. 14 (2021) 582 – 602.</li>
              </ul>
            {/* <Table>
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
                    .
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
                    {" "}
                    Yolita M. Eggeler, K. V. Vamsi,  and Tresa M. Pollock, “Precipitate shearing, fault energies and solute segregation to planar faults in Ni-, CoNi- and Co- base superalloys”, Review Article in Annual Review of Materials Research, 51 (2021), 209. https://doi.org/10.1146/annurev-matsci-102419-011433 
                  </td>
                </tr>
              </tbody>
            </Table> */}
          </div>
        
        </div>
      

      
       
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Profile17;
