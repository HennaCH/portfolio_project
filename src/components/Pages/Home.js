import React from 'react';
import './home.css'
import {CircleGrid} from "react-awesome-shapes"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactCSSTransitionGroup from 'react-transition-group';
import Footer from "../Footer"; // ES6


const Home = () => {
    return (
        <div className="body">

            <div className="container">

                    <div className="circleHome1 "></div>
                    <div className="circleHome2 "></div>



            </div>

            <div className="container">
                <div className="nameContainer">
                    <h1 className="name col-12 col-sm-5">Henna's Portfolio</h1>
                </div>

                 <div className="floatingCircle1 float-end"/>
                <div className="floatingCircle2"/>
                <div className="floatingCircle3"/>
                <div className="floatingCircle4 float-end"/>
                {/*<CircleGrid classname="float-end"
                            position="relative"
                            left="25vw"
                            top="-20vw"
                            color="#6A951F"
                            size="40vw"
                            zIndex={0}
                />*/}

            </div>

            {/*<div className="rectangle"/>*/}


            {/* <Footer/>*/}
        </div>

    );
}
export default Home