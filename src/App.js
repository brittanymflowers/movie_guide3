import React, { useState } from 'react';
import Search from './components/Search';
import Results from './components/Results';
import axios from 'axios';

function App() {

  const [state, setState] = useState({
    s: '',
    results: [],
    selected: {}
  })

  const searchApiUrl = "https://api.themoviedb.org/3/search/movie/";
  // const idApiUrl = "https://api.themoviedb.org/3/movie/";
  const apiKey = "?api_key=b1ad2bc727ca4ffa4a23e8a5b74e3ae0";

  const search = (e) => {
    if (e.key === "Enter") {
      axios(searchApiUrl + apiKey + '&query=' + state.s).then(({ data }) => {
        let results = data.results;

        setState(prevState => {
          return {...prevState, results: results }
        })
      });
    }
  }

  const handleInput = (e) => {
    let s = e.target.value;
    setState(prevState => {
      return { ...prevState, s: s }
    });
  }

  return (
    <div className="App">
      <header>
        <h1>Movie Database</h1>
      </header>
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} />
      </main>
    </div>
  );
}

export default App;
