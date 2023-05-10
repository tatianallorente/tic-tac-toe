import PropTypes from "prop-types";

export const ResetButton = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>
      <span className="resetIcon">&#x21BB;</span>
      <span>Reiniciar juego</span>
    </button>
  );
};

ResetButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
