import React from 'react'

import { Accordion } from 'react-bootstrap';
import "./career.css"
const Career = () => {
  return (
    <>
   

<span className="heading">CAREERS</span>

<div className="career-cont">
<Accordion className='career-accord' defaultActiveKey="-1">


<Accordion.Item eventKey="4">
 <Accordion.Header><span className='res-header'>Faculty Positions</span></Accordion.Header>
 <Accordion.Body>
We  are  hiring <a href=" https://www.iiti.ac.in/recruitments/faculty-positions">click  here</a>

 </Accordion.Body>
</Accordion.Item>

<Accordion.Item eventKey="3">
 <Accordion.Header><span className='res-header'>Project/Research Positions & JRF position</span></Accordion.Header>
 <Accordion.Body>
Watch  out for this space
 </Accordion.Body>
</Accordion.Item>


<Accordion.Item eventKey="2">
 <Accordion.Header><span className='res-header'>Staff</span></Accordion.Header>
 <Accordion.Body>
 No position open now
 </Accordion.Body>
</Accordion.Item>







<Accordion.Item eventKey="0">
 <Accordion.Header > <span className='res-header'>Internships</span> </Accordion.Header>
 <Accordion.Body>
 Watch out for this space
 </Accordion.Body>
</Accordion.Item>



</Accordion>

</div>

   
   
    </>
  )
}

export default Career
