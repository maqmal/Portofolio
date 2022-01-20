
import * as React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import BallotTwoToneIcon from '@material-ui/icons/BallotTwoTone';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import AppsIcon from '@material-ui/icons/Apps';
import styled from 'styled-components';

import ProfilePicture from './ProfilePicture';

import { Link } from 'react-router-dom';

import BottomNavigationMui from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const BottomNavigation = ({ theme, themeToggler, checked }) => {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <BottomNavigationStyled>
            <BottomNavigationMui
                className='bottom-nav-parent'
                // showLabels
                value={value}
                onChange={handleChange}>
                <BottomNavigationAction
                    component={Link}
                    to="/home"
                    label="Home"
                    value="home"
                    icon={<HomeRoundedIcon style={{fontSize:'23px'}}/>}
                />
                <BottomNavigationAction
                    component={Link}
                    to="/about"
                    label="About"
                    value="about"
                    icon={<AccountCircleIcon style={{fontSize:'23px'}} />}
                />
                <BottomNavigationAction
                    component={Link}
                    to="/resume"
                    label="Resume"
                    value="resume"
                    icon={<BallotTwoToneIcon style={{fontSize:'23px'}} />}
                />
                <BottomNavigationAction
                    component={Link}
                    to="/portofolio"
                    label="Works"
                    value="works"
                    icon={<AppsIcon style={{fontSize:'23px'}} />}
                />
                <BottomNavigationAction
                    component={Link}
                    to="/contact"
                    label="Contact"
                    value="contact"
                    icon={<EmailRoundedIcon style={{fontSize:'23px'}} />}
                />
            </BottomNavigationMui>
        </BottomNavigationStyled>
    )
}

const BottomNavigationStyled = styled.nav`
.bottom-nav-parent {
    position: fixed;
    bottom: 0;
    width:100%;
    border-top: 1px solid var(--border-color);
    background-color: var(--background-dark-color);
}
`
export default BottomNavigation;

