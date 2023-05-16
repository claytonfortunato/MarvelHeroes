import { createGlobalStyle } from "styled-components";

import background from "../assets/background.png";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background: #222;
        background-image: url(${background});
        
    }
`;
