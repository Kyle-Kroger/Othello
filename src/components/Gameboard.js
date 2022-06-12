import { useState, useEffect, useCallback } from "react";
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
  const [player, setPlayer] = useState("b");
  //create a game log that explains what happened on each turn

  const validMoves = useCallback((gameboard, color) => {
    const newGameboard = [...gameboard].map((row, rowI) => {
      return row.map((col, colI) => {
        if (col.state === "e") {
          const surroundingOppositePieces = checkAdjacentSquares(
            gameboard,
            color,
            rowI,
            colI
          );
          if (surroundingOppositePieces.length > 0) {
            //console.log(rowI, colI, surroundingOppositePieces);
            let toFlip = validateMove(
              gameboard,
              color,
              rowI,
              colI,
              surroundingOppositePieces
            );
            if (toFlip.length > 0) {
              //console.log(rowI, colI, toFlip);
              //add valid into the gamestate
              return { ...col, possibleMove: true, toFlip };
            }
          }
        }

        return { ...col, possibleMove: false, toFlip: undefined };
      });
    });

    setGameState(newGameboard);
    console.log(newGameboard);
  }, []);

  useEffect(() => {
    validMoves(gameState, player);
  }, [validMoves, gameState, player]);

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

  const validateMove = (gameboard, color, x, y, oppAdjacentArr) => {
    const opposite = color === "w" ? "b" : "w";
    for (let oppAdjacent of oppAdjacentArr) {
      let { x: currX, y: currY } = oppAdjacent;
      const xDir = oppAdjacent.x - x;
      const yDir = oppAdjacent.y - y;
      let validated = [];
      let valid = false;

      while (
        currX >= 0 &&
        currX < gameboard.length &&
        currY >= 0 &&
        currY < gameboard.length
      ) {
        if (gameboard[currX][currY].state === opposite) {
          validated.push({ x: currX, y: currY });
        }
        if (gameboard[currX][currY].state === color) {
          valid = validated.length > 0;
          break;
        }

        currX += xDir;
        currY += yDir;
      }

      if (valid) {
        return validated;
      }

      return [];
    }
  };

  const checkAdjacentSquares = (gameboard, color, x, y) => {
    const opposite = color === "w" ? "b" : "w";
    const surrounding = [
      { x: x - 1, y: y - 1 },
      { x: x - 1, y },
      { x: x - 1, y: y + 1 },
      { x, y: y + 1 },
      { x: x + 1, y: y + 1 },
      { x: x + 1, y },
      { x: x + 1, y: y - 1 },
      { x, y: y - 1 },
    ];
    const oppositePieces = [];
    for (let square of surrounding) {
      if (
        square.x < 0 ||
        square.y < 0 ||
        square.x >= gameboard.length ||
        square.y >= gameboard[0].length
      ) {
        continue;
      }
      if (gameboard[square.x][square.y].state === opposite) {
        oppositePieces.push({ x: square.x, y: square.y });
      }
    }
    return oppositePieces;
  };

  const flipPieces = (gameboard, arrPieces) => {};

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
              player={player}
              key={`${rowI},${colI}`}
            />
          ))
        )}
      </StyledBoard>
      <button
        onClick={() => {
          validMoves(gameState, player);
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
