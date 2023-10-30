import React from "react";
import dma from "./images/DMA.jpg";
import creeptest from "./images/creepTestingMachine.jpg";
import electrochemical from "./images/ElecterochemicalWorkStation.jpg";
import fluoroscence from "./images/Fluorescence.jpg";
import fretting from "./images/frettingWearMachine.jpg";
import invertoptical from "./images/invertOpticalMicroscope.jpg";
import solarcell from "./images/solarcellsimulator.jpg";
import hopkinson from "./images/spliHopkinsonPressureBar.png";
import tempcontrolledutm from "./images/TemperatureControlledUTM.jpg";
import thremoanalyser from "./images/Thermo_analyser.jpg";
import uvspectro from "./images/UVspectrometer.jpg";
import xraydiff from "./images/Xraydiff.jpg";
import "./Facilities.css";

const Facilities = () => {
  return (
    <>
      <div>
        <div className="facilities-head">
          {" "}
          <h1>Instruments In Use</h1>{" "}
        </div>
        <div className="facilities-items">
         {/*<div className="facility-images">
            {" "}
            <img src={dma} alt="" />
            DMA{" "}
          </div>
          
          <div className="facility-images">
            <img src={creeptest} alt="" /> Creep Testing Machine
          </div>
          <div className="facility-images">
            <img src={electrochemical} alt="" /> Electerochemical Work Station
          </div> 
          <div className="facility-images">
            {" "}
            <img src={fluoroscence} alt="" />
            Fluorescence
          </div>
          <div className="facility-images">
            {" "}
            <img src={fretting} alt="" />
            Fretting Wear Machine
          </div>
          <div className="facility-images">
            {" "}
            <img src={invertoptical} alt="" />
            Invert Optical Microscope
          </div>
          <div className="facility-images">
            {" "}
            <img src={solarcell} alt="" />
            Solar Cell Simulator
          </div>
          <div className="facility-images">
            {" "}
            <img src={hopkinson} alt="" /> SpliHopkinson Pressure Bar
          </div>
          <div className="facility-images">
            {" "}
            <img src={tempcontrolledutm} alt="" />
            Temperature Controlled UTM
          </div>
          <div className="facility-images">
            {" "}
            <img src={thremoanalyser} alt="" /> Thermo Analyser
          </div>
          <div className="facility-images">
            {" "}
            <img src={uvspectro} alt="" />
            UV Spectrometer
          </div>
          <div className="facility-images">
            {" "}
            <img src={xraydiff} alt="" />
            X-ray diff
          </div>*/}


<div class="polaroid">
  <img src={creeptest} alt="Norway"  />
  <div class="container">
    <p>Hardanger, Norway</p>
  </div>
</div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
