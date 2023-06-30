import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: #FF577F;
    --color-primary-focus: #FF427F;
    --color-primary-negative:#59323F;
    --grey-4: #121214; 
    --grey-3: #212529;
    --grey-2: #343b41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;
    --success: #3FEB64;
    --negative: #EB3F5B;

    font-size: 62.5%;
  }

  html {
    width: 100vw;
    min-height: 100vh;
    height: max-content;
  }
  
  body {
    -webkit-font-smoothing: antialiased;
  
    overflow-x: hidden;
  
    margin: 0 auto;

    background-color: var(--grey-4);
    width: 90%;
    margin: auto;
  }

  button {
    cursor: pointer;
  }

  button, input {
    font-family: 'Inter', sans-serif;
  }
`;
