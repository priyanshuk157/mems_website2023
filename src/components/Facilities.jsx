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
          <div className="facility-images">
            {" "}
            <img src={dma} alt="" />
            DMA{" "}
          </div>
          <div className="facility-images">
            <img src={creeptest} alt="" /> creepTestingMachine
          </div>
          <div className="facility-images">
            <img src={electrochemical} alt="" /> ElecterochemicalWorkStation
          </div> 
          <div className="facility-images">
            {" "}
            <img src={fluoroscence} alt="" />
            Fluorescence
          </div>
          <div className="facility-images">
            {" "}
            <img src={fretting} alt="" />
            frettingWearMachine
          </div>
          <div className="facility-images">
            {" "}
            <img src={invertoptical} alt="" />
            invertOpticalMicroscope
          </div>
          <div className="facility-images">
            {" "}
            <img src={solarcell} alt="" />
            solarcellsimulator
          </div>
          <div className="facility-images">
            {" "}
            <img src={hopkinson} alt="" /> spliHopkinsonPressureBar
          </div>
          <div className="facility-images">
            {" "}
            <img src={tempcontrolledutm} alt="" />
            TemperatureControlledUTM
          </div>
          <div className="facility-images">
            {" "}
            <img src={thremoanalyser} alt="" /> Thermo_analyser
          </div>
          <div className="facility-images">
            {" "}
            <img src={uvspectro} alt="" />
            UVspectrometer
          </div>
          <div className="facility-images">
            {" "}
            <img src={xraydiff} alt="" />
            Xraydiff
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
