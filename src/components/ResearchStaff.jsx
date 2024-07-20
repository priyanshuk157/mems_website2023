import React from 'react'

import "./staff.css"

//import mdhake from "./staffimages/MayurDhake.jpg"
//import pshrimal from "./staffimages/PranjalShrimal.png"
//import sverma from "./staffimages/ShubhamVerma.jpg"
import { FaEnvelope } from 'react-icons/fa';
// import mukul from "./staffimages/mukul_kumar.png"
// import samina from "./staffimages/sameena_rapphik.jpg"
// import ankush from "./staffimages/ankush_marodkar.png"
import drdre from "./staffimages/drpaul.jpg"

const ResearchStaff = () => {
  return (
   <>
 
                <div className="faculty-head-2">Visiting Scientist/fellow</div>
<div className="faculty-main">
 
        <div className="faculty-width">
          <div className="hodsec">
            <img
              src={drdre}
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">  Dr. Ahoutou Paul KOUAKOU    </div>
                <div className="post">Email	 (<i><FaEnvelope/></i>)	:-</div>
                
                <div className="post">Designation: Visiting Professor </div>
                
               
              </div>
            </div>
          </div>
          
      
        </div>
      </div>
      
   </>
  )
}

export default ResearchStaff
