import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./profile.css";
import { FaEnvelope, FaHome, FaLinkedin, FaPhone, FaResearchgate,  } from "react-icons/fa";
import {SiGooglescholar } from "react-icons/si";
import prof12 from "./profimages/prof18.jpg"

const Profile12 = () => {
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
      <div className="pm-head">Prof. Hemant Borkar</div>
      <div className="profile-main">
        <div className="profile-section-1">
          <div className="profile-img">
            <img src={prof12} alt="sd" />
          </div>
          {/* pc=profile content */}

          <div className="pc2">
          

            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		: POD 1D (Chromium room 612) </li>
              <li>Email	 (<i><FaEnvelope/></i>)	: h.borkar@iiti.ac.in </li>
              <li>Contact  (<i><FaPhone/></i>)		: +91-73243063295 
</li>
            <div className="fac-links">
             <a href="https://sites.google.com/view/hemantborkar/home " target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
             <a href=" https://scholar.google.co.in/citations?user=siZP-XoAAAAJ&hl=en  "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href="https://www.researchgate.net/profile/Hemant-Borkar "target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
             
             <a href="https://www.linkedin.com/in/hemant-borkar-0a0a3410/"target="_blank"  rel="noreferrer"> <i><FaLinkedin/></i></a>
             
             
              
              
             
            </div>
              
            </ul>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
            <ul>
              <li>          Lightweight material</li>
              <li>  Deformation behavior</li>
              <li>Crystallographic texture and microstructural characterization</li>
              <li>Additive manufacuring</li>
            </ul>
           
    
            
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">ACADEMIC BACKGROUND</span>
        
          <ul>
            <li>Ph.D in Materials Engineering, McGill University, Canada, 2013</li>
            <li>M.Tech in Metallurgical Engineering and Materials Science, IIT Bombay, 2008
</li>
            <li>B.E in Metallurgical Engineering and Materials Science, VNIT Nagpur, 2005</li>
            
          </ul>
        </div>
        <div className="pc1">
          <span className="pc1-head">PROFESSIONAL EXPERIENCE</span>
          <ul>
            <li>
            Assistant Professor, Department of Metallurgical Engineering and Materials Science, IIT Indore,  2017 to   current
            </li>
            <li>Senior Teaching Fellow, WMG, University of Warwick, UK, 2015-2017</li>
            <li>
            Postdoctoral Researcher, Materials and Manufacturing, Jonkoping University, Sweden, 2013-2015
            </li>
            <li>
            Assistant Manager, Bharat Forge, 2005-2006
            </li>
            
          </ul>
        </div>
        <div className="pc1">
          <span className="pc1-head">AWARDS AND RECOGNITIONS  </span>
          <div>
           <ul>
            <li>Best presentation award , ICMST international conference, Kuala Lumpur, Malaysia, 2018</li>
            <li>Research grant from Jonkoping Research Council , Sweden, 2015</li>
            <li>McGill International Doctoral Award, 2008</li>
           </ul>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">SELECTED PUBLICATIONS</span>
          <div>
            <ul>
              <li> Hemant Borkar, Salem Seifeddine, Anders EW Jarfors, In-situ EBSD study of deformation behavior
  of Al–Si–Cu alloys during tensile testing, Materials &amp; Design, 2015, 84, 36-47
 </li>
              <li>  H Borkar, M Hoseini, M Pekguleryuz, Effect of strontium on the texture and mechanical properties
  of extruded Mg–1% Mn alloys, Materials Science and Engineering: A, 2012, 549, 168-175
 </li>
              <li> H Borkar, M Hoseini, M Pekguleryuz, Effect of strontium on flow behavior and texture evolution
during the hot deformation of Mg–1 wt% Mn alloy, Materials Science and Engineering: A, 2012, 537, 49-57
</li>
              <li>H Patil, A Jain, A Marodkar, P Kumar, A Ghosh, H Borkar, Creep deformation study of squeeze
cast AZ91 magnesium alloy, Materials Science and Technology, 2023
 </li>
              <li>AS Marodkar, H Patil, H Borkar, A Behl, Effect of Squeeze Casting and Combined Addition of
Calcium and Strontium on Microstructure and Mechanical Properties of AZ91 Magnesium Alloy,
International Journal of Metalcasting, 2023
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

export default Profile12;
