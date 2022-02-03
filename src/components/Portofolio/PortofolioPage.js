import React, { useEffect } from "react";
import styled from "styled-components";
import { MainLayout } from '../../styles/Layout';
import Title from "../Title/Title";
const PortofolioPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <MainLayout>
            <PortofolioPageStyled>
                <Title title={'Projects'} span={'Projects'} />
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