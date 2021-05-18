import React from 'react';

const baseUrl = 'https://image.tmdb.org/t/p/w500';

function Result({ result, openPopup }) {
    if (result.poster_path === null) {
        return (
            <div className="result" onClick={() => openPopup(result.id)}>
                < img src="/no-poster.jpg" alt="movie" />
                <h3>{result.title}</h3>
            </div>
        )
    } else {
        return (
            <div className="result" onClick={() => openPopup(result.id)}>
                <img key={result.id} src={baseUrl + result.poster_path} alt="movie" />
                <h3>{result.title}</h3>
            </div>
        )
    }
}

export default Result
