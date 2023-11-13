import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Facilities from './Facilities';

const AccordianMain = () => {
  return (
    <div className="resources-main">
       <Accordion defaultActiveKey="-1">
      <Accordion.Item eventKey="0">
        <Accordion.Header > <span className='res-header'>How to reach IIT Indore</span> </Accordion.Header>
        <Accordion.Body> <div className="res-acc-body"> <a href="https://www.google.com/maps/dir//Indian+Institute+Of+Technology+(IIT),+Indore,+Khandwa+Rd,+Simrol,+Madhya+Pradesh+453552/@22.5252603,75.9169412,16z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3962efcccbce7145:0x784e8cb69818596b!2m2!1d75.9207231!2d22.5203597?entry=ttu"> View On Map</a></div>
         
        
        </Accordion.Body>
      </Accordion.Item>
      
      <Accordion.Item eventKey="1">
        <Accordion.Header><span className='res-header'>Accomodation facilities in IITI</span></Accordion.Header>
        <Accordion.Body>IIT Indore is a residential Institute that mandates students of all teaching programs to stay in the Hostels. This is a home away from home where students develop lifelong relationships, camaraderie, and wonderful experiences that give them a different kind of grooming. Many of our alumni inform us that it is in these hostels where they learned life skills that are taking them a long way. At the moment, IIT Indore has six hostels, out of which one is reserved for female residents and other for married students. All hostels are located close to each other, lie amidst the flora and fauna of the campus and have adjacent playgrounds which are always buzzing with physical activity. These are also close to the Academic Pods, which houses all research and undergraduate labs, the backbone of this Institute.
        <div className="res-acc-body"> <a href="https://hostel.iiti.ac.in/"> click here to View the hostel facilities</a></div> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><span className='res-header'>Health And Safety</span></Accordion.Header>
        <Accordion.Body>
        The Health Centre of the Indian Institute of Technology Indore provides dedicated health services to the institute community comprising of students, employees, their dependents and Institute Guests. The Health Centre offers Outpatient, Day care, Trauma and Emergency Care.
        <div className="res-acc-body"> <a href="https://hostel.iiti.ac.in/"> click here to View the health and safety facilities</a></div> 

        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><span className='res-header'>Departmental 
committee</span></Accordion.Header>
        <Accordion.Body>
        <div className="resource-body">
          <div className="resource-block">
            <div className="head9">DPGC </div>
            <ul>
              <li>Dr. Sumanta Samal (Convener)</li>
              <li>Dr. Dhirendra Kumar Rai</li>
              <li>Dr. Nishith Kumar Prasad</li>
              <li>Dr. Dudekula Althaf Basha (HOD)</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">DUGC</div>
            <ul>
              <li>Dr. Hemant Borkar (Convener)</li>
              <li>Dr. M. Dubey</li>
              <li>Dr. Jayaprakash Murugesan</li>
              <li>Dr. Sunil Kumar (HOD)</li>
            </ul>
          </div>
          <div className="resource-block">
            <div className="head9">Safety</div>
            <ul>
              <li>Dr. M. Dubey (Convener)</li>
              <li>Dr. Vinod Kumar</li>
              <li>Prof. Parasharam M Shirage</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">Library Committee </div>
            <ul>
              <li>Dr. Sunil Kumar (Convener)</li>
              <li>Dr. Abhijit Ghosh</li>
              <li>Dr. Sumanta Samal</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">Outreach Activities</div>
            <ul>
              <li>Dr. Ram Sajeevan Maurya (Convener)</li>
              <li>Dr. Dudekula Althaf Basha</li>
              <li>Dr. Nishith Kumar Prasad HOD</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">Placement & Industry Relations </div>
            <ul>
              <li>Dr. Nishith Kumar Prasad (Convener) </li>
              <li>Dr. Chandan Haldar</li>
              <li>Dr. Hemant Borkar</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">Annual Report and RTI </div>
            <ul>
              <li>Dr. Chandan Haldar (Convener)</li>
              <li>Dr. Vinod Kumar</li>
              <li>Dr. Ram Sajeevan Maurya</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">Website </div>
            <ul>
              <li>Dr. K. V. Vamsi (Convener)</li>
              <li>Dr. Chandan Haldar</li>
              <li>Dr. Nishith Kumar Prasad</li>
              <li>
                Student Representatives: <br/> Mr. Priyanshu, Mr. Pranjal, Ms. Tanvi
              </li>
            </ul>
          </div>
          <div className="resource-block">
            <div className="head9">DFM Secretary </div>
            <ul>
              <li>Dr. Dhirendra Kumar Rai </li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">Departmental Common Facilities/Labs </div>
            <ul>
              <li>HOD (ex officio) (Convener) Dr. Hemant Borkar</li>
              <li>Dr. Ram Sajeevan Maurya</li>
              <li>Dr. Dhirendra Kumar Rai</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">SEM</div>
            <ul>
              <li>Dr. Ajay Kumar Kushwaha (Convener)</li>
              <li>Prof. P. M. Shirage</li>
              <li>Dr. Dhirendra Rai</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">XRD</div>
            <ul>
              <li>Dr. Rupesh Devan (Convener)</li>
              <li>Dr. Abhijit Ghosh</li>
              <li>Dr. Sunil Kumar</li>
            </ul>
          </div>
          <div className="resource-block">
            <div className="head9">Computational</div>
            <ul>
              <li>Dr. Chandan Haldar (Convener)</li>
              <li>Dr. Sumanta Samal</li>
              <li>Dr. K. V. Vamsi</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">UTM</div>
            <ul>
              <li>Dr. Eswar Prasad (Convener)</li>
              <li>Dr. Jayaprakash</li>
              <li>Dr. Abhijeet Gosh</li>
              <li>Dr. Santosh Hosmani</li>
            </ul>
          </div>
          <div className="resource-block">
            {" "}
            <div className="head9">SPS</div>
            <ul>
              <li>Dr. Vinod Kumar (Convener)</li>
              <li>Dr. Ram Sajeevan Maurya</li>
              <li>Dr. Sumanta Samal</li>
              <li>Prof. P. M. Shirage</li>
            </ul>
          </div>
        </div>  
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header><span className='res-header'>Facilities</span></Accordion.Header>
        <Accordion.Body>
         <Facilities/>
         <br/>
         <br/>
       


        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="5">
        <Accordion.Header><span className='res-header'>Other Facilities</span></Accordion.Header>
        <Accordion.Body>
         
         
       <br /><span>&#8226;</span> Gravity-related apparatus
       <br />
       <br /><span>&#8226;</span> Thermal Conductivity Detector (TCD)
       <br />
       <br /><span>&#8226;</span> Microscopy and Imaging Apparatus
       <br />
       <br /><span>&#8226;</span> Young’s modulus apparatus
       <br />
       <br /><span>&#8226;</span> Parallelogram apparatus
       <br />
       <br /><span>&#8226;</span> Anderson Bridge
       <br />
       <br /><span>&#8226;</span> Triple beam balance
       <br />
       <br /><span>&#8226;</span> Ballistic Galvanometer
       <br />
       <br /><span>&#8226;</span> Centrifuge Machine
       <br />
       <br /><span>&#8226;</span> Resonance apparatus
       <br />


        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  )
}

export default AccordianMain
