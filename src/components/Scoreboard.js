import styled from "styled-components";

const Scoreboard = (props) => {
  const { whiteCount, blackCount, currPlayer } = props;
  return (
    <Container>
      <div>
        Black: {blackCount} | White: {whiteCount} |{" "}
        {currPlayer === "b" ? "Black" : "White"}'s turn
      </div>
    </Container>
  );
};

const Container = styled.div`
  margin: var(--spacing-md) auto;
  margin-top: var(--spacing-lg);
  padding: var(--spacing-lg);
  background-color: var(--color-highlight-900);
  max-width: 800px;
  width: 100%;
  font-size: var(--fz-lg);
  text-align: center;
  border-radius: var(--radius-small);
`;

export default Scoreboard;
