import React from "react";

import "./demo.css";
// import { FaAngleLeft } from "react-icons/fa";
import { FaEnvelope,  FaLinkedin, FaPhone } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import {SiGooglescholar } from "react-icons/si";
import prof20 from './profimages/vivek.jpeg'

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
<span className="pc1-headmain">Prof. Vivek Verma</span>
      <div className="main">
            <div className="left">
                <div>
                <img src={prof20} alt="" />
               
                
            
            </div>


            
        <div className="pc2">
            
            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		: -- </li>
              <li>Email	 (<i><FaEnvelope/></i>)	:  vivekv@iiti.ac.in</li>
              <li>Contact  (<i><FaPhone/></i>)		: --</li>
            <div className="fac-links">
            {/* <a href="https://sites.google.com/view/kvvamsi/home " target="_blank" rel="noreferrer"> <i><FaHome/></i></a> */}
             <a href="https://scholar.google.com/citations?user=ElT_W2YAAAAJ&hl=en&oi=sra" target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             {/* <a href="https://www.researchgate.net/profile/K-V-Vamsi "target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a> */}
             {/* <a href="https://twitter.com/kvvamsi "target="_blank"  rel="noreferrer"><i><FaTwitterSquare/></i></a> */}
             <a href="www.linkedin.com/in/vivek-verma-7a1163a6 "target="_blank"  rel="noreferrer"> <i><FaLinkedin/></i></a>
              </div>
              
            </ul>
            <div className="aca"><span className="pc1-head">ACADEMIC BACKGROUND</span></div></div>

            <div className="acalist">
            <ul>
            <li>Ph.D. Materials Science and Engineering, IIT Kanpur, 2022</li>
            <br /><li>M.Tech Materials Science and Engineering, IIT Kanpur, 2014.
</li>
            <br /><li>B.Tech. (Metallurgical Engineering), NIT Raipur, 2012.</li>
            
          </ul></div>
            
            </div>

            
            <div className="right">
            <div className="pc1">
              
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
          
          <ul>
              <li>Diffusion in Metals and Multicomponent solids (Theoretical and Experimental)
</li>
              <li>  Phase Equilibria</li>
              <li>High Entropy Alloys (HEAs)</li>
              <li>Light Weight Alloys</li>
            </ul>


          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">POSITIONS HELD</span>
          <ul>
          <li>
            Assistant Professor, Metallurgical Engineering and Materials Science, IIT Indore, India (Jan 2024– present)
            </li>
            <li>Postdoc, Department of Materials Science and Engineering, University Of California Irvine, C.A., USA, From –
January 2023 To January 2024</li>
            <li>
            Overseas Visiting Doctoral Fellow (OVDF) at Purdue University, USA, February 2019- February 2020
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
                  Vivek Verma, Calvin H. Belcher, Diran Apelian, and Enrique J. Lavernia. "Diffusion in High Entropy Alloy
Systems–A Review." Progress in Materials Science; Vol. 24; 2024; pp. 101245. DOI:
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  Vivek Verma and Kaustubh N. Kulkarni; “Square Root Diffusivity Analysis of Body-Diagonal Diffusion Couples
in FeNiCoCr Quaternary and FeNiCoCrMn Quinary Systems”. Journal of Phase Equilibria and Diffusion; Vol. 43;
2022; pp. 903-915, DOI: https://doi.org/10.1007/s11669-022-01007-x
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    Vivek Verma, Aparna Tripathi, T. Venkateswaran and Kaustubh N. Kulkarni; “First report on entire sets of
experimentally determined interdiffusion coefficients in quaternary and quinary high-entropy
alloys”. Journal of Materials Research; Vol. 35(2); 2020; pp.162-171, DOI: https://doi.org/10.1557/jmr.2019.378
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                  Vivek Verma, Aparna Tripathi and Kaustubh N. Kulkarni; “On Interdiffusion in FeNiCoCrMn High Entropy
Alloy”. Journal of Phase Equilibria and Diffusion; Vol. 38(4); 2017; pp. 445-456, DOI:
https://doi.org/10.1007/s11669-017-0579-y
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                  Vivek Verma and Kaustubh Kulkarni; “Investigation of Interdiffusion in Titanium-Niobium Alloys”. Proc. TMS
MS&T 2015; Columbus, OH, USA; (Symposium on Phase Stability, Diffusion Kinetics and their Applications);
pp. 661-668
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
            <li>Ranked “AIR 60” in Metallurgical Engineering GATE-2012</li>
            <li>Received “2020 Gordon E. Pike Prize Paper of the Year” award for the Journal of Materials Research (JMR)
from the Materials Research Society</li>
            <li>Received “TMS Student travel grant” from The Minerals, Metals & Materials Society (TMS) for attending the
Materials Science & Technology (MS&T) 2019 conference at Portland, Oregon, USA</li>
            <li>Received “Best poster presentation award” in International Workshop on High Entropy Materials (IWHEM)
2017; Hyderabad, India</li>
            <li>Received “TMS Student travel grant” from The Minerals, Metals & Materials Society (TMS) for attending the
TMS Annual Meeting & Exhibition 2019 conference at San Antonio, Texas, USA</li>
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
