import React from 'react'
import dma from "./images/DMA.jpg"
import creeptest from "./images/creepTestingMachine.jpg"
import electrochemical from "./images/ElecterochemicalWorkStation.jpg"
import fluoroscence from "./images/Fluorescence.jpg"
import fretting from "./images/frettingWearMachine.jpg"
import invertoptical from "./images/invertOpticalMicroscope.jpg"
import solarcell from "./images/solarcellsimulator.jpg"
import hopkinson from "./images/spliHopkinsonPressureBar.png"
import tempcontrolledutm from "./images/TemperatureControlledUTM.jpg"
import thremoanalyser from "./images/Thermo_analyser.jpg"
import uvspectro from "./images/UVspectrometer.jpg"
import xraydiff from "./images/Xraydiff.jpg"
import "./Facilities.css"

const Facilities = () => {
  return (
    <>
    <div>
        <div className="facilities-head"> <h1>Instruments In Use</h1> </div>
        <div className="facilities-items">
        <img src={dma} alt="" /> 
        <img src={creeptest} alt="" />
        <img src={electrochemical} alt="" />
        <img src={fluoroscence} alt="" />
        <img src={fretting} alt="" />
        <img src={invertoptical} alt="" />
        <img src={solarcell} alt="" />
        <img src={hopkinson} alt="" />
        <img src={tempcontrolledutm} alt="" />
        <img src={thremoanalyser} alt="" />
        <img src={uvspectro} alt="" />
        <img src={xraydiff} alt="" />

        </div>
      
    </div>
    </>
  )
}

export default Facilities
