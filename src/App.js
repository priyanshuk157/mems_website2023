import React from 'react'
// import { ReactDOM } from 'react-dom';

import Home from './mainpages/Home'
import {Routes , Route} from 'react-router-dom'


import 'bootstrap/dist/css/bootstrap.min.css';  
import Academics from './mainpages/Academics'
import Research from './components/ResearchThemes'
import GalleryPage from './mainpages/GalleryPage';
import Resources from './mainpages/Resources'
import Faculty from './components/faculty'
import Faculty2 from './components/faulty2'
import Faculty3 from './components/faulty3'
import Faculty4 from './components/painting'
import Otherfacilities from './components/otherfacilities'
import PostDoc from './components/PostDoc'
import Alumini from './components/Alumini'
import Researchcomponent1 from './components/researchcomponent1'
import Researchcomponent2 from './components/researchcomponent2'
import Researchcomponent3 from './components/researchcomponent3'
import Researchcomponent4 from './components/researchcomponent4'
import Researchcomponent5 from './components/researchcomponent5'
import Researchcomponent6 from './components/researchcomponent6'
import Phd from './components/phd'








import P1 from './components/profiles/basha'
import P2 from './components/profiles/chandan'
import P3 from './components/profiles/dkr'
import P4 from './components/profiles/esw'
import P5 from './components/profiles/demoaks'
import P6 from './components/profiles/hemant'
import P7 from './components/profiles/jaya'
import P8 from './components/profiles/kus'
import P9 from './components/profiles/mrigen'
import P10 from './components/profiles/nisheet'
import P11 from './components/profiles/para'
import P12 from './components/profiles/ram'
import P13 from './components/profiles/ranjith'
import P14 from './components/profiles/rup'
import P15 from './components/profiles/san'
import P16 from './components/profiles/sunil'
import P17 from './components/profiles/vamsi'
import P18 from './components/profiles/vinod'













// import Profile1 from './components/profiles/profile1'
// import Profile2 from './components/profiles/profile2'
// import Profile3 from './components/profiles/profile3'
// import Profile4 from './components/profiles/profile4'
// import Profile5 from './components/profiles/profile5'
// import Profile6 from './components/profiles/profile6'
// import Profile7 from './components/profiles/profile7'
// import Profile8 from './components/profiles/profile8'
// import Profile9 from './components/profiles/profile9'
// import Profile10 from './components/profiles/profile10'
// import Profile11 from './components/profiles/profile11'
// import Profile12 from './components/profiles/profile12'
// import Profile13 from './components/profiles/profile13'
// import Profile14 from './components/profiles/profile14'
// import Profile15 from './components/profiles/profile15'
// import Profile16 from './components/profiles/profile16'
// import Profile17 from './components/profiles/profile17'
// import Profile18 from './components/profiles/profile18'
// import Profile19 from './components/profiles/profile19'
import Profilekd from './components/profiles/profilekd'
import Demo from './components/profiles/demoprofile'
import Profileran from './components/profiles/profileran'
import International from './components/Internaational'
import Industryrelation from './mainpages/industryrelation'
import DepartmentalStaff from './components/DepartmentalStaff'
import ResearchStaff from './components/ResearchStaff'
import Ug from './components/UG'
import Pg from './components/PG'
// import events from './components/Events';
import Events from './components/Events';
import Industry2 from './components/Industry2';
import Navbar2 from './components/navbar2';
import Footer from './components/footer';
import Consultancy from './components/consultancy';
import Career from './components/Career';

// import homepageslider from './components/homepageslider';


// import Home from './components/Home'
const App = () => {
  return (
    <>
   <div>
    <Navbar2/>
   </div>
    
    <div>
      {/* <div>
      <Navbar/>
      </div>
      <div>
      <Slider/>
      </div>
      <div> <Cards/></div> */}
      <Routes>
        <Route path='/' element={<Home/>}>

        </Route>
        
        <Route path='academics' element={<Academics/>}></Route>
        <Route path='research' element={<Research/>}></Route>
        <Route path='gallery' element={<GalleryPage/>}></Route>
        <Route path='resources' element={<Resources/>}></Route>
        <Route path='faculty' element={<Faculty/>}></Route>
        <Route path='faculty2' element={<Faculty2/>}></Route>
        <Route path='faculty3' element={<Faculty3/>}></Route>
        <Route path='faculty4' element={<Faculty4/>}></Route>
        <Route path='other' element={<Otherfacilities/>}></Route>
        <Route path='Postdoc' element={<PostDoc/>}></Route>
        <Route path='staff' element={<DepartmentalStaff/>}></Route>
        <Route path='Postdoc' element={<PostDoc/>}></Route>
        <Route path='collab' element={<International/>}></Route>
       
        {/* <Route path='profile1' element={<Profile1/>}></Route> */}
        <Route path='demo' element={<Demo/>}></Route>
        <Route path='ind2' element={<Industry2/>}></Route>
        <Route path='nav2' element={<Navbar2/>}></Route>
        <Route path='cons' element={<Consultancy/>}></Route>
        <Route path='career' element={<Career/>}></Route>







        <Route path='p1' element={<P1/>}></Route>

        <Route path='p2' element={<P2/>}></Route>
        <Route path='p3' element={<P3/>}></Route>
        <Route path='p4' element={<P4/>}></Route>
        <Route path='p5' element={<P5/>}></Route>
        <Route path='p6' element={<P6/>}></Route>
        <Route path='p7' element={<P7/>}></Route>
        <Route path='p8' element={<P8/>}></Route>
        <Route path='p9' element={<P9/>}></Route>
        <Route path='p10' element={<P10/>}></Route>
        <Route path='p11' element={<P11/>}></Route>
        <Route path='p12' element={<P12/>}></Route>
        <Route path='p13' element={<P13/>}></Route>
        <Route path='p14' element={<P14/>}></Route>
        <Route path='p15' element={<P15/>}></Route>
        <Route path='p16' element={<P16/>}></Route>
        <Route path='p17' element={<P17/>}></Route>
        <Route path='p18' element={<P18/>}></Route>
















        {/* <Route path='profile19' element={<Profile19/>}></Route> */}
        <Route path='profilekd' element={<Profilekd/>}></Route>
 <Route path='profileran' element={<Profileran/>}></Route>
 <Route path='research/researchcomponent1' element={<Researchcomponent1/>}></Route>
 <Route path='research/researchcomponent2' element={<Researchcomponent2/>}></Route>
 <Route path='research/researchcomponent3' element={<Researchcomponent3/>}></Route>
 <Route path='research/researchcomponent4' element={<Researchcomponent4/>}></Route>
 <Route path='research/researchcomponent5' element={<Researchcomponent5/>}></Route>
 <Route path='research/researchcomponent6' element={<Researchcomponent6/>}></Route>
 <Route path='DepartmentalStaff' element={<DepartmentalStaff/>}></Route>
 <Route path='ResearchStaff' element={<ResearchStaff/>}></Route>
 <Route path='Phd' element={<Phd/>}></Route>
 <Route path='UG' element={<Ug/>}></Route>
 <Route path='PG' element={<Pg/>}></Route>
 <Route path='alumini' element={<Alumini/>}></Route>
 <Route path='events' element={<Events/>}></Route>
 <Route path='stc' element={<events/>}></Route>


 <Route path='homepageslider' element={<homepageslider/>}></Route>


        <Route path='industry' element={<Industryrelation/>}></Route>
      </Routes>
     
      <div> <Footer/></div>
      
     
      </div>
    </>
  )   
 
  }

export default App;
