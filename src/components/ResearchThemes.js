import React from "react";
import "./researchtheme.css";
import Navbar from "./navbar";
import Footer from "../components/footer";
import logo from "./images/mems_logo2.png";

const ResearchThemes = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="research-theme-main">
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
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default ResearchThemes;
