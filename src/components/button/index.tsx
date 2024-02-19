import { FC } from "react";
import styled from "styled-components";

interface ButtonInterface {
    text?: string;
    onClick?: () => void;
}

const StyledButton = styled.button`
  font-size: 16px;
  text-transform: uppercase;
  border: none;
  padding: 12px 24px;
  
`

export const Button:FC<ButtonInterface> = ({text, onClick}) => {
  return <StyledButton onClick={onClick}> {text}</StyledButton>;
};
