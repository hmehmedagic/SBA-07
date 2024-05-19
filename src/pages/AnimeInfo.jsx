import React from "react";

export default function AnimeInfo (props) {
    const {description, titles, averageRating, favoritesCount, startDate, endDate, popularityRank, posterImage, episodeCount, } = props.animeInfo;
    console.log(`In AnimeInfo: ${props.animeInfo}`)

  // loaded function for when data is fetched.
  const loaded = () => {
    return (
        <div className="anime-content">
            <h3>Title: {titles.en}</h3>
            <h3>Japanese: {titles.en_jp}</h3>
            <img src={posterImage.large} alt="poster image for anime" />
            <div className='info'>
                <h3>Start Date: {startDate}, End Date: {endDate}, Total Episodes: {episodeCount}</h3>
                <h3>Average Rating: {averageRating}, Popularity Rank: {popularityRank}, Favorites Count: {favoritesCount}</h3>
                <h3>About: {description}</h3>
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