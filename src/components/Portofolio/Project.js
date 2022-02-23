import React from "react";
import styled from "styled-components";

const Project = ({ imgUrl, title }) => {
    return (
        <ProjectStyled>
            <div className="container-about">
                <div className="card-about">    
                    <div className="box" id="box-3" 
                    style={{ transform: 'none'}}> 
                        <div className="content">
                           <p>{title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </ProjectStyled>
    )
}


const ProjectStyled = styled.div`
.tech-icon{
    position: fixed;
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
    margin-top: 70%;
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

export default Project;