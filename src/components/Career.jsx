import { Accordion } from 'react-bootstrap';
import "./career.css";

const Career = () => {
  return (
    <>
      <span className="heading">CAREERS</span>

      <div className="career-cont">
        <Accordion className='career-accord' defaultActiveKey="-1">

          <Accordion.Item eventKey="4">
            <Accordion.Header><span className='res-header'>Faculty Positions</span></Accordion.Header>
            <Accordion.Body>
              We are hiring <a href="https://www.iiti.ac.in/recruitments/faculty-positions">click here</a>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <span className='res-header'>Project/Research Positions & JRF position</span>
            </Accordion.Header>
            <Accordion.Body>
              <h4 style={{ margin: "0px", color: "#c44536", marginTop: "15px" }}>Project Title:</h4>
              <p>
                Characterization of Idols, Coins, Ornaments, and Other Metallic Monuments from Ancient and Medieval Times in the Malwa Region Using In-situ and Ex-situ Experimental Techniques
              </p>

              <h4 style={{ margin: "0px", color: "#c44536", marginTop: "15px" }}>Principal Investigators:</h4>
              <ul>
                <li>Prof. Eswar Prasad Korimilli</li>
                <li>Prof. K.V Vamsi</li>
              </ul>

              <h4 style={{ margin: "0px", color: "#c44536", marginTop: "15px" }}>Sponsoring Agency:</h4>
              <p>Department of Science and Technology (DST), India</p>

              <h4 style={{ margin: "0px", color: "#c44536", marginTop: "15px" }}>Project Overview:</h4>
              <p>
                This project aims to explore the rich cultural heritage of the Malwa region through the scientific characterization of ancient and medieval metallic artifacts. Using advanced in-situ and ex-situ experimental techniques, this research seeks to unveil the material properties, composition, and historical significance of these monuments and artifacts.
              </p>

              <p>
                For further details and the application process, click below:
              </p>
              <a 
                href="https://www.iiti.ac.in/recruitments/jrf-srf-positions" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: "#005a9c", textDecoration: "underline" }}
              >
                Link to Advertisement
              </a>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="2">
            <Accordion.Header><span className='res-header'>Staff</span></Accordion.Header>
            <Accordion.Body>
              No position open now
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="0">
            <Accordion.Header><span className='res-header'>Internships</span></Accordion.Header>
            <Accordion.Body>
              Watch out for this space
            </Accordion.Body>
          </Accordion.Item>

        </Accordion>

        <div className='foot-hgt-adjst'></div>
      </div>
    </>
  );
}

export default Career;
