import React from "react";

import "./demo.css";
import { FaEnvelope, FaHome,  FaPhone } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import {SiGooglescholar } from "react-icons/si";
// import prof44 from "./profimages/ghosh.jpg"
import vi from "./profimages/vinod.jpg"

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
<span className="pc1-headmain">Prof. Vinod Kumar</span>
      <div class="main">
            <div class="left">
                <div>
                <img src={vi} alt="" />
               
                
            
            </div>


            
        <div className="pc2">
           
            <ul>
              <li>Designation	: Associate Professor</li>
              <li>Office		: Room No. 1D- 412 </li>
              <li>Email	 (<i><FaEnvelope/></i>)	:vkt@iiti.ac.in</li>
              <li>Contact  (<i><FaPhone/></i>)		: + 91-7324-306-3251 </li>
            <div className="fac-links">
            <a href="http://people.iiti.ac.in/~vkt/ " target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
             <a href="  http://scholar.google.co.in/citations?user=n782qToAAAAJ  "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             {/* <a href="https://www.researchgate.net/profile/Dr-Ajay-Kushwaha-2"target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a> */}
             {/* <a href="@Dhirend59162402"target="_blank"  rel="noreferrer"><i><FaTwitterSquare/></i></a> */}
             
              
              
             
            </div>
              
            </ul>
            <div class="aca"><span className="pc1-head">ACADEMIC BACKGROUND</span></div></div>
            <div class="acalist">
<ul>
<li>Ph.D., Materials Science and Engineering, IIT Kanpur, 2012</li>
<br />
            <li> M. Tech., Materials Science and Engineering, IIT Kanpur, 2007</li>
            <br />
            <li> B. Tech., Metallurgy and Materials Engineering, NIAMT (Formerly NIFFT), Ranchi, 2004</li>
            
</ul></div>

          
            
            </div>

            
            <div class="right">
            <div className="pc1">
              
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
          
        <li>Heat Treatment</li>
         
        <li> Physical Metallurgy of multicomponent alloys</li>
        <li> Powder Metallurgy</li>
        <li> Nanomaterials</li>
        <li>  Metal recovery from Waste</li>



          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">POSITIONS HELD</span>
          <ul>
          <li>
            Associate Professor, MEMS, IIT Indore,  Feb. 17, 2022 – Till date
            </li>
          <li>
          Assistant Professor, MEMS, IIT Indore, March 30, 2017 – Feb. 16, 2022 
            </li>
            <li> Assistant Professor, MME, MNIT Jaipur, July 6, 2012 – March 29, 2017</li>
            <li>
            Industrial : Metallurgist, Kadvani Forge Limited Rajkot, July 2004 to December 2005
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
                  S. K. Dewangan, S. Samal, V. Kumar, “Microstructure exploration and an artificial neural network approach for hardness prediction in AlCrFeMnNiWx high entropy alloys”, Journal of Alloys and Compounds, Vol. 823, 2020, article 153766. DOI: 10.1016/j.jallcom.2020.153766
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  P. Sahu, S. Samal, V. Kumar; Microstructure, Non-isothermal crystallization kinetics and magnetic behaviour study of [FeCoNi100-x(SiMn)x] high entropy amorphous alloys synthesized by mechanical alloying, Metals and Materials International, 2023, DOI: 10.1007/s12540-023-01408-8.
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    S. Jain, P. Kumar, V. Kumar, A. Ghosh, and S. Samal, Solidification simulation of single-phase Fe–Co–Cr–Ni-V high entropy alloy, Philosophical magazine, Vol. 102 (18) 2022, 1832-1852. DOI: 10.1080/14786435.2022.2084793
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>
                    {" "}
                    O. Maulik, D. Kumar, S. Kumar, D. M. Fabijanic, and V. Kumar, "Structural evolution of spark plasma sintered AlFeCuCrMgx (x=0, 0.5, 1, 1.7) high entropy alloys", Intermetallics, 77 (2016) 46-56. DOI: 10.1016/j.intermet.2016.07.001
                  </td>
                </tr>



                <tr>
                  <td>5</td>
                  <td>
                    {" "}
                    V. Kumar, Govind, R. Shekhar, R. Balasubramanim and K. Balani, “Microstructure evolution and texture development in thermomechanically processed Mg–Li–Al based alloys”, Materials Science and Engineering A 547 (2012) 38–50. DOI: 10.1016/j.msea.2012.03.074
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
          <li> TEQIP-III Auditor for NIT Srinagar, IIIT Guwahati, UIET Chandigarh, LNJPIT Chhapra</li>
          <li>2014, DAE Young Scientist Research Award by BRNS.</li>
          <li> 2013, Adjunct Faculty in Materials Research Centre for two year by MNIT Jaipur.</li>
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
