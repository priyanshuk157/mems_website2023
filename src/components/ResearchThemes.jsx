import React from "react";
import "./researchtheme.css";
import Navbar from "./navbar2";
import Footer from "./footer";
// import logo from "./images/mems_logo2.png";
// import photo1 from "./images/XHo7a.png";
// import mt1 from "./images/material-example.jpg";
// import Table from 'react-bootstrap/Table';
import ve from "../components/images/volvo.png"
import um from "../components/images/Logo_UshaMartin.png"
import tf from "../components/images/technofast-og.jpg"
import rc from "../components/images/raychem-logo.png"
import mra from "../components/images/moyra.jpg"
import fundplot from "../components/images/chart.svg"

const ResearchThemes = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="research-head">RESEARCH THEMES</div>

      <div className="research-card-main">
        <div className="research-card-line">
          <div className="research-cards">
            <a href="researchcomponent1" target="_blank" rel="noopener noreferrer">
              <div className="cards-1">
                <div className="research-text">
                  {" "}
                  Alloy design, development, and deformation
                </div>
              </div>
            </a>
            <a href="researchcomponent3" target="_blank" rel="noopener noreferrer">
              {" "}
              <div className="cards-2">
                <div className="research-text"> Strategic Materials</div>
              </div>
            </a>

            <a href="researchcomponent2" target="_blank" rel="noopener noreferrer">
              {" "}
              <div className="cards-3">
                <div className="research-text">
                  {" "}
                  Surface engineering & Materials degradation
                </div>
              </div>
            </a>
          </div>
          <div className="research-cards">
            <a href="researchcomponent6" target="_blank" rel="noopener noreferrer">
              <div className="cards-4">
                <div className="research-text"> Energy, Environment & Sustainability</div>
              </div>
            </a>
            <a href="researchcomponent4" target="_blank" rel="noopener noreferrer">
              {" "}
              <div className="cards-5">
                <div className="research-text"> Electronics & Photonics</div>
              </div>
            </a>
            <a href="researchcomponent5" target="_blank" rel="noopener noreferrer">
              {" "}
              <div className="cards-6">
                <div className="research-text"> Nano & Soft Materials</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="research-section">
        <div className="research-secleft">
        <div className="research-head">FUNDING</div>
     
      <div className="fund-plot">
        <img src={fundplot} alt="" />
     
      </div>
        </div>
        <div className="research-secright">
        <div className="research-head">CONSULTANCY</div>
        <div className="consultancy-logos">
         <img src={ve} alt="" />
         <img src={um} alt="" />
         <img src={rc} alt="" />
         <img src={mra} alt="" />
         <img src={tf} alt="" />
        
         
        </div>
        <div className="consult-button">
          <a href="cons">Click for more details</a>
          </div>
        </div>
      </div>
     
      {/* <Table striped>
        
      <thead>
        <tr>
          <th>Sr. No.</th>
          <th> Funding Agency</th>
          <th>Funds</th>
        
        </tr>
      </thead>
      <tbody>
        
        <tr>
          <td>1</td>
          <td>	Science & Engineering Research Board (SERB)</td>
          <td>₹ 1830000</td>
        
        </tr>
        <tr>
          <td>2</td>
          <td>National Project Implementation Unit, NPIU (A unit of MHRD)</td>
          <td>₹ 1438000</td>
        
        </tr>
        <tr>
          <td>3</td>
          <td>Science & Engineering Research Board (SERB)</td>
          <td>₹ 5085520</td>
        
        </tr>
        <tr>
          <td>4</td>
          <td>Science & Engineering Research Board (SERB)</td>
          <td>₹ 4637600</td>
        
        </tr>
        <tr>
          <td>5</td>
          <td>UGC-DAE Consortium for Scientific Research</td>
          <td>₹ 1720000</td>
        
        </tr>
        <tr>
          <td>1</td>
          <td>	Council of Scientific and Industrial Research (CSIR)</td>
          <td>₹ 2096000</td>
        
        </tr>
        <tr>
          <td>2</td>
          <td>Department of Science and Technology</td>
          <td>₹ 8500000</td>
        
        </tr>
        <tr>
          <td>3</td>
          <td>Board of Research in Nuclear Sciences (BRNS), Department of Atomic Energy (DAE)</td>
          <td>₹ 1765000</td>
        
        </tr>
        <tr>
          <td>4</td>
          <td>Science & Engineering Research Board (SERB)</td>
          <td>₹ 4637600</td>
        
        </tr>
        <tr>
          <td>5</td>
          <td>UGC-DAE Consortium for Scientific Research</td>
          <td>₹ 1720000</td>
        
        </tr>
        
          
        </tbody>
      </Table> */}
      
      
        
     
        
   

      {/* <div className="research-theme-main">
        <div className="themes-main-1">
          <a href="researchcomponent2">
            <div className="themes-blocks">
              <div className="theme-heads">
                Surface engineering & Materials degradation
              </div>
            </div>
          </a>
          <a href="researchcomponent3">
            <div className="themes-blocks">
              <div className="theme-heads">Strategic Materials</div>
            </div>
          </a>
        </div>
        <div className="themes-main-2">
          <a href="researchcomponent1">
            <div className="themes-blocks">
              <div className="theme-heads">
                Alloy design, development, and deformation
              </div>
            </div>
          </a>
          <div className="research-logo">
            <img src={logo} alt="ok" />
          </div>
          <a href="researchcomponent5">
            <div className="themes-blocks">
              <div className="theme-heads">Nano & Soft Materials</div>
            </div>
          </a>
        </div>

        <div className="themes-main-1">
          <a href="researchcomponent4">
            <div className="themes-blocks">
              <div className="theme-heads">Electronics & Photonics</div>
            </div>
          </a>
          <a href="researchcomponent6">
            <div className="themes-blocks">
              <div className="theme-heads">Energy, Environment & Sustainability</div>
            </div>
          </a>
        </div>
      </div> */}

      <div>
        <Footer />
      </div>
    </>
  );
};

export default ResearchThemes;
