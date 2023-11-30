import React from 'react'
import Navbar from './navbar'
import Footer from "./footer";
import "./staff.css"
import "./Events.css";
import Table from "react-bootstrap/Table";

const Events = () => {
  return (
    <>
    <div>
      <Navbar />
    </div>
      
        <span class='even'><h1>Events</h1></span>



        <div className='ind-section'>
                <div className="sub-ind-sec1">
                   





                    <Table>
            <thead>
              <tr>
                <th>DATE</th>
                
                <th>EVENT</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>14/12/2022</td>
         
                <td>"International Conference on Frontiers in Materials Engineering" December 14 – 16, 2022 Organized by : Department of Metallurgy Engineering and Materials Science (MEMS) Venue: Indian Institute of Technology Indore Campus 
                    <a href="http://mems.iiti.ac.in/docs/Abstract%20Book_ICFME-2022.pdf">Details Abstract Book of ICFME-2022</a></td>
              </tr>
              <tr>
                <td>14/12/2022</td>
              
                <td>3-Days Active Learning Online Faculty Development Course on Advanced Technology For Integrated Computational Materials Engineering Education <a href="http://mems.iiti.ac.in/docs/TEQIP_ICME_December2020.pdf">Details</a></td>
              </tr>
              <tr>
                <td>14/12/2022</td>
              
                <td>Dr. Rupesh S. Devan is serving as an Editor for the Chinese J of Physics; Elsevier <a href="https://www.sciencedirect.com/journal/chinese-journal-of-physics/about/editorial-board">Details</a></td>
              </tr>
            </tbody>
          </Table>


















             
                    
                </div>
                {/* <div className="sub-ind-sec2">
                <div className='ind-head'> BROCHURE</div>
                    

                </div> */}

            </div>


      <div>
      <Footer />
    </div>
    </>
  )
}

export default Events
