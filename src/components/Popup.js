import React from 'react'

const baseUrl = 'https://image.tmdb.org/t/p/w500';

function Popup({ selected, closePopup }) {
    if (selected.poster_path === null) {
        return (
            <section className="popup">
                <div className="content">
                    <h2>{selected.title} <span>({selected.release_date.slice(0, 4)})</span></h2>
                    <p className="rating">Rating: {selected.vote_average}</p>
                    <div className="plot">
                        < img src="/no-poster.jpg" alt="movie" />
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
                        <img src={baseUrl + selected.poster_path} alt="movie" />
                        <p>{selected.overview}</p>
                    </div>
                    <button className="close" onClick={closePopup}>Close</button>
                </div>
            </section>
        )
    }
}

export default Popup