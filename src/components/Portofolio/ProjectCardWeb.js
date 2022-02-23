import React from "react";
import styled from "styled-components";
import Project from './Project';
import NKHome from '../../images/neuralkernel.png';
import REHome from '../../images/recommerce.png';

const ProjectCardWeb = () => {
    return (
        <ProjectCardWebStyled>
            <Project title="NeuralandKernel" imgUrl={NKHome} />
            <Project title="Re-Commerce" imgUrl={REHome} />
        </ProjectCardWebStyled>
    )
}


const ProjectCardWebStyled = styled.div`
margin-left: -5%;
display: flex;
flex-wrap: wrap;
align-content: space-between;
`

export default ProjectCardWeb;