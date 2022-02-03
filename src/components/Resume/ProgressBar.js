import React from 'react'
import styled from 'styled-components';

function ProgressBar({ title, width }) {
    return (
        <ProgressBarStyled>
            <h6>{title}</h6>
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
    font-size: 2.5vh;
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

            background: -webkit-linear-gradient(to right, var(--grad), #b354d9); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(to right, var(--grad), #b354d9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            }
        }
    }
`;

export default ProgressBar;