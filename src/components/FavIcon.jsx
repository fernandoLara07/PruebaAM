import React from "react";
import { FaRegBookmark, FaBookmark } from "react-icons/fa";

export const FavIcon = ( { filled, onFav }) =>  {

  
  return (
    <div onClick={onFav} className="favicon_container">
      
      {filled && <span className=" " ><FaRegBookmark   /></span>}
      {!filled && <span className=" animate__animated animate__bounceIn"><FaBookmark   /></span>}
    </div>
  )
}

