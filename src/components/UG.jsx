import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import Table from 'react-bootstrap/Table';
import "./ugpg.css"
import Accordion from 'react-bootstrap/Accordion';



const UG = () => {
   
  return (
   <>
   <div>
    <Navbar/>
   </div>
   
   <div className="ug-body">
   
   
   <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header> <div className="batch">BATCH 2023</div> </Accordion.Header>
        <Accordion.Body>
        <div className='ug-tble'>
    <Table striped>
      <thead>
        <tr>
          <th>Sr. No.</th>
          <th> Name</th>
          <th>Roll No.</th>
        
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>3242009494</td>
        
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>4294427</td>
       
        </tr>
       
        
      </tbody>
    </Table>
    </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><div className="batch">BATCH 2023</div> </Accordion.Header>
        <Accordion.Body>
        <div className='ug-tble'>
    <Table striped>
      <thead>
        <tr>
          <th>Sr. No.</th>
          <th> Name</th>
          <th>Roll No.</th>
        
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>3242009494</td>
        
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>4294427</td>
       
        </tr>
       
        
      </tbody>
    </Table>
    </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    
   </div>
   <div>
    <Footer/>
   </div>
   </>
  )
}

export default UG
