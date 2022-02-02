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
    background: var(--background-dark-grey);
    box-shadow: 0 8px 32px 0 var(--shadow);
    backdrop-filter: blur( 15px );
    -webkit-backdrop-filter: blur( 15px );
    border-radius: 10px;
    
    width: 13.5rem;
    position: fixed;
    height: 100vh;
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