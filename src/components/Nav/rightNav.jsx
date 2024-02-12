/*import React, {useState} from 'react'
import styled from "styled-components";
import {NavLink} from "react-bootstrap";
import {Link} from "react-router-dom";

const NavList = styled.ul`
    ul{
        list-style: none;
        display: flex;
        flex-flow: row nowrap;
    }

    li{
        padding: 18px 10px;
    }
    
    @media  {
        flex-flow: column nowrap;
        background-color: #273248;
        position: fixed;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 300px;
        padding-top: 3.5rem;
        transition: transform 0.3s ease-in-out;
       
        li {
            color:#fff;
        }
    }
`
const RightNav = ({open}) => {

    return (
        <NavList open={open}>

                <Link to={`/`}>Home</Link>
                <br/>
                <Link to={`/About`}>About</Link>
                <br/>
                <Link to={`/Contact`}>Contact</Link>

        </NavList>
    )
}

export default RightNav*/