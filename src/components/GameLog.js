import styled from "styled-components";

const GameLog = (props) => {
  return <Container>GameLog</Container>;
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 16px 0;
  min-width: 350px;
  width: 20%;
  min-height: 350px;
  background-color: var(--color-highlight-700);
  border: 4px solid var(--color-highlight-900);
  border-radius: var(--radius-small);
`;

export default GameLog;
