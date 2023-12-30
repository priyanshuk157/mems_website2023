import React from "react";

import "./demo.css";
// import { FaAngleLeft } from "react-icons/fa";
import prof11 from "./profimages/prof11.jpg"
import { FaEnvelope, FaHome, FaLinkedin, FaPhone, FaResearchgate } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import {SiGooglescholar } from "react-icons/si";
// import prof44 from "./profimages/ghosh.jpg"

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
<span className="pc1-headmain">Prof. Mrigendra Dubey</span>
      <div class="main">
            <div class="left">
                <div>
                <img src={prof11} alt="" />
               
                
            
            </div>


            
        <div className="pc2">
           
            <ul>
              <li>Designation	: Associate Professor</li>
              <li>Office		: Room No. 1D- 412 </li>
              <li>Email	 (<i><FaEnvelope/></i>)	: mdubey@iiti.ac.in </li>
              <li>Contact  (<i><FaPhone/></i>)		:3258</li>
            <div className="fac-links">
            <a href="https://drdubey.wixsite.com/iiti" target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
             <a href="https://scholar.google.com/citations?user=9P83G5AAAAAJ "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href="https://www.researchgate.net/profile/Mrigendra-Dubey"target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
             {/* <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fajaykushwaha_%3Flang%3Den "target="_blank"  rel="noreferrer"><i><FaTwitterSquare/></i></a> */}
             <a href="https://in.linkedin.com/in/dr-mrigendra-dubey-a013331a6"target="_blank"  rel="noreferrer"> <i><FaLinkedin/></i></a>
             
             
              
              
             
            </div>
              
            </ul>
            <div class="aca"><span className="pc1-head">ACADEMIC BACKGROUND</span></div></div>
            <div class="acalist">
            <ul>
            <li> PhD, (Department of Chemistry), IIT Guwahati, 2011</li>
            <br /><li>MSc, University of Allahabad, 2005</li>
            <br /><li>
 BSc, University of Allahabad, 2003
</li>
          
            
          </ul></div>

         
            
            </div>

            
            <div class="right">
            <div className="pc1">
              
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
          
          <li>Development of multifunctional Soft Materials </li>
              <li>Conductive and Fluorescent Metallogels.</li>
              <li>Supramolecular gels as battery Electrolyte</li>  
              <li> Superabsorbent supramolecular Materials</li>
              <li>Development of Fluorescent Carbon dots.</li>
              <li>Superhydrophobic materials.</li>
              <li>Corrosion Engineering</li>



          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">POSITIONS HELD</span>
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
                  Y. Kumar and M. Dubey*, “A soft ionic diode fabricated using asymmetric ion distribution in Li+-Zn(II)/Cu(II) metallohydrogels”, ACS Appl. mater. interfaces, 15, 9, (2023), 11970-11976, DOI: 10.1021/acsami.2c17950
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  Y. Kumar and M. Dubey*, “Li+ - integrated metallohydrogel based mixed conductive electrochemical semiconductor”, Chem. Commun., 58, (2022), 549-552 , DOI: 10.1039/D1CC05796K
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    M. Mukherjee, M. K. Dixit, Y. Kumar, A. Kalam and M. Dubey*, “Heat triggered molecular restructuring responses the triple gel-gel-gel transformations in a Li+ -integrated metallogel”, Mol. Syst. Des. Eng., 7, (2022), 1422-1433, DOI: 10.1039/D2ME00146B.
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                  D-(+)-Glucose-Triggered Metallogel to Metallogel Transition                                                                                                                                                                           C. Mahendar, Manish K. Dixit, Yeeshu Kumar and Mrigendra Dubey*                                                                                                                                                          J. Mater. Chem. C, 2020, 8, 11008-11012 DOI: 10.1039/D0TC02877K
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                  Y. Kumar, C. Mahendar, A. Kalam and M. Dubey*, “Li+-Zn2+ tailored nanostructured metallohydrogel based mixed ionic-electronic conductor”, Sustainable Energy Fuels, 5, (2021), 1708-1713,DOI: 10.1039/D0SE01821J
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
       
        <div className="pc1">
          <span className="pc1-head">AWARDS AND ACHIEVEMENTS</span>
          <div>
          <li>Invited Teacher, Indian Academy of Sciences, Bangalore- 2019</li>
            <li>Invited Research Visitor in France  - 2019
</li>
            <li>Young Scientist Award, International Academy of Physical Sciences, Allahabad, India- 2017</li>
            <li>Invited Research Visitor in France (CNRS- Rennes, Paris VI University and ENS-Lyon) – 2016</li>
            <li>Invited Research Visitor in University of Rennes and ENS Lyon, France- 2015</li>
            <li> DST- INSPIRE Faculty Award, Department of Science & Technology, New Delhi, India- 2014</li>
          </div>
        </div>
       
        
        
        
        
        
        
        </div>
      </div>

      </div>

      
    </>
  );
};

export default profile11;
