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
    getCords,
  } = props;

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

  const genRankLabels = (length) => {
    return [...Array(length)].map((x, i) => {
      return <RankLabel key={i + 1}>{i + 1}</RankLabel>;
    });
  };

  const genFileLabels = (length) => {
    return [...Array(length)].map((x, i) => {
      return (
        <FileLabel key={String.fromCharCode(97 + i)}>
          {String.fromCharCode(65 + i)}
        </FileLabel>
      );
    });
  };

  return (
    <Container>
      <FileLabels>{genFileLabels(gameState.length)}</FileLabels>
      <FlexWrapper>
        <RankLabels>{genRankLabels(gameState.length)}</RankLabels>
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
                getCords={getCords}
                key={`${rowI},${colI}`}
              />
            ))
          )}
        </StyledBoard>
      </FlexWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
  width: 70%;
  max-width: 660px;
  max-height: 660px;
  font-size: var(--spacing-lg);
  text-align: center;
`;

const FlexWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const RankLabels = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 720px;
  padding: 6px 0;
`;

const RankLabel = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: var(--spacing-xs);
`;

const FileLabels = styled.div`
  display: flex;
  max-width: 720px;
  width: 100%;
  padding: 4px;
  padding-left: 24px;
`;

const FileLabel = styled.div`
  width: 100%;
`;

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(${(p) => p.columns || 1}, 1fr);
  width: 100%;
  background-color: #111111;
  gap: 2px;
  padding: 4px;
  aspect-ratio: 1 / 1;
`;

export default Gameboard;
