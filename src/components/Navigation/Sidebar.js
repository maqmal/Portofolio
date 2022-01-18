import React from 'react'
import styled from 'styled-components';
import Navigation from './Navigation';

import { IconButton } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

function Sidebar({ navToggle, theme, themeToggler, checked, setNavToggle }) {
    return (
        <SidebarStyled className={`${navToggle ? 'nav-toggle' : ''}`}>
            <div className="ham-burger-menu-nav">
                <IconButton onClick={() => setNavToggle(!navToggle)}>
                    <CloseIcon />
                </IconButton>
            </div>
            <Navigation theme={theme} themeToggler={themeToggler} checked={checked} />
        </SidebarStyled>
    )
}

const SidebarStyled = styled.div`
    width: 14.3rem;
    position: fixed;
    height: 100vh;
    background-color: var(--background-dark-grey);
    overflow: hidden;
    transition: all .4s ease-in-out;
    .quote{ display:none; }
    @media screen and (max-width:1200px){
        transform: translateX(-100%);
        z-index: 1; 
        width: 100%;
        .profile-picture{
            width: 60%;
        }
        .quote{ 
            justify-content: center;
            text-align: center;
            display: flex; 
            font-size: 12px;
            padding-bottom: 10px;
            border-bottom: 1px solid var(--border-color);
        }
    }
`;

export default Sidebar;