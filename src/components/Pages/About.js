import React, {useState} from 'react';
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import CV from './CV.pdf'
import pinkBowl from "../images/pinkYogurtBowl.png"
import rpa from "../images/RPAProject.png";
import gemlvl1 from "../images/gemGrabberLvl1.png"
import gemlvl2 from "../images/gemGrabberLvl2.png"
import gemOpen from "../images/gemGrabberOpening.png"
import graphicDesign from "../images/artworkRPA.png"
import fun4KidzOpen from "../images/fun4KidzOpen.png"
import fun4KidzFlower from "../images/fun4KidzFlower.png"
import problems from "../images/problems.jpg"
import me from "../images/meBackground.jpg"
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else{
            entry.target.classList.remove('show')
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const About = () => {

     return (
         <div className="body">
             <div className="skills">
                 <div className="container">
                     <div className="row">
                         <div className="row col-4">
                             <img src={me} className="col-12 meImage"/>
                         </div>

                         <strong className="col-9">Hi! I am motivated student interested in computer science and
                             design, more precisely professional CSS Design and color combiation. <br/>
                             I designed many different types of applications (video games, mobile applications, web
                             applications). <br/>
                             I am keen to take on challenges and help other by
                             providing support in their IT tasks.</strong>
                     </div>

                     <div className="row">
                         <a href={CV} download="CV">
                             <Button className="cvButton col-sm-6 mt-5">Download CV</Button>
                         </a>
                     </div>

             </div>
             </div>
             <div className="container col-10 mt-5"
                  style={{
                      backgroundColor: "#9f0b12",
                      borderRadius: "20px"
                  }}>

                 <div className="row p-sm-4">
                     <div className="col-1"/>
                     <div className="rectangle_1_2 col-sm-5">
                         <div className="text-center">
                             <h2>Education</h2>
                             <strong><p>Champlain College Saint-Lambert 2021 - 2024</p></strong>
                         </div>

                         <div className="text-start">
                             <h2 className="text-center">Experience</h2>
                             <h5>Rabia Patel Art Project</h5>

                             <strong>
                                 <ul>
                                     <li>Create an online shop for a client to sell artworks</li>
                                     <li>Worked as developer (bring Full Stack additions)</li>
                                     <li>Used technologies such as React, Spring Boot, Jira, Scrum Methodology</li>
                                 </ul>
                             </strong>
                             <h5>Pet Clinic Project</h5>
                             <strong>
                                 <ul>
                                     <li>Improve a web application for veterinary clinic to deal with clients, vets,
                                         and appointment
                                     </li>
                                     <li>Worked as developer with team (bring Full Stack improvements, such as a tax
                                         calculator)
                                     </li>
                                     <li>Developed project using AngularJS, MongoDB, and Agile and Scrum
                                         Methodology
                                     </li>
                                 </ul>
                             </strong>
                         </div>
                     </div>

                     <div className="rectangle_2_2 col-sm-5">
                         <div className="row">
                             <h2 className="text-center">Interests</h2>
                         </div>

                         <div className="row">
                             <div className="container">
                                 <p className="text-start">Graphic Design</p>
                                 <img src={gemlvl1} className="col-8 float-start p-2" style={{borderRadius: "20px"}}/>
                             </div>
                         </div>

                         <div className="row">
                         <div className="container">
                             <p className="text-end">Cooking & Baking</p>
                             <rect className="col-4 float-end" style={{backgroundColor: "pink", height: "105px"}}>
                             <img src={pinkBowl} className="col-4" />
                             </rect>
                         </div>
                         </div>

                         <div className="row">
                             <div className="container">
                                 <p className="text-start">Problem Solving !</p>
                                 <img src={problems} className="col-3 float-start p-2" style={{borderRadius: "20px"}}/>
                             </div>
                         </div>
                     </div>
                     <div className="col-1"/>
                 </div>
             </div>

             <br/>
             <div className="m-5">
                 <h2 className="">Projects</h2>
                 <div className="container p-3">
                     <div className="row">
                         <div className="col-sm-6">
                             <div className="row m-3 col-sm-12">
                                 <a href="https://rabiapatelart.com/" style={{
                                     backgroundColor: "#9f0b12",
                                     borderRadius: "25px",
                                     boxShadow: "-10px 10px #303a52",
                                     textDecoration: "none"
                                 }} className="linkContainer">

                                     <img src={rpa} className="imageBackLeft col-12"/>
                                     <div className="middle">
                                         <div className="text">See Project</div>
                                     </div>
                                 </a>
                             </div>
                         </div>

                         <div className="col-sm-6">
                         <div className="row m-3 col-sm-12">
                             <a href="https://rabiapatelart.com/" style={{
                                 backgroundColor: " #9f0b12",
                                 borderRadius: "25px",
                                 boxShadow: "-10px 10px #303a52",
                                 textDecoration: "none"
                             }} className="linkContainer">
                                 <img src={graphicDesign} className="imageBackRight col-12"/>
                                 <div className="middle">
                                     <div className="text">See Project</div>
                                 </div>
                             </a>
                         </div>
                         </div>
                     </div>

                     <div className="row">
                     <div className="col-sm-6">
                             <div className="row m-3 col-sm-12">
                                 <a href="https://github.com/ThomasBedard/GemGrabber.git" style={{
                                     backgroundColor: " #9f0b12",
                                     borderRadius: "25px",
                                     boxShadow: "-10px 10px #303a52",
                                     textDecoration: "none"
                                 }} className="linkContainer">
                                     <img src={gemOpen} className="imageBackLeft col-12"/>
                                     <div className="middle">
                                         <div className="text">See Project</div>
                                     </div>
                                 </a>
                             </div>
                     </div>
                         <div className="col-sm-6">
                         <div className="row m-3 col-sm-12">
                             <a href="https://github.com/ThomasBedard/GemGrabber.git" style={{
                                 backgroundColor: " #9f0b12",
                                 borderRadius: "25px",
                                 boxShadow: "-10px 10px #303a52",
                                 textDecoration: "none"
                             }} className="linkContainer">
                                 <img src={gemlvl2} className="imageBackRight col-12"/>
                                 <div className="middle">
                                     <div className="text">See Project</div>
                                 </div>
                             </a>
                         </div>
                         </div>
                     </div>

                     <div className="row">
                     <div className="col-sm-6">
                             <div className="row m-3  col-sm-12">
                                 <a href="https://github.com/HennaCH/Fun4Kidz.git" style={{
                                     backgroundColor: " #9f0b12",
                                     borderRadius: "25px",
                                     boxShadow: "-10px 10px #303a52",
                                     textDecoration: "none"
                                 }} className="linkContainer">
                                     <img src={fun4KidzOpen} className="imageBackLeft col-12"/>
                                     <div className="middle">
                                         <div className="text">See Project</div>
                                     </div>
                                 </a>
                             </div>
                     </div>
                         <div className="col-sm-6">
                         <div className="row m-3  col-sm-12">
                             <a href="https://github.com/HennaCH/Fun4Kidz.git" style={{
                                 backgroundColor: " #9f0b12",
                                 borderRadius: "25px",
                                 boxShadow: "-10px 10px #303a52",
                                 textDecoration: "none"
                             }} className="linkContainer">
                                 <img src={fun4KidzFlower} className="imageBackRight col-12"/>
                                 <div className="middle">
                                     <div className="text">See Project</div>
                                 </div>
                             </a>
                         </div>
                         </div>
                     </div>
                 </div>
             </div>

         </div>

     );
}
export default About