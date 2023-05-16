import React from 'react'
import styled from 'styled-components';

function ProgressBar({ title, width }) {
    return (
        <ProgressBarStyled>
            <h6>{title}</h6> <span style={{fontSize:'2vh', color: 'var(--white-color)'}}>{width}</span>
            <div className="progress-bar">
                <div className="progress">
                    <span style={{ width: width }}></span>
                </div>
            </div>
        </ProgressBarStyled>
    )
}

const ProgressBarStyled = styled.div`
h6{
    font-size: 2vh;
}
.progress-bar{
    display: flex;
    align-items: center;
    background-color: var(--background-dark-color);
    p{
        padding-right: 1.1rem;
    }
    .progress{
        position: relative;
        width: 100%;
        height: .2rem;
        background-color: var(--border-color);
        margin-left: -25%;
        span{
            position: absolute;
            left: 0;
            bottom: 0;
            height: 100%;

            background: -webkit-linear-gradient(to left, var(--grad), #b354d9); 
            background: linear-gradient(to left, var(--grad), #b354d9); 
            }
        }
    }
`;

export default ProgressBar;