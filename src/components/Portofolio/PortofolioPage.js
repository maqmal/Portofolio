import React from "react";
import styled from "styled-components";
import {MainLayout} from '../../styles/Layout';
import Title from "../Title/Title";
const PortofolioPage = () => {
    return (
        <MainLayout>
            <PortofolioPageStyled>
                <Title title={'Portofolio'}/>
                <div className="middle-construction">
                    <h1>Underconstruction</h1>
                </div>
            </PortofolioPageStyled>
        </MainLayout>
    )
}

const PortofolioPageStyled = styled.section`

`

export default PortofolioPage