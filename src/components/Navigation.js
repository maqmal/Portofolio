import React from "react";
import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import profilePicture from '../images/pp.jpg';

const Navigation = () => {
    return (
        <NavigationStyled>
            <div className="profile-picture">
                <img src={profilePicture} alt='🙂' />
            </div>
            <ul className="nav-items">
                <li className="nav-items">
                    <NavLink style={{ textDecoration: 'none' }} to="/home" activeClassName='active-class'>Home</NavLink>
                </li>
                <li className="nav-items">
                    <NavLink style={{ textDecoration: 'none' }} to="/about" activeClassName='active-class'>About</NavLink>
                </li>
                <li className="nav-items">
                    <NavLink style={{ textDecoration: 'none' }} to="/resume" activeClassName='active-class'>Resume</NavLink>
                </li>
                <li className="nav-items">
                    <NavLink style={{ textDecoration: 'none' }} to="/portofolio" activeClassName='active-class'>Portofolio</NavLink>
                </li>
                <li className="nav-items">
                    <NavLink style={{ textDecoration: 'none' }} to="/contact" activeClassName='active-class'>Contact Me</NavLink>
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
border-right: 1px solid var(--border-color);

.profile-picture{
    width: 100%;
    border-bottom: 1px solid var(--border-color);
    text-align: center;
    padding: 2rem 0;
    img{
        width: 70%;
        border-radius: 50%;
        border: 8px solid var(--border-color);
    }
}

.nav-items{
    margin-right: 40px;
    width: 100%;
    text-align: center;
    .active-class{
        background-color: var(--primary-color-light);
        color: white;
    }
    li{
        text-decoration: none !important;
        display: block;
        a{
            display: block;
            padding: .45rem 0;
            margin-left: -20px;
            margin-right: -20.8px;
            position: relative;
            z-index: 10;
            text-transform: uppercase;
            transition: all .4s ease-in-out;
            letter-spacing: 1px;
            &:hover{
                cursor: pointer;
                color: var(--white-color);
            }
            &::before{
                content: "";
                position: absolute;
                bottom: 0;
                left: 0;
                width: 0;
                height: 50%;
                background-color: var(--highlight-color);
                transition: All 0.2s cubic-bezier(.17,.67,.83,.67);
                opacity: 0.4;
                z-index: -1;
            }
        }
        a:hover::before{
            width: 100%;
            height: 100%;
        }
    }
}

footer{
    border-top: 1px solid var(--border-color);
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