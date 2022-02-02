import React from "react";
import styled from "styled-components";
import LoadingIcon from "./LoadingIcon";

const LoadingPage = () => {
    return (
        <LoadingStyled>
            <LoadingIcon/>
            <h6>Creating magic</h6>
        </LoadingStyled>
    )
}

const LoadingStyled = styled.div`
display: flex;
justify-content: center;
align-items: center;
text-align: center;
min-height: 100vh;
`

export default LoadingPage