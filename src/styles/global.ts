import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
        width: 100%;
        height: 100%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    a {
        text-decoration: none;
        color: inherit;
        &:focus {
            color: inherit;
            
        }
    }

    body {
        background: #222;
        
    }
`;
