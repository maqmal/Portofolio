import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { MainLayout } from '../../styles/Layout';
import Tilt from 'react-parallax-tilt';
import LoadingIcon from "../Loading/LoadingIcon";
import Title from "../Title/Title";
import MainPic from "../../images/mainpic.png";
import MainPicBG from "../../images/mainpic-bg.jpg";

import UnfoldMoreRoundedIcon from '@material-ui/icons/UnfoldMoreRounded';
import ImportantDevicesOutlinedIcon from '@material-ui/icons/ImportantDevicesOutlined';
import MemoryIcon from '@material-ui/icons/Memory';
import AccountTreeRoundedIcon from '@material-ui/icons/AccountTreeRounded';
import StorageRoundedIcon from '@material-ui/icons/StorageRounded';

import {
    DiReact,
    DiNodejsSmall,
    DiPython,
    DiMongodb,
    DiPostgresql
} from "react-icons/di";
import {
    SiTensorflow,
    SiScikitlearn,
    SiRedux,
    SiStyledcomponents,
    SiFirebase,
    SiDocker,
    SiExpress
} from "react-icons/si";

const AboutPage = () => {
    const [loading, setLoading] = useState(true);
    const [cardElmt, setCardElmt] = useState('')

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const imageLoaded = async () => {
        setLoading(false);
    }

    const prevCountRef = useRef();
    useEffect(() => {
        prevCountRef.current = cardElmt;
    }, [cardElmt]);
    const closeTechStack = (box) => {
        if (prevCountRef.current.style.transform !== 'none' && prevCountRef.current !== box) {
            prevCountRef.current.style.transform = "none";
            const item = prevCountRef.current.childNodes[0].childNodes[0].childNodes[5].childNodes[0]
            item.innerHTML = '<path d="M12 5.83l2.46 2.46c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 3.7a.9959.9959 0 00-1.41 0L8.12 6.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 5.83zm0 12.34l-2.46-2.46a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.17c.39-.39.39-1.02 0-1.41a.9959.9959 0 00-1.41 0L12 18.17z"></path>'
        }
    }

    const showTechStack = (idName) => {
        const box = document.getElementById(idName);
        const item = box.childNodes[0].childNodes[0].childNodes[5].childNodes[0]
        if (box.style.transform === 'none') {
            box.style.transform = "translateY(-20%)";
            item.innerHTML = '<path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path>'
        } else {
            box.style.transform = "none";
            item.innerHTML = '<path d="M12 5.83l2.46 2.46c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 3.7a.9959.9959 0 00-1.41 0L8.12 6.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 5.83zm0 12.34l-2.46-2.46a.9959.9959 0 00-1.41 0c-.39.39-.39 1.02 0 1.41l3.17 3.18c.39.39 1.02.39 1.41 0l3.17-3.17c.39-.39.39-1.02 0-1.41a.9959.9959 0 00-1.41 0L12 18.17z"></path>'
        }
        setCardElmt(box)
        closeTechStack(box)
    }

    const toBottom = () => {
        const title = document.getElementById('title');
        title.scrollIntoView();
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
                            <img src={MainPicBG} alt="" className={"img-1 "} onLoad={imageLoaded} />
                            <Tilt style={{ height: '10rem' }} tiltMaxAngleY={7} tiltMaxAngleX={7}>
                                <img src={MainPic} alt="" className={"img-2 zoom "} onLoad={imageLoaded} />
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
                            I am <span>Aqmal</span>, an Informatics <span>fresh graduate</span> from <span>Telkom University</span>, based in Bandung, <span>Indonesia</span>.
                            I am experienced in using <span>Javascript and Python </span>
                            programming language to build cool app!
                            <br /><br />
                            During the pandemic, I like to use my free time to learn
                            <span> modern javascript framework </span>such as <span>Node.js, React.js, </span>
                            and apply my knowledge of Deep Learning using <span>Tensorflow</span>.
                            <br /><br />
                        </p>
                        <center>
                            <div className="arrow" onClick={toBottom}></div>
                        </center>
                    </div>
                </div>
            </AboutStyled1>

            <div style={{ marginTop: '10%' }} id='title'>
                <Title title={'Area of expertise'} span={'Expertise'} />
            </div>

            <AboutStyled2>
                <div className="container-about">
                    <Tilt tiltMaxAngleY={15} tiltMaxAngleX={15}>
                        <div className="card-about">
                            <div className="box" id="box-1" style={{ transform: 'none' }}>
                                <Tilt tiltReverse={true} tiltMaxAngleY={8} tiltMaxAngleX={8}>
                                    <div className="content">
                                        <h2><AccountTreeRoundedIcon style={{ fontSize: '100px' }} /></h2>
                                        <h3>Backend Development</h3><br />
                                        <p>"Testing leads to failure, and failure leads to understanding."</p>
                                        <p><i>- Burt Rutan</i></p>
                                        <a onClick={() => showTechStack('box-1')} style={{ cursor: 'pointer' }} className="btn-card">
                                            <UnfoldMoreRoundedIcon /></a>
                                    </div>

                                </Tilt>
                            </div>
                            <div className="tech-icon">
                                <Tilt style={{ marginTop: '40%' }}>
                                    <DiNodejsSmall style={{ fontSize: '35px' }} className="the-icon" />&nbsp;
                                    <SiExpress style={{ fontSize: '31px' }} className="the-icon" />&nbsp;
                                    <SiDocker style={{ fontSize: '35px' }} className="the-icon" />
                                </Tilt>
                            </div>
                        </div>
                    </Tilt>

                    <Tilt tiltMaxAngleY={15} tiltMaxAngleX={15}>
                        <div className="card-about">
                            <div className="box" id="box-2" style={{ transform: 'none' }}>
                                <Tilt tiltReverse={true} tiltMaxAngleY={8} tiltMaxAngleX={8}>
                                    <div className="content">
                                        <h2><ImportantDevicesOutlinedIcon style={{ fontSize: '100px' }} /></h2>
                                        <h3>Frontend Development</h3><br />
                                        <p>"The function of a good software is to make the complex appear to be simple." </p>
                                        <p><i>- Grady Booch</i></p>
                                        <a onClick={() => showTechStack('box-2')} style={{ cursor: 'pointer' }} className="btn-card"><UnfoldMoreRoundedIcon /></a>
                                    </div>
                                </Tilt>
                            </div>
                            <div className="tech-icon">
                                <Tilt style={{ marginTop: '40%' }}>
                                    <DiReact style={{ fontSize: '37px' }} className="the-icon" />
                                    <SiRedux style={{ fontSize: '28px' }} className="the-icon" />
                                    <SiStyledcomponents style={{ fontSize: '35px' }} className="the-icon" />
                                </Tilt>
                            </div>
                        </div>
                    </Tilt>

                    <Tilt tiltMaxAngleY={15} tiltMaxAngleX={15}>
                        <div className="card-about">
                            <div className="box" id="box-3" style={{ transform: 'none' }}>
                                <Tilt tiltReverse={true} tiltMaxAngleY={8} tiltMaxAngleX={8}>
                                    <div className="content">
                                        <h2><MemoryIcon style={{ fontSize: '100px' }} /></h2>
                                        <h3>Machine Learning</h3><br />
                                        <p>"Computers are able to see, hear and learn.  Welcome to the future." </p>
                                        <p><i>- Dave Waters</i></p>
                                        <a onClick={() => showTechStack('box-3')} style={{ cursor: 'pointer' }} className="btn-card">
                                            <UnfoldMoreRoundedIcon /></a>
                                    </div>
                                </Tilt>
                            </div>
                            <div className="tech-icon">
                                <Tilt style={{ marginTop: '20%' }}>
                                    <DiPython style={{ fontSize: '40px' }} className="the-icon" />&nbsp;
                                    <SiTensorflow style={{ fontSize: '32px' }} className="the-icon" />&nbsp;
                                    <SiScikitlearn style={{ fontSize: '45px' }} className="the-icon" />
                                </Tilt>
                            </div>
                        </div>
                    </Tilt>

                    <Tilt tiltMaxAngleY={15} tiltMaxAngleX={15}>
                        <div className="card-about">
                            <div className="box" id="box-4" style={{ transform: 'none' }}>
                                <Tilt tiltReverse={true} tiltMaxAngleY={8} tiltMaxAngleX={8}>
                                    <div className="content">
                                        <h2><StorageRoundedIcon style={{ fontSize: '100px' }} /></h2>
                                        <h3>Database</h3><br />
                                        <p>"Database: the information you lose when your memory crashes."</p>
                                        <p><i>- Dave Barry</i></p>
                                        <a onClick={() => showTechStack('box-4')} style={{ cursor: 'pointer' }} className="btn-card">
                                            <UnfoldMoreRoundedIcon /></a>
                                    </div>
                                </Tilt>
                            </div>
                            <div className="tech-icon">
                                <Tilt style={{ marginTop: '50%' }}>
                                    <DiMongodb style={{ fontSize: '32px' }} className="the-icon" />
                                    <SiFirebase style={{ fontSize: '30px' }} className="the-icon" />
                                    <DiPostgresql style={{ fontSize: '32px' }} className="the-icon" />
                                </Tilt>
                            </div>
                        </div>
                    </Tilt>

                </div>
            </AboutStyled2>
        </MainLayout >
    )
}

const AboutStyled2 = styled.div`
box-sizing: border-box;
display: flex;
justify-content: center;
align-items: center;
flex-wrap: wrap;
margin-bottom: -50%;
.tech-icon{
    position: fixed;
    left: 50%;
    bottom: -2%;
    transform: translate(-50%, -50%);
    margin: 0 auto;
    z-index: -1;
    .the-icon{
        color: rgba(234, 195, 138, .7);
    }
}

.container-about {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 40px 0;
    margin-left: -10%;
}

.container-about .card-about {
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

.container-about .card-about:nth-child(1) .box .content a {
    background: rgba(234, 195, 138, .3);
}

.container-about .card-about .box {
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

.container-about .card-about .box:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.03);
}

.container-about .card-about .box .content {
    padding: 20px;
    text-align: center;
}

.container-about .card-about .box .content h2 {
    position: absolute;
    top: -10px;
    right: 30px;
    font-size: 8rem;
    color: rgba(255, 255, 255, 0.1);
}

.container-about .card-about .box .content h3 {
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

.container-about .card-about .box .content p {
    font-size: 1.7vh;
    font-weight: 300;
    color: #a4acc4;
    z-index: 1;
    transition: 0.5s;
    i{   
        font-size: 2vh;
    }
}

.container-about .card-about .box .content a {
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
.container-about .card-about .box .content a:hover {
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
    background: rgba(207,141,176,.4);
    color: white;
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
    margin-right: 10%;
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
        padding-right: 5rem;
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
    border-color: var(--white);
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