import React from "react";
import styled from "styled-components";
import Project from './Project';
import TF from '../../images/tensorflow.png';

const ProjectCardML = () => {
    return (
        <ProjectCardMLStyled>
            <Project title="Piano Music Generator" imgUrl={TF} />
            <Project title="Glaucoma Disease Classification" imgUrl={TF} />
            <Project title="Text Classification" imgUrl={TF} />
            <Project title="Movies Reccomender System" imgUrl={TF} />
            <Project title="Weather Prediction" imgUrl={TF} />
        </ProjectCardMLStyled>
    )
}


const ProjectCardMLStyled = styled.div`
margin-left: -5%;
display: flex;
flex-wrap: wrap;
align-content: space-between;
`

export default ProjectCardML;