import React, { useState, useEffect } from 'react';
import AnimeList from '../components/AnimeList';

const Anime = ({setAnimeInfo}) => {
    const [animeData, setAnimeData] = useState(null);
    const [search, setSearch] = useState('');

    const getData = async (searchTerm) => {
        let searcher = searchTerm.split(' ').join('%20');

        try {
            const apiUrl = `https://kitsu.io/api/edge/anime?filter[text]=${searcher}`;
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
            // const apiUrl = `https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0`;
            const apiUrl = `https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=15&page[offset]=0`;
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

    useEffect(() => {
        getPaginationData();
    }, []);

    useEffect(() => {
        if (search.trim() !== '') {
            getData(search);
        } else {
            getPaginationData();
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
                
                    <div className="anime_row">
                            <AnimeList 
                                animeList={animeData}
                                setAnimeInfo={setAnimeInfo}      
                            />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Anime;
