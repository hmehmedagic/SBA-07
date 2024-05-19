import React from "react";
import RatingBar from "../components/RatingBar";

export default function AnimeInfo (props) {
    const {description, titles, averageRating, favoritesCount, startDate, endDate, popularityRank, posterImage, episodeCount, } = props.animeInfo;
    console.log(`In AnimeInfo: ${props.animeInfo}`)

  // loaded function for when data is fetched.
  const loaded = () => {
    return (
      <div className="anime-content">
        <div className="titles">
          <h1>Title: {titles.en}</h1>
          <h3>Alt: {titles.en_jp}</h3>
        </div>
        <hr className="title-break"></hr>
        <div className="content">
          <div className="poster-container">
            <img src={posterImage.large} alt="poster image for anime" />
          </div>
          <div className='info'>
            <div className="date">Start Date: {startDate}</div>
            <div className="date">End Date: {endDate}</div>

            <div class="episode">
              <div class="episode-content">
                  <img src="https://cdn.iconscout.com/icon/free/png-256/free-clapperboard-3008612-2521290.png" alt="Episode Image"/>
                  <div class="episode-text">
                      {episodeCount}
                  </div>
              </div>
              <div class="hidden-content">
                  <hr class="hidden-break"/>
                  <div class="hidden-text">
                      Episode Count
                  </div>
              </div>
            </div>

            <div className="ratings">
              <span className="ratings-hover">
                <div className="hidden-text">Average Rating</div>
                <hr className="hidden-break" />
                <div className="rating-bar"><RatingBar value={averageRating} /></div>
              </span>
            </div>

            <div class="popularity">
              <div class="popularity-content">
                  <img src="https://lh4.googleusercontent.com/proxy/P4FtmzPiogHLKfc2NadrZFWtsNG1eK6CAaSiKRZs1Rd9YUJZuIFXYpnXFGDNYhLouFj7kWnKk1Zj_ekYUCb6XwiN0PfAK9gAZV-TIsMK1bwaORbiZ-ZZpO0skBKORNxojfiNG3Yc" alt="Popularity Image"/>
                  <div class="popularity-text">
                      {popularityRank}
                  </div>
              </div>
              <div class="hidden-content">
                  <hr class="hidden-break"/>
                  <div class="hidden-text">
                      Popularity Rank
                  </div>
              </div>
            </div>

            <div class="favorites">
              <div class="favorites-content">
                  <img src="https://cdn1.iconfinder.com/data/icons/hand-icon/1792/thumbs-k-up-512.png" alt="Favorites Image"/>
                  <div class="favorites-text">
                      {favoritesCount}
                  </div>
              </div>
              <div class="hidden-content">
                  <hr class="hidden-break"/>
                  <div class="hidden-text">
                      Favorites Count
                  </div>
              </div>
            </div>

          </div>
          <div className="filler">
            <h1>About:</h1>
            <p>{description}</p>
          </div>
        </div>
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