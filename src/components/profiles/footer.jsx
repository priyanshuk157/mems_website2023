import React from 'react'
import './footer.css'
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const footer = () => {
  return (
    <div className='footer-body'>
      <div className=" footer-main ">
        
            <div className=""><span className='footer-head'> Office of Head of the Department</span><br />
            Metallurgical Engineering and Materials Science <br />
Indian Institute of Technology Indore <br />
Khandwa Road, Simrol-453552 <br />
Indore, Madhya Pradesh, INDIA
           
</div>  
           
            <div className=""> </div>
            <div className=""> </div>
            <div className=" footer-logos">
           <div> <i>< FaPhoneAlt/> </i>  : +91-7324-306 819</div> 
            <div><i>< FaEnvelope/></i> : memsoffice@iiti.ac.in</div> 

             
            </div>
        </div>
      </div>
    
  )
}

export default footer;
