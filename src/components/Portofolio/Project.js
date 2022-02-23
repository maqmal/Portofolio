import React from "react";
import styled from "styled-components";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Project = ({ imgUrl, title, githubUrl }) => {
    return (
        <ProjectStyled>
            <div className="container-about">
                <div className="card-about">
                    <div className="box">
                        <div className="content">
                            <p><a href={githubUrl} style={{textDecoration: "none"}} target="_blank">{title}</a></p>
                            <div className="img-slide-show" style={{ maxWidth: "500px" }}>
                                <Carousel infiniteLoop={true} autoPlay={true} showStatus={false} showIndicators={false} showThumbs={false}>
                                    {imgUrl.map((imgSrc) => (
                                        <div>
                                            <img className="img-slide" src={imgSrc} 
                                            style={{ width: "210%" }} alt='' />
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ProjectStyled>
    )
}


const ProjectStyled = styled.div`
.container-about {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1200px;
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
    margin-top: 70%;
    text-align: center;
}

.img-slide-show {
    z-index: -10;
    border: 5px solid #555;
}

.container-about .card-about .box .content p {
    font-size: 2.7vh;
    font-weight: 900;
    color: #a4acc4;
    z-index: 10;
    transition: 0.5s;
    margin-top: -80%;
    vertical-align: top;
    i{   
        font-size: 2vh;
    }
}
`

export default Project;