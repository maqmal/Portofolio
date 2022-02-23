
import * as React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import EmailRoundedIcon from '@material-ui/icons/EmailRounded';
import AppsIcon from '@material-ui/icons/Apps';
import styled from 'styled-components';

import ProfilePicture from './ProfilePicture';

import { Link } from 'react-router-dom';

import BottomNavigationMui from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

const BottomNavigation = ({ theme, themeToggler }) => {
    const [value, setValue] = React.useState('recents');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <BottomNavigationStyled>
            <BottomNavigationMui
                className='bottom-nav-parent'
                showLabels
                value={value}
                onChange={handleChange}>
                <BottomNavigationAction
                    component={Link}
                    to="/home"
                    label="Home"
                    value="home"
                    icon={<HomeRoundedIcon style={{ fontSize: '3.2vh', color:'var(--white-color)' }} />}
                />

                <BottomNavigationAction
                    component={Link}
                    to="/resume"
                    label="Resume"
                    value="resume"
                    icon={<AccountCircleIcon style={{ fontSize: '3.2vh', color:'var(--white-color)' }} />}
                />
                
                <BottomNavigationAction
                    icon={<ProfilePicture theme={theme} themeToggler={themeToggler} />}
                />
                
                <BottomNavigationAction
                    component={Link}
                    to="/portofolio"
                    label="Portofolio"
                    value="portofolio"
                    icon={<AppsIcon style={{ fontSize: '3.2vh', color:'var(--white-color)' }} />}
                />
                <BottomNavigationAction
                    component={Link}
                    to="/contact"
                    label="Contact"
                    value="contact"
                    icon={<EmailRoundedIcon style={{ fontSize: '3.2vh', color:'var(--white-color)' }} />}
                />
            </BottomNavigationMui>
        </BottomNavigationStyled>
    )
}

const BottomNavigationStyled = styled.nav`
.bottom-nav-parent {
    .MuiBottomNavigationAction-label{
        font-size: 1.2vh;
        color: var(--white-color);
    }
    flex-basis: 120px;
    position: fixed;
    bottom: 0;
    width: 100%;
}
@media screen and (min-width:280px){
    .bottom-nav-parent {
        a{
            padding-top: 10px;
        }
        .MuiBottomNavigationAction-label{
            font-size: .8vh;
        }
        position: fixed;
        bottom: 0;
        border-top: 1px solid var(--border-color);
        background-color: var(--background-dark-grey-sidebar);
    }
  }
`
export default BottomNavigation;

