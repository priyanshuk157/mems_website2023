import React from 'react'
import './footer.css'
import { FaFacebook, FaInstagram, FaPhoneAlt, FaResearchgate } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";

 

const footer = () => {
  return (
    <div className='footer-body'>
      
      <div className=" footer-main ">
        
            <div className=""><span className='footer-head'>  Department Office</span><br />
            Metallurgical Engineering and Materials Science <br />
Indian Institute of Technology Indore <br />
Khandwa Road, Simrol-453552 <br />
Indore, Madhya Pradesh, INDIA

            </div>  
           
            

            <div className=" footer-logos">
           <div> <i>< FaPhoneAlt/> </i>  : +91-7324-306 819</div> 
            <div> <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJNqtVZzFQLzBgSwfgLcbslrjCmQrNjSkDmlTtrQTtZnGKQQwTjnhvBRQsKVqmVzkDghGCL" target="_blank" rel="noopener noreferrer"> <i>< FaEnvelope/></i> : memsoffice@iiti.ac.in</a></div>
           
            

             
            </div>
            <div className="footer-logos1"> <div > <a href="https://www.linkedin.com/in/metallurgical-engineering-and-materials-science-iit-indore-15a541274/ " target="_blank" rel="noopener noreferrer"><i>< FaLinkedin/></i> </a></div>
            <div><a href="https://twitter.com/outreach_mems" target="_blank" rel="noopener noreferrer"><i>< FaTwitterSquare/></i> </a></div>
            <div><a href="https://www.instagram.com/outreach_mems/" target="_blank" rel="noopener noreferrer"><i><FaInstagram/></i> </a></div>
            <div><a href="https://www.researchgate.net/profile/Metallurgical-Engineering-And-Materials-Science-Iit-Indore" target="_blank" rel="noopener noreferrer"><i>< FaResearchgate/></i> </a></div>
            <div><a href="https://www.facebook.com/profile.php?id=100092114204325" target="_blank" rel="noopener noreferrer"><i>< FaFacebook/></i> </a></div>
            </div>
           
            <div className='created'><a href="https://github.com/priyanshuk157">Designed and Maintained By Priyanshu Kumbhare</a></div>
            
        </div>
      </div>
    
  )
}

export default footer;
