import React from 'react'

const baseUrl = 'https://image.tmdb.org/t/p/w500';

function Result(props) {
    if (props.result.poster_path !== null) {
        return (
            <div className="result">
                <img src={baseUrl + props.result.poster_path} alt="movie" />
                <h3>{props.result.title}</h3>
            </div>
        )
    }
}

export default Result
