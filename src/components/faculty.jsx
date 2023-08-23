import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";

import prof4 from "./profiles/profimages/prof4.png";
import prof6 from "./profiles/profimages/prof6.jpg";
import prof13 from "./profiles/profimages/prof13.jpg";
import prof18 from "./profiles/profimages/prof18.jpg";
import prof19 from "./profiles/profimages/prof19.jpg";
import prof11 from "./profiles/profimages/prof11.jpg";
import prof2 from "./profiles/profimages/prof2.jpg";
import "./peoplecard.css"

const faculty = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
     
      <div className="faculty-main">
        <div className="faculty-width">
          <div className="hodsec  ">
            <img
              src="https://iiti.ac.in/people/~ajaykk/ajaykk.jpg"
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Ajay Kumar Kushwaha</div>
                <div className="post"> akk@iiti.ac.in </div>
                <div className="post-button">
                  <a href="profile1"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="hodsec  ">
            <img
              src="http://mems.iiti.ac.in/images/shirage.jpg"
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Parasharam M. Shirage</div>
                <div className="post"> pmshirage@iiti.ac.in </div>
                <div className="post-button">
                  <a href="profile2"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="hodsec  ">
            <img src={prof2} className="hodimg" alt="okf" />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Rupesh Devan</div>
                <div className="post"> rupesh@iiti.ac.in </div>
                <div className="post-button">
                  <a href="profile3"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="hodsec  ">
            <img src={prof4} className="hodimg" alt="okf" />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Santosh Hosmani</div>
                <div className="post"> sshosmani@iiti.ac.in </div>
                <div className="post-button">
                  <a href="profile4"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="hodsec  ">
            <img
              src={prof11}
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Mrigendra Dubey</div>
                <div className="post"> mdubey@iiti.ac.in </div>
                <div className="post-button">
                  <a href="profile5"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="hodsec  ">
            <img src={prof6} className="hodimg" alt="okf" />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Eswara Prasad Korimilli</div>
                <div className="post"> eswar@iiti.ac.in </div>
                <div className="post-button">
                  <a href="profile6"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="hodsec  ">
            <img
              src="http://mems.iiti.ac.in/images/vinod.jpg"
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Vinod Kumar</div>
                <div className="post"> vkt@iiti.ac.in </div>
                <div className="post-button">
                  <a href="profile7"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="hodsec  ">
            <img
              src="http://mems.iiti.ac.in/images/muru.jpg"
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Jayaprakash Murugesan</div>
                <div className="post"> jayaprakash@iiti.ac.in </div>
                <div className="post-button">
                  <a href="profile8"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="hodsec  ">
            <img
              src="http://mems.iiti.ac.in/images/samal.jpg"
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Sumanta Samal</div>
                <div className="post"> sumanta@iiti.ac.in </div>
                <div className="post-button">
                  <a href="profile9"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="hodsec  ">
            <img
              src="http://mems.iiti.ac.in/images/dkrai.jpg"
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Dhirendra Kumar Rai</div>
                <div className="post"> dkrai@iiti.ac.in </div>
                <div className="post-button">
                  <a href="profile10"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="hodsec  ">
            <img
              src="http://mems.iiti.ac.in/images/ghosh.jpg"
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Abhijit Ghosh</div>
                <div className="post"> aghosh@iiti.ac.in </div>
                <div className="post-button">
                  <a href="profile11"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="hodsec  ">
            <img
              src="http://mems.iiti.ac.in/images/hemanth.jpg"
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Hemant Borkar</div>
                <div className="post"> h.borkar@iiti.ac.in </div>
                <div className="post-button">
                  <a href="profile12"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="hodsec  ">
            <img src={prof13} className="hodimg" alt="okf" />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Sunil Kumar</div>
                <div className="post"> asunil@iiti.ac.in </div>
                <div className="post-button">
                  <a href="profile13"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="hodsec  ">
            <img
              src="http://mems.iiti.ac.in/images/rsm.jpg"
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Ram Sajeevan Maurya</div>
                <div className="post"> ramsajeevan@iiti.ac.in </div>
                <div className="post-button">
                  <a href="profile14"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="hodsec  ">
            <img
              src="http://mems.iiti.ac.in/images/basha.jpg"
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Dudekula Althaf Basha</div>
                <div className="post">bashada@iiti.ac.in </div>
                <div className="post-button">
                  <a href="profile15"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="hodsec  ">
            <img
              src="http://mems.iiti.ac.in/images/Dr%20Chandan%20Halder_%20MEMS.jpg"
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Chandan Halder</div>
                <div className="post"> chalder@iiti.ac.in </div>
                <div className="post-button">
                  <a href="profile16"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="hodsec  ">
            <img
              src="http://mems.iiti.ac.in/images/DSC_0383_new.JPG"
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Nisheeth Kumar Prasad</div>
                <div className="post"> nisheeth@iiti.ac.in </div>
                <div className="post-button">
                  <a href="profile17"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="hodsec  ">
            <img src={prof18} className="hodimg" alt="okf" />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Venkata Vamsi Koruprolu</div>
                <div className="post"> kvvamsi@iiti.ac.in </div>
                <div className="post-button">
                  <a href="profile18"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>
        
        </div>
      </div>
      <div className="faculty-head-2">
       
        Visiting Faculty
      </div>
      <div className="faculty-main1">
        <div className="faculty-width1">
          <div className="hodsec">
            <img
              src={prof19}
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. N B Ballal</div>
                <div className="post"> nbb@iitb.ac.in </div>
                <div className="post-button">
                  <a href="profile19"> view profile</a>{" "}
                </div>
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

export default faculty;
