import React from 'react';
import Home from './pages/Home';
import TopRated from './pages/TopRated';
import MostPopular from './pages/MostPopular';
import NowPlaying from './pages/NowPlaying';
import Footer from './components/Footer';
import Header from './components/Header';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

function App() {

  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/nowplaying' component={NowPlaying} />
          <Route path='/mostpopular' component={MostPopular} />
          <Route path='/toprated' component={TopRated} />
          <Redirect to='/home' />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
