import React from 'react'

function Search(props) {
    return (
        <section className = "searchbox-wrap">
            <input
                data-testid="searchInput"
                type="text"
                placeholder="Search for a movie..."
                className="searchbox"
                onChange={props.handleInput}
                onKeyPress={props.search}
            />
        </section>
    )
}

export default Search
