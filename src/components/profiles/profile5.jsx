import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./profile.css";

import prof11 from "./profimages/prof11.jpg"
import { FaEnvelope, FaHome, FaLinkedin, FaPhone, FaResearchgate } from "react-icons/fa";
import {SiGooglescholar } from "react-icons/si";

const profile5 = () => {
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
      <div className="pm-head">Prof. Mrigendra Dubey</div>
      <div className="profile-main">
        <div className="profile-section-1">
          <div className="profile-img">
            <img src={prof11} alt="sd" />
          </div>
          {/* pc=profile content */}

          <div className="pc2">
          

            <ul>
              <li> Associate Professor</li>
              <li>Office		: PoD 1D; 412 </li>
              <li>Email	 (<i><FaEnvelope/></i>)	:mdubey@iiti.ac.in </li>
              <li>Contact  (<i><FaPhone/></i>)		: 3258</li>
            <div className="fac-links">
             <a href="https://drdubey.wixsite.com/iiti" target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
             <a href="https://scholar.google.com/citations?user=9P83G5AAAAAJ "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href="https://www.researchgate.net/profile/Dr-Ajay-Kushwaha-2"target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
             {/* <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fajaykushwaha_%3Flang%3Den "target="_blank"  rel="noreferrer"><i><FaTwitterSquare/></i></a> */}
             <a href="https://in.linkedin.com/in/dr-mrigendra-dubey-a013331a6"target="_blank"  rel="noreferrer"> <i><FaLinkedin/></i></a>
             
             
              
              
             
            </div>
              
            </ul>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
         

          <div>
            <ul>
              <li>Development of multifunctional Soft Materials </li>
              <li>Conductive and Fluorescent Metallogels.</li>
              <li>Supramolecular gels as battery Electrolyte</li>  
              <li> Superabsorbent supramolecular Materials</li>
              <li>Development of Fluorescent Carbon dots.</li>
              <li>Superhydrophobic materials.</li>
              <li>Corrosion Engineering</li>
              
            </ul>
           
    
            
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">ACADEMIC BACKGROUND</span>
          
         

          <ul>
            <li> PhD- Indian Institute of Technology Guwahati, Department of Chemistry, July 2011</li>
            <li>Master’s degree, Department of Chemistry, University of Allahabad, 2005</li>
            <li>
 Bachelor’s degree, University of Allahabad, 2003
</li>
          
            
          </ul>
        </div>
        <div className="pc1">
          <span className="pc1-head">PROFESSIONAL EXPERIENCE</span>
          
          <ul>
            <li>
            Associate Professor, Indian Institute of Technology Indore, India (Feb 2022- )            </li>
            <li>Assistant Professor, Indian Institute of Technology Indore, India (May 2017- Feb 2022)</li>
            <li>
            DST- INSPIRE Faculty, Indian Institute of Technology (BHU) Varanasi (Jan 2015- April 2017)            </li>
            <li>
            Post doctoral fellow: Institute of Chemistry, Academia Sinica, Taipei, Taiwan (Aug 2011- Jul 2012)             </li>
           
            
          </ul>
        </div>


        <div className="pc1">
          <span className="pc1-head">AWARDS AND RECOGNITIONS  </span>
          <div>
         

           <ul>
            <li>Invited Teacher, Indian Academy of Sciences, Bangalore- 2019</li>
            <li>Invited Research Visitor in France  - 2019
</li>
            <li>Young Scientist Award, International Academy of Physical Sciences, Allahabad, India- 2017</li>
            <li>Invited Research Visitor in France (CNRS- Rennes, Paris VI University and ENS-Lyon) – 2016</li>
            <li>Invited Research Visitor in University of Rennes and ENS Lyon, France- 2015</li>
            <li> DST- INSPIRE Faculty Award, Department of Science & Technology, New Delhi, India- 2014</li>
            </ul>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">SELECTED PUBLICATIONS</span>
          <div>
          
            <ul>
            <li>Y. Kumar and M. Dubey*, “A soft ionic diode fabricated using asymmetric ion distribution in Li+-Zn(II)/Cu(II) metallohydrogels”, ACS Appl. mater. interfaces, 15, 9, (2023), 11970-11976, DOI: 10.1021/acsami.2c17950</li>
            <li>Y. Kumar and M. Dubey*, “Li+ - integrated metallohydrogel based mixed conductive electrochemical semiconductor”, Chem. Commun., 58, (2022), 549-552 , DOI: 10.1039/D1CC05796K</li>
            <li> M. Mukherjee, M. K. Dixit, Y. Kumar, A. Kalam and M. Dubey*, “Heat triggered molecular restructuring responses the triple gel-gel-gel transformations in a Li+ -integrated metallogel”, Mol. Syst. Des. Eng., 7, (2022), 1422-1433, DOI: 10.1039/D2ME00146B.</li>
            <li>D-(+)-Glucose-Triggered Metallogel to Metallogel Transition                                                                                                                                                                           C. Mahendar, Manish K. Dixit, Yeeshu Kumar and Mrigendra Dubey*                                                                                                                                                          J. Mater. Chem. C, 2020, 8, 11008-11012 DOI: 10.1039/D0TC02877K</li>
            <li>Y. Kumar, C. Mahendar, A. Kalam and M. Dubey*, “Li+-Zn2+ tailored nanostructured metallohydrogel based mixed ionic-electronic conductor”, Sustainable Energy Fuels, 5, (2021), 1708-1713,DOI: 10.1039/D0SE01821J</li>


            </ul>
            
          </div>
        
        </div>
      
        {/* <div className="pc1">
          <span className="pc1-head">SELECTED PATENTS</span>
        
          <ul>
            <li>Amorphous Metal Oxide films, K.L.G. Goh, H.Q. Le, and Ajay Kushwaha,  20170259300,US Patent (Patent number: 10668500).</li>
          </ul>
        </div> */}
      
       
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default profile5;
