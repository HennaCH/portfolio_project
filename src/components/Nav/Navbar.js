import React, {useState} from "react";
import styled from 'styled-components'
import Burger from "./Burger";
const Nav = styled.nav`
        width: 100%;
        height: 55px;
        //border-bottom: 2px solid #385230;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        background-color: #FFDAC7;
        
        //.logo{
          //  padding: 15px 0;
        //}
    `
const Navbar = () => {


    //changes burger classes
    /*const [burger_class, setBurgerClass] = useState("burger-bar uncliked")
    const [menu_class, setMenuClass] = useState("menu hidden")
    const [isMenuClicked, setIsMenuClicked] = useState("burger-bar uncliked")*/

   // const [burger_class, setBurgerClass] = useState("burger-bar uncliked")
   // const [menu_class, setMenuClass] = useState("menu hidden")
   // const [isMenuClicked, setIsMenuClicked] = useState(false)
   // const [active, setActive] = useState(false)
    //toggle menu change

    /*const updateNavBar = () => {
        setActive(true)
    }
    const updateMenu = () => {
        if(!isMenuClicked){
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible clicked")
        }
        else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }*/
return (
    <Nav>
        <Burger/>
        <Nav/>
    </Nav>

    /*  <div style={{width: '100%', height:'100vh'}}>
          <nav>
              <div className='burger-menu' onClick={updateMenu}>
                  <div className={burger_class}></div>
                  <div className={burger_class}></div>
                  <div className={burger_class}></div>
              </div>
          </nav>


          <nav className={menu_class}>
              <div>
                  <NavLink to={`/`}>Home</NavLink>
                  <br/>
                  <NavLink to={`/About`}>About</NavLink>
                  <br/>
                  <NavLink to={`/Contact`}>Contact</NavLink>
              </div>
          </nav>
      </div>*/


    /*<div className="topnav">
        <Link to={`/`} >Home</Link>
        <Link to={`/About`}>About</Link>
        <Link to={`/Contact`}>Contact</Link>
    </div>

    /*<nav>
        <div>
           Henna
        </div>
        <div>
            <ul>
                <NavLink to={`/`} >Home</NavLink>
                <NavLink to={`/About`}>About</NavLink>
                <NavLink to={`/Contact`}>Contact</NavLink>

            </ul>
        </div>
    </nav>*/

)
}

export default Navbar