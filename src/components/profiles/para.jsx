import React from "react";

import "./demo.css";
// import { FaAngleLeft } from "react-icons/fa";
import { FaEnvelope, FaHome, FaLinkedin, FaPhone, FaResearchgate,   } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import {SiGooglescholar } from "react-icons/si";
// import prof44 from "./profimages/ghosh.jpg"
import shirage from "./profimages/shirage.jpg"

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
<span className="pc1-headmain">Prof. Parasharam M. Shirage</span>
      <div class="main">
            <div class="left">
                <div>
                <img src={shirage} alt="" />
               
                
            
            </div>


            
        <div className="pc2">
         
            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		:  POD D 414 </li>
              <li>Email	 (<i><FaEnvelope/></i>)	: pmshirage@iiti.ac.in</li>
              <li>Contact  (<i><FaPhone/></i>)		:0731 6603330 </li>
              <div className="fac-links">
             <a href="https://iiti.ac.in/people/~pmshirage/Group%20Leader.html " target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
             <a href=" https://scholar.google.com/citations?user=hf2x04QAAAAJ&hl=en&oi=ao  "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href="https://www.researchgate.net/profile/Parasharam-Shirage "target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
             <a href="https://www.linkedin.com/in/parasharam-shirage-84b83012a/ "target="_blank"  rel="noreferrer"> <i><FaLinkedin/></i></a>
             
             
              
              
             
            </div>
              
            </ul>
            <div class="aca"><span className="pc1-head">ACADEMIC BACKGROUND</span></div></div>
            <div class="acalist">
            <ul>
            <li>Ph.D, Department of Physics, Shivaji University Kolhapur, 2004</li>
            <br /><li>Master’s degree, Department of Physics, Shivaji University Kolhapur,  1999</li>
            <br /><li>Bachelor’s degree, Department of Physics, Shivaji University Kolhapur, 1997.</li>
            
          </ul></div>
         
            
            </div>

            
            <div class="right">
            <div className="pc1">
              
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
          
          <li>Next Generation Solar Cells</li>
              <li> Batteries</li>
              <li>Supercapacitors</li>
              <li>Advanced Functional Materials for Multifunctional Applications</li>



          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">POSITIONS HELD</span>
          <ul>
          <li>Professor, Department of MEMS, IIT Indore,  February 2022 onwards</li>
          <li>Associate Professor, Department of MEMS, IIT Indore,  February 2017- February 2022</li>
          <li>Ramanujan Fellow, Department of Physics, IIT Indore,  July 2013- February 2017</li>
          <li>Postdoc, Department of Materials Science and Condensed Matter Physics, TIFR Mumbai, August 2012 to June 2013</li>
          <li>Postdoc, AIST Tsukuba Japan, November 2008 to July 2012.</li>
          <li>JSPS Fellow, AIST Tsukuba Japan, November 2006 to November 2008.</li>
          <li>Visiting Scientist,  KERI, Changwon, South Korea, July 2004 to June 2006.</li>
            
            
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
                  Manish Kumar Tiwari, Archana Kanwade, Subhash Chand Yadav, Abhishek Srivastava, Jena Akash Kumar Satrughna and Parasharam M. Shirage*,NASICON-type Na3Fe2(PO4)3 material for room temperature excellent CO Sensor ,Journal of Materials Chemistry C,11(2023)5469-5480.
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  Abhishek Srivastava, Subhash Chand Yadav, Manish Kumar Tiwari, Jena Akash Kumar Satrughna, Archana Kanwade, Kiran Bala, and Parasharam M. Shirage*,Lead Metal Halide Perovskite Solar Cells: Progresses, Fabrication, Advancement Strategies, and Future perspective,Materials Today Communication,35, 2023, 105686

                    
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    Subhash C.Yadav VisheshManjunath AbhishekSrivastava Rupesh S.Devan Parasharam M.Shirage,Stable lead-free Cs4CuSb2Cl12 layered double perovskite solar cells yielding theoretical efficiency close to 30% ,Optical Materials ,2022,  132, 112676.,  <a href="https://doi.org/10.1016/j.optmat.2022.112676"><span>https://doi.org/10.1016/j.optmat.2022.112676</span></a>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                  Archana Kanwade, Sheetal Gupta, Akash Kankane, Manish Kumar Tiwari, Abhishek Srivastava, Subhash Chand Yadav, Parasharam M. Shirage*, Phosphate-based Cathode Materials to boost the electrochemical performance of Sodium-ion Battery, Sustainable Energy & Fuels, 2022,6, 3114-3147
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                  Subhash Chand Yadav, Abhishek Srivastava, V. Manjunath, Rupesh S. Devan, Parasharam M. Shirage*, Recent advances in Cs2AgBiBr6 Double Perovskite based Lead-free Photovoltaics and its immense applications, Materials Physics Today, 26,  2022, 100731
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
       
        <div className="pc1">
          <span className="pc1-head">AWARDS AND ACHIEVEMENTS</span>
          <div>
          <li>Fellow of Maharashtra Academy of Science ,2021</li>
            <li>MRSI Medal by Materials Research Society of India,2020</li>
            <li>Excellence in Teaching by IIT Indore,2016</li>
            <li>Ramanujan Fellowship by SERB- DST, Govt. of India,2013</li>
            <li>Visiting Fellowship at TIFR, Mumbai,2012</li>
            <li>Senior Scientist at AIST, Japan,2008</li>
            <li>JSPS Postdoctoral Fellowship,2006</li>
            <li>Awarded Invited Scientist Fellowship by Ministry of Korea (MK-21), South Korea,2004</li>
          </div>
        </div>
       
        
        
        
        
        
        
        </div>
      </div>

      </div>

     
    </>
  );
};

export default profile11;
