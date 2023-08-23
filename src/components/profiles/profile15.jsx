import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./profile.css";
import { FaEnvelope, FaHome, FaPhone, } from "react-icons/fa";
import {SiGooglescholar } from "react-icons/si";
import prof15 from "./profimages/prof18.jpg"

const Profile15 = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      {/* <div className="head4">
        <i className="back-button">
          <a href="faculty">
          </a>
        </i>
        <span>PROFILE</span>
      </div> */}
      <div className="pm-head">Prof. Dudekula Althaf Basha </div>
      <div className="profile-main">
        <div className="profile-section-1">
          <div className="profile-img">
            <img src={prof15} alt="sd" />
          </div>
          {/* pc=profile content */}

          <div className="pc2">
          

            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		: 1D(POD-Chromium Building)-306</li>
              <li>Email	 (<i><FaEnvelope/></i>)	: bashada@iiti.ac.i </li>
              <li>Contact  (<i><FaPhone/></i>)		: +917316603516</li>
            <div className="fac-links">
             <a href="http://mems.iiti.ac.in/Faculty.html" target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
             <a href=" https://scholar.google.com/citations?user=KQosI6YAAAAJ&hl=en"target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             
             
             
              
              
             
            </div>
              
            </ul>
          </div>
        </div>
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
          <span className="pc1-head">ACADEMIC BACKGROUND</span>
        
          <ul>
            <li>Ph.D, Department of Materials Engineering, Indian Institute of Science, Bangalore, 2014</li>
            <li>Master’s degree, Department of Physics, Sri Venkateswara University, Tirupati, 2007</li>
            <li>Bachelor’s degree, (Mathematics, Physics and Electronics), Sri Krishna Devaraya University, 2005</li>
            
          </ul>
        </div>
        <div className="pc1">
          <span className="pc1-head">PROFESSIONAL EXPERIENCE</span>
          <ul>
            <li>
            Assistant Professor, Department of Metallurgical Engineering and Materials Science, Indian Institute of Technology INDORE, Indore, From Oct 2019– To (Continuing)
            </li>
            <li>Postdoc, National Institute for Materials Science, Tsukuba, Japan, From Sep 2014– To Sep 2019</li>
            
          </ul>
        </div>
        <div className="pc1">
          <span className="pc1-head">AWARDS AND RECOGNITIONS  </span>
          <div>
           <ul>
            <li>2023, Received “Reviewer Appreciation” award from the international journal “Journal of Alloys and Compounds”.
            </li>
            <li>2022, Received “Outstanding Reviewer” award from the international journal “Transactions of Indian Institute of Metals”.</li>
            <li>2017, Received “BEST POSTER” award, 8th ISAJ Symposium on Bridging Nature and Technology, Tokyo, Japan.</li>
           </ul>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">SELECTED PUBLICATIONS</span>
          <div>
            <ul>
              <li>  D.A. Basha, J.M. Rosalie, H. Somekawa, T. Miyawaki, A. Singh, K. Tsuchiya, Microstructure study of a severely plastically deformed Mg-Zn-Y alloy by application of low angle annular dark field diffraction contrast imaging, Science and Technology of Advanced Materials 17(1) (2016) 115-127. http://dx.doi.org/10.1080/14686996.2016.1140304</li>
              <li>  D.A. Basha, R. Sahara, H. Somekawa, J.M. Rosalie, A. Singh, K. Tsuchiya, Interfacial segregation induced by severe plastic deformation in a Mg–Zn–Y alloy, Scripta Materialia 124 (2016) 169-173. http://dx.doi.org/10.1016/j.scriptamat.2016.07.021</li>
              <li>  D.A. Basha, H. Somekawa, A. Singh, Crack propagation along grain boundaries and twins in Mg and Mg–0.3at.%Y alloy during in-situ straining in transmission electron microscope. Scripta Materialia 142 (2017) 50-54. http://dx.doi.org/10.1016/j.scriptamat.2017.08.023</li>
              <li>D.A. Basha, R. Sahara, H. Somekawa, J.M. Rosalie, A. Singh, K. Tsuchiya, Effect of processing strain rate and temperature oninterfacial segregation of zinc in a magnesium alloy Matrials Science and Engineering A703 (2017) 54-67. http://dx.doi.org/10.1016/j.msea.2017.07.041</li>
              <li>D. A. Basha, N.Ravishankar and K.Chattopadhyay. Phase stability behavior of nanoscaled Bi-Pb alloys with peritectic composition in Zn matrix  Scripta Materialia 143 (2018) 68-71. http://dx.doi.org/10.1016/j.scriptamat.2017.09.012 </li>
              </ul>
            {/* <Table>
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
                  K. V. Vamsi, M. A. Charpagne, Tresa M Pollock, "High-throughput approach for estimation of intrinsic barriers in FCC structures for alloy design", Scripta Materialia, 204 (2021) 114126. https://doi.org/10.1016/j.scriptamat.2021.114126  
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  K. V. Vamsi and Tresa M. Pollock, “A new proximate structure for the APB(111) in L12 compounds”, Scripta Materialia 182 (2020), 38-42. https://doi.org/10.1016/j.scriptamat.2020.02.038  
                    .
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    K. V. Vamsi and S. Karthikeyan, “Modeling APB energies in multicomponent Ni-base superalloys”, Intermetallics 132 (2021), 107124. https://doi.org/10.1016/j.intermet.2021.107124 
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    {" "}
                    Yolita M. Eggeler, K. V. Vamsi,  and Tresa M. Pollock, “Precipitate shearing, fault energies and solute segregation to planar faults in Ni-, CoNi- and Co- base superalloys”, Review Article in Annual Review of Materials Research, 51 (2021), 209. https://doi.org/10.1146/annurev-matsci-102419-011433 
                  </td>
                </tr>
              </tbody>
            </Table> */}
          </div>
        
        </div>
      

      
       
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Profile15;
