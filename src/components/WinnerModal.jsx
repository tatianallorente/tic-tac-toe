import PropTypes from "prop-types";

import { Square } from "./Square";
import { ResetButton } from "./ResetButton";

export const WinnerModal = ({ winner, resetGame }) => {
  if (winner === null) return null;

  const winnerText = winner === false ? "Empate" : "Ganó:";

  return (
    <section className="winnerModal">
      <div className="winner">
        <h2>{winnerText}</h2>
        {winner && <Square>{winner}</Square>}
        <ResetButton handleClick={resetGame} />
      </div>
    </section>
  );
};

WinnerModal.propTypes = {
  winner: PropTypes.string,
  resetGame: PropTypes.func.isRequired,
};
