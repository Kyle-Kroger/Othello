export const validMoves = (gameboard, color) => {
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
          let toFlip = validateMove(
            gameboard,
            color,
            rowI,
            colI,
            surroundingOppositePieces
          );
          if (toFlip.length > 0) {
            return { ...col, possibleMove: true, toFlip };
          }
        }
      }

      return { ...col, possibleMove: false, toFlip: undefined };
    });
  });
  return newGameboard;
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
