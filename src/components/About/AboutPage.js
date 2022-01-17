import React from "react";
import styled from "styled-components";
import {MainLayout} from '../../styles/Layout';
import Title from "../Title/Title";

const AboutPage = () => {
    return (
        <MainLayout>
            <AboutStyled>
                <Title title={'About Me'}/>
            </AboutStyled>
        </MainLayout>
    )
}

const AboutStyled = styled.section`

`

export default AboutPage