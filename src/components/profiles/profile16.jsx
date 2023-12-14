import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
// import "./profile.css";
import { FaAngleLeft } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import { FaEnvelope, FaHome, FaLinkedin, FaPhone, FaResearchgate } from "react-icons/fa";
import {SiGooglescholar } from "react-icons/si";
import prof1 from "./profimages/prof1.jpg"
const profile16 = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="head4">
        <i className="back-button">
          <a href="faculty">
            <FaAngleLeft />
          </a>
        </i>
        <span>PROFILE</span>
      </div>

      <div className="profile-main">
        <div className="profile-section-1">
          <div className="profile-img">
            <img src={prof1} alt="sd" />
          </div>
          {/* pc=profile content */}

          <div className="pc2">
            <span className="pc1-head">Prof. Chandan Halder
</span>

            <ul>
            <li>Email	 (<i><FaEnvelope/></i>)	:chalder@iiti.ac.in </li>
              <li>Contact  (<i><FaPhone/></i>)		: Room No. 211 (G), CITC</li>

           
              <li>contact : +91 0731 660 3182</li>
              <div className="fac-links">
             <a href="https://iiti.ac.in/people/~ajaykk " target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
             <a href=" https://scholar.google.com/citations?user=Jc4fgVQAAAAJ&hl=en"target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href="https://www.researchgate.net/profile/Chandan-Halder"target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
             
             <a href="www.linkedin.com/in/dr-chandan-halder-0408042b"target="_blank"  rel="noreferrer"> <i><FaLinkedin/></i></a>
             
             
              
              
             
            </div>
            </ul>
          </div>
        </div>
      
        <div className="pc1">
          <span className="pc1-head">ACADEMIC BACKGROUND</span>
          <Table>
            <thead>
              <tr>
                <th>INSTITUTE</th>
                <th>COURSE</th>
                <th>YEAR OF PASSING</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IIT Kharagpur, 2016</td>
                <td>Ph.D. Department of Metallurgical and Materials Engineering</td>
                <td>2016</td>
              </tr>
              <tr>
                <td>IIT Kharagpur</td>
                <td>M.Tech, Department of Metallurgical and Materials Engineering</td>
                <td>2011</td>
              </tr>
              <tr>
                <td>NIT Durgapur</td>
                <td>B.Tech, Department of Metallurgical and Materials Engineering</td>
                <td>2009</td>
              </tr>
            </tbody>
          </Table>
          <br />
        </div>






        <div className="pc1">
          <span className="pc1-head">Research Interests
</span>
          <div>
            <Table>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    {" "}
                    Mechanistic Diffusion Modeling
                  </td>
                  
                </tr>
                <tr><td>2</td>
                  <td>
                    {" "}
                    Multi-Scale Finite Element Modeling
                  </td></tr>


                  <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    Modeling and Simulation of Microstructure Evolution
                  </td>
                  
                </tr>


                <tr>
                  <td>4</td>
                  <td>
                    {" "}
                    Neural-Network based Alloy Design
                  </td>
                  
                </tr>
              </tbody>
            </Table>
          </div>
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
                  C. Halder, L. Madej & M. Pietrzyk, “Discrete micro-scale cellular automata model for modelling phase   
   transformation during heating of dual phase steels”, Archives of Civil and Mechanical Engineering, 14(1),  
   (2014) 96-103, https://doi.org/10.1016/j.acme.2013.07.001

                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  C. Halder, A. Karmakar, Sk. Md. Hasan, D. Chakrabarti, M. Pietrzyk & N. Chakraborti, “Effect of Carbon 
   Distribution During the Microstructure Evolution of Dual-Phase Steels Studied Using Cellular Automata, Genetic  
   Algorithms, and Experimental Strategies”, Metallurgical and Materials Transaction A, 47, (2016), 5890-5906, 
   https://doi.org/10.1007/s11661-016-3725-y

                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    C. Halder, D. Bachniak, L. Madej, N. Chakraborti & M. Pietrzyk, “Sensitivity analysis of the finite difference 2-D 
   cellular automata model for phase transformation during heating”, ISIJ International, 55(1), (2015) 285-292,  
   2015. https://doi.org/10.2355/isijinternational.55.285.
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                  C. Halder, L. Madej, M. Pietrzyk & N. Chakraborti, “Optimization of cellular automata model for the heating of 
    dual-phase steel by genetic algorithm and genetic programming”, Materials and Manufacturing Processes,
    30(4), (2015), 552-562, https://doi.org/10.1080/10426914.2014.994765.
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>
                  C.Halder, K.L. Prasanna; S. Dixit, S. Pal & S.K. Jha, “Bi-objective Optimization of Maraging Steel Produced by 
    Vacuum Induction Melting Using Evolutionary Algorithms”, Transactions of the Indian Institute of Metals, 74(5),  
    (2021), 1193-1201, https://doi.org/10.1007/s12666-020-02153-x.


                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">Professional Experience
</span>
          <div>
            <Table>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    {" "}
                    Assistant Professor, MEMS Department, IIT Indore, 2022 – present
                  </td>
                  
                </tr>
                <tr><td>2</td>
                  <td>
                    {" "}
                    Industrial : Senior Manager, R&D, Mishra Dhatu Nigam Limited, Hyderabad, 2016 – 2022
                  </td></tr>
              </tbody>
            </Table>
          </div>
        </div>

      
        
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default profile16;
