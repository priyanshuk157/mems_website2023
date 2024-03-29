import React from "react";

import "./demo.css";
// import { FaAngleLeft } from "react-icons/fa";
import { FaEnvelope, FaHome,  FaPhone,    } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import prof13 from "./profimages/prof13.jpg"

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
<span className="pc1-headmain">Prof. Sunil Kumar</span>
      <div class="main">
            <div class="left">
                <div>
                <img src={prof13} alt="" />
               
                
            
            </div>


            
        <div className="pc2">
            
            <ul>
              <li>Designation	: Associate Professor</li>
              <li>Office		: Room No. 1D- 416 </li>
              <li>Email	 (<i><FaEnvelope/></i>)	: sunil@iiti.ac.in </li>
              <li>Contact  (<i><FaPhone/></i>)		: +91-73243063281</li>
            <div className="fac-links">
             
            <a href="https://iiti.ac.in/people/~sunil/ " target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
             {/* <a href="scholar.google.com/citations?user=oAfP0CAAAAAJ&hl=en"target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a> */}
             
             
              
              
             
            </div>
              
            </ul>
            <div class="aca"><span className="pc1-head">ACADEMIC BACKGROUND</span></div></div>
            <div class="acalist">
<ul>
<li>Ph.D, Materials Research Centre, IISc Bangalore, 2012</li>
<br />
            <li> MSc Physics (Department of Physics and Astrophysics), University of Delhi, 2004</li>
            <br />
            <li>BSc Physical Sciences, Maharshi Dayanand University Rohtak , 2002</li>
            
</ul></div>
            </div>

            
            <div class="right">
            <div className="pc1">
              
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
          <ul>
              <li> Electrochemical Energy Storage Systems </li>
              <li>Na-ion Batteries </li>
              <li>All-Solid-State Rechargeable Batteries</li>
              <li>Electroceramics</li>
            </ul>



          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">POSITIONS HELD</span>
          <ul>
          
            <li>
            Associate Professor, Metallurgical Engineering and Materials Science, IIT Indore, 2022 – present 
            </li>
            <li>Assistant Professor, Metallurgical Engineering and Materials Science, IIT Indore, 2018 – 2022</li>
            <li>
            DST INSPIRE Faculty, Metallurgical Engineering and Materials Science, IIT Indore, 2015 – 2020 
            </li>
            <li>
            Research Fellow, Department of Mechanical Engineering, National University of Singapore, 2012 – 2014
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
                  S Saxena, H N Vasavan, M Badole, A K Das, S Deswal, P Kumar, and S Kumar*, “Tailored P2/O3 phase-dependent electrochemical behaviour of Mn-based cathode for sodium-ion batteries ” Journal of Energy Storage, 64 (2023), 107242, https://doi.org/10.1016/j.est.2023.107242 
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  Hari Narayanan Vasavan, Manish Badole, Samriddhi Saxena, Asish Kumar Das, Sonia Deswal, Pradeep Kumar, Sunil Kumar, “Excellent Structural Stability-Driven Cyclability in P2-Type Ti-Based Cathode for Na-Ion Batteries”, ACS Applied Energy Materials, 6 (2023), 2440, https://doi.org/10.1021/acsaem.2c03750 
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                  A K Das, M Badole, H N Vasavan, S Saxena, P Gami, S Kumar*, “Highly conductive ceramic-in-polymer composite electrolyte enabling superior electrochemical performance for all-solid-state lithium batteries”, Ceramics International, (2023), https://doi.org/10.1016/j.ceramint.2023.06.214
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                  M Badole, H N Vasavan, S Saxena, A K Das, P Gami, D Kumar, S Deswal, P Kumar, S Kumar*, “High-Performance [00l]-Textured BiAlO3-Doped K0.5Bi0.5TiO3 Ceramics”, ACS Applied Electronic Materials, 5 (2023), 3436, https://doi.org/10.1021/acsaelm.3c00434
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                  H N Vasavan, M Badole, S Dwivedi, D Kumar, P Kumar, S Kumar*, “Enhanced rate performance and specific capacity in Ti-substituted P2-type layered oxide enabled by crystal structure and particle morphology modifications”, Chemical Engineering Journal, 448 (2022), 13662, https://doi.org/10.1016/j.cej.2022.137662 
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
            <li>2022, Best Teacher Award, IIT Indore</li>
            <li>2022, Core Research Grant, SERB</li>
            <li>2017, Early Career Research Award, SERB</li>
            <li>2015, INSPIRE Faculty Award, DST</li>
            <li> 2012, SERC Research Fellowship, NUS Singapore</li>
            <li>2010, Erasmus-Mundus Fellowship, Barcelona, Spain</li>
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
