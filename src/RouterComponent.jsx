import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { LandingView } from './views/landingView/LandingView';
import NavBar from './components/navbar/NavBar';

const RouterComponent = () => {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route path="/" component={LandingView} exact />
          <Route path="/menu" component={LandingView} exact />
          pspps
        </Switch>
      </div>
    </Router>
  );
};
export default RouterComponent;
