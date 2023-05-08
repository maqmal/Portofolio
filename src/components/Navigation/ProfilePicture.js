import React from "react";
import styled from "styled-components";
import profilePicture from '../../images/pp.png';

const ProfilePicture = ({ theme, themeToggler }) => {
    return (
        <ProfilePictureStyled>
            <img src={profilePicture} alt='🙂' className={theme+" double-border"} onClick={themeToggler}/>
        </ProfilePictureStyled>
    )
}

const ProfilePictureStyled = styled.div`
display: flex;
width: 100%;
text-align: center;
justify-content: center;
padding-bottom: 20px;

img{
    max-width: 100%;
    border-radius: 50%;
    margin-bottom: 1rem;
    transition: filter 0.4s ease-in-out;
    border: 10px solid var(--background-dark-color);
    background-color: var(--white-color);
}

.double-border {
    filter: none;
}

.dark-theme{
    filter: grayscale(100%);
}

`

export default ProfilePicture;