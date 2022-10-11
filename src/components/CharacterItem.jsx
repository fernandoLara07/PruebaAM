import { useState, useEffect } from "react";
import React from "react";
import PropTypes from "prop-types";
import { ImgCard, CharacterCard, FavIcon} from "../components";
import { useDispatch, useSelector } from 'react-redux';
import {fav, unfav, favUrl, unfavUrl} from "../store/slices/favorites";
import useMediaQuery from '@mui/material/useMediaQuery';



export const CharacterItem = (
 { fullName,
  house,
  gender,
  eyeColour,
  hairColour,
  dateOfBirth,
  hogwartsStudent,
  hogwartsStaff,
  status,
  url,
}) =>  {
  

  const { favorites } = useSelector((state) => state.favorite)
  const [favorite, setFavorite] = useState(favorites.includes(fullName)? false : true);
  const dispatch = useDispatch();
  const matches = useMediaQuery('(min-width:950px)');
  useEffect(() => {
  }, [favorite]);

  const handleFav = () => {
    if(!favorites.includes(fullName)){
      dispatch(fav(fullName))
      dispatch(favUrl(url))
    }
    if(!favorite){
      dispatch(unfav(fullName))
      dispatch(unfavUrl(url))
    }
    setFavorite(!favorite);
  }
  

  return (
    <div className="characteritem_container animate__animated animate__zoomIn">
      <ImgCard {...{ url, house }}  />
      <CharacterCard
        {...{
          fullName,
          gender,
          eyeColour,
          hairColour,
          dateOfBirth,
          hogwartsStudent,
          hogwartsStaff,
          status,
          url
        }}
      />
       { matches && <FavIcon className=" animate__animated animate__slideInUp" filled={favorite}  onFav={ (event) => handleFav(event)} />}
    </div>
  );
  

}

CharacterItem.propTypes = {
  fullName: PropTypes.string.isRequired,
  house: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  eyeColour: PropTypes.string.isRequired,
  hairColour: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  hogwartsStudent: PropTypes.bool.isRequired,
  hogwartsStaff: PropTypes.bool.isRequired,
  status: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
};
