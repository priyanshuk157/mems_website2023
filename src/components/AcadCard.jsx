// import React, { useState } from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import './academic.css'
import Accordion from 'react-bootstrap/Accordion';
import grpphto from "./images/group_photo2023.jpg"

const AcadCard = () => {

  return (
    <>
    <div><Navbar/></div>
    
    
    <div className='acad-image'>
      <img src={grpphto} alt="omk" srcset="" />
      {/* Degree programs offered by the Department of Metallurgical Engineering and Materials Science at IIT Indore revolve around exploring the properties of matter and their practical utilization in various areas of science and engineering. */}
    </div>
    <div className="acad-body">
    <Accordion className='acad-content' defaultActiveKey={['-1']} >
      <Accordion.Item eventKey="0">
        <Accordion.Header> <div className="acad-head1">B.Tech. in Metallurgical Engineering and Materials Science (4 Years):</div></Accordion.Header>
        <Accordion.Body>
        Our comprehensive undergraduate program in Metallurgical Engineering and Materials Science offers a rigorous and diverse curriculum, equipping students with a strong foundation in the principles and applications of materials science, metallurgy, and related fields. Through a balanced blend of theoretical knowledge and practical training, students develop the necessary skills to contribute to the advancement of materials engineering in industries and research institutions.
        <div className="res-acc-body"> <a href="https://academic.iiti.ac.in/Document/2022-23_Academic_Calendar%20-%20Final%20-%2023-06-2022.pdf"> click here to learn more</a></div> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><div className="acad-head1">M.Tech. with Specialization in Materials Science and Engineering (2 Years):</div></Accordion.Header>
        <Accordion.Body>
        Our specialized Master's program in Materials Science and Engineering provides students with an in-depth understanding of the fundamental principles and advanced concepts in the field. Focusing on materials synthesis, characterization, and application, this program prepares graduates to tackle complex challenges in industries such as aerospace, energy, electronics, and manufacturing. With access to state-of-the-art laboratories and research opportunities, students gain hands-on experience to drive innovation and contribute to cutting-edge advancements in materials science.
        <div className="res-acc-body"> <a href="https://academic.iiti.ac.in/Document/2022-23_Academic_Calendar%20-%20Final%20-%2023-06-2022.pdf"> click here to learn more</a></div> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><div className="acad-head1">M.Tech. with Specialization in Metallurgical Engineering (2 Years):</div></Accordion.Header>
        <Accordion.Body>
        The Master's program in Metallurgical Engineering offers a specialized curriculum that delves into the principles, processes, and applications of metallurgy. With a focus on the extraction, production, and manipulation of metals and alloys, students gain comprehensive knowledge in areas such as physical metallurgy, materials characterization, corrosion science, and more. Equipped with advanced skills and expertise, graduates are prepared to lead research and development efforts, optimize industrial processes, and drive advancements in metallurgical engineering. 
        <div className="res-acc-body"> <a href="https://academic.iiti.ac.in/Document/2022-23_Academic_Calendar%20-%20Final%20-%2023-06-2022.pdf"> click here to learn more</a></div>  
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><div className="acad-head1">Ph.D. Program</div></Accordion.Header>
        <Accordion.Body>
        Our PhD program provides an exceptional opportunity for aspiring researchers and scholars to contribute to the field of metallurgical engineering and materials science through cutting-edge research and innovation. Under the guidance of renowned faculty members, doctoral candidates engage in independent, original research that pushes the boundaries of knowledge in their chosen area of specialization. Through a combination of coursework, seminars, and hands-on research experience, students develop critical thinking, analytical skills, and expertise to become future leaders in academia, industry, and research institutions.
        <div className="res-acc-body"> <a href="https://academic.iiti.ac.in/Document/2022-23_Academic_Calendar%20-%20Final%20-%2023-06-2022.pdf"> click here to learn more</a></div> 
        </Accordion.Body>
      </Accordion.Item>
    
      <Accordion.Item eventKey="4">
        <Accordion.Header><div className="acad-head1">Academic Calender for the year 2023-24
UG
PG/PHD</div></Accordion.Header>
        <Accordion.Body>
        <div className="res-acc-body"> <a href="https://academic.iiti.ac.in/Document/2022-23_Academic_Calendar%20-%20Final%20-%2023-06-2022.pdf"> click here to View the Academic Calender</a></div> 

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><div className="acad-head1">Curriculum link</div></Accordion.Header>
        <Accordion.Body>
        The Master's program in Metallurgical Engineering offers a specialized curriculum that delves into the principles, processes, and applications of metallurgy. With a focus on the extraction, production, and manipulation of metals and alloys, students gain comprehensive knowledge in areas such as physical metallurgy, materials characterization, corrosion science, and more. Equipped with advanced skills and expertise, graduates are prepared to lead research and development efforts, optimize industrial processes, and drive advancements in metallurgical engineering. 
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
     
    {/* <div className="acad-content">
      <i onClick={()=>toggleState(1)}><FaPlus/></i>
      B.Tech. in Metallurgical Engineering and Materials Science (4 Years):</div>
   {show && showNumber=== 1 && <div className='acad-writeup'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias voluptates deserunt quam delectus alias praesentium ducimus laboriosam natus incidunt dolor, earum omnis mollitia, autem nemo tempora reprehenderit veniam atque!</div>} 
    <div className="acad-content">  <i onClick={()=>toggleState(2)}><FaPlus/></i>M.Tech. with Specialization in Materials Science and Engineering (2 Years):</div>
    {show && showNumber=== 2 && <div className='acad-writeup'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias voluptates deserunt quam delectus alias praesentium ducimus laboriosam natus incidunt dolor, earum omnis mollitia, autem nemo tempora reprehenderit veniam atque!</div>} 
    <div className="acad-content">  <i onClick={()=>toggleState(3)}><FaPlus/></i>M.Tech. with Specialization in Metallurgical Engineering (2 Years):</div>
    {show && showNumber=== 3 && <div className='acad-writeup'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias voluptates deserunt quam delectus alias praesentium ducimus laboriosam natus incidunt dolor, earum omnis mollitia, autem nemo tempora reprehenderit veniam atque!</div>} 
    <div className="acad-content">  <i onClick={( )=>toggleState(4)}><FaPlus/></i>Ph.D. Program</div>
    {show && showNumber=== 4 && <div className='acad-writeup'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias voluptates deserunt quam delectus alias praesentium ducimus laboriosam natus incidunt dolor, earum omnis mollitia, autem nemo tempora reprehenderit veniam atque!</div>} 
    <div className="acad-content"><a href="https://academic.iiti.ac.in/" target='_blank'  rel="noreferrer" >Click here to know the admission process for the degree programs offered by the Department of Metallurgical Engineering and Materials Science at IIT Indore</a></div> */}
   
    </div>
    <div>
      <Footer/>
    </div>
   
    </>
    
  )
}

export default AcadCard
