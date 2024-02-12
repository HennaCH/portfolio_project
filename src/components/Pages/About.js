import React, {useState} from 'react';
import './About.css'
import {CircleGrid, Donut} from "react-awesome-shapes"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import CV from './CV.pdf'
const About = () => {

    return (
        <div className="body">

            <div className="skills">
                <strong>Hi, my name is Henna and I am a computer science student. I like to focus on web
                    design</strong>
                <h2>Education</h2>
                <p>Champlain College Saint-Lambert 2021- 2024</p>

                <h2>Interests</h2>
                <p>Graphic Design</p>
                <p>Cooking & Baking</p>
                <p>Problem Solving</p>
                <p>Graphic Design</p>

                <a href={CV} download="CV">
                    <Button>CV Download</Button>
                </a>
            </div>

            <div className="rectangles">
                <div className="rectangle_1_1">
                    <div className="rectangle_1_2">
                        <h2>Education</h2>
                        <p>Champlain College Saint-Lambert 2021 - 2024</p>
                        <h2>Experience</h2>
                        <h6>Developer</h6>
                        <p>Bring Full Stack improvements, meet client requirements</p>
                        <h6>Intern</h6>
                        <p>Geek Squad</p>
                    </div>
                </div>
                <div className="rectangle_2_1 float-end float-lg-end">
                    <h2>Interests</h2>
                    <br/>
                    <div className="rectangle_2_2 ">
                        <p>
                            <p>Graphic Design</p>
                            <p>Cooking & Baking</p>
                            <p>Problem Solving</p>
                            <p>Graphic Design</p>
                        </p>
                    </div>
                </div>
            </div>


            <footer className="footer">Hello</footer>


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