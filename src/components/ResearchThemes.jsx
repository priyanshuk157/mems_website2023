import React from "react";
import "./researchtheme.css";
import Navbar from "./navbar";
import Footer from "./footer";
import logo from "./images/mems_logo2.png";
import photo1 from "./images/group_photo1.jpg";
import mt1 from "./images/material-example.jpg";
import Table from 'react-bootstrap/Table';

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
              <div className="cards">
                <div className="research-text">
                  {" "}
                  Alloy design, development, and deformation
                </div>
              </div>
            </a>
            <a href="researchcomponent1" target="_blank" rel="noopener noreferrer">
              {" "}
              <div className="cards">
                <div className="research-text"> Strategic Materials</div>
              </div>
            </a>

            <a href="researchcomponent1" target="_blank" rel="noopener noreferrer">
              {" "}
              <div className="cards">
                <div className="research-text">
                  {" "}
                  Surface engineering & Materials degradation
                </div>
              </div>
            </a>
          </div>
          <div className="research-cards">
            <a href="researchcomponent1" target="_blank" rel="noopener noreferrer">
              <div className="cards">
                <div className="research-text"> Energy & Environment</div>
              </div>
            </a>
            <a href="researchcomponent1" target="_blank" rel="noopener noreferrer">
              {" "}
              <div className="cards">
                <div className="research-text"> Electronics & Photonics</div>
              </div>
            </a>
            <a href="researchcomponent1" target="_blank" rel="noopener noreferrer">
              {" "}
              <div className="cards">
                <div className="research-text"> Nano & Soft Materials</div>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className="research-head">FUNDING</div>
     <div class="table">
      <Table striped>
        
      <thead>
        <tr>
          <th>Sr. No.</th>
          <th> Company Name</th>
          <th>Funds</th>
        
        </tr>
      </thead>
      <tbody>
        
        <tr>
          <td>1</td>
          <td>Abhishek A.P</td>
          <td>220005001</td>
        
        </tr>
        <tr>
          <td>2</td>
          <td>Abhishek Jha</td>
          <td>220005002</td>
        
        </tr>
        <tr>
          <td>3</td>
          <td>Aditi Tapdiya</td>
          <td>220005003</td>
        
        </tr>
        <tr>
          <td>4</td>
          <td>Aditya Kishan Sonkusare</td>
          <td>220005004</td>
        
        </tr>
        <tr>
          <td>5</td>
          <td>Aditya Nimadi</td>
          <td>220005005</td>
        
        </tr>
        
      
        
      </tbody>
    </Table></div> 
      <div className="research-head">ONGOING CONSULTING PROJECTS</div>
      <div className="consulting">   
       <div class="ss">
        <br /><span>&#8226;</span> Analytical studies
        <br /><span>&#8226;</span> Calibration
        <br /><span>&#8226;</span> Simulation/ modelling/ optimization
        <br /><span>&#8226;</span> Development of laboratories
        <br /><span>&#8226;</span> Human Resource development programmes</div>
        </div>
   

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
              <div className="theme-heads">Energy & Environment</div>
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
