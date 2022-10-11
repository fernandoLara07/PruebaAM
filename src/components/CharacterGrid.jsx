import { CharacterItem, FilterButton }  from "../components";
import { useState, useEffect } from "react";
import { getCharacters } from "../helpers/getCharacters";

export const CharacterGrid = () => {
  const [ category, setCategory ] = useState('All')
  const [ charactersList, setCharactersList ] = useState([])

  const handleFilter = async(value) => {

    if(category === 'All'){
      setCategory(value);
    }else{
      setCategory(category=== value ? 'All' : value)
    }

    
    const charList = await getCharacters(category);
    setCharactersList(charList);
  }
  const getCharList = async () => {
    const charList = await getCharacters(category);
    setCharactersList(charList);
  };
  useEffect(()=>{
    getCharList();
  }, [category])



  return (
    <div className="charactergrid_container">
      <div className="buttons">
          <div className="row">
            <FilterButton value="ESTUDIANTES" onClick={() => handleFilter('Students')}/>
            <FilterButton value="STAFF" onClick={() => handleFilter('Staff')}/>
          </div>
      </div>
      <div className="charactergrid_row">
          <ul>
          {charactersList && charactersList.map((character) => (
          
            <li key={`${character.fullName}`} ><CharacterItem {...character} /></li>
            
          ))}
          </ul>  
      </div>
    </div>
  );
};

