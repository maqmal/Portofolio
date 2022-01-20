import React from "react";
import styled from "styled-components";
import { MainLayout } from '../../styles/Layout';
import Title from "../Title/Title";

const AboutPage = () => {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'} />
                <div className="middle-construction">
                    <h1>Underconstruction</h1>
                </div>
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`

`

export default AboutPage