import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import "./staff.css"
import mcbairwa from "./staffimages/MaheshChandBairwa.jpg"
import mdhake from "./staffimages/MayurDhake.jpg"
import bdwivedi from "./staffimages/BrajeshDwivedi.png"
import pshrimal from "./staffimages/PranjalShrimal.png"
import sverma from "./staffimages/ShubhamVerma.jpg"
import kthapa from "./staffimages/KulbahadurThapa.jpg"

const ResearchStaff = () => {
    return (
        <>
            <div className='body'>
                <div>
                    <Navbar/>

                </div>
               
              
               <div className="faculty-head-2">Non-Technical Support Staffs in MEMS</div>   


               {/* NOTE :- 
               
               
               
               css for pm-head,pc2 are in the file named profile.css  */}



                

               <div className="Rstaff">
               <div className="stfcontainer">
                    <div className="stfcontainer1">
                        <div className="stfimage">  <img src={bdwivedi} alt="hb"  /></div>
                      
                       <div className="stftext">
                       <div className="pm-head">Mr. Brajesh Dwivedi</div>
                       <div className="pc2">
                        <ul>  <li>Senior Assistant</li>
              <li>Qualification: B.Com., M.Com., MBA (Finance), 
PGDMM, PGDHRM, DMSP (Pursuing)
</li>
              <li>Email	: memsoffice@iiti.ac.in , brajeshd@iiti.ac.in </li>
              <li>Contact : +91-731-660-3478</li>
              <li>Expertise: Secretarial Administrative work, & Procurement</li></ul>
                     
              </div>
                        
                       </div>
                    </div>
                </div>
                <div className="stfcontainer">
                    <div className="stfcontainer1">
                        <div className="stfimage">  <img src={kthapa} alt="kk"  /></div>
                      
                       <div className="stftext">
                       <div className="pm-head">Mr. Kulbahadur Thapa</div>
                       <div className="pc2">
                        <ul>  <li>Junior Attendant Grade II</li>
              <li>Qulification : SSC </li>
              <li>Email	: kthapa@iiti.ac.in  </li>
              <li>Contact : +91-731-660-3478</li>
              <li>Expertise: Office Maintenance & Filling   </li></ul>
                     
              </div>
                        
                       </div>
                    </div>
                </div>
                <div className="faculty-head-2">Technical Support Staffs in MEMS</div>

               
                <div className="stfcontainer">
                    <div className="stfcontainer1">
                        <div className="stfimage">  <img src={mcbairwa} alt="jv"  /></div>
                      
                       <div className="stftext">
                       <div className="pm-head">Mr. Mahesh Chand Bairwa</div>
                       <div className="pc2">
                        <ul>  <li>HoD & Associate Professor</li>
              <li>Qulification : B.Tech. (Metallurgical Engineering) </li>
              <li>Email	:maheshb@iiti.ac.in </li>
              <li>Contact : 0730-660-5581</li>
              <li>Expertise : Metallography, DSC, Dilatometry and Mechanical Testing (Various Hardness Testing, Toughness, Tensile and others)</li></ul>
                     
              </div>
                        
                       </div>
                    </div>
                </div>
                <div className="stfcontainer">
                    <div className="stfcontainer1">
                        <div className="stfimage">  <img src={mdhake} alt="hhu"  /></div>
                      
                       <div className="stftext">
                       <div className="pm-head">Mr. Mayur Dhake</div>
                       <div className="pc2">
                        <ul>  <li>Junior Technical Superintendent</li>
              <li>Qualification: B.E. & Diploma (Mechanical Engineering) </li>
              <li>Email	: dhakemayur@iiti.ac.in  </li>
              <li>Contact : +91-731-660-5117</li>
              <li>Expertise: FESEM & XRD Operation</li></ul>
                     
              </div>
                        
                       </div>
                    </div>
                </div>
                <div className="stfcontainer">
                    <div className="stfcontainer1">
                        <div className="stfimage">  <img src={pshrimal} alt="h"  /></div>
                      
                       <div className="stftext">
                       <div className="pm-head">Mr. Pranjal Shrimali</div>
                       <div className="pc2">
                        <ul>  <li>Junior Lab Assistant</li>
              <li>Qualification: B.E. (Mechanical Engineering) </li>
              <li>Email	:pshrimali@iiti.ac.in  </li>
              <li>Contact : +91-0731-660-5575</li>
              <li>Expertise: Material Testing</li></ul>
                     
              </div>
                        
                       </div>
                    </div>
                </div>
                <div className="stfcontainer">
                    <div className="stfcontainer1">
                        <div className="stfimage">  <img src={sverma} alt="h"  /></div>
                      
                       <div className="stftext">
                       <div className="pm-head">Mr. Shubham Verma</div>
                       <div className="pc2">
                        <ul>  <li>Junior Lab Attendant</li>
              <li>Qualification: B.E. (Mechanical Engineering) </li>
              <li>Email	:shubhamv@iiti.ac.in  </li>
              <li>Contact : +91-731-660-5574</li>
              <li>Expertise: Thermal Analysis & Metallography </li></ul>
                     
              </div>
                        
                       </div>
                    </div>
                </div>
               
                </div>
              
                <Footer/>
            </div>
        </>
    )
}

export default ResearchStaff