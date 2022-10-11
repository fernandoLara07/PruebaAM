import PropTypes from "prop-types";
import { FaBookmark,  FaUserPlus, FaTrash} from "react-icons/fa";
import { useState } from "react";
import {  useSelector } from 'react-redux';
import useMediaQuery from '@mui/material/useMediaQuery';

export const DropdownButton = ({textValue, border, fav, add}) => {
  const matches = useMediaQuery('(min-width:950px)');
  const { favorites } = useSelector((state) => state.favorite)
  const { images } = useSelector((state) => state.favorite)
  const [dropdownOpen, setDropdownOpen] = useState (false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const favList = favorites.slice(0, 5);

  const handleScroll =(e) =>{
    toggle(e)
    setDropdownOpen(false)
  }
  const handleDelete = async(fullname, url) => {
     
  }

  return (
    <>
    <div onClick={toggle} className={`dropbutton_container ${ border }`}>
      <div className="Iconspan">
        <button>
          {textValue}
        </button>
      </div>
      <span className="Iconspan">{fav && <FaBookmark />}</span>
      <span className="Iconspan">{add && <FaUserPlus />}</span>
      {dropdownOpen&& matches && <div className=" animate__animated dropdown animate__pulse">
        <ul>
          {favorites  && favList.map( ( character, index ) => (
            <><li key={`${ character }`}> <img src={images[ index ]} alt="" /> <span> {character}</span><span onClick={() =>handleDelete(character, images[index])} className="icon"> <FaTrash /> </span> </li>{index < 4 ? <div className="underlinded"></div> : null}</>
          )  )}
        </ul>
      </div>}
    </div>
    {dropdownOpen && !matches && <div className=" animate__animated dropdown animate__pulse">
        <ul onScroll={handleScroll}>
          {favorites && favList.map( ( character, index ) => (
            <><li key={`${ character }`}> <img src={images[ index ]} alt="" /> <span> {character}</span><span onClick={() =>handleDelete(character, images[index])} className="icon"> <FaTrash /> </span> </li>{index < 4 ? <div className="underlinded"></div> : null}</>
          )  )}
        </ul>
      </div>}
    </>
    
  );
};


DropdownButton.propTypes = {
  textValue: PropTypes.string.isRequired,
  border: PropTypes.string.isRequired,
  fav: PropTypes.bool,
  add: PropTypes.bool,
};