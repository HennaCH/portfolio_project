import React from 'react';
import './home.css'
import {CircleGrid} from "react-awesome-shapes"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactCSSTransitionGroup from 'react-transition-group'; // ES6


const Home = () => {
    return (
        <div className="body">
            {/*<CircleGrid classname="float-end"
                        position="relative"
                        left="38vw"
                        color="#6A951F"
                        size="12vw"
                        zIndex={1}
            />*/}


            <div className="circleHome1"/>
            <div>
                <div className="floatingCircle1 float-end"/>
                <div className="floatingCircle2" style={{backgroundColor: "#99C24D"}}/>
                <div className="floatingCircle2" style={{marginTop: "25vw", marginLeft: "40vw"}}/>
                <div className="floatingCircle1 float-end " style={{ marginTop: "40vw", backgroundColor: "#FFBCD6"}}/>
            </div>

            <div style={{marginLeft:"18vw"}}>
            <h1 className="name float-start mb-5 font-size: 8vw;">Henna's</h1>
            <p className="portfolio float-end float-lg-end">Portfolio</p>
            </div>
            {/*<div className="rectangle"/>*/}
            <div className="circleHome2 float-end"/>
        </div>

    );
}
export default Home