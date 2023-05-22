import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
        width: 100%;
        height: 100%;

        ::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: #f21628;
  border-radius: 10px;
}
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
