import React, {useState} from 'react';
import './About.css'
import {CircleGrid, Donut} from "react-awesome-shapes"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import CV from './CV.pdf'
import ProjectCarousel from "../ProjectCarousel";
import sc from "../images/Screenshot (45).png"

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

            <ProjectCarousel projectImages={sc}></ProjectCarousel>
            <div className="skills">
                <strong>Motivated third year student interests in computer science and
                    design, more precisely CSS and creating colors. <br/>
                    I designed many different types of applications (video games, mobile applications, web
                    applications). <br/>
                    I am keen to take on challenges and help other by
                    providing support in their IT tasks.</strong> <br/>

                <a href={CV} download="CV">
                    <Button className="cvButton">CV Download</Button>
                </a>
            </div>



            <div className="pt-3">

                <div className="rectangle_1_1">
                    <div className="rectangle_1_2">
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

                            {/*<h6>Intern at Geek Squad</h6>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>*/}

                            <h5>Pet Clinic Project</h5>
                            <strong>
                                <ul>
                                <li>Improve a web application for veterinary clinic to deal with clients, vets, and appointment</li>
                                <li>Worked as developer with team (bring Full Stack improvements, such as a tax calculator)</li>
                                <li>Developed project using AngularJS, MongoDB, and Agile and Scrum Methodology</li>
                                </ul>
                            </strong>
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