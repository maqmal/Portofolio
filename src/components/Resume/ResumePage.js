import React from "react";
import styled from "styled-components";
import { MainLayout } from '../../styles/Layout';
import Title from "../Title/Title";

const ResumePage = () => {
    return (
        <MainLayout>
            <ResumePageStyled>
                <Title title={'Resume'} />
                <div className="middle-construction">
                    <h1>Underconstruction</h1>
                </div>
            </ResumePageStyled>
        </MainLayout>
    )
}

const ResumePageStyled = styled.section`

`

export default ResumePage