import React, { useState, useEffect } from 'react'
import Popup from '../components/Popup';
import Results from '../components/Results';
import axios from 'axios';
import * as R from 'ramda';

function NowPlaying() {
    const [nowPlaying, setNowPlaying] = useState([]);

    const [isSelected, setIsSelected] = useState({});
    const nowPlayingUrl = "https://api.themoviedb.org/3/movie/now_playing?api_key=b1ad2bc727ca4ffa4a23e8a5b74e3ae0";
    const idApiUrl = "https://api.themoviedb.org/3/movie/";
    const apiKey = "?api_key=b1ad2bc727ca4ffa4a23e8a5b74e3ae0";

    const results = async () => {
        axios(nowPlayingUrl).then(({ data }) => {
            const results = data.results;
            setNowPlaying(results);
        });
    }
    useEffect(() => {
        results();
    },[]);

    const openPopup = id => {
        axios(idApiUrl + id + apiKey).then(({ data }) => {
            let result = data;
            setIsSelected(result);
        });
    }

    const closePopup = () => {
        setIsSelected({});
    }


    return (
        <main>
            <h1>Now Playing</h1>
            <hr/>
            {R.isNil(nowPlaying) ? null : <Results results={nowPlaying} openPopup={openPopup} />}
            <Popup selected={isSelected} closePopup={closePopup} />
        </main>
    )
}

export default NowPlaying
