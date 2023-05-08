import React from 'react'
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            <div className="skills">
                <p><i>This is the tech stack that I use or learn right now.</i></p><br/>
                <ProgressBar
                    title={'Typescript'}
                    width={'82%'}
                />
                <ProgressBar
                    title={'Javascript'}
                    width={'85%'}
                />
                <ProgressBar
                    title={'Machine Learning & Data Science'}
                    width={'80%'}
                />
                <ProgressBar
                    title={'Power Automate & Power Apps'}
                    width={'65%'}
                />
                <ProgressBar
                    title={'Python'}
                    width={'85%'}
                />
                <ProgressBar
                    title={'PostgreSQL'}
                    width={'70%'}
                />
            </div>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        margin-top: -3rem;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }

@media screen and (max-width:1200px){
    margin-left: 5%;
}
`;

export default Skills;