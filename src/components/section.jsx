import React from "react";
import "./section.css";
import Newssection from "./news-section";
import ss1 from "./images/ss1.jpg";

import Stats from "./stats";
import { FaEnvelope } from "react-icons/fa";
import prof20 from "./profiles/profimages/prof20.jpeg";
import convopic from "./profiles/profimages/convocation.jpg";
import re from "./profiles/profimages/re.jpg";
import { NavLink } from "react-router-dom";
// import Slider from './Slider';

const section = () => {

  
  return (
    <>
      <div className="studentcbutton">
        <a href="Studentcorner">
          <button className="button">Student Corner</button>
        </a>
      </div>


      <div className="ranking3">
        <div className="sub-rank">
          {" "}
          <div className="ranking">
            <div className="sec-conthead">NEWS</div>

            <div className="ranking-news-main">
              <Newssection />
            </div>
          </div>
          <div className="ranking">
            <div className="sec-conthead">STATISTICS</div>
            <div className="ranking-main">
              <Stats />
            </div>
          </div>
        </div>
      </div>

      <div className="section4">
        <div>
          <div className="sec-conthead">EVENTS</div>

          <NavLink to="events">
            <div className="events1">
              <div className="gallery-grid2">
                <img className="grid-itemx" src={convopic} alt="" />
              </div>
              {/* <div className="eventx">Conference/Seminar/Courses</div> */}
            </div>
          </NavLink>
        </div>

        <div>
          <div className="sec-conthead">RESOURCES</div>

          <NavLink to="resources">
            <div className="events1">
              <div className="gallery-grid2">
                <img className="grid-itemx" src={re} alt="" />
              </div>

              {/* <div className="eventx">click here to check our RESOURCES</div> */}
            </div>
          </NavLink>
        </div>

        <div>
          <div className="sec-conthead">GALLERY</div>

          <NavLink to="gallery">
            {" "}
            <div className="events1">
              <div className="gallery-grid7">
                <img className="grid-itemxx" src={ss1} alt="" />
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default section;
