import React from 'react';
import Result from './Result';

function Results(props) {
    return (
        <section className="results">
            {props.results.map(result => (
                <Result result={result} />
            ))}
            
        </section>
    )
}

export default Results;
