import React, {useState} from "react";
import styled from "styled-components";
import RightNav from "./rightNav";
import {Link} from "react-router-dom";
import "./Navbar.css"

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    top: 15px;
    right: 20px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    z-index: 20;
    
    div{
        width: 2rem;
        height: 0.25rem;
        background-color: /*#282c34*/ ${({ open }) => open ? '#FFDAC7' : '#AF4F41'};
        border-radius: 10px;
        transform-origin: 1px;
        transition: all 0.3s linear;
        
        //rotations/animations
        &:nth-child(1){
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        }

        &:nth-child(2){
            transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open }) => open ? 0 : 1};
        }

        &:nth-child(3){
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }
`;

const NavList = styled.ul`
    ul {
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
    }

    li {
        padding: 18px 10px;
    }

    @media {
        flex-flow: column nowrap;
        background-color: #429ebd;
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;

        li {
            color: #fff;
        }
    }
`
const Burger = () => {

    const [open, setOpen] = useState(false)
    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <div/>
                <div/>
                <div/>
            </StyledBurger>
            {/*<RightNav open={open}/>*/}
           <NavList open={open}>

                <Link to={`/`} open={open} onClick={() => setOpen(!open)} style={{ textDecoration: 'none' }} className="lintText">Home</Link>
                <br/>
                <Link to={`/About`} open={open} onClick={() => setOpen(!open)} style={{ textDecoration: 'none' }} className="lintText">About</Link>
                <br/>
                <Link to={`/Contact`} open={open} onClick={() => setOpen(!open)} style={{ textDecoration: 'none' }} className="lintText">Contact</Link>

            </NavList>
        </>

    );
}
export default Burger