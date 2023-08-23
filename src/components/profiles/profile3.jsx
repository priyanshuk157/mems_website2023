import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./profile.css";
import { FaEnvelope, FaHome, FaLinkedin, FaPhone, FaResearchgate,  FaTwitterSquare } from "react-icons/fa";
import {SiGooglescholar } from "react-icons/si";
import prof2 from "./profimages/prof2.jpg"

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
      <div className="pm-head">Dr. Rupesh S. Devan</div>
      <div className="profile-main">
        <div className="profile-section-1">
          <div className="profile-img">
            <img src={prof2} alt="sd" />
          </div>
          {/* pc=profile content */}

          <div className="pc2">

            <ul>
              <li>Associate Professor</li>
              <li>Office		: 1D-414 </li>
              <li>Email	 (<i><FaEnvelope/></i>)	:rupes@iiti.ac.in </li>
              <li>Contact  (<i><FaPhone/></i>)		: +91-0731-6603244</li>
            <div className="fac-links">
             <a href="https://rupesh76.wixsite.com/rupesh " target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
             <a href=" https://scholar.google.com/citations?user=UF9U1IkAAAAJ&hl=en  "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href="https://www.researchgate.net/profile/Rupesh-Devan "target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
             <a href="https://twitter.com/RupeshDevan "target="_blank"  rel="noreferrer"><i><FaTwitterSquare/></i></a>
             <a href="https://www.linkedin.com/in/rupesh-devan-5a7a2a4/?originalSubdomain=in "target="_blank"  rel="noreferrer"> <i><FaLinkedin/></i></a>
             
             
              
              
             
            </div>
              
            </ul>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
         

          <div>
            <ul>
              <li>Nano-hetero-architectures </li>
              <li> Energy storage Materials</li>
              <li>Photo-active materials for H2 and water treatment</li>
              
            </ul>
           
    
            
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">ACADEMIC BACKGROUND</span>
          

          <ul>
            <li>Ph.D, Department of Physics, Shivaji University, Kolhapur, 2007</li>
            <li>M.Sc., Department of Physics, Shivaji University, Kolhapur, 2004</li>
            <li>B.Sc., Shivaji University, Kolhapur, 2002.</li>
            
          </ul>
        </div>
        <div className="pc1">
          <span className="pc1-head">PROFESSIONAL EXPERIENCE</span>
          

          <ul>
            <li>
            Associate Professor, MEMS, IIT Indore, Dec. 2018 – Present
            </li>
            <li>Adjunct Faculty, MARC, NDHU, Taiwan, Mar. 2023 – Present</li>
            <li>
            Adjunct Faculty, CEVITS, IIT Indore, Apr. 2021 – Present
            </li>
            <li>
            Assistant Professor, MEMS, IIT Indore, Mar. 2017 – Dec. 2018
            </li>
            <li>
            Associate Professor, Physics, Central University of Punjab, 2016 – Mar. 2017
            </li>
            <li>DST-INSPIRE Faculty, Physics, University of Pune, Jan. 2014 – Jan. 2016</li>
            <li>Post-Doctoral Fellow, Physics, National Dong Hwa University, Taiwan, Aug. 2007 – Dec. 2014</li>
          </ul>
        </div>


        <div className="pc1">
          <span className="pc1-head">AWARDS AND RECOGNITIONS  </span>
          <div>

           <ul>
            <li>Editor, ‘Chinese Journal of Physics’ Elsevier publishers (Since, Jan. 2018) </li>
            <li>Best Research Paper-2023, by Indian Institute of Technology Indore. (Feb. 2023)</li>
            <li>Listed in the World Ranking of Top 2% most Influential Scientists by Stanford University (2021, 2022)</li>
            <li>DUO-India Professor Fellowship Award, Govt. of India and ASEM-DUO, South Korea (2020-22).</li>
            <li>Elected Fellow Maharashtra Academy of Science (Since 2021)</li>
            <li>Outstanding Researcher in Materials Science, by Venus International Foundation, India. (July 2022)</li>
            <li>Excellent grade for INSPIRE Research Project from the Department of Science and Technology (Feb. 2017).</li>
            <li>INSPIRE Faculty Award, (2013) Ministry of Science and Technology, Department of Science and Technology (DST), INDIA.</li>
            <li>Post-Doctoral Fellowship, (Aug. 2007-Dec. 2013) Ministry of Science & Technology (MOST), Taiwan.</li>
           </ul>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">SELECTED PUBLICATIONS</span>
          <div>
          

            <ul>
            <li>S. Bimli,V. Manjunath, S. R. Mulani, A. Miglani, O. S. Game, and R. S. Devan*, “Theoretical investigations of all inorganic Cs2SnI6 double perovskite solar cells for efficiency ~ 30%” (Solar Energy 256 (2023) 76-87) (DOI:  10.1016/j.solener.2023.03.059)</li>
            <li>V. Manjunath, S. Bimli, P. A. Shaikh, S. B. Ogale, and R. S. Devan*, “Understanding the role of inorganic carriers transport layer materials and interfaces in emerging perovskites solar cells” (J. Materials Chemistry C 10 (2022) 15725-15780) (DOI: 10.1039/D2TC02911A)</li>
            <li>V. Manjunath, S. Bimli, R. Biswas, P. N. Didwal, K. K. Haldar, M. Mahajan, N. G. Deshpande, P. A. Bhobe, and R. S. Devan*, “Experimental investigations on morphology controlled bifunctional NiO nano-electrocatalysts for oxygen and hydrogen evolution” (International J. Hydrogen Energy 47 (2022) 39018-39029) (DOI: 10.1016/j.ijhydene.2022.09.054)</li>
            <li>N. Kitchamsetti, M. Samtham, P. N. Didwal, D. Kumar, D. Singh, S. Bimli, P. R. Chikate,  D. A. Basha, S. Kumar, C.-J. Park, S. Chakraborty, and R. S. Devan*, “Theory abide experimental investigations on morphology driven enhancement of electrochemical energy storage performance for manganese titanate perovskites electrodes” (J. of Power Sources 538 (2022) 231525) (DOI: 10.1016/j.jpowsour.2022.231525)</li>
            <li>M. Samtham, D. Singh, K. Hareesh, and R. S. Devan*, “Perspectives of conducting polymer nanostructures for high-performance electrochemical capacitor” (J. of Energy Storage 51 (2022) 104418) (DOI: 10.1016/j.est.2022.104418)</li>
            <li>V. Manjunath, P. Mishra, R. Dobhal, S. Bimli, P. M. Shirage, S. Sen, P. Shaikh, and R. S. Devan*, “Perovskite-based facile NiO/CH3NH3PbI3 heterojunction self-powered broadband photodetector” (ACS Applied Electronic Materials 3 (2021) 4548-4557) (DOI: 10.1021/acsaelm.1c00679)</li>
            </ul>
            
          </div>
        
        </div>
      
        <div className="pc1">
          <span className="pc1-head">BOOKS PUBLISHED</span>
        
          <ul>
            <li>R. S. Chauhgule and R. S. Devan, “Applications of One Dimensional Nanomaterials” (American Scientific Publishers, USA - 2019: ISBN: 1-58883-263-5).</li>
          </ul>
        </div>
      
       
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Profile18;
