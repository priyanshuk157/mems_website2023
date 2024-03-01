
import './academic.css'
import Accordion from 'react-bootstrap/Accordion';
import grpphto from "./images/group_photo20232.jpg"
import stat from "./images/stat4.png"
const AcadCard = () => {

  return (
    <>
  
       
    <span className="heading">ACADEMICS</span>
    <div className='acad-image'>
      <img src={grpphto} alt="omk" />
      {/* Degree programs offered by the Department of Metallurgical Engineering and Materials Science at IIT Indore revolve around exploring the properties of matter and their practical utilization in various areas of science and engineering. */}
    </div>
    <div className="acad-body">
    <Accordion className='acad-content' defaultActiveKey={['-1']} >
      <Accordion.Item eventKey="0">
        <Accordion.Header> <div className="acad-head1">B.Tech. in Metallurgical Engineering and Materials Science (4 Years):</div></Accordion.Header>
        <Accordion.Body>
        Our comprehensive undergraduate program in Metallurgical Engineering and Materials Science offers a rigorous and diverse curriculum, equipping students with a strong foundation in the principles and applications of materials science, metallurgy, and related fields. Through a balanced blend of theoretical knowledge and practical training, students develop the necessary skills to contribute to the advancement of materials engineering in industries and research institutions.
        <div className="res-acc-body"> <a href="https://academic.iiti.ac.in/Document/2022-July-UG-Rules+Policies+Curriculum+Syllabi-of-Courses%2011%20October%202022.pdf">  Rules, Policies, Curriculum and
Courses of Study</a></div> 
        <div className="res-acc-body"> <a href="https://academic.iiti.ac.in/Admission/UG/Procedure%20for%20Online%20Registration%20for%20new%20UG%20students%20of%20AY%202023-24.pdf"> Registration link</a></div> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header><div className="acad-head1">M.Tech. with Specialization in Materials Science and Engineering (2 Years):</div></Accordion.Header>
        <Accordion.Body>
        Our specialized Master's program in Materials Science and Engineering provides students with an in-depth understanding of the fundamental principles and advanced concepts in the field. Focusing on materials synthesis, characterization, and application, this program prepares graduates to tackle complex challenges in industries such as aerospace, energy, electronics, and manufacturing. With access to state-of-the-art laboratories and research opportunities, students gain hands-on experience to drive innovation and contribute to cutting-edge advancements in materials science.
        <div className="res-acc-body"> <a href="https://academic.iiti.ac.in/Document/new2023/2023-July-PG-PhD-Rules+Policies+Curriculum+Syllabi-of-Courses%2029%20August%202023.pdf"> Rules, Policies, Curriculum and
Courses of Study</a></div> 
        <div className="res-acc-body"> <a href="https://academic.iiti.ac.in/Document/2022-23_Academic_Calendar%20-%20Final%20-%2023-06-2022.pdf"> Registration link</a></div> 
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header><div className="acad-head1">M.Tech. with Specialization in Metallurgical Engineering (2 Years):</div></Accordion.Header>
        <Accordion.Body>
        The Master's program in Metallurgical Engineering offers a specialized curriculum that delves into the principles, processes, and applications of metallurgy. With a focus on the extraction, production, and manipulation of metals and alloys, students gain comprehensive knowledge in areas such as physical metallurgy, materials characterization, corrosion science, and more. Equipped with advanced skills and expertise, graduates are prepared to lead research and development efforts, optimize industrial processes, and drive advancements in metallurgical engineering. 
        <div className="res-acc-body"> <a href="https://academic.iiti.ac.in/Document/new2023/2023-July-PG-PhD-Rules+Policies+Curriculum+Syllabi-of-Courses%2029%20August%202023.pdf">Rules, Policies, Curriculum and
Courses of Study </a></div>  
<div className="res-acc-body"> <a href="https://academic.iiti.ac.in/Document/2022-23_Academic_Calendar%20-%20Final%20-%2023-06-2022.pdf"> Registration link</a></div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header><div className="acad-head1">Ph.D. Program</div></Accordion.Header>
        <Accordion.Body>
        Our PhD program provides an exceptional opportunity for aspiring researchers and scholars to contribute to the field of metallurgical engineering and materials science through cutting-edge research and innovation. Under the guidance of renowned faculty members, doctoral candidates engage in independent, original research that pushes the boundaries of knowledge in their chosen area of specialization. Through a combination of coursework, seminars, and hands-on research experience, students develop critical thinking, analytical skills, and expertise to become future leaders in academia, industry, and research institutions.
        <br />Minimum educational Qualifications (MEQs) and Qualifying Examination for Indiam applicants  criteria:
Masters’ degree (M.Tech. or M.E. or MS) in Metallurgy/ Materials Science and Engineering/ Mechanical/ Manufacturing/ Production Engineering/ Nanotechnology/
Engineering Science/ Engineering Physics/Ceramics Engineering/ Electronics/ Chemical Engineering/Energy Science and Engineering (with first division as defined by the
awarding Institute/ University) AND GATE qualified.
<br />
<div className='bold'>OR</div>
<br />
B.E./ B.Tech. degree in Metallurgy/ Materials Science and Engineering/ Mechanical/ Manufacturing/ Production Engineering/ Nanotechnology/ Engineering Science/Engineering Physics/Ceramics Engineering/ Electronics/ Chemical Engineering/Energy Science and Engineering (with first division as defined by the awarding Institute/
University) AND GATE qualified with a valid scorecard
<br />
<div className='bold'>OR</div>
<br />
Master degree (M.Sc.) in Chemistry/ Physics/ Materials Science/ Electronics/ Nanoscience and Technology/Forensic Science (with first division as defined by the awarding Institute/ University) AND GATE qualified with a valid score
card OR valid UGC-JRF/CSIR-JRF/DST Inspire fellowship/other equivalent Fellowship
(Please refer to the main page on our academic portal Link: 
https://academic.iiti.ac.in/phdadvt.php  for more details)
<div className='statsimg'><img src={stat} alt="" /></div>



        <div className="res-acc-body"> <a href="https://academic.iiti.ac.in/Document/new2023/2023-July-PG-PhD-Rules+Policies+Curriculum+Syllabi-of-Courses%2029%20August%202023.pdf">Rules, Policies, Curriculum and
Courses of Study</a></div> 
        <div className="res-acc-body"> <a href="https://academic.iiti.ac.in:8443/nregistration.jsp"> Addmission to PhD</a></div> 
        </Accordion.Body>
      </Accordion.Item>
    
      <Accordion.Item eventKey="4">
        <Accordion.Header><div className="acad-head1">Academic Calender for the year 2023-24
UG
PG/PHD</div></Accordion.Header>
        <Accordion.Body>
        <div className="res-acc-body"> <a href="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=739b4cf4d3&attid=0.1&permmsgid=msg-f:1768679276744765627&th=188b9c6e6bf770bb&view=att&disp=inline&saddbat=ANGjdJ_f1Elr3wk87NkgSZrscw5lBlvERw8ECzD5Bx8xZKCxhlcYxa6sqf4LM5UIlMp6OP9pTBJJAC9jbVowwyp18dtpuCpx_FOuuOseKwGFuEAq_RK60VqpYyNgADwiFz6Z9J2oVnqht_x1hvTWrDBy2NVKRVHQxn8N7bF5vwxoBgH3aL8ygXsT2OPDED-Ubec6emnigDxlRxFWMTLtdpzecgHLURfmFpA7BsDn5HEjj2yxhY2hPDUIEVtx5SOfW6lyVujv_llHEZicq2F0Ckmr22HCL7mkoHtev3nIBaXSpASadMIz0sLxvYHkMJn_4iuSsd-kX2qTAtn9TjlvW9U1WUyVYp-Q9kvmoJDIu_6cGukfFkEPYuu7RNLjyqx_Zh6yUzM_R5Hv5ylklmhkVv9nwy-zKszxYAxpvTUAFxBeiTYNg_SESDNI8Zgrmo-BpXWjooke8Xs99zxPupCZcOBx9iURKnVuxwzLMtNNsa_LZkGsxJsnUKezSAz1uI-N-EQxmzAi1qad-4AbqB_aLsTDj8V0QgYgj35VajyrOofVozONGKD41JCiaJhayxEBuchGzZHgAkcV4qWENx9crtmIlwRXXFvO5yRUgLuMkI0EUw-FvW461Zs0ndIru99zLnACx2LBGiTaoU7cjWseVuyuIXmimcpu6YUN_rCkOvHK_Nbos-CrlWXMSI0sJ0oCJh2dfB59hmW0sgSYrUdc-L3C83406v7UCWFLtWTYMMuLYCnnwmHQ7G2_wK8d8fTIAF6sMpLLhx2L4Qm9I3U5LFD4UhHhGC10lVL1T6Hx5DnurAg8P4OuvM2i8abU3LvNu020mk5psH7qZB3_BCG_wNXroTlP1M3-CVK7cl6cUT6QRPYH5BHGOz3LECfKi5hiqOkV_m5gNmpgtneniUpxSxPRuCo2HUwIyezt2wC70goKJ7MFtShKP8v3m_XwaTwuJO8HEUFiujpxPXbfZzTg6pibGqFH76BoeTfSEkkZQC265Q5tSFU7fRveQ01qs5JJzI-eS-IdOa69HTAkzdGK2thXVW4C9FhmpldulEhHM0IOb5EKLZtmKiXqBYYhEBwML7Zh0cdoIRHzecYjrnmv5GsIHLkGSzzmpFQNjYg9xQ" target='_blank' rel="noreferrer"> click here to View the Academic Calender</a></div> 
        <div className="res-acc-body"> <a href="https://mail-attachment.googleusercontent.com/attachment/u/0/?ui=2&ik=739b4cf4d3&attid=0.2&permmsgid=msg-f:1784633122427770085&th=18c44a5e94b414e5&view=att&disp=inline&saddbat=ANGjdJ_dEP9jmFCn-t4thT17p3cijwbxUGwH-DWZVNuEvGJxrArsAE7LJ1ehwQvFz_a2P2IAy1v9ZgXkHIsNOAvBzpoK6coqdaOCbxE8n67wZz0UkctYp0PCwhhhXci4KOkIeEc1zbtptMy94O4LE_OeM79z5w2uK0ufwNXxrNdBzpOgOQm6USvTGrhpvZQ05xHBnrHkM7M_cZ6I_f83xcf0_oWhA2PzI6hnilQqGkUL6TmqkNglIktWZyA3BM_gEkZwXxC-bT3lphyesk2tu_lsJrLiposLGl8WfajAE6SS_hZJ78wHo92Ox3jMb-c2ip01wSbUY7TzzEDxrcPSKvXTpv2Q6LWBCTMGm07rmYqzCwRMJKTqsV25G1YO80jYMCohl8CHHjz_-6jSScfQHX9GuWZuYQjNEcWuJzvI5x8qm_K7hxvVlKUtShynhCgQWOQDFrokQw52THrqTIKFCqADBwItKkSRqPZyCXng9ON5kYSa07FS3NF-77FvOzqkS8lhK8xzPBgV61sVZ7pVBLPupsbiGEgPPz4NLmrmD-EfM-khKprqXOnRoOaQZYVUHHqeW2_0Xtftd82d-g2QoFlLKG2SqjTQ6WExi-BrgpVM7RtM8Eq0Fs3wejWO5ebbODewcEVU2FT5Kn35yZ3SvUEtLQS5mhdfeH3nAH3T4_HwGj24z2ZtVj746k4qOcDRxB2Uq_KrZNVakQa6Tu3POYoETb5as-47o6FQwqwHCrNB-d7Au-B_cRJXsBPXfFOhmgOJNc0WZZQtAG2TEskqSS9RNAtR4MkW_THqM0wc-KfQqnZ9AQ658cWBN8S_GpdyFnKduYFN1Xd5bGFTfry8jjyDvBLepRI_ukf-uRVZcws0qc2K61Chb6Wl_w9txND2-q8XjtYMKoPH9c_DAQoD2aA8iOQCGORGP5ek3ig3vzHl8yucNHreSA3AMgwCH-rA5J3u50uTM3zveBCUTSN-dVKR1ChfA3K0oMbLM--T5JCu4iYhY71gnCtdu6rF8o2vap-hJrIpuKcPfar-CzKAIpKx4cIts4HRsCHeUb9qYin3qKm5jHWR6P7aNbrfshjSWugOxwHYH7caGL1rrOE2DTM6ORbpzpRUq3tfiF6jyQ"  target='_blank' rel="noreferrer"> List of Holidays</a></div> 

        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
     
    {/* <div className="acad-content">
      <i onClick={()=>toggleState(1)}><FaPlus/></i>
      B.Tech. in Metallurgical Engineering and Materials Science (4 Years):</div>
   {show && showNumber=== 1 && <div className='acad-writeup'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias voluptates deserunt quam delectus alias praesentium ducimus laboriosam natus incidunt dolor, earum omnis mollitia, autem nemo tempora reprehenderit veniam atque!</div>} 
    <div className="acad-content">  <i onClick={()=>toggleState(2)}><FaPlus/></i>M.Tech. with Specialization in Materials Science and Engineering (2 Years):</div>
    {show && showNumber=== 2 && <div className='acad-writeup'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias voluptates deserunt quam delectus alias praesentium ducimus laboriosam natus incidunt dolor, earum omnis mollitia, autem nemo tempora reprehenderit veniam atque!</div>} 
    <div className="acad-content">  <i onClick={()=>toggleState(3)}><FaPlus/></i>M.Tech. with Specialization in Metallurgical Engineering (2 Years):</div>
    {show && showNumber=== 3 && <div className='acad-writeup'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias voluptates deserunt quam delectus alias praesentium ducimus laboriosam natus incidunt dolor, earum omnis mollitia, autem nemo tempora reprehenderit veniam atque!</div>} 
    <div className="acad-content">  <i onClick={( )=>toggleState(4)}><FaPlus/></i>Ph.D. Program</div>
    {show && showNumber=== 4 && <div className='acad-writeup'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex molestias voluptates deserunt quam delectus alias praesentium ducimus laboriosam natus incidunt dolor, earum omnis mollitia, autem nemo tempora reprehenderit veniam atque!</div>} 
    <div className="acad-content"><a href="https://academic.iiti.ac.in/" target='_blank'  rel="noreferrer" >Click here to know the admission process for the degree programs offered by the Department of Metallurgical Engineering and Materials Science at IIT Indore</a></div> */}
   
    </div>
   
   
    </>
    
  )
}

export default AcadCard
