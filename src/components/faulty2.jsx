import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import Facultydata from "./facultydata";
import VisitingFacultydata from "./visitingfac";




import "./faculty2.css"
const Faculty = () => {
  const [data] = useState(Facultydata);
  const [newdata] = useState(VisitingFacultydata);
  return (
    <>
      
      <span class="Faculty"><h1>FACULTY</h1></span>
     
      <div class="faculty-imgs">

        {
        data.map((elem)=>{
          const {name , image , link} = elem;
          return(
            <>
             <div class="imageprof">
        <NavLink to={link}>
            <img src={image} alt="" />
            <div class="name">{name}
            
            </div></NavLink>
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
        <NavLink to={link}>
            <img src={image} alt="" />
            <div class="name">{name}
            
            </div></NavLink>
        </div>
        
            </>
          )
        }
        
        )}

        
       
      </div>
     
 
    </>
  );
};

export default Faculty;
