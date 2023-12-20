import React, { useState } from "react";
import Navbar from "./navbar2";
import Footer from "./footer";
// import prof1 from "./profiles/profimages/prof1.jpg";
// import prof4 from "./profiles/profimages/prof4.png";
// import prof6 from "./profiles/profimages/prof6.jpg";
// import prof13 from "./profiles/profimages/prof13.jpg";
// import prof18 from "./profiles/profimages/prof18.jpg";
// import prof19 from "./profiles/profimages/prof19.jpg";
// import prof11 from "./profiles/profimages/prof11.jpg";
// import prof2 from "./profiles/profimages/prof2.jpg";
// import prof20 from "./profiles/profimages/prof20.jpeg";
// import drpaul from "./profiles/profimages/drpaul.jpg";

// import nissi from "./profiles/profimages/nissi.jpg";
// import rsm from "./profiles/profimages/rsm.jpg";


// import muru from "./profiles/profimages/muru.jpg";
// import hemanth from "./profiles/profimages/hemanth.jpg";
// import vinod from "./profiles/profimages/vinod.jpg";
// import shirage from "./profiles/profimages/shirage.jpg";



// import dk from "./profiles/profimages/dkrai.jpg";
// import gh from "./profiles/profimages/ghosh.jpg";
// import Basha from "./profiles/profimages/basha.jpg";
// import devan from "./profiles/profimages/devan.jpg";
// import samal from "./profiles/profimages/samal.jpg";

import Facultydata from "./facultydata";
import VisitingFacultydata from "./visitingfac";




import "./faculty2.css"
// import { FaEnvelope, FaPhone } from "react-icons/fa";

const Faculty = () => {
  const [data] = useState(Facultydata);
  const [newdata] = useState(VisitingFacultydata);
  return (
    <>
      <div>
        <Navbar/>
      </div>
      <span class="Faculty"><h1>FACULTY</h1></span>
     
      <div class="faculty-imgs">

        {
        data.map((elem)=>{
          const {name , image , link} = elem;
          return(
            <>
             <div class="imageprof">
        <a href={link}>
            <img src={image} alt="" />
            <div class="name">{name}
            
            </div></a>
        </div>
        
            </>
          )
        }
        
        )}

        
       
      </div>
      <span class="Faculty"><h1>VISITING FACULTY</h1></span>
     
      <div class="faculty-imgs">

        {
        newdata.map((e)=>{
          const {  name , image , link} = e;
          return(
            <>
             <div class="imageprof">
        <a href={link}>
            <img src={image} alt="" />
            <div class="name">{name}
            
            </div></a>
        </div>
        
            </>
          )
        }
        
        )}

        
       
      </div>
     
      

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Faculty;
