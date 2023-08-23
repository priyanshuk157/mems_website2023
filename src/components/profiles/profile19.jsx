import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./profile.css";
import { FaEnvelope,  FaLinkedin, FaPhone, FaResearchgate,   } from "react-icons/fa";
import {SiGooglescholar } from "react-icons/si";
import prof19 from "./profimages/prof19.jpg"

const Profile19 = () => {
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
      <div className="pm-head">Prof. N B Ballal 
</div>
      <div className="profile-main">
        <div className="profile-section-1">
          <div className="profile-img">
            <img src={prof19} alt="sd" />
          </div>
          {/* pc=profile content */}

          <div className="pc2">
          

            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		: Room No. 211 (G), CITC </li>
              <li>Email	 (<i><FaEnvelope/></i>)	: nbb@iitb.ac.in</li>
              <li>Contact  (<i><FaPhone/></i>)	+91-22-2576-7610</li>
            <div className="fac-links">
            
             <a href=" https://scholar.google.com/citations?user=Jc4fgVQAAAAJ&hl=en "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href=" https://www.researchgate.net/profile/Chandan-Halder "target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
           
             <a href="  www.linkedin.com/in/dr-chandan-halder-0408042b "target="_blank"  rel="noreferrer"> <i><FaLinkedin/></i></a>
             
             
              
              
             
            </div>
              
            </ul>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
            <ul>
              <li>     Process Metallurgy with Special Emphasis on Iron and Steel Making
</li>
              <li>  Thermodynamics, Heat and Mass Transfer, Mathematical Modelling of Processes,</li>
              <li>Archeo-metallurgy and Practices of the Traditional Metal Artisans of India.</li>
            
            </ul>
           
    
            
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">ACADEMIC BACKGROUND</span>
        
          <ul>
            <li>Ph.D (Metallurgy) IIT Kanpur, 1979</li>
            <li>M.Tech (Metallurgy) IIT Kanpur, 1974
</li>
            <li>B.E. (Metallurgy) Mysore University, 1971</li>
            
          </ul>
        </div>
        <div className="pc1">
          <span className="pc1-head">PROFESSIONAL EXPERIENCE</span>
          <ul>
            <li>
            Lecturer: Dec 1979-Oct1982
            </li>
            <li>Assistant Professor: Oct1982-Mar1988
</li>
            <li>Professor : Mar 1988-July2015
</li>
            <li>Emeritus Fellow : Aug2015-Continued
</li>
            
          </ul>
        </div>
        <div className="pc1">
         
        </div>
        <div className="pc1">
          <span className="pc1-head">SELECTED PUBLICATIONS</span>
          <div>
            <ul>
              <li> Sarkar, R., Gupta, P., Basu Somnath and Ballal, N.B. : Dynamic Modeling of LD Converter Steelmaking: Reaction Modeling Using Gibbs’ Free Energy Minimization; Metall.Trans B, Jan 2015
 </li>
              <li> Bedarkar, Swaren, Viswanathan N.N., Ballal, N.B. : "Measurement of thermal conductivity along the radial direction in a vertical cylindrical packed bed,", J.Powder Techn. 2015
 </li>
              <li>  N. B. Ballal: Some Challenges and Opportunities in Blast Furnace Operations, Transactions of the Indian Institute of Metals, 2013;
</li>
              <li>CP.B. Abhale, N.N. Viswanathan and N.B. Ballal’ “Efficient Simulation of Gas Flow in Blast Furnace”, Computers, Materials and Continua, Vol. 10, No. 2, pp. 195-216, 2009.

 </li>
              <li>Maity, S. K., Ballal, N. B., Goldhahn,G. and Kawalla, R. (2008): Development of Low Alloy Titanium and Niobium Microalloyed Ultrahigh Strength Steel through Electroslag Refining. Ironmaking and Steelmaking 35, 2008, p.379-386.
</li>
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

export default Profile19;
