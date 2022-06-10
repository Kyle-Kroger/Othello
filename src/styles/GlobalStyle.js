import { createGlobalStyle } from "styled-components";
import reset from "./reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-family: Arial, Helvetica, sans-serif;
    background-color: #1d1d1d;
    color: white;
  }

  h1 {
    font-size: 64px;
    font-weight: bold;
  }
`;

export default GlobalStyle;
