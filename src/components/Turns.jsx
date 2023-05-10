import PropTypes from "prop-types";

import { Square } from "./Square";
import { TURNS } from "./utils/constants";

export const Turns = ({ turn }) => {
  return (
    <section className="turns">
      <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
    </section>
  );
};

Turns.propTypes = {
  turn: PropTypes.string.isRequired,
};
