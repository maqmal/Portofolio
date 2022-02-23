import React from "react";
import styled from "styled-components";
import Project from './Project';

import NK from '../../images/neuralkernel-home.png'
import recommerce1 from '../../images/recommerce-home.png';
import recommerce2 from '../../images/recommerce-shop.png';
import recommerce3 from '../../images/recommerce-signin-google.png';
import recommerce4 from '../../images/recommerce-signinsignup.png';

const ProjectCardWeb = () => {
    return (
        <ProjectCardWebStyled>
            <Project title="NeuralandKernel" imgUrl={[NK]} githubUrl={"https://github.com/maqmal/Neuralandkernel"}/>
            <Project title="Re-Commerce" imgUrl={[recommerce1,recommerce2,recommerce3,recommerce4]} githubUrl={"https://github.com/maqmal/Re-Commerce"}/>
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