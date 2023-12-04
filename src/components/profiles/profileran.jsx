import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./profile.css";
import { FaEnvelope, FaHome,  FaPhone,  } from "react-icons/fa";
import {SiGooglescholar } from "react-icons/si";
import kd from "./profimages/kd.jpg"

const Profile18 = () => {
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
      <div className="pm-head">Prof. Ranjith Kumar Poobalan</div>
      <div className="profile-main">
        <div className="profile-section-1">
          <div className="profile-img">
            <img src={kd} alt="sd" />
          </div>
          {/* pc=profile content */}

          <div className="pc2">
          

            <ul>
              <li>Designation	: Assistant Professor</li>
              <li>Office		: - </li>
              <li>Email	 (<i><FaEnvelope/></i>)	: ranjith@iiti.ac.in </li>
              <li>Contact  (<i><FaPhone/></i>)		: - </li>
            <div className="fac-links">
             <a href="skmd" target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
             <a href=" https://scholar.google.com/citations?user=iTe5x74AAAAJ&hl=en&oi=ao   "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
            
             
             
              
              
             
            </div>
              
            </ul>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
            <ul>
              <li>          Thin Films 
</li>
              <li> Energy harvesting materials</li>
              <li> Nanomaterials
.</li>
              <li>Protective Coatings</li>
              <li>Optical Materials</li>
            </ul>
           
    
            
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">ACADEMIC BACKGROUND</span>
        
          <ul>
            <li>Ph.D, Material Research Centre, Indian Institute of Science (IISc), 2022</li>
            <li>Master of Science (M.Sc) Physics, National Institute of Technology Tiruchirappalli (NIT-T), 2014

</li>
            <li>Bachelor of Science (B.Sc) Physics, Madras Christian College (MCC), 2012
.</li>
            
          </ul>
        </div>
        <div className="pc1">
          <span className="pc1-head">PROFESSIONAL EXPERIENCE</span>
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
          <span className="pc1-head">AWARDS AND RECOGNITIONS  </span>
          <div>
           <ul>
            <li>March 2023, MSCA-WinningNormandy Postdoc fellowship (Withdrawn) </li>
            <li>Apr-May 2019, Short Term Scientific Missions (STSM) visit to Laboratoire CRISMAT, ENSICAEN, France
</li>
            
            
           
           </ul>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">SELECTED PUBLICATIONS</span>
          <div>
            <ul>
              <li>Ramanathan, Ramarajan, Michael Zinigrad, Dhivyaprasath Kasinathan, and Ranjith Kumar Poobalan. "Zinc Stannate (Zn2SnO4)-Based Hybrid Composite Photoanode for Dye-Sensitized Solar Cell Application." ACS Applied Energy Materials 5, no. 9 (2022):11506-11516. doi.org/10.1021/acsaem.2c01981.</li>
              <li> Poobalan, Ranjith Kumar, Harish C. Barshilia, and Bikramjit Basu. "Recent trends and challenges in developing boride and carbide-based solar absorbers for concentrated solar power." Solar Energy Materials and Solar Cells 245 (2022): 111876. doi.org/10.1016/j.solmat.2022.111876. 
 </li>
              <li>  Poobalan, Ranjith Kumar, Mahander Pratap Singh, and Bikramjit Basu. "Probing the spectrally selective property of NbB2‐based tandem absorber coating for concentrated solar power application." Journal of the American Ceramic Society 105, no. 2 (2022): 1136-1148. doi.org/10.1111/jace.18143.</li>
              <li> Kumar P, Ranjith, Prasad, Neena, Fabien Veillon, and Wilfrid Prellier. "Raman spectroscopic and magnetic properties of Europium doped nickel oxide nanoparticles prepared by microwave-assisted hydrothermal method." Journal of Alloys and Compounds 858 (2021): 157639. doi.org/10.1016/j.jallcom.2020.157639. 
</li>
              <li>Kumar P, Ranjith, Basavaraju, U., Harish C. Barshilia, and Bikramjit Basu. “On the origin of spectrally selective high solar absorptance of TiB2-based tandem absorber with double layer antireflection coatings”, Solar Energy Materials and Solar Cells 220 (2021): 110839. doi.org/10.1016/j.solmat.2020.110839. </li>
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

export default Profile18;
