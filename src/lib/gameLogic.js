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
  let validated = [];

  for (let oppAdjacent of oppAdjacentArr) {
    let { x: currX, y: currY } = oppAdjacent;
    const xDir = oppAdjacent.x - x;
    const yDir = oppAdjacent.y - y;
    let rowValidated = [];

    while (
      currX >= 0 &&
      currX < gameboard.length &&
      currY >= 0 &&
      currY < gameboard.length
    ) {
      //If the game piece is of the opposite color add it to row validated temporarly.
      if (gameboard[currX][currY].state === opposite) {
        rowValidated.push({ x: currX, y: currY });
      }
      //required so that something is not valid if there is an empty space in the sandwich
      if (gameboard[currX][currY].state === "e") {
        break;
      }
      //Only add the row if its greater than one
      if (gameboard[currX][currY].state === color) {
        if (rowValidated.length > 0) {
          validated = [...validated, ...rowValidated];
        }
        break;
      }

      currX += xDir;
      currY += yDir;
    }
  }
  if (validated.length > 0) {
    return validated;
  }
  return [];
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
    //Make sure we don't go outside the bounds of the gameboard array
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

export const hasValidMove = (gameboard) => {
  for (let row of gameboard) {
    for (let col of row) {
      if (col.possibleMove) {
        //if there is a possible move return true
        return true;
      }
    }
  }
  //if no possible move is found return false
  return false;
};

export const countPieces = (gameboard) => {
  let [bCount, wCount] = [0, 0];

  //loop through gameboard and count
  for (let row of gameboard) {
    for (let col of row) {
      if (col.state === "b") {
        bCount++;
      }
      if (col.state === "w") {
        wCount++;
      }
    }
  }

  return { bCount, wCount };
};
