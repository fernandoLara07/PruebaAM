import React from "react";
import PropTypes from "prop-types";

export const ImgCard = ({ url, house }) => {
  return (
    <div className={`${house} imgcard_container`}>
      <div className="container">
        <img src={url} />  
      </div>
    </div>
  );
}

ImgCard.propTypes = {
  house: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
