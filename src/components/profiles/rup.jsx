import React from "react";

import "./demo.css";
// import { FaAngleLeft } from "react-icons/fa";
import { FaEnvelope, FaHome, FaLinkedin, FaPhone, FaResearchgate,  FaTwitterSquare } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import {SiGooglescholar } from "react-icons/si";
// import prof44 from "./profimages/ghosh.jpg"
import prof2 from "./profimages/prof2.jpg"

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
<span className="pc1-headmain">Dr. Rupesh S. Devan</span>
      <div class="main">
            <div class="left">
                <div>
                <img src={prof2} alt="" />
               
                
            
            </div>


            
        <div className="pc2">
           
            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		: Room No. 1D-414 </li>
              <li>Email	 (<i><FaEnvelope/></i>)	: rupes@iiti.ac.in</li>
              <li>Contact  (<i><FaPhone/></i>)		:  +91-0731-6603244 </li>
            <div className="fac-links">
             
            <a href="https://rupesh76.wixsite.com/rupesh " target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
             <a href=" https://scholar.google.com/citations?user=UF9U1IkAAAAJ&hl=en  "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href="https://www.researchgate.net/profile/Rupesh-Devan "target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
             <a href="https://twitter.com/RupeshDevan "target="_blank"  rel="noreferrer"><i><FaTwitterSquare/></i></a>
             <a href="https://www.linkedin.com/in/rupesh-devan-5a7a2a4/?originalSubdomain=in "target="_blank"  rel="noreferrer"> <i><FaLinkedin/></i></a>
             
             
             
              
              
             
            </div>
              
            </ul>
            <div class="aca"><span className="pc1-head">ACADEMIC BACKGROUND</span></div></div>
            <div class="acalist">
            <ul>
            <li>Ph.D, Department of Physics, Shivaji University, Kolhapur, 2007</li>
            <br />
            <li>M.Sc., Department of Physics, Shivaji University, Kolhapur, 2004</li>
            <br />
            <li>B.Sc., Shivaji University, Kolhapur, 2002.</li>
            
          </ul></div>

         
            
            </div>

            
            <div class="right">
            <div className="pc1">
              
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
          
          <li>Nano-hetero-architectures </li>
              <li> Energy storage Materials</li>
              <li>Photo-active materials for H2 and water treatment</li>



          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">POSITIONS HELD</span>
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
                  S. Bimli,V. Manjunath, S. R. Mulani, A. Miglani, O. S. Game, and R. S. Devan*, “Theoretical investigations of all inorganic Cs2SnI6 double perovskite solar cells for efficiency ~ 30%” (Solar Energy 256 (2023) 76-87) (DOI:  10.1016/j.solener.2023.03.059)
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  V. Manjunath, S. Bimli, P. A. Shaikh, S. B. Ogale, and R. S. Devan*, “Understanding the role of inorganic carriers transport layer materials and interfaces in emerging perovskites solar cells” (J. Materials Chemistry C 10 (2022) 15725-15780) (DOI: 10.1039/D2TC02911A)
                    
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    V. Manjunath, S. Bimli, R. Biswas, P. N. Didwal, K. K. Haldar, M. Mahajan, N. G. Deshpande, P. A. Bhobe, and R. S. Devan*, “Experimental investigations on morphology controlled bifunctional NiO nano-electrocatalysts for oxygen and hydrogen evolution” (International J. Hydrogen Energy 47 (2022) 39018-39029) (DOI: 10.1016/j.ijhydene.2022.09.054)
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                  N. Kitchamsetti, M. Samtham, P. N. Didwal, D. Kumar, D. Singh, S. Bimli, P. R. Chikate,  D. A. Basha, S. Kumar, C.-J. Park, S. Chakraborty, and R. S. Devan*, “Theory abide experimental investigations on morphology driven enhancement of electrochemical energy storage performance for manganese titanate perovskites electrodes” (J. of Power Sources 538 (2022) 231525) (DOI: 10.1016/j.jpowsour.2022.231525)
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                  M. Samtham, D. Singh, K. Hareesh, and R. S. Devan*, “Perspectives of conducting polymer nanostructures for high-performance electrochemical capacitor” (J. of Energy Storage 51 (2022) 104418) (DOI: 10.1016/j.est.2022.104418)
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
       
        <div className="pc1">
          <span className="pc1-head">AWARDS AND ACHIEVEMENTS</span>
          <div>
          <li>Editor, ‘Chinese Journal of Physics’ Elsevier publishers (Since, Jan. 2018) </li>
            <li>Best Research Paper-2023, by Indian Institute of Technology Indore. (Feb. 2023)</li>
            <li>Listed in the World Ranking of Top 2% most Influential Scientists by Stanford University (2021, 2022)</li>
            <li>DUO-India Professor Fellowship Award, Govt. of India and ASEM-DUO, South Korea (2020-22).</li>
            <li>Elected Fellow Maharashtra Academy of Science (Since 2021)</li>
            <li>Outstanding Researcher in Materials Science, by Venus International Foundation, India. (July 2022)</li>
            <li>Excellent grade for INSPIRE Research Project from the Department of Science and Technology (Feb. 2017).</li>
            <li>INSPIRE Faculty Award, (2013) Ministry of Science and Technology, Department of Science and Technology (DST), INDIA.</li>
            <li>Post-Doctoral Fellowship, (Aug. 2007-Dec. 2013) Ministry of Science & Technology (MOST), Taiwan.</li>
          </div>
        </div>
       
        
        
        
        
        
        
        </div>
      </div>

      </div>

     
    </>
  );
};

export default profile11;
