import React from 'react'

import "./staff.css"
import "./Events.css";
import Table from "react-bootstrap/Table";


const Events = () => {
  return (
    <>
  
      
        <span class='even'><h1>Events</h1></span>


       
        <div className='ind-section'>
                <div className="sub-ind-sec1">
                   





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
