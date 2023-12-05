import React from "react";
// import Navbar from "./navbar";
// import Footer from "./footer";
// import rang from "./profiles/profimages/rang.jpg";
import vc from "./profiles/profimages/vc.jpg";
import art1 from "./profiles/profimages/art1.jpg";
import art2 from "./profiles/profimages/art2.jpg";
// import a3 from "./profiles/profimages/art3.jpg";
import a4 from "./profiles/profimages/art4.jpg";
import a5 from "./profiles/profimages/art5.jpg";
import a61 from "./profiles/profimages/art6 (1).jpg";
import a62 from "./profiles/profimages/art6 (2).jpg";
import a63 from "./profiles/profimages/art6 (3).jpg";
// import a64 from "./profiles/profimages/art6 (4).jpg";
// import a65 from "./profiles/profimages/art6 (5).jpg";
// import a66 from "./profiles/profimages/art6 (6).jpg";
// import a67 from "./profiles/profimages/art6 (7).jpg";
// import a68 from "./profiles/profimages/art6 (8).jpg";
// import a69 from "./profiles/profimages/art6 (9).jpg";
// import a610 from "./profiles/profimages/art6 (10).jpg";
// import a611 from "./profiles/profimages/art6 (11).jpg";
// import a612 from "./profiles/profimages/art6 (12).jpg";
// import a613 from "./profiles/profimages/art6 (13).jpg";
// import prof20 from "./profiles/profimages/prof20.jpeg";
// import drpaul from "./profiles/profimages/divein.png";

// import nissi from "./profiles/profimages/nissi.jpg";
// import rsm from "./profiles/profimages/rsm.jpg";
// import pattern from "./profiles/profimages/pattern2.jpg";

// import muru from "./profiles/profimages/muru.jpg";
// import hemanth from "./profiles/profimages/hemanth.jpg";
// import sp from "./profiles/profimages/sp.jpeg";
// import download from "./profiles/profimages/download.jpeg";



// import hd from "./profiles/profimages/hd.jpeg";
// import gh from "./profiles/profimages/gai.jpeg";
// import dance from "./profiles/profimages/dance.jpeg";
// import painting from "./profiles/profimages/painting.jpeg";
// import photo from "./profiles/profimages/graphy.jpeg";





import "./studentcorner.css"
// import { FaEnvelope, FaPhone } from "react-icons/fa";

const faculty = () => {
  return (
    <>
     
<div class="navbar">
    <a href="faculty3">Home</a>
    <a href="#about">About</a>
    <a href="/">Main Website</a>
    <a href="#contact">Contact</a>
  </div>
     
  
  <div class="studentcorner">

  
  <img src={vc} alt="" />
<span class="middleText3">Arts</span>




 

  </div>



<div class="artimage">
<img src={art1} alt="" />
<img src={art2} alt="" />

<img src={a4} alt="" />
<img src={a5} alt="" />
<img src={a61} alt="" />
<img src={a62} alt="" />
<img src={a63} alt="" /></div>










<footer>
    <p>&copy; 2023 IITI Website. All rights reserved.</p>
  </footer>


















    </>
  );
};

export default faculty;
