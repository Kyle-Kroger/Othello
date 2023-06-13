import styled from "styled-components";
import { useState, useEffect } from "react";
import { Gameboard } from "./components";
import INITIAL_BOARD from "./lib/initialState";
import { GlobalStyle } from "./styles";
import { countPieces } from "./lib/gameLogic";
import Scoreboard from "./components/Scoreboard";
import GameLog from "./components/GameLog";
// import "./App.css";

function App() {
  const [gameState, setGameState] = useState(INITIAL_BOARD);
  const [player, setPlayer] = useState("b");
  const [lastHadValidMove, setLastHadValidMove] = useState(true);
  const [blackCount, setBlackCount] = useState(0);
  const [whiteCount, setWhiteCount] = useState(0);
  const [lastClicked, setLastClicked] = useState({});

  useEffect(() => {
    const { bCount, wCount } = countPieces(gameState);
    setBlackCount(bCount);
    setWhiteCount(wCount);
  }, [gameState]);

  const getCords = (x, y) => {
    setLastClicked({ x: x + 1, y: String.fromCharCode(65 + y) });
  };

  return (
    <>
      <GlobalStyle />
      <Heading>
        <h1>Othello</h1>
        <StyledButton href="/">New Game</StyledButton>
      </Heading>
      <StyledMain>
        <Scoreboard
          blackCount={blackCount}
          whiteCount={whiteCount}
          currPlayer={player}
        />
        <FlexWrapper>
          <Gameboard
            gameState={gameState}
            setGameState={setGameState}
            player={player}
            setPlayer={setPlayer}
            lastHadValidMove={lastHadValidMove}
            setLastHadValidMove={setLastHadValidMove}
            getCords={getCords}
          />
          <GameLog x={lastClicked.x} y={lastClicked.y} currPlayer={player} />
        </FlexWrapper>
      </StyledMain>
    </>
  );
}

const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: var(--spacing-sm) 5vw;
  background-color: var(--color-highlight-900);
`;

const FlexWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px 72px;
`;

const StyledMain = styled.main`
  margin: var(--spacing-xs);
`;

const StyledButton = styled.a`
  display: inline-block;
  border: 2px solid var(--color-highlight-300);
  border-radius: var(--radius-small);
  padding: clamp(0.5rem, 0.5rem + 1vw, 1rem);
  color: white;
  text-decoration: none;
  transition: background-color 300ms;

  &:hover {
    background-color: var(--color-highlight-400);
  }
`;

export default App;
