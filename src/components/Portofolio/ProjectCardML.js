import React from "react";
import styled from "styled-components";
import Project from './Project';
import ML2 from '../../images/ml-piano2.jpg';
import ML3 from '../../images/ml-glaucoma1.png';
import ML4 from '../../images/ml-nlp1.png';
import ML5 from '../../images/ml-nlp2.png';
import ML6 from '../../images/ml-rec1.png';
import ML7 from '../../images/ml-rec2.png';
import ML8 from '../../images/ml-weth1.png';
import ML9 from '../../images/ml-weth2.png';

const ProjectCardML = () => {
    return (
        <ProjectCardMLStyled>
            <Project title="Piano Music Generator" imgUrl={[ML2]} githubUrl={"https://github.com/maqmal/Piano-Music-Generator"}/>
            <Project title="Glaucoma Disease Classification" imgUrl={[ML3]} githubUrl={"https://github.com/maqmal/Glaucoma"}/>
            <Project title="Text Classification" imgUrl={[ML4, ML5]} githubUrl={"https://github.com/maqmal/NLP"}/>
            <Project title="Movies Reccomender System" imgUrl={[ML6, ML7]} githubUrl={"https://github.com/maqmal/Recommendation-System"}/>
            <Project title="Weather Prediction" imgUrl={[ML8, ML9]} githubUrl={"https://github.com/maqmal/Advanced-ML"}/>
        </ProjectCardMLStyled>
    )
}


const ProjectCardMLStyled = styled.div`
display: flex;
flex-wrap: wrap;
align-content: space-between;
`

export default ProjectCardML;