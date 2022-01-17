import React from "react";
import styled from "styled-components";
import GithubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import TypeAnimation from 'react-type-animation';


const HomePage = () => {
    return (
        <HomePageStyled>
            
            <div className="typography">
                <div className="name-section">
                    <p className="inline-div">Hi There!</p>
                    <div className="emoji">👋</div>
                    <h1 style={{ fontSize: '60px' }}>I'm M Aqmal Pangestu</h1>
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
                            'Freshgraduate 🤓',
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
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap');
    width: 100%;
    height: 100vh;
    position: relative;
    .name-section{
        color: white;
        padding-bottom: 60px;
        .inline-div {
            font-family: 'Poppins', sans-serif;
            display: inline-block;
            font-size: 70px;
            font-weight: 600;
        }
        .emoji {
            font-size: 70px;
            animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
            animation-duration: 2.1s; /* Change to speed up or slow down */
            animation-iteration-count: infinite; /* Never stop waving :) */
            transform-origin: 70% 70%; /* Pivot around the bottom-left palm */
            display: inline-block;
            }

            @keyframes wave-animation {
            0% {
                transform: rotate(0deg);
            }
            10% {
                transform: rotate(14deg);
            } /* The following five values can be played with to make the waving more or less extreme */
            20% {
                transform: rotate(-8deg);
            }
            30% {
                transform: rotate(14deg);
            }
            40% {
                transform: rotate(-4deg);
            }
            50% {
                transform: rotate(10deg);
            }
            60% {
                transform: rotate(0deg);
            } /* Reset for the last half to pause */
            100% {
                transform: rotate(0deg);
            }
        }
        h1{
            color: var(--highlight-color)
        }
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