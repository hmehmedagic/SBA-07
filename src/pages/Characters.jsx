import {useState, useEffect} from 'react'
import CharacterList from '../components/CharacterList';

export default function Characters ( {setCharacterInfo}) {

  const [search, setSearch] = useState('Satoru Gojo');
  const [characterData, setCharacterData] = useState(null);
  const getData=async()=>{
    const res = await fetch(`https://api.jikan.moe/v4/characters?q=${search}&limit=20`);
    const data = await res.json();
    setCharacterData(data.data);
    console.log(data);
  }

  useEffect(() => {
    getData();
  }, [search]);

  const handleSearch = (e) => {
    if(e.key === 'Enter' || e.keyCode === 13) {
      setSearch(e.target.value);
    }
  }

  return (
    <>
      <div className='header'>
        <h1>Character List</h1>
        <div className="search-box">
          <input type="search"
            placeholder='Search Your Character'
            onKeyDown={(e)=>handleSearch(e)}
          />
        </div>
      </div>

      <div className="container">
        <div className="character-col">
          <h2 className="text-heading">Characters matching: {search}</h2>
          <div className="column">
            <CharacterList 
              characterlist={characterData} 
              setCharacterInfo={setCharacterInfo}
            />
          </div>
        </div>
      </div>
    </>
  )
}