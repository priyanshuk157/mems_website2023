import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Table from 'react-bootstrap/Table';





import "./other.css"


const other = () => {
  return (
    <>
     <div>
        <Navbar />
      </div>





<span className="heading">Other Facilities</span>
<div className="list">
<Table striped>
      <thead>
        <tr>
          <th>Sr. No.</th>
          <th> Equipment Name</th>
         
        
        </tr>
      </thead>
      <tbody>
        
        <tr>
          <td>1</td>
          <td>X-ray diffraction system</td>
         
        
        </tr>
        <tr>
          <td>2</td>
          <td>Electrospinning</td>
        
        
        </tr>
        <tr>
          <td>3</td>
          <td>Electrochemical workstation</td>
         
        
        </tr>
        <tr>
          <td>4</td>
          <td>Potentiostat/Galvanostat</td>
         
        </tr>
        <tr>
          <td>5</td>
          <td>High Vacuum Thermal Evaporator</td>
        
        
        </tr>
        <tr>
          <td>6</td>
          <td>UV-VIS photometer</td>
        
        
        </tr>
        <tr>
          <td>7</td>
          <td>Contact Angle Meter</td>
      
        
        </tr>
        <tr>
          <td>8</td>
          <td>Photo-reactor</td>
       
        
        </tr>
        <tr>
          <td>9</td>
          <td>Hot-filament metal vapor deposition</td>
       
        
        </tr>
        
        
      </tbody>
    </Table>
</div>








      <div>
        <Footer />
      </div>






    </>
  );
};

export default other;
