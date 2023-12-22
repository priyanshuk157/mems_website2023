import React from "react";

import "./demo.css";
// import { FaAngleLeft } from "react-icons/fa";
import { FaEnvelope,   FaPhone } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import {SiGooglescholar } from "react-icons/si";
import prof1 from "./profimages/prof19.jpg"

const bhallal = () => {
  return (
    <>
     
     <span className="pc1-headmain">Prof. N. B. Ballal</span>
      {/*<div className="head">
        <i className="back-button">
          <a href="faculty">
            <FaAngleLeft />
          </a>
        </i>
        <span>PROFILE</span>
      </div>*/}

      <div class="main">
            <div class="left">
                <div>
                <img src={prof1} alt="" />
               
                
            
            </div>


            
        <div className="pc2">
           
            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		:-- </li>
              <li>Email	 (<i><FaEnvelope/></i>)	: nbb@iitb.ac.in </li>
              <li>Contact  (<i><FaPhone/></i>)		: +91-22-2576-7610 </li>
            <div className="fac-links">
            
             <a href=" https://scholar.google.com/citations?user=Jc4fgVQAAAAJ&hl=en"target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
            
             
             
             
             
              
              
             
            </div>
              
            </ul>
            <div class="aca"><span className="pc1-head">ACADEMIC BACKGROUND</span></div></div>
            <div class="acalist">
<ul>
<li>Ph.D (Metallurgy) IIT Kanpur, 1979</li>
<br />
            <li> M.Tech (Metallurgy) IIT Kanpur, 1974</li>
            <br />
            <li>B.E. (Metallurgy) Mysore University, 1971</li>
            
</ul></div>

         
            
            </div>

            
            <div class="right">
            <div className="pc1">
              
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
          
          <li>     Process Metallurgy with Special Emphasis on Iron and Steel Making
</li>
              <li>  Thermodynamics, Heat and Mass Transfer, Mathematical Modelling of Processes,</li>
              <li>Archeo-metallurgy and Practices of the Traditional Metal Artisans of India.</li>



          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">POSITIONS HELD</span>
          <ul>
            <li>
            Lecturer: Dec 1979-Oct1982
            </li>
            <li>Assistant Professor: Oct1982-Mar1988
</li>
            <li>Professor : Mar 1988-July2015
</li>
            <li>Emeritus Fellow : Aug2015-Continued
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
                  Sarkar, R., Gupta, P., Basu Somnath and Ballal, N.B. : Dynamic Modeling of LD Converter Steelmaking: Reaction Modeling Using Gibbs’ Free Energy Minimization; Metall.Trans B, Jan 2015
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  Bedarkar, Swaren, Viswanathan N.N., Ballal, N.B. : "Measurement of thermal conductivity along the radial direction in a vertical cylindrical packed bed,", J.Powder Techn. 2015

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                  N. B. Ballal: Some Challenges and Opportunities in Blast Furnace Operations, Transactions of the Indian Institute of Metals, 2013;
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                  CP.B. Abhale, N.N. Viswanathan and N.B. Ballal’ “Efficient Simulation of Gas Flow in Blast Furnace”, Computers, Materials and Continua, Vol. 10, No. 2, pp. 195-216, 2009.
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                  Maity, S. K., Ballal, N. B., Goldhahn,G. and Kawalla, R. (2008): Development of Low Alloy Titanium and Niobium Microalloyed Ultrahigh Strength Steel through Electroslag Refining. Ironmaking and Steelmaking 35, 2008, p.379-386.
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
       
        <div className="pc1">
          <span className="pc1-head">AWARDS AND ACHIEVEMENTS</span>
          <div>
          Inspire Faculty Award, DST, 2017
          </div>
        </div>
       
        
        
        
        
        
        
        </div>
      </div>

      </div>

     
    </>
  );
};

export default bhallal;
