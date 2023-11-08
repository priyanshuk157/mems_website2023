import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./profile.css";
import { FaAngleLeft } from "react-icons/fa";
import Table from "react-bootstrap/Table";
import { FaEnvelope, FaHome,  FaPhone, FaResearchgate,  FaTwitterSquare } from "react-icons/fa";
import {SiGooglescholar } from "react-icons/si";

const profile7 = () => {
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
            <img src="http://mems.iiti.ac.in/images/vinod.jpg" alt="sd" />
          </div>
          {/* pc=profile content */}

          <div className="pc2">
            <span className="pc1-head">Prof. Vinod Kumar
</span>

            <ul>
              <li>Email : vkt@iiti.ac.in</li>
              <li>Office : Room No. 412, POD – 1D </li>
              <li>
                webpage :{" "}
                <a href=" http://people.iiti.ac.in/~vkt/">
                  {" "}
                  visit page
                </a>
              </li>
              <li>contact : + 91-7324-306-3251</li>
              <div className="fac-links">
             <a href="http://people.iiti.ac.in/~dkr/ " target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
             <a href="  http://scholar.google.co.in/citations?user=n782qToAAAAJ  "target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
             <a href="https://www.researchgate.net/profile/Dr-Ajay-Kushwaha-2"target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
             <a href="@Dhirend59162402"target="_blank"  rel="noreferrer"><i><FaTwitterSquare/></i></a>
             {/* <a href="https://in.linkedin.com/in/dr-ajay-k-kushwaha-16b46a49?trk=public_post_feed-actor-name "target="_blank"  rel="noreferrer"> <i><FaLinkedin/></i></a> */}
             
             
              
              
             
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
                <td> IIT Kanpur</td>
                <td>Ph.D. </td>
                <td>2012</td>
              </tr>
              <tr>
                <td> IIT Kanpur</td>
                <td>M. Tech Materials Science and Engineering </td>
                <td>2007</td>
              </tr>
              <tr>
                <td>NIAMT (Formerly NIFFT), Ranchi</td>
                <td>B. Tech Metallurgy and Materials Engineering</td>
                <td>2004</td>
              </tr>
            </tbody>
          </Table>
          <br />
        </div>
        <div className="pc1">
          <span className="pc1-head">POSITIONS HELD</span>
          <ul>
            <li>
            Associate Professor, MEMS, IIT Indore,  Feb. 17, 2022 – Till date
            </li>
            <li> Assistant Professor, MME, MNIT Jaipur, July 6, 2012 – March 29, 2017</li>
            <li>
            Industrial : Metallurgist, Kadvani Forge Limited Rajkot, July 2004 to December 2005
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
                  S. K. Dewangan, S. Samal, V. Kumar, “Microstructure exploration and an artificial neural network approach for hardness prediction in AlCrFeMnNiWx high entropy alloys”, Journal of Alloys and Compounds, Vol. 823, 2020, article 153766. DOI: 10.1016/j.jallcom.2020.153766
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  P. Sahu, S. Samal, V. Kumar; Microstructure, Non-isothermal crystallization kinetics and magnetic behaviour study of [FeCoNi100-x(SiMn)x] high entropy amorphous alloys synthesized by mechanical alloying, Metals and Materials International, 2023, DOI: 10.1007/s12540-023-01408-8.
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    S. Jain, P. Kumar, V. Kumar, A. Ghosh, and S. Samal, Solidification simulation of single-phase Fe–Co–Cr–Ni-V high entropy alloy, Philosophical magazine, Vol. 102 (18) 2022, 1832-1852. DOI: 10.1080/14786435.2022.2084793
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>
                    {" "}
                    O. Maulik, D. Kumar, S. Kumar, D. M. Fabijanic, and V. Kumar, "Structural evolution of spark plasma sintered AlFeCuCrMgx (x=0, 0.5, 1, 1.7) high entropy alloys", Intermetallics, 77 (2016) 46-56. DOI: 10.1016/j.intermet.2016.07.001
                  </td>
                </tr>



                <tr>
                  <td>5</td>
                  <td>
                    {" "}
                    V. Kumar, Govind, R. Shekhar, R. Balasubramanim and K. Balani, “Microstructure evolution and texture development in thermomechanically processed Mg–Li–Al based alloys”, Materials Science and Engineering A 547 (2012) 38–50. DOI: 10.1016/j.msea.2012.03.074
                  </td>
                </tr>
              </tbody>
              
                
            </Table>
          </div>
        </div>
        

        <div className="pc1">
          <span className="pc1-head">AWARDS AND ACHIEVEMENTS</span>
          <div>
          TEQIP-III Auditor for NIT Srinagar, IIIT Guwahati, UIET Chandigarh, LNJPIT Chhapra
          <br />
          </div>
          <div>
          2014, DAE Young Scientist Research Award by BRNS.
          <br />
          </div>
          <div>
          2013, Adjunct Faculty in Materials Research Centre for two year by MNIT Jaipur.
          <br />
          </div>
        </div>
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
            <Table>
              <thead>
                <tr>
                  <th>Sr.No.</th>
                  <th> TOPIC</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                  Heat Treatment
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>
                  Physical Metallurgy of multicomponent alloys
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    {" "}
                    Powder Metallurgy
                  </td>
                </tr>

                <tr>
                  <td>4</td>
                  <td>
                    {" "}
                    Nanomaterials
                  </td>
                </tr>



                <tr>
                  <td>5</td>
                  <td>
                    {" "}
                    Metal recovery from Waste
                  </td>
                </tr>
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

export default profile7;
