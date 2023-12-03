import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import rang from "./profiles/profimages/rang.jpg";
import vc from "./profiles/profimages/vc.jpg";
import prof6 from "./profiles/profimages/prof6.jpg";
import prof13 from "./profiles/profimages/prof13.jpg";
import prof18 from "./profiles/profimages/prof18.jpg";
import prof19 from "./profiles/profimages/prof19.jpg";
import prof11 from "./profiles/profimages/prof11.jpg";
import prof2 from "./profiles/profimages/prof2.jpg";
import prof20 from "./profiles/profimages/prof20.jpeg";
import drpaul from "./profiles/profimages/divein.png";

import nissi from "./profiles/profimages/nissi.jpg";
import rsm from "./profiles/profimages/rsm.jpg";
import pattern from "./profiles/profimages/pattern2.jpg";

import muru from "./profiles/profimages/muru.jpg";
import hemanth from "./profiles/profimages/hemanth.jpg";
import sp from "./profiles/profimages/sp.jpeg";
import download from "./profiles/profimages/download.jpeg";



import hd from "./profiles/profimages/hd.jpeg";
import gh from "./profiles/profimages/gai.jpeg";
import dance from "./profiles/profimages/dance.jpeg";
import painting from "./profiles/profimages/painting.jpeg";
import photo from "./profiles/profimages/graphy.jpeg";





import "./studentcorner.css"
import { FaEnvelope, FaPhone } from "react-icons/fa";

const faculty = () => {
  return (
    <>
     
<div class="navbar">
    <a href="#home">Home</a>
    <a href="#about">About</a>
    <a href="#services">Connect</a>
    <a href="#contact">Contact</a>
  </div>
     
  
  <div class="studentcorner">

  
  <img src={vc} alt="" />
<span class="middleText">Student Corner</span>
{/*<div class="middleText2">Welcome to the Student Corner at IIT Indore—an exclusive space designed to cater to the diverse needs and interests of our dynamic student community.
This webpage serves as a hub for students to access a wealth of resources, engage in collaborative initiatives, and stay informed about campus events.
We encourage you to actively participate in the vibrant IIT Indore community. Share your experiences, contribute to discussions, and make use of the valuable information available here. This webpage is more than just a virtual space—it's a reflection of the energy and enthusiasm that defines the student life at IIT Indore. Welcome, and enjoy your journey through the Student Corner!</div>*/}
 

  </div>

<div class="c">
  <div class="imagesdiv">
<span class="cult">Culturals</span>
<div class="x">
    <div class="zoom"><img src={dance} alt="" />
<div class="up">Dance</div>

    </div>
    <a href="faculty4"><div class="zoom"><img src={painting} alt="" />

    
<div class="up">Arts</div>

    </div ></a>
    <div class="zoom"><img src={photo} alt="" />
<div class="up2">Photography</div>

    </div>
    <div class="zoom"><img src={gh} alt="" />
<div class="up">Gallery</div>

    </div></div>
</div> </div>








<footer>
    <p>&copy; 2023 IITI Website. All rights reserved.</p>
  </footer>


















    </>
  );
};

export default faculty;
