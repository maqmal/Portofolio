
import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeIcon from '@material-ui/icons/Home';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AppsIcon from '@material-ui/icons/Apps';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import ProfilePicture from './ProfilePicture';

import { Nav, NavItem } from 'reactstrap';

const BottomNavigation = ({ theme, themeToggler, checked }) => {
    return (
        <BottomNavigationStyled>
            <Nav className="w-100 navbar fixed-bottom bottom-nav-parent" >
                <div className="d-flex flex-row justify-content-around w-100 bottom-nav-items">
                    <NavItem key='1'>
                        <NavLink to='/home' className={({ isActive }) => isActive ? "nav-link active-class" : 'nav-link'}>
                            <div className="flex-column justify-content-center align-items-center bottom-nav-icon">
                                <HomeIcon className='bottom-icon'/>
                                <div className='bottom-nav-text'>Home</div>
                            </div>
                        </NavLink>
                    </NavItem>
                    <NavItem key='2'>
                        <NavLink to='/about' className={({ isActive }) => isActive ? "nav-link active-class" : 'nav-link'}>
                            <div className="flex-column justify-content-center align-items-center bottom-nav-icon">
                                <AccountCircleIcon className='bottom-icon'/>
                                <div className='bottom-nav-text'>About</div>
                            </div>
                        </NavLink>
                    </NavItem>
                    <NavItem key='3'>
                        <div className="flex-column justify-content-center align-items-center bottom-nav-icon">
                            {/* <ProfilePicture theme={theme} themeToggler={themeToggler} checked={checked} /> */}
                        </div>
                    </NavItem>
                    <NavItem key='4'>
                        <NavLink to='/resume' className={({ isActive }) => isActive ? "nav-link active-class" : 'nav-link'}>
                            <div className="flex-column justify-content-center align-items-center bottom-nav-icon">
                                <AssignmentIcon className='bottom-icon'/>
                                <div className='bottom-nav-text'>Resume</div>
                            </div>
                        </NavLink>
                    </NavItem>
                    <NavItem key='5'>
                        <NavLink to='/portofolio' className={({ isActive }) => isActive ? "nav-link active-class" : 'nav-link'}>
                            <div className="flex-column justify-content-center align-items-center bottom-nav-icon">
                                <AppsIcon className='bottom-icon'/>
                                <div className='bottom-nav-text'>Works</div>
                            </div>
                        </NavLink>
                    </NavItem>
                </div>
            </Nav>
        </BottomNavigationStyled>
    )
}

const BottomNavigationStyled = styled.nav`
.bottom-nav-parent{
    padding-bottom: 0;
    bottom: 0;
}
.bottom-nav-items{
    background-color: var(--font-dark-color);
    padding-top: -60px;
}
.bottom-nav-icon{
    color: var(--white-color);
    text-align: center;
    justify-content: center;
    .bottom-icon{
        font-size: 3.4vh;
    }
}
.bottom-nav-text{
    color: var(--white-color);
    font-size: 1.2vh;
}
`
export default BottomNavigation;

