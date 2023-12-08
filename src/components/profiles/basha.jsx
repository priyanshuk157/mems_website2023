import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./demo.css";
// import { FaAngleLeft } from "react-icons/fa";
import { FaEnvelope, FaHome, FaPhone, } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import {SiGooglescholar } from "react-icons/si";
import bb from "./profimages/basha.jpg"

const profile11 = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

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
                <img src={bb} alt="" />
               
                
            
            </div>


            
        <div className="pc2">
            <span className="pc1-head">Prof. Dudekula Althaf Basha</span>
            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		: Room No. 1D- 306 </li>
              <li>Email	 (<i><FaEnvelope/></i>)	: bashada@iiti.ac.in </li>
              <li>Contact  (<i><FaPhone/></i>)		: +917316603516 </li>
            <div className="fac-links">
            <a href="http://mems.iiti.ac.in/Faculty.html" target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
             <a href=" https://scholar.google.com/citations?user=KQosI6YAAAAJ&hl=en"target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             
             
             
              
              
             
            </div>
              
            </ul>
            <div class="aca"><span className="pc1-head">ACADEMIC BACKGROUND</span></div></div>
            <div class="acalist">
            <ul>
            <li>Ph.D, Department of Materials Engineering, Indian Institute of Science, Bangalore, 2014</li>
            <br /><li>Master’s degree, Department of Physics, Sri Venkateswara University, Tirupati, 2007</li>
            <br /><li>Bachelor’s degree, (Mathematics, Physics and Electronics), Sri Krishna Devaraya University, 2005</li>
            
          </ul></div>

            </div>

            
            <div class="right">
            <div className="pc1">
              
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
          
          <ul>
              <li>          Deformation behaviour of magnesium alloys.</li>
              <li>  Crack propagation behaviour study through in-situ microscopy techniques.</li>
              <li>Phase transformation behaviour of alloy nanoparticles.</li>
            
            </ul>

          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">POSITIONS HELD</span>
          <ul>
            <li>
            Assistant Professor, Department of Metallurgical Engineering and Materials Science, Indian Institute of Technology INDORE, Indore, From Oct 2019– To (Continuing)
            </li>
            <li>Postdoc, National Institute for Materials Science, Tsukuba, Japan, From Sep 2014– To Sep 2019</li>
            
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
                  D.A. Basha, J.M. Rosalie, H. Somekawa, T. Miyawaki, A. Singh, K. Tsuchiya, Microstructure study of a severely plastically deformed Mg-Zn-Y alloy by application of low angle annular dark field diffraction contrast imaging, Science and Technology of Advanced Materials 17(1) (2016) 115-127. http://dx.doi.org/10.1080/14686996.2016.1140304
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  D.A. Basha, R. Sahara, H. Somekawa, J.M. Rosalie, A. Singh, K. Tsuchiya, Interfacial segregation induced by severe plastic deformation in a Mg–Zn–Y alloy, Scripta Materialia 124 (2016) 169-173. http://dx.doi.org/10.1016/j.scriptamat.2016.07.021
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                  D.A. Basha, H. Somekawa, A. Singh, Crack propagation along grain boundaries and twins in Mg and Mg–0.3at.%Y alloy during in-situ straining in transmission electron microscope. Scripta Materialia 142 (2017) 50-54. http://dx.doi.org/10.1016/j.scriptamat.2017.08.023
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                  D.A. Basha, R. Sahara, H. Somekawa, J.M. Rosalie, A. Singh, K. Tsuchiya, Effect of processing strain rate and temperature oninterfacial segregation of zinc in a magnesium alloy Matrials Science and Engineering A703 (2017) 54-67. http://dx.doi.org/10.1016/j.msea.2017.07.041
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                  D. A. Basha, N.Ravishankar and K.Chattopadhyay. Phase stability behavior of nanoscaled Bi-Pb alloys with peritectic composition in Zn matrix  Scripta Materialia 143 (2018) 68-71. http://dx.doi.org/10.1016/j.scriptamat.2017.09.012
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
            <li>2023, Received “Reviewer Appreciation” award from the international journal “Journal of Alloys and Compounds”.
            </li>
            <li>2022, Received “Outstanding Reviewer” award from the international journal “Transactions of Indian Institute of Metals”.</li>
            <li>2017, Received “BEST POSTER” award, 8th ISAJ Symposium on Bridging Nature and Technology, Tokyo, Japan.</li>
           </ul>
          </div>
        </div>
       
        
        
        
        
        
        
        </div>
      </div>

      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default profile11;
