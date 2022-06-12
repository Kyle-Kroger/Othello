import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Gamesquare from "./Gamesquare";
import { validMoves } from "../lib/gameLogic";
import INITIAL_BOARD from "../lib/initialState";

const Gameboard = () => {
  const [gameState, setGameState] = useState(INITIAL_BOARD);
  const [player, setPlayer] = useState("b");
  //create a game log that explains what happened on each turn

  const memoValidMoves = useCallback((gameboard, color) => {
    return validMoves(gameboard, color);
  }, []);

  useEffect(() => {
    setGameState((prevState) => memoValidMoves(prevState, player));
  }, [memoValidMoves, player]);

  const placePiece = (x, y, color) => {
    setGameState((prevState) => {
      let newState = [...prevState];
      newState[x][y] = { ...newState[x][y], state: color };
      return newState;
    });
    //Check if player as any moves before setting new player
    setPlayer((prevState) => {
      return prevState === "w" ? "b" : "w";
    });
  };

  //when a square is clicked on the gameboard flips sandwiched pieces
  const flipPieces = (color, arrPieces) => {
    setGameState((prevState) => {
      let newState = [...prevState];
      for (let piece of arrPieces) {
        newState[piece.x][piece.y] = {
          ...newState[piece.x][piece.y],
          state: color,
        };
      }
      return newState;
    });
  };

  return (
    <Container>
      <StyledBoard columns={gameState.length}>
        {gameState.map((row, rowI) =>
          row.map((col, colI) => (
            <Gamesquare
              state={col.state}
              possibleMove={col.possibleMove}
              toFlip={col.toFlip}
              x={rowI}
              y={colI}
              placePiece={placePiece}
              flipPieces={flipPieces}
              player={player}
              key={`${rowI},${colI}`}
            />
          ))
        )}
      </StyledBoard>
      <button
        onClick={() => {
          memoValidMoves(gameState, player);
        }}
      >
        Test
      </button>
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
  background-color: #111111;
  gap: 4px;
  padding: 12px;
  aspect-ratio: 1 / 1;
`;

export default Gameboard;
