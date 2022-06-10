import styled from "styled-components";
import { Gameboard } from "./components";
import { GlobalStyle } from "./styles";
// import "./App.css";

function App() {
  return (
    <>
      <GlobalStyle />
      <Heading>
        <h1>Play Othello</h1>
      </Heading>
      <Gameboard />
    </>
  );
}

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 15vh;
  background-color: #5a5368;
`;

export default App;
