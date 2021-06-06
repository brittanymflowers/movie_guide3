import React, { useState, useEffect } from 'react'
import Popup from '../components/Popup';
import Results from '../components/Results';
import axios from 'axios';
import * as R from 'ramda';

function TopRated() {
    const [topRated, setTopRated] = useState([]);

    const [isSelected, setIsSelected] = useState({});
    const topRatedUrl = "https://api.themoviedb.org/3/movie/top_rated?api_key=b1ad2bc727ca4ffa4a23e8a5b74e3ae0";
    const idApiUrl = "https://api.themoviedb.org/3/movie/";
    const apiKey = "?api_key=b1ad2bc727ca4ffa4a23e8a5b74e3ae0";

    const results = async () => {
        axios(topRatedUrl).then(({ data }) => {
            const results = data.results;
            setTopRated(results);
        });
    }
    useEffect(() => {
        results();
    }, []);

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
            <h1>Top Rated</h1>
            <hr />
            {R.isNil(topRated) ? null : <Results results={topRated} openPopup={openPopup} />}
            <Popup selected={isSelected} closePopup={closePopup} />
        </main>
    )
}

export default TopRated
