import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import profilePicture from '../../images/pp.png';
import profileBackground from '../../images/inspiration-geometry.png'

import Switch from '@material-ui/core/Switch';
import Brightness4Icon from '@material-ui/icons/Brightness4';

const Navigation = ({ theme, themeToggler, checked }) => {
    return (
        <NavigationStyled>
            <div className="profile-picture">
                <img src={profilePicture} alt='🙂' style={{ backgroundImage: `url(${profileBackground})` }} className={theme} />
                <p className="quote">Creating magic with code and a bit of cafeine</p>

                <div className="theme">
                    <div className="light-dark-mode">
                        <Brightness4Icon />
                        <Switch
                            value=""
                            checked={checked}
                            inputProps={{ 'aria-label': '' }}
                            size="small"
                            onClick={themeToggler}
                        />
                    </div>
                </div>

            </div>
            <ul className="nav-items">
                <li className="nav-items">
                    <NavLink style={{ textDecoration: 'none' }} exact={'true'} to="/" className={({ isActive }) => isActive ? "active-class" : ''}>Home</NavLink>
                </li>
                <li className="nav-items">
                    <NavLink style={{ textDecoration: 'none' }} exact={'true'} to="/about" className={({ isActive }) => isActive ? "active-class" : ''}>About</NavLink>
                </li>
                <li className="nav-items">
                    <NavLink style={{ textDecoration: 'none' }} exact={'true'} to="/resume" className={({ isActive }) => isActive ? "active-class" : ''}>Resume</NavLink>
                </li>
                <li className="nav-items">
                    <NavLink style={{ textDecoration: 'none' }} exact={'true'} to="/portofolio" className={({ isActive }) => isActive ? "active-class" : ''}>Projects</NavLink>
                </li>
                <li className="nav-items">
                    <NavLink style={{ textDecoration: 'none' }} exact={'true'} to="/contact" className={({ isActive }) => isActive ? "active-class" : ''}>Contact</NavLink>
                </li>
            </ul>
            <footer>
                <p>@2022 Aqumaru's Portofolio</p>
            </footer>
        </NavigationStyled>
    )
}

const NavigationStyled = styled.nav`
display: flex;
justify-content: space-between;
flex-direction: column;
align-items: center;
height: 100%;
width: 100%;
font-family: 'Poppins', sans-serif;
.profile-picture{
    width: 100%;
    text-align: center;
    padding: 2rem 0;
    margin-bottom: -3rem;
    img{
        width: 70%;
        border-radius: 50%;
        margin-bottom: 1rem;
        transition: filter 0.4s ease-in-out;
        border: 4px solid var(--scrollbar-bg-color);
        background-color: white;
    }
}
.dark-theme{
    filter: grayscale(100%);
}
.profile-picture:hover img {
	filter: none;
}
.nav-items{
    margin-right: 40px;
    width: 100%;
    text-align: center;
    .active-class{
        background-color: var(--grad);
        color: white;
    }
    li{     
        text-decoration: none !important;
        display: block;
        font-weight: 100;
        a{
            font-size: 2.5vh;
            display: block;
            padding: .45rem 0;
            margin-left: -20px;
            margin-right: -20.8px;
            position: relative;
            z-index: 10;
            text-transform: uppercase;
            letter-spacing: 2px;
        }
        a:hover{   
            color: white;
        }
        a::before {  
            transform: scaleX(0);
            transform-origin: bottom left;
        }
        a:hover::before {
            transform: scaleX(1);
            transform-origin: bottom left;
        }
        a::before {
            content: " ";
            display: block;
            position: absolute;
            top: 0; right: 0; bottom: 0; left: 0;
            inset: 0 0 0 0;
            background: rgba(207,141,176,.4);
            z-index: -1;
            transition: transform .3s ease;
            color: white;
        }
    }
}
footer{
    width: 100%;
    p{
        font-size: 10px;
        margin-top: 20px;
        margin-bottom: 12px;
        padding: -10px 0;
        display: block;
        text-align: center;
    }
} 
.theme{
    display: none;
}
@media screen and (max-width:1200px){
    margin-left: 0;
    .theme{
        justify-content: center;
        text-align: center;
        display: flex;
        bottom: 20%;
    }
  }
@media screen and (max-height:280px){
    .theme{
        padding-bottom: 30px;
    }
}
@media screen and (max-height:415px){
    img{
        display: none;
    }
}
@media screen and (max-width:1200px){
    .profile-picture img{
        width: 24%;
    }
}
@media screen and (min-width:650px){
    .theme{
        display: none;
    }
  }
`

export default Navigation;