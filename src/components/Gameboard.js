import { useState } from "react";
import styled from "styled-components";
import Gamesquare from "./Gamesquare";

//move this to its own file
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
  //create a game log that explains what happened on each turn

  return (
    <Container>
      <StyledBoard columns={gameState.length}>
        {gameState.map((row, rowI) =>
          row.map((col, colI) => (
            <Gamesquare state={col.state} x={rowI} y={colI} />
          ))
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
  margin: 16px 0;
`;

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(${(p) => p.columns || 1}, 1fr);
  max-width: 720px;
  max-height: 720px;
  width: 100%;
  background-color: #363241;
  gap: 4px;
  padding: 12px;
  border-radius: 4px;
  aspect-ratio: 1 / 1;
`;

export default Gameboard;
