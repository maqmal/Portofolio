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
                    <h1>I'm Muhammad Aqmal Pangestu</h1>
                    <p className="quote">Creating magic with code and a bit of cafeine</p>
                    <div className="icons" id="icons-mobile">
                        <a href="https://www.linkedin.com/in/m-aqmal-pangestu-2217a7187/" className="icon i-linkedin" target="_blank" rel="noreferrer">
                            <LinkedInIcon />
                        </a>
                        <a href="https://www.github.com/maqmal" className="icon i-github" target="_blank" rel="noreferrer">
                            <GithubIcon />
                        </a>
                    </div>
                </div>
                <div className="tagline">
                    <TypeAnimation
                        className='normal-mode'
                        cursor={true}
                        sequence={[
                            'Web Developer 😎',
                            2000,
                            'Machine Learning Developer 🤖',
                            2000,
                            'Freshgraduate 🤓',
                            2000,
                        ]}
                        wrapper="p"
                        repeat={Infinity}
                    />
                    <TypeAnimation
                        className='mobile-mode'
                        cursor={true}
                        sequence={[
                            'Web Developer 😎',
                            2000,
                            'ML Developer 🤖',
                            2000,
                            'Freshgraduate 🤓',
                            2000,
                        ]}
                        wrapper="p"
                    />
                </div>

                <div className="icons" id="icons-normal">
                    <a href="https://www.linkedin.com/in/m-aqmal-pangestu-2217a7187/" className="icon i-linkedin" target="_blank" rel="noreferrer">
                        <LinkedInIcon/>
                    </a>
                    <a href="https://www.github.com/maqmal" className="icon i-github" target="_blank" rel="noreferrer">
                        <GithubIcon/>
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
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: left;
        width: 80%;
        .name-section{
            color: white;
            padding-bottom: 100px;
            .inline-div {
                font-family: 'Roboto Mono', monospace;
                display: inline-block;
                font-size: 8vh;
                font-weight: 900;
                background: #edca85; /* fallback for old browsers */
                background: -webkit-linear-gradient(to right, #edca85, #b354d9); /* Chrome 10-25, Safari 5.1-6 */
                background: linear-gradient(to right, #edca85, #b354d9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;
            }
            .emoji{
                font-size: 6vh;
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
                background: #edca85; /* fallback for old browsers */
                background: -webkit-linear-gradient(to right, #edca85, #b354d9); /* Chrome 10-25, Safari 5.1-6 */
                background: linear-gradient(to right, #edca85, #b354d9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
                -webkit-background-clip: text;
                background-clip: text;
                color: transparent;

                font-size: 6vmin;
            }
            p{
                font-size: 2vh;
                color: var(--scrollbar-thump-color);
            }
        }
        .tagline{
            padding-top: 80px;
            padding-bottom: 20px;;
            color: var(--font-light-color);
            p{
                font-size: 3vh;
                word-spacing: 2px;
            }
        }
        .icons{
            display: flex;
            justify-content: center;
            margin-bottom: -4rem;
            margin-top: 2rem;
            .icon{
                font-size: 1500px;
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--highlight-text);
                    color: var(--highlight-text);
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
    #icons-mobile{ display:none; }
    .mobile-mode{ display:none; }
    @media screen and (max-width:1200px){
        
        #icons-mobile{ 
            display:flex; 
        }
        #icons-normal{ 
            display:none; 
        }
        .quote{ display: none; }
        .emoji{ display: none; }
        .normal-mode{ display:none; }
        .mobile-mode{ display:flex;}
        .tagline{
            p{
                font-size: 0.2vh;
                word-spacing: 1px;
            }
        }
    }
    @media screen and (max-height:380px){
        #icons-mobile{ 
            transform: scale(.8);
        }
        .name-section{
            padding-top: 70px;
        }
        .tagline{
            p{
                margin-top: -60px;
                font-size: 0.2vh;
                word-spacing: 1px;
            }
        }
    }
`

export default HomePage