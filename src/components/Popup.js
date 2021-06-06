import React from 'react'
import * as R from 'ramda';

const baseUrl = 'https://image.tmdb.org/t/p/w500';

function Popup({ selected, closePopup }) {
    if (R.isNil(selected) || R.isEmpty(selected)) return null;
    if (selected.poster_path === null) {
        return (
            <section className="popup">
                <div className="content">
                    <h2>{selected.title} <span>({selected.release_date.slice(0, 4)})</span></h2>
                    <p className="rating">Rating: {selected.vote_average}</p>
                    <div className="plot">
                        <img src="/no-poster.jpg" alt="movie" />
                        <p>{selected.overview}</p>
                    </div>
                    <button className="close" onClick={closePopup}>Close</button>
                </div>
            </section>
        )
    } else {
        return (
            <section className="popup">
                <div className="content">
                    <h2>{selected.title} <span>({selected.release_date.slice(0, 4)})</span></h2>
                    <p className="rating">Rating: {selected.vote_average}</p>
                    <div className="plot">
                        <img src={baseUrl + selected.backdrop_path} alt="movie" />
                        <p>Overview:<br/><br/>{selected.overview}</p>
                    </div>
                    <button className="close" onClick={closePopup}>Close</button>
                </div>
            </section>
        )
    }
}

export default Popup