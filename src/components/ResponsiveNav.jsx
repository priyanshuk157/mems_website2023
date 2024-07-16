import React from 'react'
import { NavLink,  useLocation } from "react-router-dom";
import logo from "./images/mems-logo.png";
import "./ResponsiveNav.css";
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';   

 
const ResponsiveNav = () => {
const [isopen, setIsopen] = useState(false)
const [isSubopen, setIsSubopen] = useState(false)

const handleTouch = () => {
   
    setIsopen(!isopen)


} 
const handleTouch1 = (event) => {
 
    setIsSubopen(!isSubopen)


} 
  return (
    <>
    <nav className='main-nav-600'>
        <div className="logo-600"> <div >
        <a href="/" target="_blank" rel="noopener noreferrer">
              <img src={logo} alt=" okl"></img>
            </a>
            
        </div>\
        <div className="nav-ham-600" onTouchStart={handleTouch} >
            <FaBars />
          </div></div>
       
{isopen && (<div className="menu-600">

            <NavLink to="/">  <div> About</div> </NavLink>
            <NavLink to="/"  onTouchStart={handleTouch1}>  <div> People</div> </NavLink>
            <NavLink to="/">  <div> Academics</div> </NavLink>
            <NavLink to="/">  <div> Research</div> </NavLink>
            <NavLink to="/">  <div> Industry Connect</div> </NavLink>
            <NavLink to="/">  <div> Careers  </div> </NavLink>
            
</div>)}
{isSubopen && isopen && (<div className="submenu-600">

            <NavLink to="/">  <div> Home</div> </NavLink>
            <NavLink to="/">  <div> Home</div> </NavLink>
            <NavLink to="/">  <div> Home</div> </NavLink>
            <NavLink to="/">  <div> Home</div> </NavLink>
            
</div>)}

      

    </nav>
    
    </>
   
  )
}

export default ResponsiveNav
