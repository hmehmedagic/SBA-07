import React from "react";
import RatingBar from "../components/RatingBar";

export default function AnimeInfo (props) {
    const {description, titles, averageRating, favoritesCount, startDate, endDate, popularityRank, posterImage, episodeCount, } = props.animeInfo;
    console.log(`In AnimeInfo: ${props.animeInfo}`)

  // loaded function for when data is fetched.
  const loaded = () => {
    return (
        // <div className="anime-content">
        //     <h3>Title: {titles.en}</h3>
        //     <h3>Japanese: {titles.en_jp}</h3>
        //     <img src={posterImage.large} alt="poster image for anime" />
        //     <div className='info'>
        //         <h3>Start Date: {startDate}, End Date: {endDate}, Total Episodes: {episodeCount}</h3>
        //         <h3>Average Rating: <RatingBar value={averageRating} />, Popularity Rank: {popularityRank}, Favorites Count: {favoritesCount}</h3>
        //         <h3>About: {description}</h3>
        //     </div>
        // </div>
        <div className="anime-content">
          <div className="titles">
            <h1>Title: {titles.en}</h1>
            <h3>Japanese: {titles.en_jp}</h3>
          </div>
          <hr className="title-break"></hr>
          <div className="content">
            <div className="poster-container">
              <img src={posterImage.large} alt="poster image for anime" />
            </div>
            <div className='info'>
              <div className="dates">
                <div>Start Date: {startDate}</div>
                <div>End Date: {endDate}</div>
                <div className="episode">
                  <span className="ratings-hover">
                    <span className="hidden-text">Episode Count</span>
                    <hr className="hidden-break" />
                    <div>
                      <img src="https://cdn.iconscout.com/icon/free/png-256/free-clapperboard-3008612-2521290.png" alt="image of a star" className="episode-img"/>
                      <span className="episode-text">{episodeCount}</span>
                    </div>
                  </span>
                </div>
              </div>
              <div className="rankings">
                <div className="ratings">
                  <span className="ratings-hover">
                    <span className="hidden-text">Average Rating</span>
                    <hr className="hidden-break" />
                    <RatingBar value={averageRating} />
                  </span>
                </div>
                <div className="popularity">
                  <span className="ratings-hover">
                    <span className="hidden-text">Popularity Rank</span>
                    <hr className="hidden-break" />
                    <div>
                      <img src="https://lh4.googleusercontent.com/proxy/P4FtmzPiogHLKfc2NadrZFWtsNG1eK6CAaSiKRZs1Rd9YUJZuIFXYpnXFGDNYhLouFj7kWnKk1Zj_ekYUCb6XwiN0PfAK9gAZV-TIsMK1bwaORbiZ-ZZpO0skBKORNxojfiNG3Yc" alt="image of a star" className="popularity-img"/>
                      <span className="popularity-text">{popularityRank}</span>
                    </div>
                  </span>
                </div>
                <div className="favorites">
                  <span className="ratings-hover">
                    <span className="hidden-text">Favorites Count</span>
                    <hr className="hidden-break" />
                    <div>
                      <img src="https://cdn1.iconfinder.com/data/icons/hand-icon/1792/thumbs-k-up-512.png" alt="image of a thumbs-up" className="favorites-img"/>
                      <span className="favorites-text">{favoritesCount}</span>
                    </div>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>About: {description}</div>
        </div>
    );
  };

  // Function for when data doesn't exist.
  const loading = () => {
    return <h1>Loading...</h1>;
  };

  // If anime has data, run the loaded function; otherwise, run loading.
  return props.animeInfo ? loaded() : loading();
}