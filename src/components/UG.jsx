import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Table from "react-bootstrap/Table";
import "./ugpg.css";
import Accordion from "react-bootstrap/Accordion";

const UG = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="ug-body">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              {" "}
              <div className="batch">BATCH 2018</div>{" "}
            </Accordion.Header>
            <Accordion.Body>
              <div className="ug-tble">
                <Table striped>
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th> Name</th>
                      <th>Roll No.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Aadish Godha</td>
                      <td>180005001</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Abhay Gaikwad</td>
                      <td>180005002</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Abhisekh Kasaudhan</td>
                      <td>180005003</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Aman Vaishnav</td>
                      <td>180005004</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Archit Ojha</td>
                      <td>180005005</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Arvind Singh</td>
                      <td>180005007</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Aryaman Sharan</td>
                      <td>180005008</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Avijeet Gupta</td>
                      <td>180005009</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Devashish Kaushik</td>
                      <td>180005010</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Gaurav Choudhary</td>
                      <td>180005011</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>Harsh Rajiv</td>
                      <td>180005012</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>Kantharaju B T</td>
                      <td>180005013</td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>Madhavaram Vishal</td>
                      <td>180005014</td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>Mo.Ismail Mo.Salim Malekji</td>
                      <td>180005015</td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>Mohanakannan C</td>
                      <td>180005016</td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td>Mohit Raj Munot</td>
                      <td>180005017</td>
                    </tr>
                    <tr>
                      <td>17</td>
                      <td>Paarth Thadani</td>
                      <td>180005018</td>
                    </tr>
                    <tr>
                      <td>18</td>
                      <td>Princee Darshit Sanghavi</td>
                      <td>180005020</td>
                    </tr>
                    <tr>
                      <td>19</td>
                      <td>Priyanka Satyendra Umre</td>
                      <td>180005021</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>Pushpalata Priyadarshi</td>
                      <td>180005022</td>
                    </tr>

                    <tr>
                      <td>21</td>
                      <td>Rashtra Damahe</td>
                      <td>180005023</td>
                    </tr>
                    <tr>
                      <td>22</td>
                      <td>Rhisav Raj</td>
                      <td>180005024</td>
                    </tr>
                    <tr>
                      <td>23</td>
                      <td>Sanu Prajapati</td>
                      <td>180005026</td>
                    </tr>
                    <tr>
                      <td>24</td>
                      <td>Sanyam Jain</td>
                      <td>180005027</td>
                    </tr>
                    <tr>
                      <td>25</td>
                      <td>Sheetal</td>
                      <td>180005028</td>
                    </tr>
                    <tr>
                      <td>26</td>
                      <td>Shivansh Singh</td>
                      <td>180005029</td>
                    </tr>
                    <tr>
                      <td>27</td>
                      <td>Sonakshi Gupta</td>
                      <td>180005030</td>
                    </tr>
                    <tr>
                      <td>28</td>
                      <td>Sulam Ganesh Yadav</td>
                      <td>180005031</td>
                    </tr>
                    <tr>
                      <td>29</td>
                      <td>Vanjari Venkat Harshith</td>
                      <td>180005033</td>
                    </tr>
                    <tr>
                      <td>30</td>
                      <td>Vijeet Reel</td>
                      <td>180005034</td>
                    </tr>
                    <tr>
                      <td>31</td>
                      <td>Yash Shashikant Kothekar</td>
                      <td>180005036</td>
                    </tr>
                    <tr>
                      <td>32</td>
                      <td>Yugant Janardhan Nagpure</td>
                      <td>180005037</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <div className="batch">BATCH 2017</div>{" "}
            </Accordion.Header>
            <Accordion.Body>
              <div className="ug-tble">
                <Table striped>
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th> Name</th>
                      <th>Roll No.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Abhishek Singh</td>
                      <td>170005002</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Ananddev Mangish</td>
                      <td>170005004</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Anil Meena</td>
                      <td>170005005</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Ayush Singhal</td>
                      <td>170005006</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Chaitanya Mayank Shah</td>
                      <td>170005007</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Divik Patre</td>
                      <td>170005008</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Gudimella Sree Yashwanth</td>
                      <td>170005009</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Gumpili Sai Pranav</td>
                      <td>170005010</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Hampa Faazil Hussain</td>
                      <td>170005011</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Kaustubh Sanjaykumar Dolas</td>
                      <td>170005012</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>Mayank Garg</td>
                      <td>170005014</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>Mudavath Ravi</td>
                      <td>170005016</td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>N Yashwanth</td>
                      <td>170005017</td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>Najma Golam Mahabub</td>
                      <td>170005018</td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>Nandi Kandi Bhanu Prasad</td>
                      <td>170005019</td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td>Nishita Chittora</td>
                      <td>170005021</td>
                    </tr>
                    <tr>
                      <td>17</td>
                      <td>Parmeshwar</td>
                      <td>170005022</td>
                    </tr>
                    <tr>
                      <td>18</td>
                      <td>Pradyumna Jagdish Somani</td>
                      <td>170005023</td>
                    </tr>
                    <tr>
                      <td>19</td>
                      <td>Prerna</td>
                      <td>170005024</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>Ritesh Kumar Prasad</td>
                      <td>170005025</td>
                    </tr>
                    <tr>
                      <td>21</td>
                      <td>Sachin Gupta</td>
                      <td>170005026</td>
                    </tr>
                    <tr>
                      <td>22</td>
                      <td>Sai Murali Karthik Putcha</td>
                      <td>170005027</td>
                    </tr>
                    <tr>
                      <td>23</td>
                      <td>Saksham Rajput</td>
                      <td>170005028</td>
                    </tr>
                    <tr>
                      <td>24</td>
                      <td>Satish Sahani</td>
                      <td>170005029</td>
                    </tr>
                    <tr>
                      <td>25</td>
                      <td>Singh Sahab</td>
                      <td>170005030</td>
                    </tr>
                    <tr>
                      <td>26</td>
                      <td>Sunny Kumar</td>
                      <td>170005032</td>
                    </tr>
                    <tr>
                      <td>27</td>
                      <td>Ujjwal Tripathi</td>
                      <td>170005033</td>
                    </tr>
                    <tr>
                      <td>28</td>
                      <td>Utsav Singh</td>
                      <td>170005034</td>
                    </tr>
                    <tr>
                      <td>29</td>
                      <td>Vartika Pathak</td>
                      <td>170005036</td>
                    </tr>
                    <tr>
                      <td>30</td>
                      <td>Vedant Matta</td>
                      <td>170005037</td>
                    </tr>
                    <tr>
                      <td>31</td>
                      <td>Vipin Kumar</td>
                      <td>170005038</td>
                    </tr>
                    <tr>
                      <td>32</td>
                      <td>Vishvesh Jain</td>
                      <td>170005039</td>
                    </tr>
                    <tr>
                      <td>33</td>
                      <td>Yashwant V Sontakke</td>
                      <td>170005040</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <div className="batch">BATCH 2016</div>{" "}
            </Accordion.Header>
            <Accordion.Body>
              <div className="ug-tble">
                <Table striped>
                  <thead>
                    <tr>
                      <th>Sr. No.</th>
                      <th> Name</th>
                      <th>Roll No.</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                      <td>1</td>
                      <td>Abdul Wasim Khan</td>
                      <td>160005001</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Abhijeet Singh Tomar</td>
                      <td>160005002</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Abhishek Kamat</td>
                      <td>160005003</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Agrawal Aditi Amitesh</td>
                      <td>160005004</td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Amisha Arya</td>
                      <td>160005005</td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>Ashish Singhal</td>
                      <td>160005007</td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Ashutosh Gupta</td>
                      <td>160005008</td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Avijit Pandey</td>
                      <td>160005009</td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>Deshpande Indraneel Sundeep</td>
                      <td>160005010</td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Emin Varghese</td>
                      <td>160005012</td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>Garvit Sharma</td>
                      <td>160005013</td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>Harsh Lonare</td>
                      <td>160005014</td>
                    </tr>
                    <tr>
                      <td>13</td>
                      <td>Harsh Ranjan</td>
                      <td>160005015</td>
                    </tr>
                    <tr>
                      <td>14</td>
                      <td>Ingale Tirthesh Ravindra</td>
                      <td>160005016</td>
                    </tr>
                    <tr>
                      <td>15</td>
                      <td>Jay Shukla</td>
                      <td>160005017</td>
                    </tr>
                    <tr>
                      <td>16</td>
                      <td>Manishkumar Niraj Kumar</td>
                      <td>160005018</td>
                    </tr>
                    <tr>
                      <td>17</td>
                      <td>Mohammed Hadhi P P</td>
                      <td>160005019</td>
                    </tr>
                    <tr>
                      <td>18</td>
                      <td>Paswal Shital Rajan</td>
                      <td>160005022</td>
                    </tr>
                    <tr>
                      <td>19</td>
                      <td>Patil Chetan Eknath</td>
                      <td>160005023</td>
                    </tr>
                    <tr>
                      <td>20</td>
                      <td>Rahul Bhakrani</td>
                      <td>160005025</td>
                    </tr>
                    <tr>
                      <td>21</td>
                      <td>Rahul PC</td>
                      <td>160005026</td>
                    </tr>
                    <tr>
                      <td>22</td>
                      <td>Rajat Agrawal</td>
                      <td>160005027</td>
                    </tr>
                    <tr>
                      <td>23</td>
                      <td>Rajat Upadhyay</td>
                      <td>160005028</td>
                    </tr>
                    <tr>
                      <td>24</td>
                      <td>Ranteke Mrunmay Sunil</td>
                      <td>160005029</td>
                    </tr>
                    <tr>
                      <td>25</td>
                      <td>Ravi Meena</td>
                      <td>160005030</td>
                    </tr>
                    <tr>
                      <td>26</td>
                      <td>Rijul Bharat Sagar</td>
                      <td>160005031</td>
                    </tr>
                    <tr>
                      <td>27</td>
                      <td>Sagar Goswami</td>
                      <td>160005033</td>
                    </tr>
                    <tr>
                      <td>28</td>
                      <td>Satyam Kumar</td>
                      <td>160005034</td>
                    </tr>
                    <tr>
                      <td>29</td>
                      <td>Shreyas S S</td>
                      <td>160005035</td>
                    </tr>
                    <tr>
                      <td>30</td>
                      <td>Songara Harshal</td>
                      <td>160005036</td>
                    </tr>
                    <tr>
                      <td>31</td>
                      <td>Sonal Anish Jojo</td>
                      <td>160005037</td>
                    </tr>
                    <tr>
                      <td>32</td>
                      <td>Tejavanth Vasu</td>
                      <td>160005038</td>
                    </tr>
                    <tr>
                      <td>33</td>
                      <td>Vullengala Manish Chandra</td>
                      <td>160005039</td>
                    </tr>
                    <tr>
                      <td>34</td>
                      <td>Yash Rajesh Shinde</td>
                      <td>160005040</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default UG;
