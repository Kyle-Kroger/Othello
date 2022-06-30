import styled from "styled-components";
import { useState, useEffect } from "react";

const GameLog = (props) => {
  const { x, y, currPlayer } = props;

  const [log, setLog] = useState([]);

  useEffect(() => {
    setLog((prev) => {
      if (x && y) {
        return [
          ...prev,
          `Turn ${prev.length + 1}: ${
            currPlayer === "w" ? "Black" : "White"
          } placed a piece at position ${y}${x}`,
        ];
      } else {
        return prev;
      }
    });
  }, [currPlayer, x, y]);

  const generateLog = (log) => {
    return log.map((logText) => <LogEntry key={logText}>{logText}</LogEntry>);
  };

  return (
    <Container>
      <Heading>
        <h2>Game Log</h2>
      </Heading>
      {generateLog(log)}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
  min-width: 350px;
  width: 20%;
  height: 500px;
  background-color: var(--color-highlight-700);
  border-radius: var(--radius-small);
  overflow: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 12px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--color-highlight-300);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--color-highlight-200);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: white;
  }
`;

const Heading = styled.div`
  margin-bottom: var(--spacing-xs);
  padding: var(--spacing-xs);
  position: sticky;
  top: 0;
  background-color: var(--color-highlight-900);
  width: 100%;
  text-align: center;
`;

const LogEntry = styled.div`
  line-height: 1.5;
  margin: var(--spacing-xs) 0;
  padding: var(--spacing-sm);
  background-color: var(--color-highlight-800);
  border-radius: var(--radius-subtle);
`;

export default GameLog;
