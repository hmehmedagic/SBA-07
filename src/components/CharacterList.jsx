import React from 'react';
import { Link } from "react-router-dom";

const CharacterList = ({ characterlist, setCharacterInfo }) => {
  const handleCharacterClick = (character) => {
    setCharacterInfo(character);
  };
  console.log()
  return (
    <>
      {
        characterlist ? (
          characterlist.map((character, index) => {
            return (
              <Link className='anchor'
                to={`/character/${character.name}`} key={index}
                onClick={() => handleCharacterClick(character)}
              >
                <div className="card">
                  <img src={character.images.jpg.image_url} alt="characterImage" />
                  <div className="character-info">
                    <h4>{character.name}</h4>
                  </div>
                </div>
              </Link>
            )
          })
        ) : "Not Found"
      }
    </>
  )
}

export default CharacterList;