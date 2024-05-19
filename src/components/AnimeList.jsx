import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";

const AnimeList = ({ animeList, setAnimeInfo }) => {
  const animeRef = useRef(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleAnimeClick = (anime) => {
    setAnimeInfo(anime);
  };

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartX(e.pageX - animeRef.current.offsetLeft);
    setScrollLeft(animeRef.current.scrollLeft);
    e.preventDefault(); // Prevent default action to avoid text selection
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  const handleMouseMove = (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    const x = e.pageX - animeRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    animeRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <>
      {animeList ? (
        <div
          className='scroller'
          ref={animeRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
        >
          {animeList.map((anime, index) => (
            <div className="anime-card" key={index}>
              <img src={anime.attributes.posterImage.medium} alt="animeImage" />
              <div className="anime-info">
                <Link
                  className='anchor'
                  to={`/anime/${anime.attributes.slug}`}
                  onClick={() => handleAnimeClick(anime.attributes)}
                >
                  {anime.attributes.titles.en ? (
                    <h4>{anime.attributes.titles.en}</h4>
                  ) : (
                    <h4>{anime.attributes.titles.en_us}</h4>
                  )}
                </Link>
                <div className="overlay">
                  <div className="synopsis">
                    <h3>Synopsis:</h3>
                    <p>{anime.attributes.synopsis}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : "Not Found"}
    </>
  );
};

export default AnimeList;
