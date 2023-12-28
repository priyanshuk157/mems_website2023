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
import srd from "./images/srd.jpg";
import "./Facilities.css";
// import Accordion from 'react-bootstrap/Accordion';

const Facilities = () => {
  return (
    <>
      <div>
        
          {" "}
          <br />
          <span className="Instruments_In_Use">
          <h1>Instruments In Use</h1>{" "}</span>
          <br />
        
        <div className="facilities-items">
         <div className="facility-images">
            {" "}
            <img src={dma} alt="" />
            DMA{" "}
            <br />Location: MOM Lab
          </div>
          
          <div className="facility-images">
            <img src={creeptest} alt="" /> Creep Testing Machine
            <br />Location: MOM Lab
          </div>
          <div className="facility-images">
            <img src={electrochemical} alt="" /> Electerochemical Work Station
            <br />Location: -
          </div> 
          <div className="facility-images">
            {" "}
            <img src={fluoroscence} alt="" />
            Fluorescence
            <br />Location:-
          </div>
          <div className="facility-images">
            {" "}
            <img src={fretting} alt="" />
            Fretting Wear Machine
            <br />Location:-
          </div>
          <div className="facility-images">
            {" "}
            <img src={invertoptical} alt="" />
            Invert Optical Microscope
            <br />Location: MOM Lab
          </div>
          <div className="facility-images">
            {" "}
            <img src={solarcell} alt="" />
            Solar Cell Simulator
            <br />Location:-
          </div>
          <div className="facility-images">
            {" "}
            <img src={hopkinson} alt="" /> SpliHopkinson Pressure Bar
            <br />Location: MOM Lab
          </div>
          <div className="facility-images">
            {" "}
            <img src={tempcontrolledutm} alt="" />
            Temperature Controlled UTM
            <br />Location: MOM Lab
          </div>
          <div className="facility-images">
            {" "}
            <img src={thremoanalyser} alt="" /> Thermo Analyser
            <br />Location: MOM Lab
          </div>
          <div className="facility-images">
            {" "}
            <img src={uvspectro} alt="" />
            UV Spectrometer
            <br />Location:-
          </div>
          <div className="facility-images">
            {" "}
            <img src={xraydiff} alt="" />
            X-ray diff
            <br />Location:-
          </div>

          <div className="facility-images">
            {" "}
            <img src={srd} alt="" />
                SRD Machine
            <br />Location: MOM Lab
          </div>



        </div>

        
      </div>
    </>
  );
};

export default Facilities;
