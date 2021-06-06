import React, { useState, useEffect } from 'react'
import Popup from '../components/Popup';
import Results from '../components/Results';
import axios from 'axios';
import * as R from 'ramda';

function MostPopular() {
    const [mostPopular, setMostPopular] = useState([]);
    const [isSelected, setIsSelected] = useState({});

    console.log(mostPopular);

    const mostPopularUrl = "https://api.themoviedb.org/3/movie/popular?api_key=b1ad2bc727ca4ffa4a23e8a5b74e3ae0";
    const idApiUrl = "https://api.themoviedb.org/3/movie/";
    const apiKey = "?api_key=b1ad2bc727ca4ffa4a23e8a5b74e3ae0";

    const results = async () => {
        axios(mostPopularUrl).then(({ data }) => {
            let results = data.results;
            setMostPopular(results);
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
            <h1>Most Popular</h1>
            <hr />
            {R.isNil(mostPopular) ? null : <Results results={mostPopular} openPopup={openPopup} />}
            <Popup selected={isSelected} closePopup={closePopup} />
        </main>
    )
}

export default MostPopular
