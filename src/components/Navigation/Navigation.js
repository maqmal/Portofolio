import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import profilePicture from '../../images/pp.png';

const Navigation = () => {
    return (
        <NavigationStyled>
            <div className="profile-picture">
                <img src={profilePicture} alt='🙂' />
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
                    <NavLink style={{ textDecoration: 'none' }} exact={'true'} to="/portofolio" className={({ isActive }) => isActive ? "active-class" : ''}>Portofolio</NavLink>
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
/* border-right: 1px solid var(--border-color); */

.profile-picture{
    width: 100%;
    /* border-bottom: 1px solid var(--border-color); */
    text-align: center;
    padding: 3rem 0;
    margin-bottom: -3rem;
    img{
        width: 70%;
        border-radius: 50%;
        filter: grayscale();
        margin-bottom: 1rem;
        transition: filter 0.4s ease-in-out;
        border: 3px solid var(--border-color);
        background-color: #cccccc;
    }
}

.profile-picture:hover img {
	filter: none;
}

.nav-items{
    margin-right: 40px;
    width: 100%;
    text-align: center;
    .active-class{
        background-color: rgba(179,84,217,.4);
        color: white;
    }
    li{     
        text-decoration: none !important;
        display: block;
        font-weight: 900;
        a{
            font-size: 1rem;
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
            background: rgba(179,84,217,.4);
            z-index: -1;
            transition: transform .3s ease;
            color: white;
        }
    }
}

footer{
    /* border-top: 1px solid var(--border-color); */
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
`

export default Navigation;