import React from "react";
// import Navbar from "./navbar";
// import Footer from "./footer";
// import rang from "./profiles/profimages/rang.jpg";
import vc from "./profiles/profimages/vc.jpg";
import Accordion from 'react-bootstrap/Accordion';
// import prof6 from "./profiles/profimages/prof6.jpg";
// import prof13 from "./profiles/profimages/prof13.jpg";
// import prof18 from "./profiles/profimages/prof18.jpg";
// import prof19 from "./profiles/profimages/prof19.jpg";
// import prof11 from "./profiles/profimages/prof11.jpg";
// import prof2 from "./profiles/profimages/prof2.jpg";
// import prof20 from "./profiles/profimages/prof20.jpeg";
// import drpaul from "./profiles/profimages/divein.png";

// import nissi from "./profiles/profimages/nissi.jpg";
// import rsm from "./profiles/profimages/rsm.jpg";
// import pattern from "./profiles/profimages/pattern2.jpg";

// import muru from "./profiles/profimages/muru.jpg";
// import hemanth from "./profiles/profimages/hemanth.jpg";
// import sp from "./profiles/profimages/sp.jpeg";
// import download from "./profiles/profimages/download.jpeg";



// import hd from "./profiles/profimages/hd.jpeg";
import gh from "./profiles/profimages/gai.jpeg";
import dance from "./profiles/profimages/dance.jpeg";
import painting from "./profiles/profimages/painting.jpeg";
import pclub from "./profiles/profimages/pclub.jpg";
import snt from "./profiles/profimages/snt.jpg";
import robo from "./profiles/profimages/robo.jpg";
import photo from "./profiles/profimages/graphy.jpeg";
import techgroup from "./profiles/profimages/techphoto.jpg";




import "./studentcorner.css"
// import { FaEnvelope, FaPhone } from "react-icons/fa";

const faculty = () => {
  return (
    <>
     
<div class="navbar">
    <a href="Studentcorner">Home</a>
    <a href="oi">Other Info</a>
    <a href="/">Main Website</a>
    <a href="#contact">Contact</a>
  </div>
     
  <div>
  <div class="studentcorner">

  <div className="immg">
  <img src={vc} alt="" /></div>
<span class="middleText">Student Corner</span>
{/*<div class="middleText2">Welcome to the Student Corner at IIT Indore—an exclusive space designed to cater to the diverse needs and interests of our dynamic student community.
This webpage serves as a hub for students to access a wealth of resources, engage in collaborative initiatives, and stay informed about campus events.
We encourage you to actively participate in the vibrant IIT Indore community. Share your experiences, contribute to discussions, and make use of the valuable information available here. This webpage is more than just a virtual space—it's a reflection of the energy and enthusiasm that defines the student life at IIT Indore. Welcome, and enjoy your journey through the Student Corner!</div>*/}
 

  </div>

<div class="c">
  <div class="imagesdiv">
    <div class="back">
      <span class="cult">Culturals</span>
      <div class="x">
      <a href="https://www.instagram.com/d_alphazcrew/?hl=en"><div class="zoom"><img src={dance} alt="" />
          <div class="up">Dance</div>

        </div></a>
        <a href="faculty4"><div class="zoom"><img src={painting} alt="" />

    
        <div class="up">Arts</div>

        </div ></a>
        <a href="https://www.instagram.com/mystichues/?hl=en"><div class="zoom"><img src={photo} alt="" />
<div class="up2">Photography</div>

    </div></a>
    <a href="faculty4">
    <div class="zoom"><img src={gh} alt="" />
<div class="up">Gallery</div>

    </div></a></div>
    </div> 
</div> </div>


<div className="tech">
  
  <div class="imagesdiv">
      <span class="cult">TECH</span>
      <div class="x">
      <a href="http://progclub.iiti.ac.in/"> <div class="zoom"><img src={pclub} alt="" />
          <div class="up">P-Club</div>

        </div></a>
    <a href="https://www.instagram.com/roboticsclub_iitindore"><div class="zoom"><img src={robo} alt="" />

    
<div class="up">Robotics</div>

    </div ></a>
    <a href="http://gymkhana.iiti.ac.in//technicals/index.html">
    <div class="zoom"><img src={snt} alt="" />
<div class="up2">Tech-events</div>

    </div></a>
    <a href="faculty4">
    <div class="zoom"><img src={techgroup} alt="" />
<div class="up">Gallery</div>

    </div>  
    </a></div>
</div>
  
</div>
<span className="text">Other Usefull Information</span>

<div className="otherinfo">


<div className="studentcorner-list">
<Accordion className='acad-content' defaultActiveKey={['-1']} >
      <Accordion.Item eventKey="0">
        <Accordion.Header> <div className="acad-head1">Student Exchange Program</div></Accordion.Header>
        <Accordion.Body>
        The Student Exchange Program at the Indian Institute of Technology (IIT) Indore is a transformative experience that enriches the academic and cultural landscape for participants. This program fosters collaboration and global understanding by facilitating the exchange of students with renowned universities worldwide. IIT Indore has established partnerships with leading educational institutions, providing students with opportunities to immerse themselves in diverse academic environments and engage with international perspectives. Participants not only benefit from exposure to cutting-edge research and advanced coursework but also gain a deeper appreciation for different cultures and ways of learning. The program emphasizes the development of a global mindset, encouraging students to broaden their horizons and build lasting connections with peers from around the world. Through this initiative, IIT Indore demonstrates its commitment to nurturing well-rounded individuals equipped to thrive in an increasingly interconnected and dynamic global society.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><div className="acad-head1">Fellowships</div></Accordion.Header>
        <Accordion.Body>
        Fellowship opportunities at IIT Indore represent a unique and enriching experience for individuals seeking advanced research and academic pursuits. IIT Indore, known for its commitment to cutting-edge technology and innovation, offers fellowships across various disciplines, providing a platform for scholars to engage in impactful research projects. The fellowship program fosters a vibrant intellectual community, encouraging collaboration and knowledge exchange among scholars and faculty members. Participants benefit from state-of-the-art facilities, mentorship from renowned experts, and a conducive academic environment that promotes holistic growth. Whether in engineering, sciences, or humanities, IIT Indore's fellowship programs empower individuals to contribute meaningfully to their respective fields, making a lasting impact on both academia and society. Beyond the academic realm, the fellowship experience at IIT Indore also provides a supportive community and networking opportunities, creating a well-rounded and transformative journey for scholars dedicated to advancing knowledge and innovation.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><div className="acad-head1">Internships</div></Accordion.Header>
        <Accordion.Body>
        Internships at IIT Indore offer students a unique and enriching experience, combining academic knowledge with practical skills in a real-world setting. As one of the premier institutes in India, IIT Indore provides a conducive environment for students to engage in cutting-edge research and development projects, fostering innovation and creativity. Through internships, students have the opportunity to work closely with renowned faculty members and industry experts, gaining valuable insights and hands-on experience that contribute to their academic and professional growth. These internships not only serve as a bridge between theoretical learning and practical application but also play a pivotal role in shaping the future leaders and innovators emerging from IIT Indore.
<br />
Whether collaborating with leading industries or contributing to groundbreaking research within the institute, IIT Indore's internship programs aim to prepare students for the challenges of the modern workforce while instilling a passion for continuous learning and exploration. The institute's commitment to excellence and its emphasis on interdisciplinary collaboration make internships a transformative phase in the academic journey of students at IIT Indore, paving the way for a successful and impactful career in their chosen fields.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><div className="acad-head1">Scholarships</div></Accordion.Header>
        <Accordion.Body>
        IIT Indore, renowned for its academic excellence and technological innovation, offers a plethora of scholarships to support and encourage meritorious students in their pursuit of higher education. These scholarships cater to a diverse range of criteria, including academic achievements, financial need, and extracurricular accomplishments. Exceptional students with outstanding academic records have the opportunity to avail themselves of merit-based scholarships, while those facing financial constraints can benefit from need-based scholarships, ensuring that no deserving student is hindered by financial barriers in their academic journey at IIT Indore.
        br

Furthermore, the institute collaborates with various government and private organizations to provide additional scholarship opportunities, fostering an environment that recognizes and rewards talent across diverse fields. These scholarships not only alleviate the financial burden on students but also serve as a testament to IIT Indore's commitment to nurturing and empowering the next generation of leaders and innovators.
        </Accordion.Body>
      </Accordion.Item>
    
      
      
    </Accordion>
 
</div>









<span className="end">end</span>
</div>


</div>


<footer>
    <p>&copy; 2023 IITI Website. All rights reserved.</p>
  </footer>


















    </>
  );
};

export default faculty;
