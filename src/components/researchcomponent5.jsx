import React from 'react'
import './research.css'
import Navbar from './navbar'
import Footer from "./footer";
import { FaCaretRight } from "react-icons/fa";
import { useState } from 'react';




const Researchcomponent5 = () => {
  const [toggleState, setToggleState] = useState(5);

  const toggleTab = (index) => {
    setToggleState(index);
  }


  return (
    <><div>
      <Navbar />
    </div>
    <div className="research-body">
      <div className='research-main'>
        

        <div className='research-heads'>
          <div className=''><h2>Themes</h2></div>

          <div className='heads-1' onClick={() => toggleTab(1)}><i className={toggleState === 1 ? "active-indicator1" : "indicator1"}><FaCaretRight /></i>Alloy design, development, and deformation</div>
          <div className='heads-1' onClick={() => toggleTab(4)}><i className={toggleState === 4 ? "active-indicator1" : "indicator1"}><FaCaretRight /></i>Electronics & Photonics</div>
          <div className='heads-1' onClick={() => toggleTab(6)}><i className={toggleState === 6 ? "active-indicator1" : "indicator1"}><FaCaretRight /></i>Energy & Environment</div>
          <div className='heads-1' onClick={() => toggleTab(5)}><i className={toggleState === 5 ? "active-indicator1" : "indicator1"}><FaCaretRight /></i>Nano & Soft materials</div>
          <div className='heads-1' onClick={() => toggleTab(3)}><i className={toggleState === 3 ? "active-indicator1" : "indicator1"}><FaCaretRight /></i>Strategic Materials</div>
          <div className='heads-1' onClick={() => toggleTab(2)}><i className={toggleState === 2 ? "active-indicator1" : "indicator1"}><FaCaretRight /></i>Surface engineering & Materials degradation</div>
          <div className='heads-1' > <a href="collab">Collaborations</a></div>
         


        </div>
        <div className={toggleState === 1 ? " active-content1" : " research-content"}>
          <div className="research-content-head">Research Areas</div>
          <ul>
            <li> Alloy Design

</li>
            <li> 
Process-Structure-Property (P-S-P) correlations and Materials Modelling
</li>
            <li>
Thermodynamics & Phase transformation
</li>
<li>Indentation Mechanics
</li>
<li>Mechanics of Materials
</li>
<li>Crystallographic texture
</li>
<li>Integrated  Computational Materials Engineering (ICME)
</li>
<li>Materials Informatics (AI/ML)
</li>
<li>Extreme Materials
</li>
          </ul>
         



        </div>
        <div className={toggleState === 3 ? " active-content1" : " research-content"}>
          <div className="research-content-head">Research Areas</div>
       
<ul>
  <li>Light weight alloys
</li>
  <li>Multi-principal element alloys (MPEAs)
</li>
  <li>Metallic glasses
</li>
  <li>High temperature alloys : Superalloys
</li>
  <li>Ceramics
</li>
  <li>Cryogenic material
</li>
</ul>

        </div>
        <div className={toggleState === 2 ? " active-content1" : " research-content"}>
          <div className="research-content-head">Research Areas</div>
         <ul>
          <li>         Corrosion & prevention
</li>
          <li>Oxidation
</li>
          <li>Fatigue & Fracture
</li>
          <li>Metal joining
</li>
          <li>Thin films & coatings
</li>
          <li>Surface treatments
</li>
         </ul>


        </div>
        <div className={toggleState === 6 ? " active-content1" : " research-content"}>
          <div className="research-content-head">Research Areas</div>
          <ul>
            <li>          New Generation Solar Cell Batteries
</li>
            <li>Fuel Cells and Supercapacitors
</li>
            <li>Hydrogen Generation and Storage Water Splitting
</li>
            <li>Photocatalysis and Solar Fuels Electrocatalysis
</li>
            <li>Thermoelectrics & Pezoelectronics
</li>
            <li>Carbon capture, utilization and conversion
</li>
            <li>Environmental Sensors
</li>
            <li>Water purification and waste-water treatment

</li>
          </ul>


        </div>
        <div className={toggleState === 4 ? " active-content1" : " research-content"}>
          <div className="research-content-head">Research Areas</div>
          <ul>
            <li>          Thin films deposition
</li>
            <li>Wide bandgap semiconducting oxides
</li>
            <li>Optical and transport properties
</li>
            <li>Memory devices 
</li>
            <li>Power electronics devices 
</li>
            <li>Spintronics
</li>
            <li>Photo-active materials
</li>
            <li>Optoelectronics

</li>
          </ul>



        </div>
        <div className={toggleState === 5 ? " active-content1" : " research-content"}>
          <div className="research-content-head">Research Areas</div>
          <ul>
            <li>          Design and Growth of Nanostructure
</li>
            <li>0D,1D, 2D materials and Applications 
</li>
            <li>Nano-hetero-architectures
</li>
            <li>Optical and transport properties of semiconducting nanostructures
</li>
            <li>Design and Synthesis of multifunctional metallogels
</li>
            <li>Colloidal crystals, glasses and gels
</li>
            <li>Self-Assembly of Soft Matter
</li>
            <li>Polymers and polymeric nanocomposites
</li>
          </ul>




        </div>
        <div  className={toggleState === 1 ? "prof-names" : " no-profnames"}  >
          <div className="faculty-involved"><h3>Faculties</h3> </div>
          <ul>
            <li><a href="profile9">Prof. S. Samal</a> </li>
            <li><a href="profile7">Prof. V. Kumar</a> </li>
            <li><a href="profile6">Prof. E. P. Korimilli</a> </li>
            <li><a href="profile11">Prof. A. Ghosh</a> </li>
            <li><a href="profile12">Prof. H. Borkar</a> </li>
            <li><a href="profile15">Prof. D. Basha</a> </li>
            <li><a href="profile14">Prof. R.S Maurya</a> </li>
            <li><a href="profile18">Prof. K.V. Vamsi</a> </li>
            <li><a href="profile16">Prof. C. Haldar</a> </li>
           
            
           


          </ul>

        </div>
        <div  className={toggleState === 2 ? "prof-names" : " no-profnames"}  >
          <div className="faculty-involved"><h3>Faculties</h3> </div>
          <ul>  <li><a href="profile4">Prof. S. Hosmani</a> </li>
            <li><a href="profile8">Prof. J. Murugesan</a> </li>
            <li><a href="profile17">Prof. N. K. Prasad</a> </li>
            <li><a href="profile5">Prof. M. Dubey</a> </li>
            <li><a href="profile7">Prof. V. Kumar</a> </li>
            <li><a href="profile15"> Prof. D. Basha</a> </li>
           

          </ul>

        </div>
        <div  className={toggleState === 3? "prof-names" : " no-profnames"}  >
          <div className="faculty-involved"><h3>Faculties</h3> </div>
          <ul>
            <li><a href="profile9"> Prof. S Samal</a> </li>
            <li><a href="profile1">Prof. Ajay K Kushwaha</a> </li>
            <li><a href="profile11">Prof
            . Abhijit Ghosh</a> </li>


          </ul>

        </div>
        <div  className={toggleState === 4? "prof-names" : " no-profnames"}  >
          <div className="faculty-involved"><h3>Faculties</h3> </div>
          <ul>
            <li><a href="profile1">Prof. Ajay K. Kushwaha</a> </li>
            <li><a href="profile2">Prof. Parasharam M. Shirage</a> </li>
            <li><a href="profile3">Prof. Rupesh Devan</a> </li>
       
      


          </ul>

        </div>
        <div  className={toggleState === 5? "prof-names" : " no-profnames"}  >
          <div className="faculty-involved"><h3>Faculties</h3> </div>
          <ul>
            <li><a href="profile2">Prof. Parasharam M. Shirage</a> </li>
            <li><a href="profile1">Prof. Ajay K. Kushwaha</a> </li>
            <li><a href="profile3">Prof. Rupesh Devan</a> </li>
            <li><a href="profile10">Prof. Dhirendra K. Rai</a> </li>
            <li><a href="profile9">Prof. S. Samal</a> </li>
            <li><a href="profile7">Prof. Vinod Kumar</a> </li>
            <li><a href="profile5"> Prof. M. Dubey</a> </li>
        

          </ul>

        </div>
        <div  className={toggleState === 6? "prof-names" : " no-profnames"}  >
          <div className="faculty-involved"><h3>Faculties</h3> </div>
          <ul>
            <li><a href="profile2">Prof. P. M. Shirage</a> </li>
            <li><a href="profile13">Prof. Sunil Kumar</a> </li>
            <li><a href="profile3">Prof. Rupesh Devan</a> </li>
            <li><a href="profile1">Prof. Ajay K. Kushwaha</a> </li>
            <li><a href="profile10">Prof. Dhirendra K. Rai   </a> </li>
        


          </ul>

        </div>
      </div>
      </div>
      <div>
        <Footer />
      </div></>

  )
}

export default Researchcomponent5
