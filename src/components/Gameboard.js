import { useState } from "react";
import styled from "styled-components";
import Gamesquare from "./Gamesquare";

const INITIAL_BOARD = [
  [
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
  ],
  [
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
  ],
  [
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
  ],
  [
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "w", possibleMove: false },
    { state: "b", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
  ],
  [
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "b", possibleMove: false },
    { state: "w", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
  ],
  [
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
  ],
  [
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
  ],
  [
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
    { state: "e", possibleMove: false },
  ],
];

const Gameboard = () => {
  const [gameState, setGameState] = useState(INITIAL_BOARD);
  return (
    <Container>
      <StyledBoard columns={gameState.length}>
        {gameState.map((row) =>
          row.map((col) => <Gamesquare state={col.state} />)
        )}
      </StyledBoard>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
  width: 100%;
`;

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(${(p) => p.columns || 1}, 1fr);
  width: 720px;
  height: 720px;
  background-color: aliceblue;
  gap: 2px;
  padding: 2px;
`;

export default Gameboard;
