import React from 'react'
import styled from 'styled-components';

function ResumeItem({year, title, subTitle, text}) {
    return (
        <ResumeItemStyled>
            <div className="left-content">
            </div>
            <div className="right-content">
                <h5>{title}</h5>
                <h6>{subTitle} | {year}</h6>
                <div className='resume-text'>{text}</div>
            </div>
        </ResumeItemStyled>
    )
}

const ResumeItemStyled = styled.div`
    display: flex;
    @media screen and (max-width: 421px){
        p, h5, h6{
            font-size: 80%;
        }
    }
    &:not(:last-child){
        padding-bottom: 3rem;
    }
    .left-content{
        width: 2%;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: -8px;
            top: 5px;
            height: 15px;
            width: 15px;
            border-radius: 50%;
            border: 2px solid var(--border-color);
            background-color: var(--background-dark-color);
        }
    }
    .right-content{
        width: 70%;
        padding-left: 5rem;
        position: relative;
        &::before{
            content: "";
            position: absolute;
            left: 0;
            top: 12.5px;
            height: 2px;
            width: 3rem;
            background-color: var(--border-color);
        }
        .resume-text ol{
            margin-left: -18px;
        }
        .resume-text ol li{
            list-style-type: circle;
            padding-bottom: 5px;
            font-size: 2.5vh;
        }
        h5{
            background: var(--grad); /* fallback for old browsers */
            background: -webkit-linear-gradient(140deg, var(--grad), #ff7a7a); /* Chrome 10-25, Safari 5.1-6 */
            background: linear-gradient(140deg, var(--grad), #ff7a7a); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            font-size: 3vh;
            padding-bottom: .4rem;
        }
        h6{
            padding-bottom: .6rem;
            font-size: 2vh;
        }
    }

@media screen and (max-width:1200px){
    .left-content{
        margin-left: -15%
    }
   .right-content{
       width: 100%;
   }
}
`;
export default ResumeItem;