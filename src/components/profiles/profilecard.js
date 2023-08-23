import React from 'react'
import {  FaHome, FaLinkedin, FaResearchgate, FaTwitterSquare } from 'react-icons/fa'
import { SiGooglescholar } from 'react-icons/si'

const Profilecard = (props) => {
  return (
    <>
  

  {props.details.map((value, index )=>(
    <div key={index}> 
      <div className="pm-head">{value.section1.title}</div>
    <div className="profile-main">
      <div className="profile-section-1">
        <div className="profile-img">
          <img src={value.section1.img } alt="profimage" />
        </div>
        {/* pc=profile content */}

        <div className="pc2">
          

          <ul>
            <li>{value.section1.designation}</li>
            <li>{value.section1.office} </li>
            <li>{value.section1.email} </li>
            <li>{value.section1.contact}</li>
          <div className="fac-links">
           <a href={value.section1.link1} target="_blank" rel="noreferrer"> <i><FaHome/></i></a>
           <a href={value.section1.link2} target="_blank"  rel="noreferrer"> <i><SiGooglescholar/></i></a>
           <a href={value.section1.link3} target="_blank"  rel="noreferrer"><i><FaResearchgate/></i></a>
           <a href={value.section1.link4} target="_blank"  rel="noreferrer"><i><FaTwitterSquare/></i></a>
           <a href={value.section1.link5} target="_blank"  rel="noreferrer"> <i><FaLinkedin/></i></a>
           
           
            
            
           
          </div>
            
          </ul>
        </div>
      </div>
      
    
      
      <div className="pc1">
        <span className="pc1-head">{value.section2.title}</span>
        <div>
          <ul>
            <li>         {value.section2.li1}
</li>
            <li>  {value.section2.li2}</li>
            <li> {value.section2.li3}</li>
            <li> {value.section2.li4}</li>
          </ul>
         
  
          
        </div>
      </div>
      <div className="pc1">
        <span className="pc1-head">{value.section3.title}</span>
        <div>
          <ul>
            <li>         {value.section3.li1}
</li>
            <li>  {value.section3.li2}</li>
            <li> {value.section3.li3}</li>
            <li> {value.section3.li4}</li>
          </ul>
         
  
          
        </div>
      </div>
      <div className="pc1">
        <span className="pc1-head">{value.section4.title}</span>
        <div>
          <ul>
            <li>         {value.section4.li1}
</li>
            <li>  {value.section4.li2}</li>
            <li> {value.section4.li3}</li>
            <li> {value.section4.li4}</li>
            <li> {value.section4.li5}</li>
          </ul>
         
  
          
        </div>
      </div>
      <div className="pc1">
        <span className="pc1-head">{value.section5.title}</span>
        <div>
          <ul>
            <li>         {value.section5.li1}
</li>
            <li>  {value.section5.li2}</li>
            <li> {value.section5.li3}</li>
            <li> {value.section5.li4}</li>
          </ul>
         
  
          
        </div>
      </div>
    
      <div className="pc1">
        <span className="pc1-head">{value.section6.title}</span>
        <div>
          <ul>
            <li>  {value.section6.li1}  </li>
            <li>  {value.section6.li2}  </li>
            <li>  {value.section6.li3}  </li>
            <li>  {value.section6.li4}  </li>
            <li>  {value.section6.li5}  </li>
       
            </ul>
         
        </div>
      
      </div>
    

    
     
    </div>
    </div>
  ))}

    


  </>
  )
}

export default Profilecard
