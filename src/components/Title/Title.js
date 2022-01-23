import React from "react";
import styled from "styled-components";


const Title = ({ title, span }) => {
    return (
        <TitleStyled>
            <h2>{title} <b><span>{span}</span></b></h2>
        </TitleStyled>
    )
}

const TitleStyled = styled.div`
    position: relative;
    h2{
        background: #edca85; /* fallback for old browsers */
        background: -webkit-linear-gradient(140deg, #edca85, #b354d9); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(140deg, #edca85, #b354d9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        -webkit-background-clip: text;
        background-clip: text;
        color: transparent;


        font-size: 3.1rem;
        font-weight: 600;
        text-transform: uppercase;
        position: relative;
        padding-bottom: .7rem;
        @media screen and (max-width: 496px){
            padding-top:60px;
            padding-left:10px;
            font-size: 2.8rem;
        }
        @media screen and (max-width: 370px){
            padding-top:60px;
            padding-left:10px;
            font-size: 2rem;
        }
        &::before{
            content: "";
            position: absolute;
            bottom: 0;
            width: 7.4rem;
            height: .33rem;
            background-color: var(--font-dark-color);
            border-radius: 15px;
            left: 10px;
        }
        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            width: 3.5rem;
            height: .33rem;
            background-color: var(--highlight-color);
            border-radius: 15px;
            left: 0;
        }
        span{
            font-weight: 900;
            color: var(--background-dark-grey-span);
            font-size: 5rem;
            position: absolute;
            left: 10px;
            top: 30%;
            z-index: -1;
            @media screen and (max-width: 620px){
                padding-top:60px;
                padding-left:10px;
                font-size: 4rem;
            }
            @media screen and (max-width: 496px){
                padding-top:60px;
                padding-left:10px;
                font-size: 3rem;
            }
            @media screen and (max-width: 370px){
                padding-top:60px;
                padding-left:10px;
                font-size: 2rem;
            }
        }
    }
`;

export default Title