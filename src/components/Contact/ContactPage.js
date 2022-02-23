import React from "react";
import styled from "styled-components";
import { MainLayout } from '../../styles/Layout';
import Title from "../Title/Title";

const Contact = () => {
    return (
        <MainLayout>
            <ContactStyled>
                <Title title={'Contact'} span={'contact'} />
                
            </ContactStyled>
        </MainLayout>
    )
}

const ContactStyled = styled.section`

`

export default Contact