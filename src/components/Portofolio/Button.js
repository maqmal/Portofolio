import React from "react";
import styled from "styled-components";

const Button = ({ children }) => {
  return (
    <ButtonStyled>
      <button class="fill">
        {children}
      </button>
    </ButtonStyled>
  )
}


const ButtonStyled = styled.div`
button{
    margin: 20px;
}
.fill {
  font-size: 18px;
  font-weight: 200;
  letter-spacing: 1px;
  padding: 8px 20px 8px;
  outline: 0;
  border: 1px solid var(--white-color);
  cursor: pointer;
  position: relative;
  background-color: rgba(0, 0, 0, 0);
}

.fill::after {
  content: "";
  background-color: var(--grad);
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

.fill:hover::after {
  top: 0px;
  left: 0px;
}

@media screen and (max-width:1200px){
  .fill {
    font-size: 19px;
    font-weight: 200;
    letter-spacing: 1px;
    padding: 2px 5px 2px;
    outline: 0;
    border: 1px solid var(--white-color);
    cursor: pointer;
    position: relative;
    background-color: rgba(0, 0, 0, 0);
  }
}
`

export default Button;