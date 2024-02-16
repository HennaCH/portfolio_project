import React, {useState} from 'react';
import './About.css'
import {CircleGrid, Donut} from "react-awesome-shapes"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import CV from './CV.pdf'
import ProjectCarousel from "../ProjectCarousel";
import sc from "../images/Screenshot (45).png"
const About = () => {

    return (
        <div className="body ">

            <ProjectCarousel projectImages={sc}/>
            <div className="skills body_animation">
                <strong>Motivated third year student interests in computer science and
                    design, more precisely CSS and creating colors. <br/>
                    I designed many different types of applications (video games, mobile applications, web
                    applications). <br/>
                    I am keen to take on challenges and help other by
                    providing support in their IT tasks.</strong> <br/>

                <a href={CV} download="CV">
                    <Button>CV Download</Button>
                </a>
            </div>



            <div className="rectangles body_animation">

                <div className="rectangle_1_1">
                    <div className="rectangle_1_2">
                        <div className="text-center">
                        <h2>Education</h2>
                        <p>Champlain College Saint-Lambert 2021 - 2024</p>
                        </div>

                        <div className="text-start">
                            <h2 className="text-center">Experience</h2>
                            <h6>Rabia Patel Art Project</h6>
                            <ul>
                                <li>Create an online shop for a client to sell artworks</li>
                                <li>Worked as developer (bring Full Stack additions)</li>
                                <li>Used technologies such as React, Spring Boot, Jira, Scrum Methodology</li>
                            </ul>

                            {/*<h6>Intern at Geek Squad</h6>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>*/}

                            <h6>Pet Clinic Project</h6>
                            <ul>
                                <li>Improve a web application for veterinary clinic to deal with clients, vets, and appointment</li>
                                <li>Worked as developer with team (bring Full Stack improvements, such as a tax calculator)</li>
                                <li>Developed project using AngularJS, MongoDB, and Agile and Scrum Methodology</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="rectangle_2_1 float-end float-lg-end ">
                    <h2>Interests</h2>
                    <br/>
                    <div className="rectangle_2_2 position-relative p-3">
                        <p>
                            <p className="text-start">Graphic Design</p>
                            <p className="text-end">Cooking & Baking</p>
                            <p className="text-start">Problem Solving</p>
                            <p className="text-end">Graphic Design</p>
                        </p>
                    </div>
                </div>
            </div>

            <footer className="footer">hennacheung@gmail.com</footer>


        </div>

    );
}
export default About

{/* <Donut
                color="#ED6424"
                size="11.72vw"
                width={['2.52vw', '2.52vw', '7.82vw', '7.82vw']}
                zIndex={2}
            />*/
}
{/*<CircleGrid classname="float-end"
                            position="relative"
                            left="38vw"
                            color="#6A951F"
                            size="12vw"
                            zIndex={2}/>*/
}