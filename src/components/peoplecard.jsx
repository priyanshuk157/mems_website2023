import React from "react";
import "./peoplecard.css";


const peoplecard = () => {
  return (
    <>

      
      <div className="container mt-5 peoplecont">
        <div className="faculty ">
          <div className="m-auto text-center">
            FACULTY
            <br />
            <small>
              <i>Get to know our best in class faculty</i>
            </small>
          </div>
          <a href="faculty">
          <button className="view-button">
          
            view
            
            </button> 
            </a>
        </div>
        <div className="staff d-flex">
          <div className="m-auto text-center">
            STAFF
            <br />
            <small>
              <i>Get to know our best in class staff</i>
            </small>
          </div>
          <a href="staff">
          <button className="view-button">
          
            view
            
            </button> 
            </a>
            
        </div>
        <div className="students d-flex">
          <div className="m-auto text-center">
            STUDENTS
            <br />
            <small>
              <i>Get to know our best in class students</i>
            </small>
            
          </div>
          <a href="students">
          <button className="view-button">
          
            view
            
            </button> 
            </a>
        </div>
      </div>
    </>
  );
};

export default peoplecard;
