import React, { useState } from "react";
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import { useRef } from "react";
import logo from "./images/mems-logo.png"

import Dropdown from 'react-bootstrap/Dropdown';
import { Button, ButtonGroup } from "react-bootstrap";


const Navbar = () => {
  const navRef = useRef();
  // const [navScroll, setNavScroll] = useState(true)
  const [dropdown, setDropdown] = useState(false);
  // const [dropdown1, setDropdown1] = useState(false)
  // const [lastScroll, setLastScroll] = useState(0)
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
    setDropdown(!dropdown);
  };

  // const scrollableNavbar = ()=>{

  //   const currentScroll = window.scrollY;

  //   if(currentScroll>=lastScroll){
  //     setNavScroll(false)
  //   }

  //   setLastScroll(currentScroll);

  //   if(currentScroll<lastScroll){
  //     setNavScroll(true)
  //   }

  // }

  // window.addEventListener("scroll", scrollableNavbar );
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  //  const handleClick =()=>{
  //   setDropdown (dropdown => !dropdown)
  //   setDropdown1 (dropdown1 => !dropdown1)
  //  }

  let dropdownStateCheck =
    (toggleState === 1 || toggleState === 2) && dropdown
      ? "dropactive "
      : "dropinactive";
  //  let subdownStateCheck1 = toggleState===2  && dropdown1? "dropactive1 " : "dropinactive1"

  return (
    <>
      <nav className="navbar1">
        {/* <div className= {navScroll? "navbar" : "scroll-active"}> */}

        <div className="main-nav active">
          <div className="iiti-logo">
            <img
              src={logo}
              alt=" okl"
            ></img>
          </div>
          {/* <div className="nav-2">
            <div className="logo">
              <div className="mems">
                <span className="typo">M</span>etallurgical{" "}
                <span className="typo">E</span>ngineering <br /> and{" "}
                <span className="typo">M</span>aterials{" "}
                <span className="typo">S</span>cience
              </div>
              <div className="iiti">Indian Institute of Technology Indore</div>
            </div>
          </div> */}
          <div className="menu-link">
            <ul className="menu-link-ul   " ref={navRef}>
              <li>
                {"   "}
                <a href="/"> about </a>{" "}
              </li>
              <li>
                {" "}
                <div onClick={() => toggleTab(1)}>People </div>{" "}
                <div className={dropdownStateCheck}>
                  <div>
                    {" "}
                    <a href="faculty"> Faculty Members</a>{" "}
                  </div>
                  <div>
                    {" "}
                    <a href="PostDoc"> PostDoc.</a>{" "}
                  </div>
                 
                   
                      
                    <Dropdown className="drpdwn-main" as={ButtonGroup}>
      <Button  variant="Primary"><div className="drpdwn-btn">Staff</div></Button>

      <Dropdown.Toggle split variant="Primary" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item className="menu-item" href="#/action-1"> <a href="ReasearchStaff">Research Staff</a> </Dropdown.Item>
        <Dropdown.Item className="menu-item" href="#/action-2">Departmental Staff</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
                  
     
                    <Dropdown className="drpdwn-main" as={ButtonGroup}>
      <Button  variant="Primary"><div className="drpdwn-btn">Students</div></Button>

      <Dropdown.Toggle split variant="Primary" id="dropdown-split-basic" />

      <Dropdown.Menu className="drpdwn-menu" >
        <Dropdown.Item className="menu-item" href="#/action-1">PhD</Dropdown.Item>
        <Dropdown.Item className="menu-item"  href="#/action-2">UG And PG</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
     
                    
                  
                  

                 
        
                  <div>
                    {" "}
                    <a href="ad"> Alumni </a>{" "}
                  </div>
                </div>{" "}
              </li>
              {/* <div className={dropdownStateCheck} >
        
        <div> <a href='faculty'> Faculty Members</a> </div>
        <div> <a href='faculty'> Post DOC.</a> </div>
        <div  className="drpdwn-main">  Staff Members   </div>
        <div className='sub-drpdwn' >
        
        <div> <a href='faculty'> Faculty Members</a> </div>
        <div> <a href='faculty'> Post DOC.</a> </div>
        <div> <a href='staff'> Staff Members    </a> </div>
        <div> <a href='staff'> Staff Members    </a> 
          
        
        
        
        
        </div>
        <div> <a href='ad'> Students </a> </div>
        <div> <a href='ad'> Alumni </a> </div>
        
       </div>
      
        <div> <a href='ad'> Students </a> </div>
        <div> <a href='ad'> Alumni </a> </div>
        
       </div> */}
              <li>
                {" "}
                <a href="academics "> academics </a>{" "}
              </li>
              <li>
                {" "}
                <a href="research "> research </a>{" "}
              </li>
              {/* <li> <a href='gallery '> gallery </a> </li>
        
        <li> <a href='resources '> resources </a> </li> */}
              <li>
                {" "}
                <a href="industry "> Industry relation </a>{" "}
              </li>
            </ul>
          </div>

          <div className="nav-ham" onClick={showNavbar}>
            <FaBars />
          </div>
        </div>

        {/* </div> */}
      </nav>
      {}
    </>
  );
};

export default Navbar;
