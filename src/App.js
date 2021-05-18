import React, { useState } from 'react';
import Search from './components/Search';
import Results from './components/Results';
import Popup from './components/Popup';
import Header from './components/Header';
import axios from 'axios';

function App() {
  const [state, setState] = useState({
    s: '',
    results: [],
    selected: {}
  })

  const searchApiUrl = "https://api.themoviedb.org/3/search/movie/";
  const idApiUrl = "https://api.themoviedb.org/3/movie/";
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

  const openPopup = id => {
    axios(idApiUrl + id + apiKey).then(({ data }) => {
      let result = data;

      console.log(result);

      setState(prevState => {
        return { ...prevState, selected: result }
      });
    });
  }

  const closePopup = () => {
    setState(prevState => {
      return { ...prevState, selected: {} }
    });
  }


  return (
    <div className="App">
      <Header />
      {/*  */}
      <main>
        <Search handleInput={handleInput} search={search} />
        <Results results={state.results} openPopup={openPopup} />
        {(typeof state.selected.title != "undefined") ? <Popup selected={state.selected} closePopup={closePopup} /> : false}
      </main>
    </div>
  );
}

export default App;
