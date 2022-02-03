import React from 'react'
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

function Skills() {
    return (
        <SkillsStyled>
            <div className="skills">
                <ProgressBar
                    title={'HTML & CSS'}
                    width={'90%'}
                />
                <ProgressBar
                    title={'Javascript'}
                    width={'80%'}
                />
                <ProgressBar
                    title={'MERN Stack'}
                    width={'72%'}
                />
                <ProgressBar
                    title={'Tensorflow '}
                    width={'77%'}
                />
                <ProgressBar
                    title={'Python'}
                    width={'80%'}
                />
                <ProgressBar
                    title={'Data Science'}
                    width={'68%'}
                />
            </div>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;