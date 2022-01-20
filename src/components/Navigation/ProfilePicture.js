import React from "react";
import styled from "styled-components";
import profilePicture from '../../images/pp.png';
import profileBackground from '../../images/inspiration-geometry.png'

const ProfilePicture = ({ theme, themeToggler, checked }) => {
    return (
        <ProfilePictureStyled>
            <img src={profilePicture} alt='🙂' style={{ backgroundImage: `url(${profileBackground})` }} className={theme} onClick={themeToggler}/>
        </ProfilePictureStyled>
    )
}

const ProfilePictureStyled = styled.nav`
display: flex;
width: 100%;
text-align: center;
justify-content: center;
img{
    max-width: 70%;
    border-radius: 50%;
    margin-bottom: 1rem;
    transition: filter 0.4s ease-in-out;
    border: 4px solid var(--font-dark-color);
    background-color: white;
}

.dark-theme{
    filter: grayscale(100%);
}

`

export default ProfilePicture;