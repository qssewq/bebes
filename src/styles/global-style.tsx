import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0 20%;
        box-sizing: border-box;
        background-color: ${(props) => props.theme.primaryColor};
/*  */
        *{
        font-family: "Roboto", sans-serif;
        margin: 0;
        padding: 0;  
        }
    }

`;
