import styled from "styled-components";

const Gamesquare = (props) => {
  const { state, possibleMove, x, y } = props;
  return (
    <StyledSquare>
      <StyledPiece color={state} />
      {/* {state}|{x},{y} */}
    </StyledSquare>
  );
};

const StyledSquare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #358765;
  width: 100%;
  height: 100%;
  //border-radius: 2px;
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
