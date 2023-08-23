import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import "./profile.css";
import { FaAngleLeft } from "react-icons/fa";
import Table from "react-bootstrap/Table";

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
            <img src="https://iiti.ac.in/people/~ajaykk/ajaykk.jpg" alt="sd" />
          </div>
          {/* pc=profile content */}

          <div className="pc2">
            <span className="pc1-head">Prof. Ajay Kumar Kushwaha</span>

            <ul>
              <li>Email : akk@iiti.ac.in</li>
              <li>Office : pod 305 </li>
              <li>
                webpage :{" "}
                <a href="https://iiti.ac.in/people/~ajaykk/index.html">
                  {" "}
                  visit page
                </a>
              </li>
              <li>contact : +91 731 660 3250</li>
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
                <td>IIT, Bombay</td>
                <td>Ph.D. </td>
                <td>2014</td>
              </tr>
              <tr>
                <td>C.S.J.M University, Kanpur</td>
                <td>M.Sc. Physics (Electronics) </td>
                <td>2006</td>
              </tr>
              <tr>
                <td>C.S.J.M University, Kanpur</td>
                <td>B.Sc. (Physics & Maths) </td>
                <td>2003</td>
              </tr>
            </tbody>
          </Table>
          <br />
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
          <span className="pc1-head">PATENTS</span>
          <div>
            <Table>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    {" "}
                    Amorphous Metal Oxide films, (Technology is licensed) ;
                    K.L.G. Goh, H.Q. Le, and Ajay Kushwaha, Patent Publication
                    Number: 20170259300,US Patent (Patent number: 10668500):
                    Date of Patent: June 2, 2020
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
        <div className="pc1">
          <span className="pc1-head">RESEARCH INTEREST</span>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque ab
            sed earum doloribus rem eius id consequuntur reiciendis sunt!
            Dolorum cumque quaerat natus aliquam aperiam amet ipsam, laudantium
            officia error?
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
