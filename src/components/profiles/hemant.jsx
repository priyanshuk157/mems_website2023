  import React from "react";

import "./demo.css";
// import { FaAngleLeft } from "react-icons/fa";
import { FaEnvelope, FaHome, FaLinkedin, FaPhone, FaResearchgate,  } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import {SiGooglescholar } from "react-icons/si";
import hb from "./profimages/hemanth.jpg"

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
<span className="pc1-headmain">Prof. Hemant Borkar</span>
      <div class="main">
            <div class="left">
                <div>
                <img src={hb} alt="" />
               
                
            
            </div>


            
        <div className="pc2">
            
            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		: Room No. 1D- 612 </li>
              <li>Email	 (<i><FaEnvelope/></i>)	:h.borkar@iiti.ac.in </li>
              <li>Contact  (<i><FaPhone/></i>)		: +91-73243063295 </li>
            <div className="fac-links">
            <a href="https://sites.google.com/view/hemantborkar/home " target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
             <a href=" https://scholar.google.co.in/citations?user=siZP-XoAAAAJ&hl=en  "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href="https://www.researchgate.net/profile/Hemant-Borkar "target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
             
             <a href="https://www.linkedin.com/in/hemant-borkar-0a0a3410/"target="_blank"  rel="noreferrer"> <i><FaLinkedin/></i></a>
             
              
             
            </div>
              
            </ul>
            <div class="aca"><span className="pc1-head">ACADEMIC BACKGROUND</span></div></div>
            <div class="acalist">
            <ul>
              <li>Ph.D. (Materials Engineering), McGill University, 2013</li>
              <br /><li>M.Tech (MEMS), IIT Bombay, 2008</li>
              <br /><li>B.Tech (MEMS), VNIT Nagpur, 2005</li>
            {/* <li>Ph.D, Metallurgical and Materials Engineering, IIT Kharagpur, 2017</li>
           <br /> <li>B.Tech, Metallurgical and Materials Engineering, NIT Durgapur, 2011
</li> */}
          
            
          </ul></div>

         
            
            </div>

            
            <div class="right">
            <div className="pc1">
              
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
          <span className="pc1-head">POSITIONS HELD</span>
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
                  Hemant Borkar, Salem Seifeddine, Anders EW Jarfors, In-situ EBSD study of deformation behavior
  of Al–Si–Cu alloys during tensile testing, Materials &amp; Design, 2015, 84, 36-47
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  H Borkar, M Hoseini, M Pekguleryuz, Effect of strontium on the texture and mechanical properties
  of extruded Mg–1% Mn alloys, Materials Science and Engineering: A, 2012, 549, 168-175
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                  H Borkar, M Hoseini, M Pekguleryuz, Effect of strontium on flow behavior and texture evolution
during the hot deformation of Mg–1 wt% Mn alloy, Materials Science and Engineering: A, 2012, 537, 49-57
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                  H Patil, A Jain, A Marodkar, P Kumar, A Ghosh, H Borkar, Creep deformation study of squeeze
cast AZ91 magnesium alloy, Materials Science and Technology, 2023
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                  AS Marodkar, H Patil, H Borkar, A Behl, Effect of Squeeze Casting and Combined Addition of
Calcium and Strontium on Microstructure and Mechanical Properties of AZ91 Magnesium Alloy,
International Journal of Metalcasting, 2023
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
            <li>Best presentation award , ICMST international conference, Kuala Lumpur, Malaysia, 2018</li>
            <li>Research grant from Jonkoping Research Council , Sweden, 2015</li>
            <li>McGill International Doctoral Award, 2008</li>
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
