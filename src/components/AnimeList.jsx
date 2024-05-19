import React from 'react'
import { Link } from "react-router-dom";

const AnimeList = ({animeList, setAnimeInfo}) => {
  const handleAnimeClick = (anime) => {
    setAnimeInfo(anime);
  };
  return (
    <>
        {
        animeList ? (
          animeList.map((anime, index) => {
            return (
              <Link className='anchor'
                to={`/anime/${anime.attributes.slug}`} 
                  key={index}
                  onClick={() => handleAnimeClick(anime.attributes)}
                  // onMouseEnter={() => setSynopsis(anime)}
                  // onMouseLeave={() => setSynopsis(null)}                
              >
                <div className="anime-card">
                  <img src={anime.attributes.posterImage.medium} alt="animeImage" />
                  <div className="anime-info">
                    <h4>{anime.attributes.slug}</h4>
                    {/* <p>{anime.attributes.synopsis}</p> */}
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

export default AnimeList