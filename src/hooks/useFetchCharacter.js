import { useState, useEffect } from "react";
import { getCharacters } from "../helpers/getCharacters";


export const useFetchCharacter = (category) => {

  const [characters, setCharacters] = useState([]);
  const [isLoading, setisLoading] = useState(true);

  const getCharList = async () => {
    const charList = await getCharacters(category);
    setCharacters(charList);
    setisLoading(false);
  };

  useEffect(() => {
    getCharList();
  }, []);
  
  return {
    characters,
    isLoading
  }
}
