import { useState, useEffect } from 'react';
import axios from 'axios';

const CharacterCollection = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(response => setCharacters(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <ul id='container'>
        {characters.map(character => (
          <li className='card' key={character.id}>
            <img src={character.image} alt={character.image} />
            <div>
              <p>{character.name}</p>
              <p>{character.species}</p>
              <p>{character.gender}</p>
              <a href={character.url}>Link</a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterCollection;
