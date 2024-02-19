import React from "react";

import "./demo.css";
// import { FaAngleLeft } from "react-icons/fa";
import { FaEnvelope,  FaHome,  FaLinkedin,  FaPhone, FaResearchgate, FaTwitterSquare } from "react-icons/fa";
import Table from "react-bootstrap/Table";
// import {SiGooglescholar } from "react-icons/si";
import prof44 from "./profimages/AKKsir.jpeg"
import { SiGooglescholar } from "react-icons/si";

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
<span className="pc1-headmain">Prof. Ajay Kumar Kushwaha</span>
      <div class="main">
            <div class="left">
                <div>
                <img src={prof44} alt="" />
               
                
            
            </div>


            
        <div className="pc2">
            
            <ul>
              <li>Designation	: HoD and Associate Professor</li>
              <li>Office		: 1D-610 </li>
              <li>Email	 (<i><FaEnvelope/></i>)	: akk@iiti.ac.in </li>
              <li>Contact  (<i><FaPhone/></i>)		: +91 731 660 3250</li>
            <div className="fac-links">
            
            <a href="https://iiti.ac.in/people/~ajaykk " target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
             <a href=" https://scholar.google.co.in/citations?user=1ck-NV0AAAAJ&hl=en  "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href="https://www.researchgate.net/profile/Dr-Ajay-Kushwaha-2"target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
             <a href="https://twitter.com/i/flow/login?redirect_after_login=%2Fajaykushwaha_%3Flang%3Den "target="_blank"  rel="noreferrer"><i><FaTwitterSquare/></i></a>
             <a href="https://in.linkedin.com/in/dr-ajay-k-kushwaha-16b46a49?trk=public_post_feed-actor-name "target="_blank"  rel="noreferrer"> <i><FaLinkedin/></i></a>
             
             
              
              
             
            </div>
              
            </ul>
            <div class="aca"><span className="pc1-head">ACADEMIC BACKGROUND</span></div></div>
            <div class="acalist">
            <ul>
            <li> Ph.D, IIT Bombay, 2014</li>
            <br />
            <li>M.Sc. (Physics), CSJM University Kanpur, 2006</li>
           
            
          
            
          </ul></div>
            
            </div>

            
            <div class="right">
            <div className="pc1">
              
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
          <li>NANOMATERIALS & THIN FILMS: Metal oxides, Metals, Chalcogenides, Graphene & Maxenes</li>
          <li>
          MATERIALS PROPERTIES: Defects, Surface modification, & Opto-electronic Properties
          </li><li>ELECTROCHEMISTRY: Green Hydrogen, Water Splitting, HER and OER, Electrodeposition, Electrocatalysis,  
  Sensors, Corrosion
</li>
          <li>ELECTRONIC DEVICES: Resistive Memories (ReRAM), Photodetectors, Solar Cell, Power Semiconductor Devices
</li>

        {/* <li>Design and growth of nanomaterials/thin films</li>
        <li>Optical and transport properties of semiconductors</li>
        <li>2-D materials based electronic devices</li>
        <li>Energy efficient coatings</li> */}



          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">POSITIONS HELD</span>
          <ul>
          <li>
          Head,  Department of MEMS, IIT Indore, 03/2023 to Till Date
            </li>
            <li>Associate Professor, Department of MEMS, IIT Indore, 11/2022 to Till Date</li>
            <li>
            Associate Dean, Student Affairs, IIT Indore, 05/2019 to 09/2021
            </li>
            <li>
            Assistant  Professor, Department of MEMS, IIT Indore, 09/2017 to 11/2022
            </li>
            <li>
            INSPIRE Faculty Fellow, Department of MEMS, IIT Indore, 07/2016 to 09/2017
            </li>
            <li>
            Scientist-I, Institute of Materials Engineering and Research (IMRE), ASTAR, Singapore, 02/2014 to 07/2016
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
                  L. Mohapatra and  Ajay K Kushwaha, Annealing atmospheres induced structural and morphological transformation of zinc tin hydroxide nanostructures, Ceramics International, 49 (2023)15154,  IF: 5.53
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  A Maurya, S Suman, A Bhardwaj, L Mohapatra, and Ajay K Kushwaha, Substrate Dependent Electrodeposition of Ni–Co Alloy for Efficient Hydrogen Evolution Reaction, Electrocatalysis 14 (1), (2023) 68-77, IF: 3.1
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    L Mohapatra, M Nagaraju, S Suman, Ajay K. Kushwaha, Enhancement in photocurrent conversion efficiency via recrystallization of zinc tin hydroxide nanostructures, Journal of Alloys and Compounds 928, (2022) 167127, IF: 6.2
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    {" "}
                    Siddhartha Suman, and Ajay K. Kushwaha, Densely packed Ga2O3 nanostructured film via pH-controlled crystal growth and memristive properties, Journal of Solid State Chemistry, 313 (2022)123293, IF: 3.3

                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                    {" "}
                    G.K. Dalapati, Ajay K Kushwaha, M. Sharma, V. Suresh, S. Shannigrahi, S. Zhuk and S. Masudy-Panah, Transparent heat regulating (THR) materials and coatings for energy saving window applications: Impact of materials design, micro-structural, and interface quality on the THR performance , Progress in Materials Science,, 95, 42, (2018) IF 31.5. 


                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="pc1">
              <span className="pc1-head"> SELECTED PATENTS </span>
              <div>
                <ul>
                  
                  <li>
                    {" "}
                    Amorphous Metal Oxide films, K.L.G. Goh, H.Q. Le, and Ajay Kushwaha,  20170259300,US Patent (Patent number: 10668500).
                  </li>
                </ul>
              </div>
            </div>
       
        <div className="pc1">
          <span className="pc1-head">AWARDS AND ACHIEVEMENTS</span>
          <div>
          <li>2023, Best Paper Presentation Award : 11th Asia Conference on Mechanical and Materials Engineering, Japan</li>
          <li>2017, Early Career Research Award : SERB, Gov. of India</li>
          <li>2016, INSPIRE Faculty Award : DST, Gov. of India</li>
          </div>
        </div>
       
        
        
        
        
        
        
        </div>
      </div>

      </div>

     
    </>
  );
};

export default profile11;
