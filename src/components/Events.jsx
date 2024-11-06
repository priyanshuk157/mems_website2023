import React from 'react'
import logo from "./images/IIT INDORE (1).jpg";
import "./staff.css"
import "./Events.css";
import Table from "react-bootstrap/Table";


const Events = () => {
  return (
    <>
  
      
        <span class='even'><h1>Events</h1></span>



        <div className='event-section'>
                <div className="sub-eve-sec1">
                   





                    <Table>
            <thead>
              <tr>
                <th><div class="bold">DATE</div></th>
                <th>             </th>
                <th>             </th>
              
                <th><div class="bold2">EVENTS</div></th>
              </tr>
            </thead>
            <tbody>


            <tr>
                <td>7/11/2024</td>
                <td></td>
                <td></td>
              
                <td>Dept of Metallurgical Engineering and Materials Science, (IIT Indore) is organizing a 5-Day Workshop on "Advanced Materials Processing and Characterization" during 19-23 December, 2024 in IIT Indore Campus. 
                <a a href={logo} id="pdfLink" target="_blank">
                details
              </a></td>
              </tr>


            <tr>
                <td>16/07/2024</td>
                <td></td>
                <td></td>
              
                <td>A textbook titled "Material Science and Engineering" written by Dr. Vinod Kumar and Dr. Nisheeth K. Prasad (MEMS Department, IIT Indore) has been published online by AICTE.
                  The book is as per AICTE model syllabus and designed for 2nd year Diploma Students of Mechanical Engineering.
                  <a href="https://lnkd.in/dTcri2rm">details</a></td>
              </tr>
              <tr>
                <td>24/05/2024</td>
                <td></td>
                <td></td>
              
                <td>Research group of Prof. Rupesh S. Devan (Professor, Department of Metallurgical Engineering and Materials Science, IIT Indore) granted a patent for an invention entitled " A molten salt solid-state reaction- based process to obtain a high purity Ti3AlC2 Max Phase"</td>
              </tr>
              <tr>
                <td>11/07/2024</td>
                <td></td>
                <td></td>
              
                <td>Department of Metallurgical Engineering and Materials Science, IIT Indore is organized an International Conference on "Energy and Environmental Materials (E2M)"<a href="https://e2m.iiti.ac.in/">details</a></td>
                </tr>
              <tr>
                <td>02/02/2024</td>
                <td></td>
                <td></td>
              
                <td>One article from the Research group of Dr. Dhirendra Kumar Rai Titled: "Two-dimensional Ti3C2Tx MXene nanosheets for CO2 electroreduction in aqueous electrolytes" published last year has been chosen as outstanding articles in Energy Advances authored by researchers in India.<a href="https://pubs.rsc.org/en/content/articlelanding/2023/ya/d3ya00117b">details</a></td>
                
              </tr>
              <tr>
                <td>23/01/2024</td>
                <td></td>
                <td></td>
              
                <td>Dr. Pankaj Mohanty (Lecturer in the Department of Physics, University of Johannesburg) delivered an expert lecture titled " Structural and Magnetic Properties of Cr-based Rare-earth Oxides in the Department of Metallurgical Engineering and Materials Science (MEMS).</td>
                </tr>
                <tr>
                <td>15/01/2024</td>
                <td></td>
                <td></td>
              
                <td>Materials Advantage Student Chapter of Department of Metallurgical Engineering and Materials Science, IIT Indore hosted one-day workshop-cum-training program (hybrid mode) on "Thermodynamic Insights for Materials Design A CALPHAD Perspective".
                The workshop featured expert talks and basic training on CALPHAD.</td>
              </tr>
              <tr>
                <td>04/01/2024</td>
                <td></td>
                <td></td>
              
                <td>Mr. Santosh Bimli, Research scholar, MEMS Department IIT Indore has received Best Oral Presentation Award under the guidance of Prof. Rupesh S. Devan at Global Conference for decarbonisation of Energy and Materials (GC-DEM) held at NTU Singapore.</td>
              </tr>
              <tr>
                <td>24/11/2023</td>
                <td></td>
                <td></td>
              
                <td>Materials Advantage Student Chapter of MEMS
Department IIT Indore organized an International
Symposium on "Physical Metallurgy of High-Entropy
Alloys". The symposium featured six expert talks
delivered by distinguished speakers from foreign
universities. Beyond the expert talks, the symposium
also featured poster presentation session, 3-minute
flash presentations by students and a Rangoli
competition of the Fe-Fe3C Phase diagram.
Students got an opportunity to excel their knowledge
through this symposium.<a href="https://www.freepressjournal.in/indore/iit-indore-conducts-symposium-on-physical-metallurgy-of-heas">details</a></td>
              </tr>
              <tr>
                <td>15/10/2023</td>
                <td></td>
                <td></td>
                
                
                <td>MEMS Department, IIT Indore organized an In-
House Symposium on Engineers' Day. </td>
              </tr>
              <tr>
                <td>13/11/2023</td>
                <td></td>
                <td></td>
                <td>MEMS Department, IIT Indore organized an event in
which Mr. Vishal Kumar Rana, Scientific Officer at
Bureau of Indian Standards (BIS) delivered a lecture
on the importance of standardization and certification
of various general products as well standardization
of Metallography and Heat treatment of Metals and
alloys</td>
              </tr>
              
              <tr>
                <td>14/12/2022</td>
                <td></td>
                <td></td>
              
                <td>Dr. Rupesh S. Devan is serving as an Editor for the Chinese J of Physics; Elsevier <a href="https://www.sciencedirect.com/journal/chinese-journal-of-physics/about/editorial-board">Details</a></td>
              </tr>

             
            </tbody>
          </Table>


















             
                    
                </div>
                {/* <div className="sub-ind-sec2">
                <div className='ind-head'> BROCHURE</div>
                    

                </div> */}

            </div>


      
    </>
  )
}

export default Events
