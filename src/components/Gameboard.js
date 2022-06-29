import { useState, useEffect, useCallback } from "react";
import styled from "styled-components";
import Gamesquare from "./Gamesquare";
import { validMoves, hasValidMove } from "../lib/gameLogic";

const Gameboard = (props) => {
  const {
    gameState,
    setGameState,
    player,
    setPlayer,
    lastHadValidMove,
    setLastHadValidMove,
  } = props;

  // const [gameState, setGameState] = useState(INITIAL_BOARD);
  // const [player, setPlayer] = useState("b");
  // const [lastHadValidMove, setLastHadValidMove] = useState(true);

  //create a game log that explains what happened on each turn

  //Within a callback so that it can be used within the useEffect safely
  const memoValidMoves = useCallback((gameboard, color) => {
    return validMoves(gameboard, color);
  }, []);

  const memoHasValidMove = useCallback((gameboard) => {
    return hasValidMove(gameboard);
  }, []);

  //State relies on prevState so need to use the functional form of setState
  useEffect(() => {
    setGameState((prevState) => memoValidMoves(prevState, player));
  }, [memoValidMoves, player, setGameState]);

  //checks if the current player has a turn
  useEffect(() => {
    //check if the current player has valid moves if the last player had a valid move
    if (lastHadValidMove) {
      setLastHadValidMove(memoHasValidMove(gameState));
    } else {
      if (!memoHasValidMove(gameState)) {
        //both players have no moves
        console.log("game has ended");
      } else {
        //other player has a move, give them the turn
        setPlayer((prevState) => {
          return prevState === "w" ? "b" : "w";
        });
        setLastHadValidMove(true);
      }
    }
  }, [
    gameState,
    lastHadValidMove,
    memoHasValidMove,
    setPlayer,
    setLastHadValidMove,
  ]);

  const placePiece = (x, y, color) => {
    setGameState((prevState) => {
      let newState = [...prevState];
      newState[x][y] = { ...newState[x][y], state: color };
      return newState;
    });
    //Still need to check if player has any moves before setting new player
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
  padding: 8px;
  aspect-ratio: 1 / 1;
`;

export default Gameboard;
