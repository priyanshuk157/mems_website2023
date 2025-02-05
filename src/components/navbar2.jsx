import "./navbar2.css";
import { FaBars } from "react-icons/fa";
import { useRef } from "react";
import logo from "./images/mems-logo.png";
import pdfs from "./images/Phdpp.pdf";
import { NavLink,  useLocation } from "react-router-dom";

import { FaFacebook, FaInstagram, FaResearchgate } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";


const Navbar2 = () => {
  const navRef = useRef();
  const {pathname}  = useLocation();

 


 

  
  
  const showNavbar = () => {
    navRef.current.classList.toggle("responsive-nav");
  };

  //  const handleClick =()=>{
  //   setDropdown (dropdown => !dropdown)
  //   setDropdown1 (dropdown1 => !dropdown1)
  //  }

  // let dropdownStateCheck =
  //   (toggleState === 1 || toggleState === 2) && dropdown
  //     ? "dropactive "
  //     : "dropinactive";
  //  let subdownStateCheck1 = toggleState===2  && dropdown1? "dropactive1 " : "dropinactive1"

  return (
    <>
      <nav className="navbar1">
        {/* <div className= {navScroll? "navbar" : "scroll-active"}> */}
        
        <div className="nav-logos">
          
          <div className="shape1">
          
            <div className="nav-student-button">
              <NavLink to="Studentcorner">
                <button className="navbar-button">Student Corner</button>
              </NavLink>
            </div>

            <div className="navbar-logos1">
              {" "}
              <div>
                {" "}
                <a
                  href="https://www.linkedin.com/in/metallurgical-engineering-and-materials-science-iit-indore-15a541274/ "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>
                    <FaLinkedin/>
                  </i>{" "}
                </a>
              </div>
              <div>
                <a
                  href="https://twitter.com/outreach_mems"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>
                    <FaTwitterSquare />
                  </i>{" "}
                </a>
              </div>
              <div>
                <a
                  href="https://www.instagram.com/outreach_mems/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>
                    <FaInstagram />
                  </i>{" "}
                </a>
              </div>
              <div>
                <a
                  href="https://www.researchgate.net/profile/Metallurgical-Engineering-And-Materials-Science-Iit-Indore"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>
                    <FaResearchgate />
                  </i>{" "}
                </a>
              </div>
              <div>
                <a
                  href="https://www.facebook.com/profile.php?id=100092114204325"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i>
                    <FaFacebook />
                  </i>{" "}
                </a>
              </div>
            </div><div className="nav-student-button2">
              <a a href={pdfs} id="pdfLink" target="_blank">
                <button className="navbar-button">Prospective students</button>
              </a>
            </div>
          </div>
          
          {/* <div className="shape2">  </div> */}
        </div>

        <div className="main-nav active">
          <div className="iiti-logo">
            <a href="/  " target="_blank" rel="noopener noreferrer">
              <img src={logo} alt=" okl"></img>
            </a>
            {/* <img
              src={logo}
              alt=" okl"
            ></img> */}
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
            <ul className="menu-link-ul" ref={navRef}>
              <li>
                {"   "}
                <NavLink
                  to="/"
                  className={(pathname === '/' )
                   || (pathname === '/events' ) 
                   || (pathname === '/resources' ) 
                   || (pathname === '/gallery' ) 
                   || (pathname === '/other' ) 
             
                    ? "acthover" : "nonacthover"}
                

                  
                >
                  {" "}
                  Home{" "}
                </NavLink>{" "}
              </li>
              <li className="res-people">
                {" "}
               
                        <div className={(pathname === "/faculty2") 
                || (pathname === "/PostDoc") 
                || (pathname === "/DepartmentalStaff") 
                || (pathname === "/ResearchStaff") 
                || (pathname === "/UG") 
                || (pathname === "/PG") 
                || (pathname === "/Phd") 
                || (pathname === "/faculty2/demo") 
                || (pathname === "/faculty2/P5") 
                || (pathname === "/faculty2/P2") 
                || (pathname === "/faculty2/P3") 
                || (pathname === "/faculty2/P1") 
                || (pathname === "/faculty2/P4") 
                || (pathname === "/faculty2/P6") 
                || (pathname === "/faculty2/P7") 
                || (pathname === "/faculty2/P8") 
                || (pathname === "/faculty2/P9") 
                || (pathname === "/faculty2/P10") 
                || (pathname === "/faculty2/P11") 
                || (pathname === "/faculty2/P12") 
                || (pathname === "/faculty2/P13") 
                || (pathname === "/faculty2/P14") 
                || (pathname === "/faculty2/P15") 
                || (pathname === "/faculty2/P19") 
                || (pathname === "/faculty2/P16") 
                || (pathname === "/faculty2/P17") 
                || (pathname === "/faculty2/P18") 
                
                
                
                ? "acthover" : "nonacthover"}>
                  People{" "}
                </div>{" "}
                    
                
              
                <div className="dropactive">
                  {/* <div>
                    {" "}
                    <a href="faculty"> Faculty Members</a>{" "}
                  </div> */}
                  <div>
                    {" "}
                    <NavLink to="faculty">
                      {" "}
                      Faculty
                    </NavLink>{" "}
                  </div>
                  <div>
                    {" "}
                    <NavLink to="PostDoc" >
                      {" "}
                      PostDoc.
                    </NavLink>{" "}
                  </div>
                  <div>
                    {" "}
                    <NavLink to="ResearchStaff" >
                      {" "}
                      Visiting Scientist/Fellow
                    </NavLink>{" "}
                  </div>
                  <div className="staff-hover">
                    {" "}
                    <NavLink  >
                      {" "}
                      Staff
                    </NavLink>{" "}
                    <div className="submenu-display">
                      <div>
                        <NavLink
                          to="DepartmentalStaff"
                                                  >
                          Departmental Staff
                        </NavLink>{" "}
                      </div>
                      
                    </div>
                  </div>
                  <div className="staff-hover">
                    {" "}
                    <NavLink  >
                      {" "}
                      Students
                    </NavLink>{" "}
                    <div className="submenu-display">
                      <div>
                        <NavLink to="UG" >
                          {" "}
                          UG
                        </NavLink>{" "}
                      </div>
                      <div>
                        <NavLink to="PG" >
                          {" "}
                          PG
                        </NavLink>{" "}
                      </div>
                      <div>
                        <NavLink to="Ppd" >
                          {" "}
                          PhD
                        </NavLink>{" "}
                      </div>
                    </div>
                  </div>

                  <div>
                    {" "}
                    <NavLink to="alumini" >
                      {" "}
                      Alumni{" "}
                    </NavLink>{" "}
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
                <NavLink
                  to="academics "
                  className={pathname=== "/academics" ? "acthover" : "nonacthover"}
                  
                >
                  {" "}
                  academics{" "}
                </NavLink>{" "}
              </li>
              {/* <li>
                {" "}
                <NavLink
                  to="hoddesk "
                  className={pathname=== "/career" ? "acthover" : "nonacthover"}
                  
                >
                  {" "}
                  About {" "}
                </NavLink>{" "}
              </li> */}


<li className="res-people">
                {" "}
               
                        <div className={(pathname === "/faculty2") 
                || (pathname === "/PostDoc") 
                || (pathname === "/DepartmentalStaff") 
                || (pathname === "/ResearchStaff") 
                || (pathname === "/UG") 
                || (pathname === "/PG") 
                || (pathname === "/Phd") 
                || (pathname === "/faculty2/demo") 
                || (pathname === "/faculty2/P5") 
                || (pathname === "/faculty2/P2") 
                || (pathname === "/faculty2/P3") 
                || (pathname === "/faculty2/P1") 
                || (pathname === "/faculty2/P4") 
                || (pathname === "/faculty2/P6") 
                || (pathname === "/faculty2/P7") 
                || (pathname === "/faculty2/P8") 
                || (pathname === "/faculty2/P9") 
                || (pathname === "/faculty2/P10") 
                || (pathname === "/faculty2/P11") 
                || (pathname === "/faculty2/P12") 
                || (pathname === "/faculty2/P13") 
                || (pathname === "/faculty2/P14") 
                || (pathname === "/faculty2/P15") 
                || (pathname === "/faculty2/P19") 
                || (pathname === "/faculty2/P16") 
                || (pathname === "/faculty2/P17") 
                || (pathname === "/faculty2/P18") 
                
                
                
                ? "acthover" : "nonacthover"}>
                  About{" "}
                </div>{" "}
                    
                
              
                <div className="dropactive">
                  {/* <div>
                    {" "}
                    <a href="faculty"> Faculty Members</a>{" "}
                  </div> */}
                  <div>
                    {" "}
                    <NavLink
                  to="hoddesk "
                  className={pathname=== "/career" ? "acthover" : "nonacthover"}
                  
                >
                      {" "}
                      HOD Desk
                    </NavLink>{" "}
                  </div>
                  <div>
                    {" "}
                    <NavLink to="resources?expand=2">
                      Department Committees
                    </NavLink>{" "}
                  </div>
                  
                  
                  

                  
                </div>{" "}
              </li>
              <li>
                {" "}
                <NavLink
                  to="research "
                  className={(pathname=== "/research" ) 
                  || (pathname=== "/research/researchcomponent1" )
                  || (pathname=== "/research/researchcomponent2" )
                  || (pathname=== "/research/researchcomponent3" )
                  || (pathname=== "/research/researchcomponent4" )
                  || (pathname=== "/research/researchcomponent5" )
                  || (pathname=== "/research/researchcomponent6" )
                  || (pathname === "/research/demo") 
                || (pathname === "/research/p5") 
                || (pathname === "/research/p2") 
                || (pathname === "/research/P3") 
                || (pathname === "/research/p1") 
                || (pathname === "/research/p4") 
                || (pathname === "/research/p6") 
                || (pathname === "/research/p7") 
                || (pathname === "/research/p8") 
                || (pathname === "/research/p9") 
                || (pathname === "/research/p10") 
                || (pathname === "/research/p11") 
                || (pathname === "/research/p12") 
                || (pathname === "/research/p13") 
                || (pathname === "/research/p14") 
                || (pathname === "/research/p15") 
                || (pathname === "/research/p19") 
                || (pathname === "/research/p16") 
                || (pathname === "/research/p17") 
                || (pathname === "/research/p18") 
                || (pathname === "/research/bhallal") 
                || (pathname === "/research/drpaul") 

                  
                  ? "acthover" : "nonacthover"}
                 
                >
                  {" "}
                  research{" "}
                </NavLink>{" "}
              </li>
              {/* <li> <a href='gallery '> gallery </a> </li>
        
        <li> <a href='resources '> resources </a> </li> */}
              <li>
                {" "}
                <NavLink
                  to="ind2 "
                  className={pathname=== "/ind2" ? "acthover" : "nonacthover"}
                  
                >
                  {" "}
                  Industry Connect{" "}
                </NavLink>{" "}
              </li>
              <li>
                {" "}
                <NavLink
                  to="career "
                  className={pathname=== "/career" ? "acthover" : "nonacthover"}
                  
                >
                  {" "}
                  Careers{" "}
                </NavLink>{" "}
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

export default Navbar2;
