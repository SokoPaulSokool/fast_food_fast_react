import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LandingView } from './views/landingView/LandingView';

const RouterComponent = () => {
  return (
    <Router>
      <div>
        <Link to="nn">nnnn</Link>
        <Switch>
          <Route path="/nn" component={LandingView} exact />
          pspps
        </Switch>
      </div>
    </Router>
  );
};
export default RouterComponent;
