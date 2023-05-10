import PropTypes from "prop-types";

import { Square } from "./Square";

export const Board = ({ board, comboWinner, changeTurn }) => {
  return (
    <div className="board">
      {board?.map((square, index) => (
        <Square
          key={index}
          isSelected={comboWinner?.includes(index)}
          changeTurn={() => changeTurn(index)}
        >
          {square}
        </Square>
      ))}
    </div>
  );
};

Board.propTypes = {
  board: PropTypes.array.isRequired,
  comboWinner: PropTypes.array.isRequired,
  changeTurn: PropTypes.func.isRequired,
};
