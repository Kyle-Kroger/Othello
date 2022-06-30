import styled from "styled-components";

const GameLog = (props) => {
  const { x, y } = props;
  return (
    <Container>
      {x} and {y}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  min-width: 350px;
  width: 20%;
  min-height: 350px;
  background-color: var(--color-highlight-700);
  border: 4px solid var(--color-highlight-900);
  border-radius: var(--radius-small);
`;

export default GameLog;
