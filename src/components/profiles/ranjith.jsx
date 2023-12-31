import React from "react";

import "./demo.css";
// import { FaAngleLeft } from "react-icons/fa";
import { FaEnvelope,  FaPhone} from "react-icons/fa";
import Table from "react-bootstrap/Table";
import {SiGooglescholar } from "react-icons/si";
// import prof44 from "./profimages/ghosh.jpg"
import kd from "./profimages/ran.jpg"

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
<span className="pc1-headmain"> Ranjith Kumar Poobalan</span>
      <div class="main">
            <div class="left">
                <div>
                <img src={kd} alt="" />
               
                
            
            </div>


            
        <div className="pc2">
            
            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		: POD 1A, 514, 4th Floor </li>
              <li>Email	 (<i><FaEnvelope/></i>)	: ranjith@iiti.ac.in</li>
              <li>Contact  (<i><FaPhone/></i>)		: +91-731-660-3333 Extn. 5597</li>
            <div className="fac-links">
             
             <a href="  https://scholar.google.com/citations?user=iTe5x74AAAAJ&hl=en&oi=ao "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             
            
             
             
              
              
             
            </div>
              
            </ul>
            <div class="aca"><span className="pc1-head">ACADEMIC BACKGROUND</span></div></div>
            <div class="acalist">
            <ul>
            <li>Ph.D, Material Research Centre, (IISc), 2022</li>
            <br /><li>M.Sc in Physics, NIT Trichy, 2014

</li>
            <br /><li>B.Sc Physics, Madras Christian College, 2012</li>
            
          </ul></div>

         
            </div>

            
            <div class="right">
            <div className="pc1">
              
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
          
        <li>Thin films and Multilayer coatings </li>
         
        <li> Energy harvesting materials</li>
        <li>Protective Coatings</li>
              <li>Optical Materials</li>



          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">POSITIONS HELD</span>
          <ul>
          <li>
            Assistant Professor, Department of Metallurgical Engineering and Materials Science, IIT-Indore, 10 Oct - present 
            </li>
            <li>Postdoc, Department of Chemical Engineering, Ariel University, Israel, Mar-Sept 2023
</li>
            <li>
            Research Associate, Interdisciplinary Centre for Energy Research (ICER), IISc, Jan-Feb 2023

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
                  Ramanathan, Ramarajan, Michael Zinigrad, Dhivyaprasath Kasinathan, and Ranjith Kumar Poobalan. "Zinc Stannate (Zn2SnO4)-Based Hybrid Composite Photoanode for Dye-Sensitized Solar Cell Application." ACS Applied Energy Materials 5, no. 9 (2022):11506-11516. doi.org/10.1021/acsaem.2c01981.
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  Poobalan, Ranjith Kumar, Harish C. Barshilia, and Bikramjit Basu. "Recent trends and challenges in developing boride and carbide-based solar absorbers for concentrated solar power." Solar Energy Materials and Solar Cells 245 (2022): 111876. doi.org/10.1016/j.solmat.2022.111876.

                    
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    Poobalan, Ranjith Kumar, Mahander Pratap Singh, and Bikramjit Basu. "Probing the spectrally selective property of NbB2‐based tandem absorber coating for concentrated solar power application." Journal of the American Ceramic Society 105, no. 2 (2022): 1136-1148. doi.org/10.1111/jace.18143.
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                  Kumar P, Ranjith, Basavaraju, U., Harish C. Barshilia, and Bikramjit Basu. “On the origin of spectrally selective high solar absorptance of TiB2-based tandem absorber with double layer antireflection coatings”, Solar Energy Materials and Solar Cells 220 (2021): 110839. doi.org/10.1016/j.solmat.2020.110839.
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                  Kumar P, Ranjith, Prasad, Neena, Fabien Veillon, and Wilfrid Prellier. "Raman spectroscopic and magnetic properties of Europium doped nickel oxide nanoparticles prepared by microwave-assisted hydrothermal method." Journal of Alloys and Compounds 858 (2021): 157639. doi.org/10.1016/j.jallcom.2020.157639.
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
       
        <div className="pc1">
          <span className="pc1-head">AWARDS AND ACHIEVEMENTS</span>
          <div>
          <li>March 2023, MSCA-WinningNormandy Postdoc fellowship (Withdrawn) </li>
            <li>Apr-May 2019, Short Term Scientific Missions (STSM) visit to Laboratoire CRISMAT, ENSICAEN, France
</li>
          </div>
        </div>
       
        
        
        
        
        
        
        </div>
      </div>

      </div>

     
    </>
  );
};

export default profile11;
