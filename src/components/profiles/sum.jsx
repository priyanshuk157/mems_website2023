import React from "react";

import "./demo.css";
import {
  FaEnvelope,
  FaHome,
  FaLinkedin,
  FaPhone,
  FaResearchgate,
  FaTwitterSquare,
} from "react-icons/fa";
import Table from "react-bootstrap/Table";
import { SiGooglescholar } from "react-icons/si";

import prof18 from "./profimages/samal.jpg";

const profile11 = () => {
  return (
    <>
      <span className="pc1-headmain">Prof. Sumanta Samal</span>
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
            <img src={prof18} alt="" />
          </div>

          <div className="pc2">
            <ul>
              <li>Designation : Associate Professor</li>
              <li>Office : Room No. 1D- 411 </li>
              <li>
                Email (
                <i>
                  <FaEnvelope />
                </i>
                ) : sumanta@iiti.ac.in
              </li>
              <li>
                Contact (
                <i>
                  <FaPhone />
                </i>
                ) : 0731-660-3252{" "}
              </li>
              <div className="fac-links">
                <a
                  href="https://iiti.ac.in/people/~sumanta/index.html "
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    <FaHome />
                  </i>
                </a>
                <a
                  href=" https://scholar.google.co.in/citations?user=_ovvQcQAAAAJ&hl=en
 "
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    <SiGooglescholar />
                  </i>
                </a>
                <a
                  href="https://www.researchgate.net/profile/Sumanta_Samal?ev=hdr_xprf "
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>
                    <FaResearchgate />
                  </i>
                </a>
                <a
                  href=" https://twitter.com/Sumanta68627551 "
                  target="_blank"
                  rel="noreferrer"
                >
                  <i>
                    <FaTwitterSquare />
                  </i>
                </a>
                <a
                  href="https://www.linkedin.com/in/sumanta-samal-a8a2aa189/"
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <i>
                    <FaLinkedin />
                  </i>
                </a>
              </div>
            </ul>
            <div class="aca">
              <span className="pc1-head">ACADEMIC BACKGROUND</span>
            </div>
          </div>
          <div class="acalist">
            <ul>
              <li>
                Ph.D (Materials Science and Engineering), IIT Kanpur, 2014
              </li>
              <br />
              <li>
                M.Tech. (Metallurgical and Materials Engineering), (NIT)
                Rourkela, 2009
              </li>
              <br />
              <li>
                M.Sc., Physics (Specialization in solid state physics), Utkal
                University, Bhubaneswar, 2007
              </li>
              <br />{" "}
              <li>
                B.Sc. [with Physics (Hons)], M.P.C. (Autonomous) College,
                Baripada, 2005
              </li>
            </ul>
          </div>
        </div>

        <div class="right">
          <div className="pc1">
            <div className="pc1">
              <span className="pc1-head">RESEARCH INTEREST</span>
              <div>
                <ul>
                  <li> Solidification: Experiments and Simulation</li>
                  <li>
                    {" "}
                    Processing-Structure-Property correlation in
                    multicomponent/high entropy alloys
                  </li>
                  <li> Material design for high temperature applications</li>
                  <li>Phase equilibria: Materials for the future</li>
                </ul>
              </div>
            </div>
           
            <div className="pc1">
              <span className="pc1-head">POSITIONS HELD</span>
              <ul>
                <li>
                  Associate Professor, Department of Metallurgy Engineering and
                  Materials Science, Indian Institute of Technology Indore,
                  India, November 22, 2022 - contd.
                </li>
                <li>
                  Assistant Professor, Department of Metallurgy Engineering and
                  Materials Science, Indian Institute of Technology Indore,
                  India, April 10, 2017 - November 21, 2022.
                </li>
                <li>
                  Institute Post Doctoral Fellow, Department of Metallurgical
                  and Materials Engineering, Indian Institute of Technology
                  Madras, India, April 9, 2014 - April 8, 2017.
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
                        R. Jain, M.R. Rahul, P. Chakraborty, R. K. Sabat, S.
                        Samal, N. Park,G. Phanikumar, R. Tewari, Integrated
                        modeling, ANN, and experimental approach to understand
                        the hot deformation behaviour of Co-Cr-Fe-Ni-V high
                        entropy alloy , Journal of Materials Research and
                        Technology, Vol. 25, pp. 840-854, 2023
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        Girish Khanna R, Sarathkumar Krishnan, Mayank K. Singh,
                        Dhirendra Kumar Rai, S. Samal, A detailed investigation
                        regarding the corrosion and electrocatalytic performance
                        of Fe-Co-Ni-Cr-V high entropy alloy , Electrochimica
                        Acta, doi: 10.1016/j.electacta.2023.142582, 2023 .
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        Piyush Kumar, Reliance Jain, M.R. Rahul, Abhijit Ghosh,
                        S. Samal, Gandham Phanikumar, High temperature
                        deformation behaviour and processing maps of
                        FeCoNiCrAlTi dual phase high entropy alloy, Metals and
                        Materials International, 27 February 2023, doi:
                        10.1007/s12540-023-01399-6
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>
                        Sandeep Jain, Naveeen L, Vinod Kumar, S. Samal, Effect
                        of Ni and Si alloying elements on the phase evolution,
                        mechanical properties, tribological behaviour of Al-Cu
                        alloys, Materials Chemistry and Physics, Vol. 297, pp.
                        127421, 2023.
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>
                        Sandeep Jain, Piyush Kumar, Vinod Kumar, Abhijit Ghosh,
                        S. Samal, Solidification simulation of single-phase
                        Fe-Co-Cr-Ni-V high entropy alloy, Philosophical
                        Magazine, pp. 1-21, doi: 10.1080/14786435.2022.2084793,
                        2022.
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="pc1">
              <span className="pc1-head">BOOKS CHAPTER PUBLISHED </span>
              <div>
                <ul>
                  
                  <li>
                    {" "}
                    Krishanu Biswas and Sumanta Samal, Solidification of
                    Peritectic Alloys, in Solidification of Containerless
                    Undercooled Melts, First Edition. Edited by D.M. Herlach and
                    D.M. Matson, WILEY VCH, 2012, 509-541
                  </li>
                </ul>
              </div>
            </div>

            <div className="pc1">
              <span className="pc1-head">AWARDS AND ACHIEVEMENTS</span>
              <div>
                International Travel Support (ITS)-SERB to attend the “7th
                International Conference on Solidification and Gravity (SG’18)”
                to be held during 03/09/2018 to 06/09/2018 at Miskolc -
                Lillafüred, Hungary.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default profile11;
