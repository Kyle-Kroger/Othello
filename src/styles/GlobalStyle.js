import { createGlobalStyle } from "styled-components";
import reset from "./reset";
import variables from "./variables.globals";

const GlobalStyle = createGlobalStyle`
  ${reset}
  ${variables}

  html {
    *,
    *:before,
    *:after {
      box-sizing: border-box;
    }
    
    font-family: Arial, Helvetica, sans-serif;
    background-color: #212121;
    color: white;
  }

  h1 {
    font-size: clamp(
      2rem,
      2vw + 1rem,
      3rem
    );
    font-weight: bold;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
  }

  :root {
    --shadow-color: 110deg 60% 15%;
    --shadow-elevation-high:
    0.2px 0.2px 0.3px hsl(var(--shadow-color) / 0.41),
    0.9px 0.9px 1.3px -0.5px hsl(var(--shadow-color) / 0.39),
    1.7px 1.7px 2.5px -0.9px hsl(var(--shadow-color) / 0.37),
    2.9px 3px 4.3px -1.4px hsl(var(--shadow-color) / 0.34),
    4.9px 5.1px 7.2px -1.8px hsl(var(--shadow-color) / 0.32),
    8px 8.3px 11.8px -2.3px hsl(var(--shadow-color) / 0.3),
    12.6px 13.1px 18.5px -2.7px hsl(var(--shadow-color) / 0.28),
    18.9px 19.6px 27.8px -3.2px hsl(var(--shadow-color) / 0.25);
  }
`;

export default GlobalStyle;
