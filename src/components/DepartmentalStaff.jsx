import React from 'react'
      
import "./staff.css"
import mcbairwa from "./staffimages/MaheshChandBairwa.jpg"
import mdhake from "./staffimages/MayurDhake.jpg"
import bdwivedi from "./staffimages/BrajeshDwivedi.png"
import pshrimal from "./staffimages/PranjalShrimal.png"
import sverma from "./staffimages/ShubhamVerma.jpg"
import kthapa from "./staffimages/KulbahadurThapa.jpg"
import { FaEnvelope } from 'react-icons/fa';
// import mukul from "./staffimages/mukul_kumar.png"
// import samina from "./staffimages/sameena_rapphik.jpg"
// import ankush from "./staffimages/ankush_marodkar.png"

const DepartmentalStaff = () => {
    return (
        <>
            <div className='body'>
               
               
                <div className="faculty-head-2">Office Staffs in MEMS</div>   


<div className="faculty-main">
        <div className="faculty-width">
          <div className="hodsec">
            <img
              src={bdwivedi}
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">  Mr. Brajesh Dwivedi    </div>
                <div className="post">Designation		:Senior Assistant </div>
                <div className="post">Email	 (<i><FaEnvelope/></i>)	:brajeshd@iiti.ac.in , memsoffice@iiti.ac.in</div>
                
                
                
               
              </div>
            </div>
          </div>
          <div className="hodsec">
            <img
                     src={kthapa}
              className="hodimg"
              alt="okf"
            />

            <div className="hodtext">
              <div className="hodtext1">
                <div className="name">Mr. Kulbahadur Thapa</div>
                <div className="post">Designation: Junior Attendant Grade II </div>
                <div className="post">Email	 (<i><FaEnvelope/></i>)	: kthapa@iiti.ac.in </div>
                    </div>
                
                
                
            </div>
          </div>
        
      
        </div>
      </div>
              
              
               <div className="faculty-head-2">Technical Support Staffs in MEMS</div>   


               {/* NOTE :- 
               
               
               
               css for pm-head,pc2 are in the file named profile.css  */}



                

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
                <div className="post">Designation: Junior Technical Superintendent </div>
                <div className="post">Email	 (<i><FaEnvelope/></i>)	:maheshb@iiti.ac.in</div>
                
               
              
               
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
                <div className="post">Designation: Junior Technical Superintendent </div>
                <div className="post">Email	 (<i><FaEnvelope/></i>)	:dhakemayur@iiti.ac.in </div>
                
               
                
               
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
                <div className="post">Designation: Junior Lab Assistant </div>
                <div className="post">Email	 (<i><FaEnvelope/></i>)	:pshrimali@iiti.ac.in </div>
                
                
               
               
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
                <div className="post">Designation: Junior Lab Attendant</div>
                <div className="post">Email	 (<i><FaEnvelope/></i>)	:shubhamv@iiti.ac.in </div>
                
                
                
               
              </div>
            </div>
          </div>
      
        </div>
      </div>

               
            </div>
        </>
    )
}

export default DepartmentalStaff    