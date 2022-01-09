import React from "react";
import styled from "styled-components";
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TypeAnimation from 'react-type-animation';

import '../styles/Stars.css'

const HomePage = () => {
    return (
        <HomePageStyled>
            <div className="stars">
                <div id='stars2'></div>
                <div id='stars'></div>
                <div id='stars3'></div>
            </div>
            <div className="typography">
                <div className="name-section">
                    <h1>Hi there! 👋</h1>
                    <span style={{ fontSize: '60px' }}>I'm M Aqmal Pangestu</span>
                    <p>Creating magic with code and a bit of cafeine</p>
                </div>
                <div className="tagline">
                    <TypeAnimation
                        cursor={true}
                        sequence={[
                            'Web Developer 😎',
                            2000,
                            'Machine Learning Developer 🤖',
                            2000,
                            'A Cat Person 😺',
                            2000,
                        ]}
                        wrapper="h3"
                        repeat={Infinity}
                    />
                </div>
                <div className="icons">
                    <a href="https://www.linkedin.com/in/m-aqmal-pangestu-2217a7187/" className="icon i-linkedin" target="_blank" rel="noreferrer">
                        <LinkedInIcon />
                    </a>
                    <a href="https://www.github.com/maqmal" className="icon i-github" target="_blank" rel="noreferrer">
                        <GithubIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    .name-section{
        padding-bottom: 60px;
    }
    .tagline{
        padding-top: 80px;
        padding-bottom: 40px;;
        color: var(--highlight-color);
        font-size: 90px;
    }
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: left;
        width: 80%;
        span{
            color: var(--highlight-color)
        }
        .icons{
            display: flex;
            justify-content: center;
            margin-bottom: -4rem;
            margin-top: 2rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
`

export default HomePage