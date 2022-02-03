import React from 'react'
import styled from 'styled-components'

function SmallTitle({icon, title}) {
    return (
        <SmallTitleStyled >
            <p>{icon}</p>
            <h3>{title}</h3>
        </SmallTitleStyled >
    )
}

const SmallTitleStyled = styled.div`
    display: flex;
    align-items: center;
    p{
        padding-right: 1rem;
        svg{
            font-size: 6vh;
        }
    }
    h3{
        color: var(--white-color);
        font-size: 4vh;
    }
`;

export default SmallTitle