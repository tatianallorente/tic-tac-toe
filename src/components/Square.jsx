import PropTypes from "prop-types";

export const Square = ({ children, index, isSelected = false, changeTurn }) => {
  const classes = `square ${isSelected ? "isSelected" : ""}`;

  const handleClick = (index) => {
    changeTurn(index);
  };

  return (
    <div key={index} onClick={handleClick} className={classes}>
      {children}
    </div>
  );
};

Square.propTypes = {
  children: PropTypes.node,
  index: PropTypes.string,
  isSelected: PropTypes.bool,
  changeTurn: PropTypes.func,
};
