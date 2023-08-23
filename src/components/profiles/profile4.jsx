import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./profile.css";
import { FaEnvelope, FaHome, FaLinkedin, FaPhone, FaResearchgate,   } from "react-icons/fa";
import {SiGooglescholar } from "react-icons/si";
import prof4 from "./profimages/prof4.png"

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
      <div className="pm-head">Dr. Santosh S. Hosmani</div>
      <div className="profile-main">
        <div className="profile-section-1">
          <div className="profile-img">
            <img src={prof4} alt="sd" />
          </div>
          {/* pc=profile content */}

          <div className="pc2">
          
            <ul>
              <li>Associate Professor</li>
              <li>Office		: MEMS, POD 1D 415 </li>
              <li>Email	 (<i><FaEnvelope/></i>)	:sshosmani@iiti.ac.in</li>
              <li>Contact  (<i><FaPhone/></i>)		: 91-0731-660333 (Ext. 3243);  +91-731-6603243</li>
            <div className="fac-links">
             <a href="https://sites.google.com/site/santoshhosa/" target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
             <a href=" https://scholar.google.co.in/citations?user=FgkqmiYAAAAJ&hl=en  "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href="https://www.researchgate.net/profile/Santosh-Hosmani"target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
             
             <a href="https://in.linkedin.com/in/dr-santosh-hosmani-23bb7629 "target="_blank"  rel="noreferrer"> <i><FaLinkedin/></i></a>
             
             
              
              
             
            </div>
              
            </ul>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>

          <div>
            <ul>

              <li>Surface Engineering</li>
              <li>Tribology</li>
              <li>Physical Metallurgy</li>
              <li> Heat-treatment of Metals and Alloys</li>
              
            </ul>
           
    
            
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">ACADEMIC BACKGROUND</span>
          
          
          <ul>
            <li> Ph.D, Max-Planck-Institute for Metals Research, Stuttgart and University of Stuttgart, Germany, 2006</li>
            <li>M.Tech., Department of Metallurgical Engineering and Materials Science, IIT Bombay, 2003</li>
            <li> B.E., Department of Metallurgical Engineering, REC (currently NIT), Nagpur, and Nagpur University, 2001</li>
            
          </ul>
        </div>
        <div className="pc1">
          <span className="pc1-head">PROFESSIONAL EXPERIENCE</span>
          
          
          <ul>
          <li>Associate Professor, Indian Institute of Technology Indore, India (12/2018 – till date)</li>
          <li>Assistant Professor, Indian Institute of Technology Indore, India (04/2017 – 12/2018). </li>
          <li>Senior Manager (R&D), Bharat Forge Ltd., Pune, India (04/2015 – 04/2017) </li>
          <li>Assistant Professor, College of Engineering, Pune, India (06/2011 – 03/2015). </li>
          <li>Assistant Professor, Indian Institute of Technology Delhi, India (06/2010 – 06/2011).</li>
          <li>Assistant Professor, National Institute of Technology – Karnataka, Surathkal, India (01/2009 – 05/2010).</li> 
          <li>Postdoctoral Researcher, Case Western Reserve University, USA (03/2008 – 11/2008). </li>
          <li>Postdoctoral Researcher, Max-Planck-Institute, Stuttgart, Germany (05/2006 – 03/2008).</li>
          </ul>
        </div>


        <div className="pc1">
          <span className="pc1-head">AWARDS AND RECOGNITIONS  </span>
          <div>
          
           <ul>
            <li>Best Teacher Award, COEP Star Award-2013, College of Engineering, Pune, 2013.</li>
            <li>Awarded Ph.D. with the highest possible grade at the University of Stuttgart, i.e., “Auszeichnung bestanden” [in English: “Excellent”] (06/2006)</li>
            <li>Scholarship for M.Tech. thesis at the University of Stuttgart, Germany through the IIT-DAAD sandwich program (05/2002 – 02/2003).</li>
            
           </ul>
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">SELECTED PUBLICATIONS</span>
          <div>
          
          
            <ul>
            <li>M.D. Joshi, N.K. Kumbhar, O.V. Rambadey, P.R. Sagdeo, R. S. Devan, S.S. Hosmani, “Exfoliated Nano-hBN Additives for Enhancing Tribological Performance of ATSP Coatings Deposited on AISI 316L Steel: Role of SMAT Pre-Treatment”, Surface and Coatings Technology, Vol. 447, Manuscript No. 128829, Pages  1 to 16 (2022). DOI: 10.1016/j.surfcoat.2022.128829.</li>
            <li>D. Singh, F. Cemin, M.J.M. Jimenez, V. Antunes, F. Alvarez, D. Orlov, C.A. Figueroa, S.S. Hosmani, “High-Temperature Oxidation Behaviour of Nanostructure Surface Layered Austenitic Stainless Steel”, Applied Surface Science, Vol. 581, Manuscript No. 152437, Pages 1 to 20 (2022). DOI: 10.1016/j.apsusc.2022.152437.</li>
            <li>D. Singh, D.A. Basha, L. Wadsö, D. Orlov, Y. Matsushita, A. Singh, and S.S. Hosmani, “Evolution of Gradient Structured Layer on AZ91D Magnesium Alloy and Its Corrosion Behaviour”, Journal of Alloys and Compounds, Vol. 882, Pages 160659-1 to 160659-14 (2021). DOI: 10.1016/j.jallcom.2021.160659.</li>
            <li>Vikesh Kumar, M.D. Joshi, C. Pruncu, I. Singh, and S.S. Hosmani, “Microstructure and Tribological Response of Selective Laser Melted AISI 316L Stainless Steel: The Role of Severe Surface Deformation”, Journal of Materials Engineering and Performance, Vol. 30, Pages 5170-5183  (2021). DOI: 10.1007/s11665-021-05730-3.</li>
            <li>A.K. Litoria, C.A. Figueroa, L.T. Bim, C.I. Pruncu, A.A. Joshi, and S.S. Hosmani, “Pack-boriding of Low Alloy Steel: Microstructure Evolution and Migration Behavior of Alloying Elements”, Philosophical Magazine, Vol. 100, Pages 353-378 (2020). DOI: 10.1080/14786435.2019.1680890.</li>

            </ul>
            
          </div>
        
        </div>
      
        <div className="pc1">
          <span className="pc1-head">BOOKS PUBLISHED</span>
        
          <ul>
            <li>S.S. Hosmani, P. Kuppusami, R.K. Goyal: “An Introduction to Surface Alloying of Metals”, ISBN: 978-81-322-1888-3, ISSN: 2191-530X, Publisher: Springer, 2014. ( DOI: 10.1007/978-81-322-1889-0).</li>
          </ul>
        </div>
      
       
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Profile18;
