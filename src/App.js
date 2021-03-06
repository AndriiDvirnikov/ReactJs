import React from 'react'
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Menu from './component/Menu';
import { BrowserRouter as Router } from 'react-router-dom';
import EpisodePage from './pages/EpisodsPage';
import CharactersPage from './pages/CharactersPage';
import LocationPage from './pages/LocationPage'
import  WhatchList from './pages/WhatchList'
function App() {
  return (
    <div className="App">
      <Router>
      <Menu />
        <Switch>
          <Route path='/characters' exact component={CharactersPage} />
          <Route path='/episode' exact component={EpisodePage} />
          <Route path='/location' exact component={LocationPage} />
          <Route path='/whatchlist' exact component={WhatchList} />
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
