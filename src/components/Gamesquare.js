import styled from "styled-components";

const Gamesquare = (props) => {
  const { state, possibleMove } = props;
  return <StyledSquare>{state}</StyledSquare>;
};

const StyledSquare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0c4b0c;
  width: 100%;
  height: 100%;
`;

export default Gamesquare;
