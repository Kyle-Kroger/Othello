import styled from "styled-components";

const Gamesquare = (props) => {
  const { state, possibleMove, x, y, placePiece, player, toFlip, flipPieces } =
    props;

  const handleClick = () => {
    placePiece(x, y, player);
    flipPieces(player, toFlip);
  };

  return (
    <StyledSquare onClick={handleClick} enabled={possibleMove}>
      <StyledPiece color={state} />
    </StyledSquare>
  );
};

const StyledSquare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(p) =>
    p.enabled ? "var(--color-highlight-700)" : "var(--color-primary)"};
  width: 100%;
  height: 100%;
  pointer-events: ${(p) => (p.enabled ? "auto" : "none")};
  cursor: pointer;
`;

const StyledPiece = styled.div`
  border-radius: 50%;
  height: 85%;
  width: 85%;
  background-color: ${(p) => (p.color === "w" ? "white" : "black")};
  opacity: ${(p) => (p.color === "e" ? 0 : 1)};
  box-shadow: var(--shadow-elevation-high);
`;

export default Gamesquare;
