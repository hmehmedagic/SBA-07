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
          <hr></hr>
          <div className="content">
            <div className="poster-container">
              <img src={posterImage.large} alt="poster image for anime" />
            </div>
            <div className='info'>
              <div className="dates">
                <div>Start Date: {startDate}</div>
                <div>End Date: {endDate}</div>
                <div>Total Episodes: {episodeCount}</div>
              </div>
              <div className="rankings">
                <div>Average Rating: <RatingBar value={averageRating}/></div>
                <div>Popularity Rank: {popularityRank}</div>
                <div>Favorites Count: {favoritesCount}</div>
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