import React from "react";

export default function Info (props) {
    const {about, images:{jpg:{image_url}}, name, name_kanji, nicknames} = props.characterInfo;
    console.log(`In CharInfo: ${props.characterInfo}`)

  // loaded function for when data is fetched.
  const loaded = () => {
    return (
        <div className="character-content">
            <h3>Title(s): {nicknames.join(", ")}</h3>
            <img src={image_url} alt="" />
            <div className='info'>
                <h3>Name: {name}</h3>
                <h3>Kanji: {name_kanji}</h3>
                <h3>About: {about}</h3>
            </div>
        </div>
    );
  };

  // Function for when data doesn't exist.
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // If character has data, run the loaded function; otherwise, run loading.
  return props.characterInfo ? loaded() : loading();
}