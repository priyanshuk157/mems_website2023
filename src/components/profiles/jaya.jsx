import React from "react";

import "./demo.css";
// import { FaAngleLeft } from "react-icons/fa";
import { FaEnvelope,  FaPhone } from "react-icons/fa";
import {SiGooglescholar } from "react-icons/si";
import Table from "react-bootstrap/Table";
import prof44 from "./profimages/muru.jpg";

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
<span className="pc1-headmain">	
Dr. Jayaprakash Murugesan</span>
      <div class="main">
            <div class="left">
                <div>
                <img src={prof44} alt="" />
               
                
            
            </div>


            
        <div className="pc2">
            
            <ul>
              <li>Designation	: Associate Professor</li>
              <li>Office		: Room No. 1D- 608 </li>
              <li>Email	 (<i><FaEnvelope/></i>)	: jayaprakash@iiti.ac.in </li>
              <li>Contact  (<i><FaPhone/></i>)		: - </li>
            <div className="fac-links">
             
             <a href=" https://scholar.google.com/citations?user=QpLQQqsAAAAJ&hl=en&oi=ao"target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             {/* <a href="https://www.researchgate.net/profile/Abhijit-Ghosh-8"target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a> */}
            
             
             
              
              
             
            </div>
              
            </ul>
            <div class="aca"><span className="pc1-head">ACADEMIC BACKGROUND</span></div></div>
            <div class="acalist">
<ul>
<li>Ph.D, Materials Science and Engineering, NUT Japan, 2010</li>
<br />
            <li> MS (Metallurgical and Materials Engineering), IIT Madras, 2006</li>
            <br />
            <li>B.E.(Metallurgical Engineering), GCE Salem, 2002</li>
            
</ul></div>

       
            </div>

            
            <div class="right">
            <div className="pc1">
            <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
          <ul>
              <li>Welding Engineering</li>
              <li>Mechanical behaviour of materials</li>
              <li>Fracture Mechanics</li>
              <li>Additive manufacuring</li>
            </ul>


          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">POSITIONS HELD</span>
          <ul>
          <li>
            Associate Professor, Department of Metallurgical Engineering and Materials Science, IIT Indore
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
                  M Patel,Jayaprakash Murugesan , Fretting Wear and Corrosion Behaviour of an Al-ZrO2/Ni hybrid Composite Developed
                  by Friction Stir Processing, Indian Institute of Metals, 2022, 75, 1525-1534
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  Kulkarni Achyuth Rao, Manikandan M, Ashish Kumar Shukla, Shanmugham Subramaniam, Balaji V.P., I.A. Pilani, M.Jayaprakash,
                  Investigations on enhancing the surface mechanical and tribological properties of A356 Al alloy using pulsed laser-assisted
                  nitriding, Applied Surface Science, 2021, 540, Part 2, 148361
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                  Jayaprakas M, M.Okazaki, Y. Miyashita, Y. Otsuka and Y. Mutoh, Fretting fatigue behaviour of austenitic stainless steels
                  considering the mean stress and overload effect, Trans. of Indian Institue of Metals, 2017, 70, 597-603
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                 Wahab J.A, Ghazali M.J, Sajuri Z, Otsuka Y, Jayaprakash M, Nakamura S, Baharin A.F.S., Effects of micro-grooves on tribological
                 behaviour of plasma sprayed alumina-13% titania coatings, Ceramics International, 2017, 43,8, 6410-6416
                  </td>
                </tr>
                <tr>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
       
        <div className="pc1">
          <span className="pc1-head">AWARDS AND ACHIEVEMENTS</span>
          <div>
          <ul>
            <li>Developed friction stir additive manufacturing setup</li>
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
