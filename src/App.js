import styled from "styled-components";
import { GlobalStyle } from "./styles";
// import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Heading>Getting started</Heading>
    </>
  );
}

const Heading = styled.h1`
  color: purple;
`;

export default App;
