import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./demo.css";
// import { FaAngleLeft } from "react-icons/fa";
import { FaEnvelope, FaHome, FaLinkedin, FaPhone, FaResearchgate,  FaTwitterSquare } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import {SiGooglescholar } from "react-icons/si";
import prof44 from "./profimages/ghosh.jpg"
import prof6 from "./profimages/prof6.jpg"

const profile11 = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      {/*<div className="head">
        <i className="back-button">
          <a href="faculty">
            <FaAngleLeft />
          </a>
        </i>
        <span>PROFILE</span>
      </div>*/}

      <div class="main">
            <div class="left">
                <div>
                <img src={prof6} alt="" />
               
                
            
            </div>


            
        <div className="pc2">
            <span className="pc1-head">Prof. Eswar Prasad Kormilli</span>
            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		: Room No. 1D- 607 </li>
              <li>Email	 (<i><FaEnvelope/></i>)	: eswar@iiti.ac.in </li>
              <li>Contact  (<i><FaPhone/></i>)		: ​+91 731-2438700  </li>
            <div className="fac-links">
             
            <a href="https://sites.google.com/view/kvvamsi/home " target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
             <a href=" https://scholar.google.co.in/citations?user=LiDYSBQAAAAJ&hl=en  "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href="https://www.researchgate.net/profile/Eswar-Prasad-K "target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
             <a href="https://twitter.com/EKorimilli "target="_blank"  rel="noreferrer"><i><FaTwitterSquare/></i></a>
             <a href="https://www.linkedin.com/in/eswar-prasad-korimilli-9085241b/ "target="_blank"  rel="noreferrer"> <i><FaLinkedin/></i></a>
             
             
              
              
             
            </div>
              
            </ul>
            <span className="pc1-head">ACADEMIC BACKGROUND</span></div>

          <Table>
            <thead>
              <tr>
                <th>INSTITUTE</th>
                <th>COURSE</th>
                <th>YEAR OF PASSING</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IISc Bangalore</td>
                <td>Ph.D. </td>
                <td>2011</td>
              </tr>
              <tr>
                <td>IISc Bangalore</td>
                <td>M.Tech </td>
                <td>2004</td>
              </tr>
              <tr>
                <td>NIT Warangal</td>
                <td>B. Tech</td>
                <td>2002</td>
              </tr>
            </tbody>
          </Table>
            
            </div>

            
            <div class="right">
            <div className="pc1">
              
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
          
          <li>Mechanical behavior of materials </li>
              <li> High strain rate deformation</li>
              <li>Nanoindentation, Small scale mechanical testing</li>
              <li>Surface Engineering, and Failure analysis of materials</li>



          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">POSITIONS HELD</span>
          <ul>
          <li>
            Associate Professor, Department of MEMS, IIT Indore,  Nov 2022 onwards
            </li>
            <li>Assistant Professor, Department of MEMS, IIT Indore, June 2017 – Nov 2022</li>
            <li>
            Assistant Professor,  School of Engineering, Mahindra Ecole Centrale, April 2014 – May 2017
            </li>
            <li>
            Postdoc, Department of Mechanical Engineering, The Johns Hopkins University, July 2011 – Jan 2014
            </li>
            <li>
            Research Assistant, IISc Bangalore (March 2011 – June 2011)
            </li>
            <li>
            Post graduate Engineering, TVS Motor Company, Hosur (2004 – 2006)
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
                  A.Sharma, A.Tripathi, Sree Harsha Nandam, Horst Hahn, K.Eswar Prasad, Role of Indenter geometry on the deformation behavior in a Pd-Si based metallic and nanoglass, Journal of Alloys and Compounds 933 (2023)  167693, https://doi.org/10.1016/j.jallcom.2022.167693
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  V.S. Kathavate, B. Praveen Kumar, I. Singh, K. Eswar Prasad, Analysis of Indentation Size Effect (ISE) in nanoindentation hardness in polycrystalline PMN-PT piezoceramics with different domain configurations, Ceramics International 47, (2021) 11870-11877, https://doi.org/10.1016/j.ceramint.2021.01.027
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    BY Liu, K. Eswar Prasad, N Yang, F Liu, ZW Shan, In-Situ Quantitative TEM Investigation on the Dynamic Evolution of Individual Twin Boundary in Magnesium Under Cyclic Loading, Acta Materialia 179 (2019) 414-423. https://doi.org/10.1016/j.actamat.2019.08.043
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                  T. Dixit, I. Singh, K. Eswar Prasad, Room and high-temperature dry sliding wear behavior of Boron modified as-cast Ti-6Al-4V alloys against hardened steel, Wear 420-421 (2019) 207-214. https://doi.org/10.1016/j.wear.2018.10.021
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                  K.P. Raineesh, K. Sairam, K. Rajesh, K. Eswar Prasad, Novel approach to characterize the deformation under Berkovich and spherical indentations: Study on Magnesium single crystals, Phys. Rev. Mater. 5, 083604 (2021)
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
           <li>Visiting Scientist, Nanyang Technological University, Singapore, June 2022</li>
            <li>Guest Scientist,  Institute of Nanotechnology, Karlsruhe Institute of Technology, Germany (May - July, 2019)</li>
            <li>Visiting faculty,  School of Materials Science and Engineering, Xi'an Jiaotong University, Xi'an, China (Dec 2017, May - July, 2018)</li>
            <li>Outstanding reviewer recognition, Journal of Alloys and Chemical Compounds (September 2017)</li>
            <li>Visiting Scientist, Mechanics Solids Structures and Materials Laboratory, Centrale Superlec, France (June – July 2016, June – July 2017)</li>
            <li>Best oral presentation at NMD-ATM 2016 held at IIT Kanpur in the category of Science of metals and materials. </li>
            <li>All India 16th rank in Graduate Aptitude Test for Engineers (GATE - 2002)</li>
            <li>First Rank, B. Tech. Class of '02, NIT Warangal.</li>
           </ul>
          </div>
        </div>
       
        
        
        
        
        
        
        </div>
      </div>

      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default profile11;