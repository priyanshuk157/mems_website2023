import React from "react";

import "./demo.css";
// import { FaAngleLeft } from "react-icons/fa";
import { FaEnvelope,  FaPhone } from "react-icons/fa";
import Table from "react-bootstrap/Table";
// import {SiGooglescholar } from "react-icons/si";
import prof44 from "./profimages/AKKsir.jpeg"

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

      <div class="main">
            <div class="left">
                <div>
                <img src={prof44} alt="" />
               
                
            
            </div>


            
        <div className="pc2">
            <span className="pc1-head">Prof. Ajay Kumar Kushwaha</span>
            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		: Room No. 1D- 305 </li>
              <li>Email	 (<i><FaEnvelope/></i>)	: akk@iiti.ac.in </li>
              <li>Contact  (<i><FaPhone/></i>)		: +91 731 660 3250</li>
            <div className="fac-links">
            webpage :{" "}
                <a href="https://iiti.ac.in/people/~ajaykk/index.html">
                 
                  visit page</a>
             
             
              
              
             
            </div>
              
            </ul>
            <div class="aca"><span className="pc1-head">ACADEMIC BACKGROUND</span></div></div>
            <div class="acalist">
            <ul>
            <li> Ph.D, IIT Bombay, 2014</li>
            <br />
            <li>M.Sc. (Physics), CSJM University Kanpur, 2006</li>
            <br />
            <li>B.Sc C.S.J.M University, Kanpur 2003</li>
          
            
          </ul></div>
            
            </div>

            
            <div class="right">
            <div className="pc1">
              
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
          
        <li>Design and growth of nanomaterials/thin films</li>
         
        <li>Optical and transport properties of semiconductors</li>
        <li>2-D materials based electronic devices</li>
        <li>Energy efficient coatings</li>



          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">POSITIONS HELD</span>
          <ul>
          <li>
              Supervised 4 Ph.D students, 6 M.Tech and 11 B.tech students.
            </li>
            <li>Completed 2 Research Projects.</li>
            <li>
              Published 65 Journals, 10 conferences, 281 citations, 28 h-index,
              44 i10-index.
            </li>
            <li>
              Organised 3 workshops, 6 training programs, 2 short-term courses.{" "}
            </li>
            <li>
              Given 10 Invited/Contributory talk in national / international
              conferences.
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
                    G. K. Dalapati, S. M.-Panah, R. S. Moakhar, S. Chakrabortty,
                    S. Ghosh, R. Katal, C. S. Chua, G. Xiao, S. Tripathy,
                    S.Ramakrishna Ajay Kushwaha, Nanoengineered Advanced
                    Materials for Enabling Hydrogen Economy: Functionalized
                    Graphene�Incorporated Cupric Oxide Catalyst for Efficient
                    Solar Hydrogen Production , Global Challenges , 2020, 4 (3),
                    2070031 , Impact Factor: 5.13.
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                    N. Mukurala, R.K. Mishra, S.H. Jin, and Ajay Kushwaha,
                    Sulphur precursor dependent crystallinity and optical
                    properties of solution grown Cu2FeSnS4 particles , Materials
                    Research Express , 6 (8), 085099 (2019), Impact Factor: 1.44
                    .
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    N. Mukurala, S. Suman and Ajay Kushwaha, Effect of solvents
                    on structural, morphological and optical properties of
                    solvothermally grown Cu2FeSnS4 particles , AIP Conference
                    Proceedings , 2115 (1), 030603 (2019).
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
       
        <div className="pc1">
          <span className="pc1-head">AWARDS AND ACHIEVEMENTS</span>
          <div>
          General Chair: International Conference on Frontiers of Materials
            Engineering
          </div>
        </div>
       
        
        
        
        
        
        
        </div>
      </div>

      </div>

     
    </>
  );
};

export default profile11;
