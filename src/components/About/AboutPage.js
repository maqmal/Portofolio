import React, { useState } from "react";
import styled from "styled-components";
import { MainLayout } from '../../styles/Layout';
import Tilt from 'react-parallax-tilt';
import LoadingIcon from "../Loading/LoadingIcon";
import Title from "../Title/Title";
import Cat from "../../images/cat.png";
import CatBG from "../../images/cat-bg.jpg";

import UnfoldMoreRoundedIcon from '@material-ui/icons/UnfoldMoreRounded';
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';
import ImportantDevicesOutlinedIcon from '@material-ui/icons/ImportantDevicesOutlined';
import MemoryIcon from '@material-ui/icons/Memory';

import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiPython
} from "react-icons/di";
import { SiTensorflow } from "react-icons/si";

const AboutPage = () => {
    const [loading, setLoading] = useState(true);

    const imageLoaded = async () => {
        setLoading(false);
    }

    const showTechStack = (idName) => {
        const box = document.getElementById(idName);
        if (box.style.transform === 'none') {
            box.style.transform = "translateY(-20%)";
        } else {
            box.style.transform = "none";
        }

    }

    const toBottom = () => {
        window.scrollTo(0, document.body.scrollHeight);
    }

    return (
        <MainLayout>
            <Title title={'About Me'} span={'About Me'} />
            <AboutStyled1>
                <div className="left-content">
                    <div style={{ display: loading ? "block" : "none" }}>
                        <div className="icon-center">
                            <LoadingIcon />
                        </div>
                    </div>
                    <div style={{ display: loading ? "none" : "block" }}>
                        <Tilt tiltMaxAngleY={5} tiltMaxAngleX={5} tiltReverse={true} >
                            <img src={CatBG} alt="" className={"img-1 "} onLoad={imageLoaded} />
                            <Tilt style={{ height: '10rem' }} tiltMaxAngleY={7} tiltMaxAngleX={7}>
                                <img src={Cat} alt="" className={"img-2 zoom "} onLoad={imageLoaded} />
                            </Tilt>
                        </Tilt>
                    </div>
                </div>

                <div className="right-content">
                    <br />
                    <strong>
                        <h1>LET ME <span> INTRODUCE </span> MYSELF</h1>
                    </strong>
                    <div className="paragraph">
                        <p>
                            Meow meow! I love cats! 😾 Anyway... <br /><br />
                            I am <span>Aqmal</span>, an Informatics <span>fresh graduate</span> from <span>Telkom University</span>, which is located in <span>Bandung, Indonesia</span>.
                            I am experienced in using <span>Python and Javascript </span>
                            programming language to build cool app!
                            <br /><br />
                            During the pandemic, I like to use my free time to learn 
                            <span> modern javascript framework </span>such as <span>Node.js, React.js,</span>
                             and apply my knowledge of Deep Learning using <span>Tensorflow</span>.
                            <br /><br />
                        </p>
                        <center>
                            <div className="arrow" onClick={toBottom}></div>
                        </center>
                    </div>
                </div>
            </AboutStyled1>

            <div style={{ marginTop: '10%' }}>
                <Title title={'Tech Stack'} span={'Tech Stack'} />
            </div>

            <AboutStyled2>
                <div className="container">
                    <div className="card">
                        <div className="box" id="box-1" style={{ transform: 'none' }}>
                            <div className="content">
                                <h2><StorageOutlinedIcon style={{ fontSize: '100px' }} /></h2>
                                <h3>Backend Developer</h3><br />
                                <p>"Testing leads to failure, and failure leads to understanding"</p>
                                <p><i>- Burt Rutan</i></p>
                                <a onClick={() => showTechStack('box-1')} style={{ cursor: 'pointer' }}><UnfoldMoreRoundedIcon /></a>
                            </div>
                        </div>
                        <div className="tech-icon">
                            <Tilt>
                                <DiJavascript1 style={{ fontSize: '30px' }} />
                                <DiNodejs style={{ fontSize: '60px' }} />
                            </Tilt>
                        </div>
                    </div>

                    <div className="card">
                        <div className="box" id="box-2" style={{ transform: 'none' }}>
                            <div className="content">
                                <h2><ImportantDevicesOutlinedIcon style={{ fontSize: '100px' }} /></h2>
                                <h3>Frontend Developer</h3><br />
                                <p>"The function of a good software is to make the complex appear to be simple." </p>
                                <p><i>- Grady Booch</i></p>
                                <a onClick={() => showTechStack('box-2')} style={{ cursor: 'pointer' }}><UnfoldMoreRoundedIcon /></a>
                            </div>
                        </div>
                        <div className="tech-icon">
                            <Tilt>
                                <DiJavascript1 style={{ fontSize: '30px' }} />
                                <DiReact style={{ fontSize: '60px' }} />
                            </Tilt>
                        </div>
                    </div>

                    <div className="card">
                        <div className="box" id="box-3" style={{ transform: 'none' }}>
                            <div className="content">
                                <h2><MemoryIcon style={{ fontSize: '100px' }} /></h2>
                                <h3>Machine Learning Developer</h3><br />
                                <p>"Computers are able to see, hear and learn.  Welcome to the future." </p>
                                <p><i>-Dave Waters</i></p>
                                <a onClick={() => showTechStack('box-3')} style={{ cursor: 'pointer' }}><UnfoldMoreRoundedIcon /></a>
                            </div>
                        </div>
                        <div className="tech-icon">
                            <Tilt>
                                <DiPython style={{ fontSize: '60px' }} />
                                <SiTensorflow style={{ fontSize: '30px' }} />
                            </Tilt>
                        </div>
                    </div>

                </div>
            </AboutStyled2>
        </MainLayout>
    )
}

const AboutStyled2 = styled.div`
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin-top: 3%;
margin-bottom: -15%;

.tech-icon{
    position: fixed;
    left: 35%;
    bottom: 0%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    z-index: -1;
    padding-left: 100px;
}

.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 40px 0;
}

.container .card {
    position: relative;
    min-width: 320px;
    height: 440px;

    background: rgba( 35, 36, 39, 0.85 );
    box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(11, 11, 11, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(22, 22, 22, 0.1);
    backdrop-filter: blur( 16.5px );
    -webkit-backdrop-filter: blur( 16.5px );
    border-radius: 10px;

    border-radius: 15px;
    margin: 30px;
    transition: 0.5s;
}

.container .card:nth-child(1) .box .content a {
    background: rgba(234, 195, 138, .3);
}

.container .card:nth-child(2) .box .content a {
    background: rgba(179, 84, 217, .3);
}

.container .card:nth-child(3) .box .content a {
    background: var(--background-light-color-2);
}

.container .card .box {
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    background: #2a2b2f;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    transition: 0.5s;
} 

.container .card .box:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.03);
}

.container .card .box .content {
    padding: 20px;
    text-align: center;
}

.container .card .box .content h2 {
    position: absolute;
    top: -10px;
    right: 30px;
    font-size: 8rem;
    color: rgba(255, 255, 255, 0.1);
}

.container .card .box .content h3 {
    font-size: 1.8rem;
    font-weight: 900;
    z-index: 1;
    transition: 0.5s;
    margin-bottom: 15px;
    font-weight: 900;
    background: var(--grad); /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, var(--grad), #b354d9); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, var(--grad), #b354d9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.container .card .box .content p {
    font-size: 2vh;
    font-weight: 300;
    color: #a4acc4;
    z-index: 1;
    transition: 0.5s;
}

.container .card .box .content a {
    position: relative;
    display: inline-block;
    padding: 8px 20px;
    background: black;
    border-radius: 5px;
    text-decoration: none;
    color: white;
    margin-top: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
}
.container .card .box .content a:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
    background: #fff;
    color: #000;
}
`

const AboutStyled1 = styled.div`
display: flex;
margin-top: 4rem;
@media screen and (max-width:1000px){
    flex-direction: column;
    .left-content{
        margin-bottom: 2rem;
    }
}
.icon-center{
    padding-left: 25%;
    padding-top: 25%;
}
.left-content{
    width: 60%;
    position: relative;
    top: 0;
    left: 0;
    margin-right: -4%;
    .img-1 {
        position: absolute;
    }
    .img-2 {
        position: absolute;
    }
    img{
        border-radius: 2%;
        width: 80%;
        object-fit: cover;
        transition: filter 0.4s ease-in-out;
        filter: grayscale(100%);
        
    }
}

.img-2:hover {
    filter: none;
}

.zoom {
  transition: transform .2s; 
}

.zoom:hover {
  transform: scale(1.15); 
}

.right-content{
    width: 100%;
    text-align: left;
    h1{
        font-size: 4vh;
        color: var(--font-light-color);
        font-weight: 900;
        padding-right: 3rem;
        span{
            font-size: 4vh;
            font-weight: 900;
            background: var(--grad); /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, var(--grad), #b354d9); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, var(--grad), #b354d9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
    }
    .paragraph{
        color: var(--font-light-color);
        padding: 1rem 0;
        padding-right: 3rem;
        span{
            font-style: italic;
            background: var(--grad); /* fallback for old browsers */
            background: -webkit-linear-gradient(to right, var(--grad), #b354d9); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, var(--grad), #b354d9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
        }
        p{    
            font-size: 2.4vh;
        }
    }
}

.arrow {
  box-sizing: border-box;
  height: 2vw;
  width: 2vw;
  border-style: solid;
  border-color: white;
  border-width: 0px 2px 2px 0px;
  transform: rotate(45deg);
  transition: border-width 150ms ease-in-out;
}

.arrow:hover {
  border-bottom-width: 4px;
  border-right-width: 4px;
  cursor: pointer;
}
`

export default AboutPage