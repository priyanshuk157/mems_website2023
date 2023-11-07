import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import "./staff.css"
import mcbairwa from "./staffimages/MaheshChandBairwa.jpg"
import mdhake from "./staffimages/MayurDhake.jpg"
import pshrimal from "./staffimages/PranjalShrimal.png"
import sverma from "./staffimages/ShubhamVerma.jpg"
import { FaEnvelope } from 'react-icons/fa';
import mukul from "./staffimages/mukul_kumar.png"
// import samina from "./staffimages/sameena_rapphik.jpg"
// import ankush from "./staffimages/ankush_marodkar.png"
const ResearchStaff = () => {
  return (
   <>
 <div>
                    <Navbar/>

                </div>
<div className="faculty-main">
        <div className="faculty-width">
          <div className="hodsec">
            <img
              src={mcbairwa}
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">  Mr. Mahesh Chand Bairwa    </div>
                <div className="post">Email	 (<i><FaEnvelope/></i>)	:maheshb@iiti.ac.in</div>
                
                <div className="post">Designation: Junior Technical Superintendent </div>
                
               
              </div>
            </div>
          </div>
          <div className="hodsec">
            <img
                     src={mdhake}
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Mr. Mayur Dhake</div>
                <div className="post">Email	 (<i><FaEnvelope/></i>)	:dhakemayur@iiti.ac.in </div>
                
                <div className="post">Designation: Junior Technical Superintendent </div>
                
               
              </div>
            </div>
          </div>
          <div className="hodsec">
            <img
                    src={pshrimal}
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Mr. Pranjal Shrimali</div>
                <div className="post">Email	 (<i><FaEnvelope/></i>)	:pshrimali@iiti.ac.in </div>
                
                <div className="post">Designation: Junior Lab Assistant </div>
                
               
              </div>
            </div>
          </div>
          <div className="hodsec">
            <img
               src={sverma}
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Mr. Shubham Verma</div>
                <div className="post">Email	 (<i><FaEnvelope/></i>)	:shubhamv@iiti.ac.in </div>
               
                <div className="post">Designation: Junior Lab Attendant</div>
                
               
              </div>
            </div>
          </div>
      
        </div>
      </div>
      <Footer/>
   </>
  )
}

export default ResearchStaff
