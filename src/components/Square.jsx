import PropTypes from "prop-types";

export const Square = ({ children, isSelected = false, changeTurn }) => {
  const classes = `square ${isSelected ? "isSelected" : ""}`;

  const handleClick = () => {
    changeTurn();
  };

  return (
    <div onClick={handleClick} className={classes}>
      {children}
    </div>
  );
};

Square.propTypes = {
  children: PropTypes.node,
  isSelected: PropTypes.bool,
  changeTurn: PropTypes.func,
};
