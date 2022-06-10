import { createGlobalStyle } from "styled-components";
import reset from "./reset";

const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default GlobalStyle;
