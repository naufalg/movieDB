import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LandingPage, DetailPage } from './pages';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/movie/:id' component={DetailPage} />
      </Switch>
    </Router>
  );
}

export default App;
