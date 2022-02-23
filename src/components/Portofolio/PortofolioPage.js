import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { MainLayout } from '../../styles/Layout';
import Title from "../Title/Title";
import Button from "./Button";
import ProjectCardWeb from "./ProjectCardWeb";
import ProjectCardML from "./ProjectCardML";

const PortofolioPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [webOpened, setWebOpened] = useState(true);
    const [MLOpened, setMLOpened] = useState(false);

    function toggleWeb() {
        setWebOpened(true);
        setMLOpened(false);
    }

    function toggleML() {
        setWebOpened(false);
        setMLOpened(true);
    }

    return (
        <MainLayout>
            <PortofolioPageStyled>
                <Title title={'Projects'} span={'Projects'} />
                <div className="button-section">
                    <div className='button'>
                        <div onClick={toggleWeb}>
                            <Button>
                                Web Application
                            </Button>
                        </div>
                        <div onClick={toggleML}>
                            <Button>
                                Machine Learning
                            </Button>
                        </div>
                    </div>
                </div>
                
                <div className="card-container">
                    {webOpened && <ProjectCardWeb />}
                    {MLOpened && <ProjectCardML />}
                </div>
                
            </PortofolioPageStyled>
        </MainLayout>
    )
}

const PortofolioPageStyled = styled.section`
display: flex;
flex-direction: column;
.button-section{
    margin-top: 5%;
    width: 40vw;
    display: flex;
    flex-direction: column;
}
.button{
    display: flex;
    justify-content: space-between;
}
.card-container{
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}
`

export default PortofolioPage