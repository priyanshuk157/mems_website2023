import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
// import "./profile.css";
import { FaEnvelope, FaHome, FaLinkedin, FaPhone, FaResearchgate,  FaTwitterSquare } from "react-icons/fa";
import {SiGooglescholar } from "react-icons/si";
import prof18 from "./profimages/samal.jpg"

const Profile18 = () => {
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
      <div className="pm-head">Prof. Sumanta samal</div>
      <div className="profile-main">
        <div className="profile-section-1">
          <div className="profile-img">
            <img src={prof18} alt="sd" />
          </div>
          {/* pc=profile content */}

          <div className="pc2">
          

            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		: POD 1D-411 </li>
              <li>Email	 (<i><FaEnvelope/></i>)	: sumanta@iiti.ac.in </li>
              <li>Contact  (<i><FaPhone/></i>)		: +91 0731-660-3252</li>
            <div className="fac-links">
             <a href="https://iiti.ac.in/people/~sumanta/index.html " target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
             <a href=" https://scholar.google.co.in/citations?user=_ovvQcQAAAAJ&hl=en
 "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href="https://www.researchgate.net/profile/Sumanta_Samal?ev=hdr_xprf "target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
             <a href=" https://twitter.com/Sumanta68627551 "target="_blank"  rel="noreferrer"><i><FaTwitterSquare/></i></a>
             <a href="https://www.linkedin.com/in/sumanta-samal-a8a2aa189/"target="_blank"  rel="noreferrer"> <i><FaLinkedin/></i></a>
             
             
              
              
             
            </div>
              
            </ul>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
            <ul>
              <li>           Solidification: Experiments and Simulation 
</li>
              <li>  Processing-Structure-Property correlation in multicomponent/high entropy alloys</li>
              <li> Material design for high temperature applications</li>
              <li>Phase equilibria: Materials for the future</li>
            </ul>
           
    
            
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">ACADEMIC BACKGROUND</span>
        
          <ul>
            <li>Ph.D, Dept. of Materials Science and Engineering, Indian Institute of Technology Kanpur, India, 2014</li>
            <li>M.Tech., Dept. of Metallurgical and Materials Engineering, National Institute of Technology (NIT) Rourkela, India, 2009

</li>
<li>M.Sc., Physics (Specialization in solid state physics), Utkal University, Bhubaneswar, Odisha, India, 2007</li>
            <li>B.Sc. [with Physics (Hons)], M.P.C. (Autonomous) College, Baripada, Odisha, India, 2005</li>
            
          </ul>
        </div>
        <div className="pc1">
          <span className="pc1-head">PROFESSIONAL EXPERIENCE</span>
          <ul>
            <li>
            Associate Professor, Department of Metallurgy Engineering and Materials Science, Indian Institute of Technology Indore, India, November 22, 2022 - contd.
            </li>
            <li>Assistant Professor, Department of Metallurgy Engineering and Materials Science, Indian Institute of Technology Indore, India, April 10, 2017 - November 21, 2022.</li>
            <li>
            Institute Post Doctoral Fellow, Department of Metallurgical and Materials Engineering, Indian Institute of Technology Madras, India, April 9, 2014 - April 8, 2017.
            </li>
            
            
          </ul>
        </div>
        <div className="pc1">
          <span className="pc1-head">AWARDS AND RECOGNITIONS  </span>
          <div>
           <ul>
            <li>International Travel Support (ITS)-SERB to attend the “7th International Conference on Solidification and Gravity (SG’18)” to be held during 03/09/2018 to 06/09/2018 at Miskolc - Lillafüred, Hungary.</li>
            
           </ul>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">SELECTED PUBLICATIONS</span>
          <div>
            <ul>
              <li>  R. Jain, M.R. Rahul, P. Chakraborty, R. K. Sabat, S. Samal, N. Park,G. Phanikumar, R. Tewari, Integrated modeling, ANN, and experimental approach to understand the hot deformation behavior of Co-Cr-Fe-Ni-V high entropy alloy , Journal of Materials Research and Technology, Vol. 25, pp. 840-854, 2023  </li>
              <li>  Girish Khanna R, Sarathkumar Krishnan, Mayank K. Singh, Dhirendra Kumar Rai, S. Samal, A detailed investigation regarding the corrosion and electrocatalytic performance of Fe-Co-Ni-Cr-V high entropy alloy , Electrochimica Acta, doi: 10.1016/j.electacta.2023.142582, 2023 </li>
              <li>  Piyush Kumar, Reliance Jain, M.R. Rahul, Abhijit Ghosh, S. Samal, Gandham Phanikumar, High temperature deformation behavior and processing maps of FeCoNiCrAlTi dual phase high entropy alloy, Metals and Materials International, 27 February 2023, doi: 10.1007/s12540-023-01399-6</li>
              <li>Sandeep Jain, Naveeen L, Vinod Kumar, S. Samal, Effect of Ni and Si alloying elements on the phase evolution, mechanical properties, tribological behaviour of Al-Cu alloys, Materials Chemistry and Physics, Vol. 297, pp. 127421, 2023.</li>
              <li>Sandeep Jain, Piyush Kumar, Vinod Kumar, Abhijit Ghosh,,S. Samal, Solidification simulation of single-phase Fe-Co-Cr-Ni-V high entropy alloy, Philosophical Magazine, pp. 1-21, doi: 10.1080/14786435.2022.2084793, 2022.
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

export default Profile18;
