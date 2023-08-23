import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./profile.css";
import { FaEnvelope, FaHome,  FaPhone, FaResearchgate,   } from "react-icons/fa";
import {SiGooglescholar } from "react-icons/si";
import prof14 from "./profimages/prof18.jpg"

const Profile14 = () => {
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
      <div className="pm-head">Prof. Ram Sajeevan Maurya</div>
      <div className="profile-main">
        <div className="profile-section-1">
          <div className="profile-img">
            <img src={prof14} alt="sd" />
          </div>
          {/* pc=profile content */}

          <div className="pc2">
          

            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		: Chromium, POD 1D-613,  </li>
              <li>Email	 (<i><FaEnvelope/></i>)	:ramsajeevan@iiti.ac.in </li>
              <li>Contact  (<i><FaPhone/></i>)		:0731-660-3202, +91-8309350644</li>
            <div className="fac-links">
             <a href="https://sites.google.com/view/kvvamsi/home " target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
             <a href=" http://scholar.google.com/citations?user=6f8zrTcAAAAJ&hl=en "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href="https://www.researchgate.net/profile/Ram-Maurya-7 "target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
            
             
             
              
              
             
            </div>
              
            </ul>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
            <ul>
              <li>         Alloys Development: Bulk metallic glasses, High Entropy Alloys, Oxide dispersion strengthen alloys, Tungsten based alloys, Metal based composites
</li>
              <li>  Synthesis and characterization: Powder Metallurgy, Sintering, Liquid Metallurgy, Materials structure-properties correlation</li>
              <li>Application’s fields: Aerospace, Automobile, Bio-implant, Defense and Nuclear sector</li>
             
            </ul>
           
    
            
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">ACADEMIC BACKGROUND</span>
        
          <ul>
            <li>Ph.D, Metallurgical and Materials Engineering, IIT Kharagpur, 2017</li>
            <li>B.Tech, Metallurgical and Materials Engineering, NIT Durgapur, 2011
</li>
            <li></li>
            
          </ul>
        </div>
        <div className="pc1">
          <span className="pc1-head">PROFESSIONAL EXPERIENCE</span>
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
            <li>
            
            </li>
          </ul>
        </div>
        <div className="pc1">
          <span className="pc1-head">AWARDS AND RECOGNITIONS  </span>
          <div>
           <ul>
            <li>2017, National Post-Doctoral Fellowship, SERB</li>
            <li>2019, Early Career Research Award, SERB</li>
            <li></li>
           </ul>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">SELECTED PUBLICATIONS</span>
          <div>
            <ul>
              <li> Gopi Talluri, M. Nagini, D. Arvindha Babu, B.S. Murty, R.S. Maurya, "Microstructural verification of the theoretically designed novel eutectic multi-principal element alloy", Materials Letters, 344, (2023), 134420, https://doi.org/10.1016/j.matlet.2023.134420</li>
              <li> Gopi Talluri, D. Arvindha Babu, V.S. Hariharan, B.S. Murty, R.S. Maurya, "A simplistic accelerated design methodology for eutectic multi-principal element alloys", Journal of Alloys and Compounds, 960, (2023), 170834, https://doi.org/10.1016/j.jallcom.2023.170834</li>
              <li> V Suman, RS Maurya, M Debata, D Chaira, "Effect of Si addition on phase evolution and microstructure in Y2O3 dispersed tungsten (W) and W-based alloys synthesized via mechanical alloying and consecutive conventional sintering", Materials Today Communications, 31, (2022), 103341, https://doi.org/10.1016/j.mtcomm.2022.103341
</li>
              <li>A Sahu, RS Maurya, S Dinda, T Laha, "Phase Evolution-Dependent Nanomechanical Properties of Al86Ni8Y6 and Al86Ni6Y4.5Co2La1.5 Spark Plasma-Sintered Bulk Amorphous Composites", Metallurgical and Materials Transactions A, 51, (2020), 5110-5119, 10.1007/s11661-020-05916-9</li>
              <li>Ram S. Maurya, A. Sahu, T. Laha, "Quantitative phase analysis in Al86Ni8Y6 bulk glassy alloy synthesized by consolidating mechanical alloyed amorphous powder via spark plasma sintering", Materials & Design, 93, (2016), 96-103, https://doi.org/10.1016/j.matdes.2015.12.129</li>
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

export default Profile14;
