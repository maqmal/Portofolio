import React from "react";
import styled from "styled-components";
import { MainLayout } from '../../styles/Layout';
import Title from "../Title/Title";

const Contact = () => {
    return (
        <MainLayout>
            <ContactStyled>
                <Title title={'Contact'} />
                <div className="middle-construction">
                    <h1>Underconstruction</h1>
                </div>
            </ContactStyled>
        </MainLayout>
    )
}

const ContactStyled = styled.section`

`

export default Contact