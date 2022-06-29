import styled from "styled-components";
import { useState } from "react";
import { Gameboard } from "./components";
import INITIAL_BOARD from "./lib/initialState";
import { GlobalStyle } from "./styles";
import { countPieces } from "./lib/gameLogic";
// import "./App.css";

function App() {
  const [gameState, setGameState] = useState(INITIAL_BOARD);
  const [player, setPlayer] = useState("b");
  const [lastHadValidMove, setLastHadValidMove] = useState(true);

  return (
    <>
      <GlobalStyle />
      <Heading>
        <h1>Play Othello</h1>
      </Heading>
      <Gameboard
        gameState={gameState}
        setGameState={setGameState}
        player={player}
        setPlayer={setPlayer}
        lastHadValidMove={lastHadValidMove}
        setLastHadValidMove={setLastHadValidMove}
      />
    </>
  );
}

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 12vh;
  background-color: var(--color-highlight-800);
`;

const StyledMain = styled.main``;

export default App;
