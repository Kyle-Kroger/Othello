import styled from "styled-components";
import { useState, useEffect } from "react";
import { Gameboard } from "./components";
import INITIAL_BOARD from "./lib/initialState";
import { GlobalStyle } from "./styles";
import { countPieces } from "./lib/gameLogic";
import Scoreboard from "./components/Scoreboard";
// import "./App.css";

function App() {
  const [gameState, setGameState] = useState(INITIAL_BOARD);
  const [player, setPlayer] = useState("b");
  const [lastHadValidMove, setLastHadValidMove] = useState(true);
  const [blackCount, setBlackCount] = useState(0);
  const [whiteCount, setWhiteCount] = useState(0);

  useEffect(() => {
    const { bCount, wCount } = countPieces(gameState);
    setBlackCount(bCount);
    setWhiteCount(wCount);
  }, [gameState]);

  return (
    <>
      <GlobalStyle />
      <Heading>
        <h1>Play Othello</h1>
      </Heading>
      <Scoreboard
        blackCount={blackCount}
        whiteCount={whiteCount}
        currPlayer={player}
      />
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
