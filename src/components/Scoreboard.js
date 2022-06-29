const Scoreboard = (props) => {
  const { whiteCount, blackCount, currPlayer } = props;
  return (
    <div>
      Black: {blackCount} | White: {whiteCount} | {currPlayer}'s turn
    </div>
  );
};

export default Scoreboard;
