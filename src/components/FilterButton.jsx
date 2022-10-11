import PropTypes from "prop-types";

export const FilterButton = ({ value, onClick }) => {


  return (
    <div className="filterbutton_container">
    <button onClick={onClick} >
          { value }
    </button>
    </div>
    
  );
};

FilterButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.any,
};
