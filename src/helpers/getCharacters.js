export const getCharacters = async (type) => {
  if(type === 'All' || type === 'Staff' || type === 'Students'){
    const url = `http://localhost:3000/get${type}`;
    const resp = await fetch(url);
    const data = await resp.json();

    const characters = data.map((character) => ({
      fullName: character.name,
      house: character.house,
      gender: character.gender,
      eyeColour: character.eyeColour,
      hairColour: character.hairColour,
      dateOfBirth: character.dateOfBirth,
      hogwartsStudent: character.hogwartsStudent,
      hogwartsStaff: character.hogwartsStaff,
      status: character.alive,
      url: character.image,
    }));

    return characters;
  }else{
    throw new Error('Tipo de busqueda desconocido');
  }
  
};
