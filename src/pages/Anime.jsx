import React, { useState, useEffect } from 'react';
import AnimeList from '../components/AnimeList';

const Anime = ({setAnimeInfo}) => {
    const [animeData, setAnimeData] = useState(null);
    const [paginationData, setPaginationData] = useState(null);
    const [detectiveData, setDetectiveData] = useState(null);
    const [thrillerData, setThrillerData] = useState(null);
    const [search, setSearch] = useState('');
    const baseURL = "https://kitsu.io/api/edge/anime";
    const numPages = "&page[limit]=20&page[offset]=0";

    const getData = async (searchTerm) => {
        let searcher = searchTerm.split(' ').join('%20');

        try {
            const apiUrl = baseURL + `?filter[text]=${searcher}`;
            const res = await fetch(apiUrl);
            if (!res.ok) {
                throw new Error('Failed to fetch anime data');
            }
            const data = await res.json();
            setAnimeData(data.data);
        } catch (error) {
            console.error('Error fetching anime data:', error);
        }
    };

    const getPaginationData = async () => {
        try {
            const apiUrl = baseURL + `?sort=popularityRank` + numPages;
            const res = await fetch(apiUrl);
            if (!res.ok) {
                throw new Error('Failed to fetch anime data');
            }
            const data = await res.json();
            setPaginationData(data.data);
        } catch (error) {
            console.error('Error fetching anime data:', error);
        }
    };

    const getDetectiveData = async () => {
        try {
            const apiUrl = baseURL + `?filter[categories]=detective` + numPages;
            const res = await fetch(apiUrl);
            if (!res.ok) {
                throw new Error('Failed to fetch anime data');
            }
            const data = await res.json();
            setDetectiveData(data.data);
        } catch (error) {
            console.error('Error fetching anime data:', error);
        }
    };

    const getThrillerData = async () => {
        try {
            const apiUrl = baseURL + `?filter[categories]=thriller` + numPages;
            const res = await fetch(apiUrl);
            if (!res.ok) {
                throw new Error('Failed to fetch anime data');
            }
            const data = await res.json();
            setThrillerData(data.data);
        } catch (error) {
            console.error('Error fetching anime data:', error);
        }
    };

    useEffect(() => {
        if (search.trim() !== '') {
            getData(search);
        } else {
            getPaginationData();
            getDetectiveData();
            getThrillerData();
        }
    }, [search]);

    const handleSearch = (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
            setSearch(e.target.value.trim());
        }
    };

    return (
        <>
            <div className='header'>
                <h1>Anime</h1>
                <div className="search-box">
                    <input
                        type="search"
                        placeholder='Search For Anime'
                        onKeyDown={(e) => handleSearch(e)}
                    />
                </div>
            </div>
            <hr></hr>
            <div className="anime_container">
                <div className="anime_info">
                    {search.trim() !== '' ? (
                        <div className="anime_row">
                            <h1>Search Results</h1>
                            <hr />
                            <AnimeList
                                animeList={animeData}
                                setAnimeInfo={setAnimeInfo}      
                            />
                        </div>
                    ) : (
                        <>
                            <div className="anime_row">
                                <h1>Popular</h1>
                                <hr />
                                <AnimeList
                                    animeList={paginationData}
                                    setAnimeInfo={setAnimeInfo}      
                                />
                            </div>
                            <div className="anime_row">
                                <h1>Detective</h1>
                                <hr />
                                <AnimeList
                                    animeList={detectiveData}
                                    setAnimeInfo={setAnimeInfo}      
                                />
                            </div>
                            <div className="anime_row">
                                <h1>Thriller</h1>
                                <hr />
                                <AnimeList
                                    animeList={thrillerData}
                                    setAnimeInfo={setAnimeInfo}      
                                />
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default Anime;
