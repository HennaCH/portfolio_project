import React, {useState} from 'react';
import './About.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import CV from './CV.pdf'
import pinkBowl from "../images/pinkYogurtBowl.png"
import rpaProject from "../images/RPAProject.png";
import gemlvl1 from "../images/GemgrabberLvl1-1.png"
import gemlvl2 from "../images/gemGrabberLvl2.png"
import gemOpen from "../images/gemGrabberOpening.png"
import graphicDesign from "../images/artworkRPA.png"
import fun4KidzOpen from "../images/fun4KidzOpen.png"
import fun4KidzFlower from "../images/fun4KidzFlower.png"
import problems from "../images/problems.jpg"
import me from "../images/meBackground.jpg"
import ProjectCarousel from "../ProjectCarousel";
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

const rpaImages = [rpaProject, graphicDesign]
const gemGrabberImages = [gemOpen, gemlvl1, gemlvl2]
const fun4KidzImages = [fun4KidzOpen,fun4KidzFlower]



const About = () => {
    const [rpa, setRpa] = useState(false)
    const showRPA = () => {
        setRpa(true)
    }

    const hideRPA = () => {
        setRpa(false)
    }

    const [gem, setGem] = useState(false)
    const showGem = () => {
        setGem(true)
    }

    const hideGem = () => {
        setGem(false)
    }

    const [fun4Kidz, setfun4Kidz] = useState(false)
    const showFun4Kidz= () => {
        setfun4Kidz(true)
    }

    const hideFun4Kidz= () => {
        setfun4Kidz(false)
    }


     return (
         <div className="body">
             <div className="skills">
                 <div className="container">
                     <div className="row">
                         <div className="row col-4">
                             <img src={me} className="col-12 meImage"/>
                         </div>

                         <strong className="col-12">
                             <text className="hi"> → Hi ! ←</text>
                             <br/>
                             I am a student in computer science at <text className="champlain">Champlain College
                             .</text> <br/> <br/>

                             <text className="design">I am interested in graphic design, more precisely professional CSS
                                 Design and color combination. I designed many different types of applications (video
                                 games, mobile applications, web
                                 applications).
                             </text>
                             <br/><br/>

                             I have worked as <text className="geek">Geek </text>
                             <text className="squad">Squad </text>
                             as a IT technician intern, which made me gain
                             knowledge
                             in computer hardware. I plan on pursuing in computer engineering at <text
                             className="concordia"> Concordia
                             University </text>. <br/> <br/>

                             I am also interested in animal care.
                             When I don't have work to do, I like spending my time with my birds. <br/> <br/>

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

             <div className="container col-12 mt-5"
                  style={{
                      backgroundColor: "#9f0b12",
                      borderRadius: "20px"
                  }}>

                 <div className="row p-4">
                     <div className="col-1"/>
                     <div className="rectangle_1_2 col-5">
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

                             <h5>Geek Squad Intern</h5>
                             <strong>
                                 <ul>
                                     <li>Helped clients with their devices, such as configuring their laptops,
                                         transferring their data and diagnosing their computers.
                                     </li>
                                     <li>
                                         Worked as an IT Technician
                                     </li>
                                     <li>
                                         Tasks done using Windows, data transfer hardware (toaster),
                                         and USB keys that would contain specific app to accomplish the tasks.
                                     </li>
                                 </ul>
                             </strong>


                             <div className="text-start">
                                 <h2 className="text-center">Skills</h2>
                                 <strong>
                                     <ul>
                                         <li>Android - <text style={{fontStyle: "italic"}}>Advanced</text></li>
                                         <li>SQL - <text style={{fontStyle: "italic"}}>Advanced</text></li>
                                         <li>React - <text style={{fontStyle: "italic"}}>Advanced</text></li>
                                         <li>Java - <text style={{fontStyle: "italic"}}>Intermediate</text></li>
                                         <li>PHP - <text style={{fontStyle: "italic"}}>Intermediate</text></li>
                                         <li>iOS - <text style={{fontStyle: "italic"}}>Intermediate</text></li>
                                         <li>C# - <text style={{fontStyle: "italic"}}>Intermediate</text></li>
                                     </ul>
                                 </strong>
                             </div>


                         </div>
                     </div>

                     <div className="rectangle_2_2 col-5">
                         <div className="">
                             <h2 className="text-center">Interests</h2>
                         </div>

                         <div className="row col-9 float-start">

                             <p className="text-start">Graphic Design</p>
                             <img src={gemlvl1} className="float-start" style={{borderRadius: "20px"}}/>
                         </div>

                         <div className="row col-9 float-end">

                             <p className="text-end">Cooking & Baking</p>
                             <rect className=""
                                   style={{backgroundColor: "pink", height: "132px", borderRadius: "20px"}}>
                                 <img src={pinkBowl} className="float-end" style={{height: "132px"}}/>
                             </rect>

                         </div>

                         <div className="row col-9 float-start">
                         <p className="text-start">Problem Solving !</p>
                             <rect className=""
                                   style={{backgroundColor: "#009999", height: "130px", borderRadius: "20px"}}>
                                 <img src={problems} className="float-start"
                                      style={{height: "130px", borderRadius: "20px"}}/>
                             </rect>

                         </div>
                     </div>
                     <div className="col-1"/>
                 </div>
             </div>

             <br/>
             <div className="m-5">
                 <div className="row">
                     <div className="col-3"/>
                     <h2 className="projects col-6">Projects</h2>
                     <div className="col-3"/>
                 </div>
                 <div className="container p-3 mb-5">
                     <div className="row m-3" onMouseEnter={showRPA} onMouseLeave={hideRPA}>
                         <a href="https://rabiapatelart.com/" style={{
                             backgroundColor: "blanchedalmond",
                             borderStyle: "solid",
                             borderColor: "#a20d14",
                             borderRadius: "25px",
                             textDecoration: "none"
                         }} className="linkContainer">
                             <div className="container">
                                 <div className="row">
                                     <div className="row projectDescription">
                                         <h1>Rabia Patel Art</h1>
                                         <strong>
                                             <ul className="col-12 pe-4">
                                                 <h5>Online shop for an artist to sell her artworks</h5>
                                             </ul>
                                         </strong>
                                     </div>
                                     <div className="col-2"/>
                                     <div className="col-8">
                                         {rpa ?
                                             <ProjectCarousel projectImages={rpaImages}/> :
                                             <img src={rpaProject} className="imageBackLeft col-12 col-sm-9"
                                                  style={{marginTop: "20px", marginLeft: "1%"}}/>
                                         }
                                     </div>
                                     <div className="col-2"/>
                                 </div>
                                 <div className="middle col-12">
                                     <div className="text">See Project</div>
                                 </div>
                             </div>
                         </a>
                     </div>

                     <div className="row m-3" onMouseEnter={showGem} onMouseLeave={hideGem}>
                         <a href="https://github.com/ThomasBedard/GemGrabber.git" style={{
                             backgroundColor: "blanchedalmond",
                             borderStyle: "solid",
                             borderColor: "#a20d14",
                             borderRadius: "25px",
                             textDecoration: "none"
                         }} className="linkContainer">
                             <div className="container">
                                 <div className="row">
                                     <div className="row  projectDescription">
                                         <h1>Gem Grabber</h1>
                                         <strong>
                                             <ul className="col-12 pe-4">
                                                 <h5>Video Game</h5>
                                             </ul>
                                         </strong>
                                     </div>
                                     <div className="col-2"/>
                                     <div className="col-8">
                                         {gem ?
                                             <ProjectCarousel projectImages={gemGrabberImages}/> :
                                             <img src={gemOpen} className="imageBackLeft col-12 col-sm-9"
                                                  style={{marginTop: "20px", marginLeft: "1%"}}/>
                                         }
                                     </div>
                                     <div className="col-2"/>
                                 </div>
                                 <div className="middle col-12">
                                     <div className="text">See Project</div>
                                 </div>
                             </div>
                         </a>
                     </div>


                     <div className="row m-3" onMouseEnter={showFun4Kidz} onMouseLeave={hideFun4Kidz}>
                         <a href="https://github.com/HennaCH/Fun4Kidz.git" style={{
                             backgroundColor: "blanchedalmond",
                             borderStyle: "solid",
                             borderColor: "#a20d14",
                             borderRadius: "25px",
                             textDecoration: "none"
                         }} className="linkContainer">
                             <div className="container">
                                 <div className="row">
                                     <div className="row  projectDescription">
                                         <h1>Fun4Kidz</h1>
                                         <strong>
                                             <ul className="col-12 pe-4">
                                                 <h5>Educative game for kids </h5>
                                             </ul>
                                         </strong>
                                     </div>
                                     <div className="col-2"/>
                                     <div className="col-8">
                                         {fun4Kidz ?
                                             <ProjectCarousel projectImages={fun4KidzImages}/> :
                                             <img src={fun4KidzOpen} className="imageBackLeft col-12 col-sm-9"
                                                  style={{marginTop: "20px", marginLeft: "1%"}}/>
                                         }
                                     </div>
                                     <div className="col-2"/>
                                 </div>
                                 <div className="middle col-12">
                                     <div className="text">See Project</div>
                                 </div>
                             </div>
                         </a>
                     </div>

                 </div>
             </div>

         </div>

     );
}
export default About