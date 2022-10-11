import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import useMediaQuery from '@mui/material/useMediaQuery';
import { FavIcon} from "../components";
import { useDispatch, useSelector } from 'react-redux';
import {fav, unfav, favUrl, unfavUrl} from "../store/slices/favorites";



export const CharacterCard = (
  {
  fullName, 
  gender, 
  eyeColour, 
  hairColour, 
  dateOfBirth, 
  hogwartsStudent, 
  status,
  url
}) =>  {
  const [subtitle, setSubtitle] = useState('');
  const matches = useMediaQuery('(min-width:950px)');
  useEffect(() => {
    let sub = status ? 'vivo'+' / ' : 'finado'+' / ';
    sub += hogwartsStudent ? 'Estudiante': 'Staff';
    setSubtitle(sub);
  }, []);


  const { favorites } = useSelector((state) => state.favorite)
  const [favorite, setFavorite] = useState(favorites.includes(fullName)? false : true);
  const dispatch = useDispatch();

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
  
  if(matches){
    
    return (
      <div className="charactercard_container" >
        <h4 className="subtitle">{ subtitle }</h4>
        <h2 className="title">{fullName}</h2>
        <div className="info">
          <span><span className="infoTitle">Cumpleaños: </span>  <span className="infoSub">  { `${dateOfBirth}`} </span></span>
          <span><span className="infoTitle">Género: </span> <span className="infoSub"> { gender} </span></span>
          <span><span className="infoTitle">Color de ojos: </span> <span className="infoSub"> { eyeColour} </span></span>
          <span><span className="infoTitle">Color de pelo: </span> <span className="infoSub"> { hairColour} </span></span>
        </div>
      </div>
    );
  }
  return(
    <div className="charactercard_container" >
        <h2 className="title">{fullName}</h2>
        <div>
          <h4 className="subtitle">{ subtitle }</h4>
          <FavIcon className=" animate__animated animate__slideInUp" filled={favorite}  onFav={ (event) => handleFav(event)} />
        </div>
      </div>
  )
}

CharacterCard.propTypes = {
  fullName: PropTypes.string.isRequired,
  gender: PropTypes.string.isRequired,
  eyeColour: PropTypes.string.isRequired,
  hairColour: PropTypes.string.isRequired,
  dateOfBirth: PropTypes.string.isRequired,
  hogwartsStudent: PropTypes.bool.isRequired,
  hogwartsStaff: PropTypes.bool.isRequired,
  status: PropTypes.bool.isRequired,
  url: PropTypes.string,
};

