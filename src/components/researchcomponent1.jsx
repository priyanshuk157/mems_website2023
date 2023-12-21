import React from 'react'
import './research.css'

import { useState } from 'react';




const Researchcomponent1 = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }


  return (
    <>
   
   <div className="research-body">
      <div className='research-main'>
        

        <div className='research-heads'>
          <div className=''><h2> Themes</h2></div>

          <div className={toggleState === 1 ? "heads-1" : "noheads-1"} onClick={() => toggleTab(1)}>Alloy design, development, and deformation</div>
          <div className={toggleState === 4 ? "heads-1" : "noheads-1"} onClick={() => toggleTab(4)}>Electronics & Photonics</div>
          <div className={toggleState === 6 ? "heads-1" : "noheads-1"} onClick={() => toggleTab(6)}>Energy, Environment & Sustainability</div>
          <div className={toggleState === 5 ? "heads-1" : "noheads-1"} onClick={() => toggleTab(5)}>Nano & Soft materials</div>
          <div className={toggleState === 3 ? "heads-1" : "noheads-1"} onClick={() => toggleTab(3)}>Strategic Materials</div>
          <div className={toggleState === 2 ? "heads-1" : "noheads-1"} onClick={() => toggleTab(2)}>  Surface engineering & Materials degradation</div>
          <div className={toggleState === 7 ? "heads-1" : "noheads-1"} > <a href="collab">Collaborations</a></div>
         


        </div>
        <div className={toggleState === 1 ? " active-content1" : " research-content"}>
          <div className="research-content-head"> Areas</div>
          <ul>
          <li> <b>Alloy Design</b> 
              <p className='research-info'>
              Focuses on the intentional formulation of alloys with specific compositions to achieve desired
              properties, addressing performance requirements in various applications, such as strength, corrosion
              resistance, and thermal stability.
              </p>

</li>
            <li> 
              <b>Process-Structure-Property (P-S-P) correlations and Materials Modelling</b>

<p className='research-info'>
Investigates the relationships between the processing conditions, resulting microstructures, and the
overall material properties. Materials modeling is employed to understand and predict these
correlations, aiding in the optimization of manufacturing processes.
</p>
</li>
            <li>
              <b>Thermodynamics & Phase transformation</b>

<p className='research-info'>
Explores the thermodynamic principles governing phase transformations in alloys. Understanding how
phases evolve under different conditions is crucial for designing materials with tailored properties.
</p>
</li>
<li>
  <b> Indentation Mechanics</b>
 
  <p className='research-info'>
  Examines the mechanical response of materials to indentation, providing insights into hardness, elastic
modulus, and other mechanical properties. This is essential for evaluating the material&#39;s resistance to
deformation and wear.
  </p>
</li>
<li> <b>Mechanics of Materials</b>
  <p className='research-info'>Studies the mechanical behavior of materials under various loads and environmental conditions. This
includes analyses of stress, strain, and the resulting deformation, contributing to the design of materials
with optimal mechanical performance.</p>
</li>
<li> <b>Crystallographic texture</b>
  <p className='research-info'>Investigates the preferred orientation of crystalline grains in a material. Understanding crystallographic
texture is crucial for predicting material properties and optimizing processing techniques.</p>
</li>
<li> <b>Integrated  Computational Materials Engineering (ICME)</b>
  <p className='research-info'>Utilizes computational tools to integrate various aspects of materials engineering, including design,
processing, microstructure evolution, and properties. ICME facilitates a holistic approach to material
development.</p>
</li>
<li> <b>Materials Informatics (AI/ML)</b>
  <p className='research-info'>Applies artificial intelligence (AI) and machine learning (ML) techniques to analyze large datasets in
materials science. Materials informatics aids in identifying patterns, predicting material behavior, and
accelerating the discovery of new alloys with desired properties.</p>
</li>
<li> <b>Extreme Materials</b>
  <p className='research-info'>Investigates the behavior of materials under extreme conditions, such as high temperatures, pressures,
or aggressive environments. This research is essential for applications in aerospace, defense, and other
challenging environments.</p>
</li>
          </ul>
         



        </div>
        <div className={toggleState === 3 ? " active-content1" : " research-content"}>
          <div className="research-content-head"> Areas</div>
       
<ul>
<li> <b>Light weight alloys</b>
    <p className="research-info">Focuses on the development of alloys with reduced density while maintaining desirable mechanical
properties. These materials find applications in aerospace, automotive, and other industries where
weight savings are critical.</p>
</li>
  <li> <b>Multi-principal element alloys (MPEAs)</b>
    <p className="research-info">Investigates alloys composed of multiple principal elements, aiming to achieve enhanced properties and
functionalities compared to traditional alloys. MPEAs have potential applications in structural materials
and beyond.</p>
</li>
  <li> <b>Metallic glasses</b>
    <p className="research-info">Studies amorphous metallic alloys with a disordered atomic structure, known as metallic glasses.
Research in this area explores their unique mechanical, thermal, and magnetic properties for
applications in structural and functional materials.</p>
</li>
  <li> <b>High temperature alloys : Superalloys</b>
    <p className="research-info">Focuses on alloys designed to withstand extreme temperatures and harsh environments, particularly
superalloys used in high-temperature applications like aerospace propulsion and power generation.</p>
</li>
  <li> <b>Ceramics</b>
    <p className="research-info">Investigates the properties and applications of ceramics, which are inorganic, non-metallic materials
with a wide range of mechanical, thermal, and electrical properties. Ceramics find use in diverse
applications, including electronics, biomedical devices, and structural components.</p>
</li>
  <li> <b>Cryogenic material</b>
    <p className="research-info">Explores materials suitable for extremely low-temperature environments, such as those encountered in
cryogenic applications. Research in this area includes the development of materials for space
exploration, medical applications, and superconducting technologies.</p>
</li>
</ul>

        </div>
        <div className={toggleState === 2 ? " active-content1" : " research-content"}>
          <div className="research-content-head"> Areas</div>
         <ul>
         <li><b>Corrosion & prevention </b>
            <p className="research-info">Investigates the degradation of materials due to chemical reactions with their environment,
emphasizing strategies for corrosion prevention. This includes the development of corrosion-resistant
materials and coatings.</p>
</li>
          <li> <b>Oxidation</b>
            <p className="research-info">Focuses on the reaction of materials with oxygen and other oxidizing agents, leading to the formation of
oxides. Research in this area explores methods to mitigate oxidation and enhance the oxidation
resistance of materials.</p>
</li>
          <li> <b>Fatigue & Fracture</b>
            <p className="research-info">Studies the behavior of materials under cyclic loading and the mechanisms leading to fatigue and
fracture. This research is crucial for designing materials with improved fatigue resistance and predicting
their durability.</p>
</li>
          <li> <b>Metal joining</b>
            <p className="research-info">Investigates various techniques for joining metals, such as welding, soldering, and brazing. Research in
metal joining includes optimizing processes for enhanced strength, minimizing defects, and improving
the overall integrity of the joints.</p>
</li>
          <li> <b>Thin films & coatings</b>
            <p className="research-info">Focuses on the deposition of thin layers of materials onto surfaces to impart specific properties, such as
corrosion resistance, hardness, or conductivity. Thin films and coatings find applications in protective
layers for various materials.</p>
</li>
          <li><b>Surface treatments </b>
            <p className="research-info">Explores methods to modify the surface properties of materials, including chemical treatments, plasma
treatments, and other surface engineering techniques. Surface treatments aim to enhance corrosion
resistance, wear resistance, and overall performance.</p>
</li>
         </ul>


        </div>
        <div className={toggleState === 6 ? " active-content1" : " research-content"}>
          <div className="research-content-head"> Areas</div>
          <ul>
          <li> <b>New Generation Solar Cell Batteries</b>
              <p className="research-info">Focuses on the development of advanced solar cell technologies, including next-generation photovoltaic
materials, thin-film solar cells, and emerging concepts such as perovskite solar cells.</p>
</li>
            <li><b>Fuel Cells and Supercapacitors </b>
              <p className="research-info">Explores fuel cells for efficient energy conversion and supercapacitors for high-power energy storage.
Both technologies have applications in portable electronics, electric vehicles, and renewable energy
systems.</p>
</li>
            <li> <b>Hydrogen Generation and Storage Water Splitting</b>
              <p className="research-info">Investigates methods for producing hydrogen through water splitting as a clean and sustainable fuel
source. Focuses on catalysts and materials for efficient hydrogen generation and storage.</p>
</li>
            <li><b>Photocatalysis and Solar Fuels Electrocatalysis </b>
              <p className="research-info">Examines materials and processes for using sunlight to drive chemical reactions, including photocatalysis
for hydrogen production and electrocatalysis for fuel cell applications.</p>
</li>
            <li> <b>Thermoelectrics & Pezoelectronics</b>
              <p className="research-info">Studies materials capable of converting heat (thermoelectrics) or mechanical vibrations (piezoelectrics)
into electrical energy. Applications include waste heat recovery and energy harvesting from ambient
vibrations.</p>
</li>
            <li> <b>Carbon capture, utilization and conversion</b>
              <p className="research-info">Addresses technologies for capturing and utilizing carbon dioxide to mitigate its impact on climate
change. This includes carbon capture and storage (CCS) as well as methods for converting CO2 into
valuable products.</p>
</li>
            <li> <b>Environmental Sensors

            </b>
              <p className="research-info">Develops sensors for monitoring environmental parameters such as air quality, pollution levels, and
radiation. These sensors are crucial for environmental monitoring and ensuring public health.</p>
</li>
            <li> <b>Water purification and waste-water treatment</b>
              <p className="research-info">Investigates materials and technologies for purifying water and treating wastewater. This includes the
development of efficient filtration systems, adsorbents, and catalytic processes for water treatment.</p>

</li>
          </ul>


        </div>
        <div className={toggleState === 4 ? " active-content1" : " research-content"}>
          <div className="research-content-head"> Areas</div>
          <ul>
          <li> <b>
          Thin films deposition
          </b>
              <p className="research-info">Involves the application of thin layers of materials onto substrates, a critical process in the fabrication of
electronic devices, sensors, and optical coatings. Techniques such as chemical vapor deposition (CVD)
and physical vapor deposition (PVD) are employed.</p>
</li>
            <li> <b>Wide bandgap semiconducting oxides</b>
              <p className="research-info">Focuses on semiconducting oxides with wide bandgaps, which are crucial for applications in
optoelectronics, power electronics, and transparent conductive films.</p>
</li>
            <li> <b>Optical and transport properties</b>
              <p className="research-info">Investigates how materials interact with light and the mechanisms governing charge transport.
Understanding these properties is vital for designing materials for optical devices, sensors, and
electronic components.</p>
</li>
            <li> <b>Memory devices</b>

              <p className="research-info">Examines materials and technologies for memory storage, including non-volatile memory devices like
flash memory and emerging memory technologies such as resistive switching memory and phase-
change memory.</p> 
</li>
            <li> <b>Power electronics devices </b>
              <p className="research-info">Focuses on materials and device structures for power electronic applications, including the development
of efficient semiconductors and advanced devices for power conversion and control.</p>
</li>
            <li> <b>Spintronics</b>
              <p className="research-info">Studies the utilization of electron spin for information processing and storage. Spintronic devices have
potential applications in memory, sensors, and quantum computing.</p>
</li>
            <li> <b>Photo-active materials</b>
              <p className="research-info">Explores materials that exhibit photoactive behavior, converting light into electrical energy. This includes
research on photovoltaic materials for solar cells and other light-sensitive devices.</p>
</li>
            <li> <b>Optoelectronics</b>
              <p className="research-info">Encompasses the study and application of electronic devices that interact with light. This includes light-
emitting diodes (LEDs), lasers, and photodetectors used in communication, imaging, and sensing.</p>

</li>
          </ul>



        </div>
        <div className={toggleState === 5 ? " active-content1" : " research-content"}>
          <div className="research-content-head"> Areas</div>
          <ul>
          <li> <b>Design and Growth of Nanostructure</b>
              <p className="research-info">Focuses on the deliberate design and controlled growth of materials at the nanoscale, aiming to tailor
their properties for specific applications in various fields.</p>
</li>
            <li> <b>0D,1D, 2D materials and Applications</b>
              <p className="research-info">Investigates materials with dimensions at the nanoscale, including zero-dimensional (0D) nanoparticles,
one-dimensional (1D) nanowires, and two-dimensional (2D) nanosheets. Applications span electronics,
sensors, and energy storage.</p> 
</li>
            <li><b>Nano-hetero-architectures </b>
              <p className="research-info">Explores the integration of different nanomaterials to create heterostructures with unique properties.
This involves the careful design and assembly of diverse nano-components for enhanced functionalities.</p>
</li>
            <li> <b>Optical and transport properties of semiconducting nanostructures</b>
              <p className="research-info">Studies how the optical and transport properties of semiconducting nanostructures differ from their
bulk counterparts. This understanding is crucial for the development of advanced electronic and
optoelectronic devices.</p>
</li>
            <li> <b>Design and Synthesis of multifunctional metallogels</b>
              <p className="research-info">Focuses on the creation of metallogels with multifunctional properties, such as conductance,
morphological control, and photo-physical characteristics. These materials have applications in various
fields, including electronics and sensing.</p>
</li>
            <li> <b>Colloidal crystals, glasses and gels</b>
              <p className="research-info">Investigates the formation and properties of colloidal crystals, glasses, and gels, which are assemblies of
nanoparticles or colloids. These materials find applications in photonics, sensing, and drug delivery.</p>
</li>
            <li> <b>Self-Assembly of Soft Matter</b>
              <p className="research-info">Explores the spontaneous organization of soft materials, such as polymers, into ordered structures
through self-assembly. This phenomenon is harnessed for creating functional materials with tailored
properties.</p>
</li>
            <li> <b>Polymers and polymeric nanocomposites</b>
              <p className="research-info">Studies the properties and applications of polymers and polymeric nanocomposites, where nanoscale
additives are incorporated into polymer matrices to enhance mechanical, thermal, and electrical
properties.</p>
</li>
          </ul>




        </div>
        <div  className={toggleState === 1 ? "prof-names" : " no-profnames"}  >
          <div className="faculty-involved"><h3>Faculties</h3> </div>
          <ul>
            <li><a href="profile9"> S. Samal</a> </li>
            <li><a href="p18"> V. Kumar</a> </li>
            <li><a href="p4"> E. P. Korimilli</a> </li>
            <li><a href="demo"> A. Ghosh</a> </li>
            <li><a href="p6"> H. Borkar</a> </li>
            <li><a href="p1"> D. Basha</a> </li>
            <li><a href="p12"> R.S Maurya</a> </li>
            <li><a href="p17"> K.V. Vamsi</a> </li>
            <li><a href="p2"> C. Haldar</a> </li>
           
            
           


          </ul>

        </div>
        <div  className={toggleState === 2 ? "prof-names" : " no-profnames"}  >
          <div className="faculty-involved"><h3>Faculties</h3> </div>
          <ul>  <li><a href="p15"> S. Hosmani</a> </li>
            <li><a href="p7"> J. Murugesan</a> </li>
            <li><a href="p10"> N. K. Prasad</a> </li>
            <li><a href="p9"> M. Dubey</a> </li>
            <li><a href="p18"> V. Kumar</a> </li>
            <li><a href="p1">  D. Basha</a> </li>
           

          </ul>

        </div>
        <div  className={toggleState === 3? "prof-names" : " no-profnames"}  >
          <div className="faculty-involved"><h3>Faculties</h3> </div>
          <ul>
            <li><a href="profile9">  S Samal</a> </li>
            <li><a href="p5"> Ajay K Kushwaha</a> </li>
            <li><a href="demo"> Abhijit Ghosh</a> </li>
            <li><a href="p17"> K.V. Vamsi</a> </li>




          </ul>

        </div>
        <div  className={toggleState === 4? "prof-names" : " no-profnames"}  >
          <div className="faculty-involved"><h3>Faculties</h3> </div>
          <ul>
            <li><a href="p5"> Ajay K. Kushwaha</a> </li>
            <li><a href="p11"> Parasharam M. Shirage</a> </li>
            <li><a href="p14"> Rupesh Devan</a> </li>
       
      


          </ul>

        </div>
        <div  className={toggleState === 5? "prof-names" : " no-profnames"}  >
          <div className="faculty-involved"><h3>Faculties</h3> </div>
          <ul>
            <li><a href="p11"> Parasharam M. Shirage</a> </li>
            <li><a href="p5"> Ajay K. Kushwaha</a> </li>
            <li><a href="p14"> Rupesh Devan</a> </li>
            <li><a href="p3"> Dhirendra K. Rai</a> </li>
            <li><a href="profile9"> S. Samal</a> </li>
            <li><a href="p18"> Vinod Kumar</a> </li>
            <li><a href="p9">  M. Dubey</a> </li>
        

          </ul>

        </div>
        <div  className={toggleState === 6? "prof-names" : " no-profnames"}  >
          <div className="faculty-involved"><h3>Faculties</h3> </div>
          <ul>
            <li><a href="p11"> P. M. Shirage</a> </li>
            <li><a href="p16"> Sunil Kumar</a> </li>
            <li><a href="p14"> Rupesh Devan</a> </li>
            <li><a href="p5"> Ajay K. Kushwaha</a> </li>
            <li><a href="p3"> Dhirendra K. Rai   </a> </li>
        


          </ul>

        </div>
      </div>
  </div>
      
      </>

  )
}

export default Researchcomponent1
