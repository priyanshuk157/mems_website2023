import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import prof1 from "./profiles/profimages/prof1.jpg";
import prof4 from "./profiles/profimages/prof4.png";
import prof6 from "./profiles/profimages/prof6.jpg";
import prof13 from "./profiles/profimages/prof13.jpg";
import prof18 from "./profiles/profimages/prof18.jpg";
import prof19 from "./profiles/profimages/prof19.jpg";
import prof11 from "./profiles/profimages/prof11.jpg";
import prof2 from "./profiles/profimages/prof2.jpg";
import prof20 from "./profiles/profimages/prof20.jpeg";
import drpaul from "./profiles/profimages/drpaul.jpg";

import nissi from "./profiles/profimages/nissi.jpg";
import rsm from "./profiles/profimages/rsm.jpg";


import muru from "./profiles/profimages/muru.jpg";
import hemanth from "./profiles/profimages/hemanth.jpg";
import vinod from "./profiles/profimages/vinod.jpg";
import shirage from "./profiles/profimages/shirage.jpg";



import dk from "./profiles/profimages/dkrai.jpg";
import gh from "./profiles/profimages/ghosh.jpg";
import Basha from "./profiles/profimages/basha.jpg";
// import devan from "./profiles/profimages/devan.jpg";
import samal from "./profiles/profimages/samal.jpg";





import "./peoplecard.css"
import { FaEnvelope, FaPhone } from "react-icons/fa";

const faculty = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <span class="Faculty"><h1>Faculty</h1></span>
     
      <div className="faculty-main">
      
        <div className="faculty-width">

        <div className="hodsec  ">
            <img
              src={gh}
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
              <div className="name">Prof. Abhijit Ghosh</div>
                <div className="post"> Assistant Professor </div>
                <div className="post"> Office		: POD 1D-608  </div>
                <div className="post"> Email	 (<i><FaEnvelope/></i>)	:aghosh@iiti.ac.in</div>
                <div className="post"> Contact  (<i><FaPhone/></i>)		: 0731 660 3287 </div>
                <div className="post-button">
                  <a href="profile11"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="hodsec">
            <img
              src={prof20}
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Ajay Kumar Kushwaha</div>
                <div className="post"> HoD & Associate Professor </div>
                <div className="post"> Office		: Pod 1-D 305  </div>
                <div className="post"> Email	 (<i><FaEnvelope/></i>)	:akk@iiti.ac.in</div>
                <div className="post"> Contact  (<i><FaPhone/></i>)		: 3250 </div>
                <div className="post-button">
                  <a href="profile1"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>


          <div className="hodsec  ">
            <img
              src={prof1}
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Chandan Halder</div>
                <div className="post"> Assistant Professor </div>
                <div className="post"> Office		: 211(h), Hub Building (CITC) </div>
                <div className="post"> Email	 (<i><FaEnvelope/></i>)	: nisheeth @iiti.ac.in </div>
                <div className="post"> Contact  (<i><FaPhone/></i>)		: 0731-660-3175 (O)/ 7726938388 (M) </div>
                <div className="post-button">
                  <a href="profile16"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="hodsec  ">
            <img
              src={dk}
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Dhirendra Kumar Rai</div>
                <div className="post"> Assistant Professor </div>
                <div className="post"> Office		: POD-1D, Room No. 418 </div>
                <div className="post"> Email	 (<i><FaEnvelope/></i>)	: dkrai@iiti.ac.in </div>
                <div className="post"> Contact  (<i><FaPhone/></i>)		: +91-731660-3278/5118</div>
                <div className="post-button">
                  <a href="profile10"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="hodsec  ">
            <img
              src={Basha}
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Dudekula Althaf Basha</div>
                <div className="post">Assistant Professor </div>
                <div className="post">Office		: 1D(POD-Chromium Building)-306</div>
                <div className="post">Email	 (<i><FaEnvelope/></i>)	: bashada@iiti.ac.in </div>
                <div className="post">Contact  (<i><FaPhone/></i>)		: +917316603516</div>
                <div className="post-button">
                  <a href="profile15"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="hodsec  ">
            <img src={prof6} className="hodimg" alt="okf" />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Eswara Prasad Korimilli</div>
                <div className="post"> Associate Professor </div>
                <div className="post"> Office		: PoD 1D-607  </div>
                <div className="post"> Email	 (<i><FaEnvelope/></i>)	: eswar@iiti.ac.in </div>
                <div className="post"> Contact  (<i><FaPhone/></i>)		: ​+91 731-2438700 Ext.: 3280 </div>
                <div className="post-button">
                  <a href="profile6"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>

          <div className="hodsec  ">
            <img
              src={hemanth}
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Hemant Borkar</div>
                <div className="post"> Assistant Professor </div>
                <div className="post"> Office		: POD 1D (Chromium room 612)</div>
                <div className="post"> Email	 (<i><FaEnvelope/></i>)	: h.borkar@iiti.ac.in</div>
                <div className="post"> Contact  (<i><FaPhone/></i>)		: +91-73243063295 </div>
                <div className="post-button">
                  <a href="profile12"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>








          <div className="hodsec  ">
            <img
              src={muru}
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Jayaprakash Murugesan</div>
                <div className="post"> jayaprakash@iiti.ac.in </div>
                <div className="post"> jayaprakash@iiti.ac.in </div>
                <div className="post"> jayaprakash@iiti.ac.in </div>
                <div className="post"> jayaprakash@iiti.ac.in </div>
                <div className="post-button">
                  <a href="profile8"> view profile</a>{" "}
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
                <div className="post"> Associate Professor</div>
                <div className="post"> Office		: PoD 1D; 412  </div>
                <div className="post"> Email	 (<i><FaEnvelope/></i>)	:mdubey@iiti.ac.in </div>
                <div className="post"> Contact  (<i><FaPhone/></i>)		: 3258</div>
                <div className="post-button">
                  <a href="profile5"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>











          <div className="hodsec  ">
            <img
              src={nissi}
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Nisheeth Kumar Prasad</div>
                <div className="post"> Assistant Professor </div>
                <div className="post"> Office		: 211(h), Hub Building (CITC)</div>
                <div className="post"> Email	 (<i><FaEnvelope/></i>)	: nisheeth @iiti.ac.in  </div>
                <div className="post"> Contact  (<i><FaPhone/></i>)		: 0731-660-3175 (O)/ 7726938388 (M)  </div>
                <div className="post-button">
                  <a href="profile17"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="hodsec  ">
            <img
              src={shirage}
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Parasharam M. Shirage</div>
                <div className="post">Professor </div>
                <div className="post"> Office		: POD D 414 </div>
                <div className="post"> Email	 (<i><FaEnvelope/></i>)	:pmshirage@iiti.ac.in </div>
                <div className="post"> Contact  (<i><FaPhone/></i>)		: 0731 6603330</div>
                <div className="post-button">
                  <a href="profile2"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>




          <div className="hodsec  ">
            <img
              src={rsm}
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Ram Sajeevan Maurya</div>
                <div className="post">  Assistant Professor </div>
                <div className="post"> Office		: Chromium, POD 1D-613 </div>
                <div className="post"> Email	 (<i><FaEnvelope/></i>)	:ramsajeevan@iiti.ac.in </div>
                <div className="post"> Contact  (<i><FaPhone/></i>)		:0731-660-3202, +91-8309350644</div>
                <div className="post-button">
                  <a href="profile14"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>










          <div className="hodsec  ">
            <img src={prof2} className="hodimg" alt="okf" />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Rupesh Devan</div>
                <div className="post"> Associate Professor </div>
                <div className="post"> Office		: 1D-414 </div>
                <div className="post"> Email	 (<i><FaEnvelope/></i>)	:rupes@iiti.ac.in </div>
                <div className="post"> Contact  (<i><FaPhone/></i>)		: +91-0731-6603244 </div>
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
                <div className="post"> Associate Professor </div>
                <div className="post"> Email	 (<i><FaEnvelope/></i>)	:sshosmani@iiti.ac.in </div>
                <div className="post"> Office		: MEMS, POD 1D 415</div>
                <div className="post"> Contact  (<i><FaPhone/></i>)		: 91-0731-660333 (Ext. 3243);  +91-731-6603243 </div>
                <div className="post-button">
                  <a href="profile4"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>




          <div className="hodsec  ">
            <img
              src={samal}
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Sumanta Samal</div>
                <div className="post"> Assistant Professor </div>
                <div className="post">Office		:  POD 1D-411 </div>
                <div className="post"> Email	 (<i><FaEnvelope/></i>)	: sumanta@iiti.ac.in </div>
                <div className="post"> Contact  (<i><FaPhone/></i>)		: +91 731-660-3252 </div>
                <div className="post-button">
                  <a href="profile9"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>



          <div className="hodsec  ">
            <img src={prof13} className="hodimg" alt="okf" />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Sunil Kumar</div>
                <div className="post"> Associate Professor </div>
                <div className="post"> Office		: Room no. 416, POD-1D (Chromium Building) </div>
                <div className="post"> Email	 (<i><FaEnvelope/></i>)	: sunil@iiti.ac.in </div>
                <div className="post"> Contact  (<i><FaPhone/></i>)		: 07324-306-3281 </div>
                <div className="post-button">
                  <a href="profile13"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>




          <div className="hodsec  ">
            <img src={prof18} className="hodimg" alt="okf" />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Venkata Vamsi Koruprolu</div>
                <div className="post">Assistant Professor</div>
                <div className="post"> Office		: #211(b), Hub Building</div>
                <div className="post"> Email	 (<i><FaEnvelope/></i>)	: kvvamsi@iiti.ac.in </div>
                <div className="post"> Contact  (<i><FaPhone/></i>)		: +91-731-660-3333 ext: 5568 </div>
                <div className="post-button">
                  <a href="profile18"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>


          <div className="hodsec  ">
            <img
              src={vinod}
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Vinod Kumar</div>
                <div className="post"> Associate Professor </div>
                <div className="post"> Office		:Room No. 412, POD – 1D </div>
                <div className="post">  Email	 (<i><FaEnvelope/></i>)	: vkt@iiti.ac.in </div>
                <div className="post"> Contact  (<i><FaPhone/></i>)		: + 91-7324-306-3251 ext: 5568 </div>
                <div className="post-button">
                  <a href="profile7"> view profile</a>{" "}
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
                <div className="post"> Assistant Professor </div>
                <div className="post"> Office		: Room No. 211 (G), CITC </div>
                <div className="post"> Email	 (<i><FaEnvelope/></i>)	: nbb@iitb.ac.in </div>
                <div className="post"> Contact  (<i><FaPhone/></i>)	+91-22-2576-7610 </div>
               
                <div className="post-button">
                  <a href="profile19"> view profile</a>{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="hodsec">
            <img
              src={drpaul}
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Prof. Dr. Ahoutou Paul</div>
                <div className="post"> Assistant Professor </div>
                <div className="post"> Office		: Room No. 211 (G), CITC </div>
                <div className="post"> Email	 (<i><FaEnvelope/></i>)	: nbb@iitb.ac.in </div>
                <div className="post"> Contact  (<i><FaPhone/></i>)	+91-22-2576-7610 </div>
               
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
