import React from 'react'
import "./researchtheme.css";
import Navbar from './navbar'
import Footer from "../components/footer";


const ResearchThemes = () => {
  return (

  <>
  <div>
    <Navbar/>
  </div>
 
  <div className="research-theme-main">
  <div className='themes-main-1'>
  <a href="researchcomponent1">
    <div className="themes-blocks">
        <div className='theme-heads'>Alloy design, development, and deformation</div>
     
        
    </div>
    </a>
    <a href="researchcomponent1">
    <div className="themes-blocks">
        <div className='theme-heads'>Surface engineering & Materials degradation</div>
        
        
    </div>
    </a>
    </div>
    <div className='themes-main-2'>
    <a href="researchcomponent1">
    <div className="themes-blocks">
        <div className='theme-heads'>Strategic Materials
</div>
       
        
    </div>
    </a>
    <div className='research-logo'>
    <img src="https://upload.wikimedia.org/wikipedia/en/c/c4/Indian_Institute_of_Technology%2C_Indore_Logo.png" alt="ok" />
  </div>
  <a href="researchcomponent1">
    <div className="themes-blocks">
    <div className='theme-heads'>Electronics & Photonics</div>
       
        
    </div>
    </a>
    </div>
  
    <div className='themes-main-1'>
    <a href="researchcomponent1">
    <div className="themes-blocks">
        <div className='theme-heads'>Nano & Soft materials</div>
    
        
    </div>
    </a>
    <a href="researchcomponent1">
    <div className="themes-blocks">
        <div className='theme-heads'>Energy & Environment
</div>

        
    </div>
    </a>
    </div>
   
    </div>
   


  <div>
    <Footer/>
  </div>
  </>
  )
}

export default ResearchThemes
